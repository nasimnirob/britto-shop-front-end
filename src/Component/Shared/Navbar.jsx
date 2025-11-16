import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { BiMoon, BiSun } from "react-icons/bi";
import useCategory from "../../Hooks/useCategory";
import useTheme from "../../Hooks/useTheme";

import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../Language/LanguageSelector";
import { RxPerson } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const menuRef = useRef(null);
  const [dropdown, setDropdown] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const [isSticky, setIsSticky] = useState(false);
  // console.log(open)

  const { t } = useTranslation();

  const uniqueCategory = useCategory();

  // Get current URL
  const location = useLocation();
  const pathSegments = location.pathname.split("/"); // e.g. ['', 'category', 'clothing']

  // Check if route is /category/:category
  const categoryFromURL =
    pathSegments[1] === "category" ? pathSegments[2] : null;

  // Now match it with your category list
  const matchedCategory = uniqueCategory.find(
    (cat) => cat.toLowerCase() === categoryFromURL?.toLowerCase()
  );

  const currentCategory = matchedCategory || "Categories";

  // const categories = [
  //   "Clothing",
  //   "Electronics",
  //   "Sports",
  //   "Kitchen",
  //   "Beauty",
  //   "Toys",
  //   "Kitchen",
  // ];

  const handleCategoryChange = () => {
    setOpen(false);
    setDropdown(false); // Close the dropdown after selection
  };

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const handleProfileToggle = () => {
    setOpenProfile((prev) => !prev);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logged Out");
        console.log("Logged out");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => {
            setOpen(false);
          }}
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 text-base lg:px- lg:py-1.5 md:py-1.5 py-1 xl:px-5"
              : "text-inherit hover:text-orange-400 text-base lg:px- lg:py-1.5 md:py-1.5 py-1 xl:px-5"
          }
        >
          <h2 className="flex justify-between text-lg lg:text-lg items-center gap-3 pl-2 lg:pl-0 lg:bg-transparent  md:bg-transparent bg-black bg-opacity-40 shadow-md lg:shadow-none lg:py-0 md:py-0 py-1 ">
            <span>{t("Home")}</span>
            {/* <span> <IoIosArrowDown /></span> */}
          </h2>
        </NavLink>
      </li>
      <li className="lg:my-0  md:my-0 my-1">
        <NavLink
          to="/product"
          onClick={() => {
            setOpen(false);
          }}
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 text-base lg:px- lg:py-1.5 md:py-1.5 py-1 xl:px-5"
              : "text-inherit hover:text-orange-400 text-base lg:px- lg:py-1.5 md:py-1.5 py-1 xl:px-5"
          }
        >
          <h2 className="flex justify-between text-lg lg:text-lg items-center gap-3 pl-2 lg:pl-0 lg:bg-transparent  md:bg-transparent bg-black bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1   md:py-0">
            <span>{t("Shop")} </span>
            {/* <span> <IoIosArrowDown /></span> */}
          </h2>
        </NavLink>
      </li>

      <li className="lg:my-0 md:my-0 my-1">
        <NavLink
          to="/cart"
          onClick={() => {
            setOpen(false);
          }}
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 text-base lg:px- lg:py-1.5 md:py-1.5 py-1 xl:px-5"
              : "text-inherit hover:text-orange-400 text-base lg:px- lg:py-1.5 md:py-1.5 py-1 xl:px-5"
          }
        >
          <h2 className="flex justify-between items-center text-lg lg:text-lg gap-3 pl-2 lg:pl-0 lg:bg-transparent md:bg-transparent bg-black bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1  md:py-0">
            <span>{t("Cart")}</span>
            {/* <span> <IoIosArrowDown /></span> */}
          </h2>
        </NavLink>
      </li>
      {/* <li>
            <NavLink to='/wishlist' className={({ isActive }) => isActive ? 'text-orange-400 text-base lg:px- px-2 xl:px-5' : 'text-white hover:text-orange-400 text-base lg:px- px-2 xl:px-5'}>Wishlist</NavLink>
        </li> */}
      <li
        className="relative cursor-pointer lg:my-0  md:my-0 my-1"
        onMouseEnter={() => {
          if (window.innerWidth >= 1024) setDropdown(true); // lg breakpoint
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 1024) setDropdown(false);
        }}
      >
        <div
          onClick={() => setDropdown((prev) => !prev)}
          className={`group select-none z-20 ${matchedCategory
            ? "text-orange-400 text-base lg:px- lg:py-1.5 md:py-1.5 py-1 xl:px-5"
            : "text-inherit hover:text-orange-400 text-base lg:px- lg:py-1.5 md:py-1.5 py-1 xl:px-5"
            }`}
        >
          <h2 className="group  flex justify-between text-lg lg:text-lg items-center gap-3 pl-2 lg:pl-0 lg:bg-transparent md:bg-transparent bg-black bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1 md:py-0">
            <span>
              {currentCategory ? t(currentCategory) : t("Categories")}
            </span>

            {/* Default down arrow (visible by default, hidden on lg:hover) */}
            <span className="lg:hidden inline">
              <IoIosArrowDown />
            </span>

            {/* For large screens, show down arrow by default, and switch to up on hover */}

            <span className="hidden lg:inline">
              {dropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </h2>
        </div>

        {dropdown && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:absolute text-lg lg:text-lg text-black dark:text-white mt-0 lg:top-10 lg:-left-[40px] lg:right-10 lg:pt-4 w-full  border-orange-400 lg:w-[180px] rounded rounded-t-none shadow-lg lg:shadow-none lg:z-50"
          >
            {uniqueCategory.map((category) => (
              <div className="bg-white dark:bg-black lg:px- px-2 py-1 lg:py-1 shadow-2xl">
                <li key={category}>
                  <NavLink
                    to={`/category/${category.toLowerCase()}`}
                    onClick={() => handleCategoryChange(category)}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-orange-400 border border-blue-500 "
                        : "block px-4 py-2 hover:bg-black/10 dark:hover:bg-white/10 hover:text-orange-400 "
                    }
                  >
                    {t(category)}
                  </NavLink>
                </li>
              </div>
            ))}
          </motion.ul>
        )}
      </li>

      <li className="lg:my-0 md:my-0 my-1">
        <NavLink
          to="/orders"
          onClick={() => {
            setOpen(false);
          }}
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 text-base lg:px- lg:py-1.5 md:py-1.5 py-1 xl:px-5"
              : "text-inherit hover:text-orange-400 text-base lg:px- lg:py-1.5 md:py-1.5 py-1 xl:px-5"
          }
        >
          <h2 className="flex justify-between text-lg lg:text-lg items-center gap-3 pl-2 lg:pl-0 lg:bg-transparent md:bg-transparent bg-black bg-opacity-40 lg:shadow-none shadow-md lg:py-0 py-1  md:py-0">
            <span>{t("Orders")} </span>
            {/* <span> <IoIosArrowDown /></span> */}
          </h2>
        </NavLink>
      </li>

      {user ? (
        <>
          <li
            className="bottom-20 right-0 w-full lg:w-auto text-center pr-2 bg-black bg-opacity-40 shadow-md
                                    fixed lg:my-0 my-1 lg:bg-transparent lg:shadow-none md:hidden lg:hidden"
          >
            <button
              onClick={handleLogout}
              className="text-white hover:text-orange-400  text-base lg:px- lg:py-1.5 py-1 xl:px-5 w-full"
            >
              <h2 className="flex justify-center text-lg lg:text-lg items-center gap-3 pl-2 lg:pl-0 lg:bg-transparent bg-opacity-40 shadow-md lg:shadow-none lg:py-0 py-1 w-full">
                <span>{t("Logout")}</span>
              </h2>
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="lg:my-0 md:my-0 my-1 lg:hidden md:hidden block">
            <NavLink
              to="/login"
              onClick={() => {
                setOpen(false);
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 text-base lg:px- lg:py-1.5 md:py-1.5 py-1 xl:px-5"
                  : "text-inherit hover:text-orange-400 text-base lg:px- lg:py-1.5 md:py-1.5 py-1 xl:px-5"
              }
            >
              <h2 className="flex justify-between text-lg lg:text-lg items-center gap-3 pl-2 lg:pl-0 lg:bg-transparent md:bg-transparent bg-black bg-opacity-40 lg:shadow-none md:shadow-none shadow-md lg:py-0 md:py-0 py-1 ">
                <span>{t("Login")} </span>
                <RxPerson />
              </h2>
            </NavLink>
          </li>
          <li className="lg:my-0 my-1 lg:hidden md:hidden ">
            <NavLink
              to="/register"
              onClick={() => {
                setOpen(false);
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 text-base lg:px- lg:py-1.5 py-1 xl:px-5"
                  : "text-inherit hover:text-orange-400 text-base lg:px- lg:py-1.5 py-1 xl:px-5"
              }
            >
              <h2 className="flex justify-between text-lg lg:text-lg items-center gap-3 pl-2 lg:pl-0 lg:bg-transparent md:bg-transparent bg-black bg-opacity-40 lg:shadow-none shadow-md lg:py-0 py-1 ">
                <span>{t("Register")} </span>
                {/* <span> <IoIosArrowDown /></span> */}
              </h2>
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className={`w-full fixed top-0 left-0 z-30 backdrop-blur-[6px] transition-all duration-300 mt- ${isSticky ? "bg-black/50 shadow-md rounded-b-[4.5px] text-white" : "bg-transparent rounded-b-[4.5px] text-black dark:text-white"
      }`}>
      <div
        ref={menuRef}
        className={`navbar mx-auto flex items-center justify-between max-w-[1524px] px- ${isSticky ? "text-white " : "text-black dark:text-white"
          }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              onClick={handleToggle}
              role="button"
              className="px-2.5 py-[7px] lg:hidden md:hidden"
            >
              {open ? (
                <AiOutlineClose className="h-6 w-6 " />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </div>

            <ul
              className={
                open
                  ? " bg-gray-800  shadow-sm backdrop-blur-[30px]  h-screen mt-3 w-56 p-2 z-40 fixed left-0 lg:hidden xl:hidden text-white hover:text-orange-400"
                  : "hidden -left-80 text-white hover:text-orange-400 "
              }
            >
              {navLink}
            </ul>

            {/* <ul
                        className={open ? 'bg-black shadow-sm backdrop-blur-[30px] rounded-lg rounded-l-none h-screen opacity-40 mt-3 w-56 p-2 z-40 fixed left-0 ' : 'hidden -left-80 text-white hover:text-orange-400'}>
                        {navLink}
                    </ul> */}
          </div>
          <div className="flex flex-row  items-center lg:gap-3 md:gap-  w-full">
            <NavLink to="/" className="px- sm:px-5 md:px-2  lg:w-2/4 md:w-4/4 w-full">
              <div className="flex flex-col items-center w-fit text-center">
                <span className="text-[13.5px] sm:text-base lg:text-xl text-orange-400 uppercase ">
                  Britto Shop
                </span>
                <span className="font-normal text-[8.5px] sm:text-[10px] lg:text-[12.3px] text-inherit hover:text-orange-400 uppercase tracking-widest">
                  E C O M M E R C E
                </span>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex md:block  items-center justify-center px-0.5">
          <div className="  lg:w-full  ">
            <div className="flex items-center lg:w-96 w- rounded-[5px] overflow-hidden border border-dashed border-[#fb923c] text-center justify-center">
              <input
                className={`font-extralight font-poppins w-full px-3 py-2 bg-black/5 placeholder:text-sm ${isSticky ? 'placeholder:text-gray-300' : 'placeholder:text-gray-500'} text-base outline-none ring-0 focus:outline-none rounded-l-[5px]`}
                type="search"
                placeholder="Search product name..."
              />
              <div className="border-dashed border-l border-[#fb923c]">
                <button className="h-10 w-[36px] flex items-center justify-center bg-[#fb923c] hover:bg-yellow-500 transition text-black border-[#fb923c] border-l border-dashed">
                  <CiSearch className="absolute" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-end ">

          <div className="relative group ml-1  cursor-pointer flex justify-center items-center">
            {
              user ? <>
                <div className=" ">
                  <button className="lg:block md:block hidden  w-16 lg:h-16 md:h-16 h-10 pl-3 -mt-4 -mb-4">
                    {loading ? (
                      <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                    ) : user?.photoURL ? (
                      <img
                        className="rounded-full p-1 w-10 h-10"
                        src={user?.photoURL}
                        alt="Profile"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <RxPerson className="text-4xl rounded-full border-yellow-700 p-1 mt-1.5" />
                    )}
                  </button>
                </div></>
                : <NavLink
                  to="/login"
                  onClick={() => {
                    setOpen(false);
                  }}
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-orange-400 text-base lg:px- lg:py-1 md:py- md:px-2 py-1 xl:px-5 w-full h-12 -mb-4 lg:block md:block hidden "
                      : "text-inherit hover:text-orange-400 text-base lg:px- lg:py-1 md:py- md:px-2 py-1 xl:px-5 w-full h-12 -mb-4  lg:block md:block hidden "
                  }
                >
                  <h2 className=" lg:flex md:flex hidden justify-between text-lg lg:text-lg items-center gap-3  pl-2 lg:pl-0 lg:bg-transparent md:bg-transparent bg-black bg-opacity-40 lg:shadow-none md:shadow-none shadow-md lg:py-0 md:py-0 py-1 ">
                    <span>{t("Login")} </span>
                    <RxPerson />
                  </h2>
                </NavLink>
            }

            {/* Profile Button */}
            <div className=" w-12 h-16 pl-1 -mb-4 -mt-4 lg:hidden md:hidden block py-2">
              <button className="">
                {loading ? (
                  <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                ) : user?.photoURL ? (
                  <img
                    className="rounded-full p-1 w-10 h-10"
                    src={user?.photoURL}
                    alt="Profile"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <RxPerson className="text-4xl rounded-full border-yellow-700 p-1 mt-1.5  " />
                )}
              </button>
            </div>

            {/* Dropdown Panel — SHOW ON HOVER */}
            <div className="absolute -right-2  top-[48px] w-64 
                  bg-white dark:bg-primary-dark dark:text-white text-white 
                  rounded-b-lg shadow-lg dark:border-gray-600 z-10
                  hidden group-hover:block">

              <div className="flex items-center justify-center">
                <LanguageSelector />
                <button
                  onClick={toggleTheme}
                  className="px-1 py-[3.5px] -mt-2 hover:bg-gray-200 dark:hover:bg-gray-700
                 text-lg flex justify-center items-center text-black
                 hover:text-orange-400 border dark:border-gray-600 rounded-r"
                >
                  {theme === "dark" ? (
                    <span className="flex items-center justify-between gap-2 dark:text-white">
                      <p>Light</p> <BiSun />
                    </span>
                  ) : (
                    <span className="flex items-center justify-between gap-2 dark:text-white">
                      <p>Dark</p> <BiMoon />
                    </span>
                  )}
                </button>
              </div>

              <div className="flex flex-col items-center p-4 text-black dark:text-white">
                {user ? (
                  <img
                    className="w-20 h-20 rounded-full border border-gray-100 dark:border-gray-600"
                    src={user?.photoURL}
                    alt="Profile"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <RxPerson className="w-16 h-16 p-1" />
                )}

                <h3 className="mt-3 font-semibold">
                  {user?.displayName || t("Guest User")}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 ">
                  {user?.email || "guest@example.com"}
                </p>
              </div>

              <div className="border-t">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full text-center text-red-600 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {t("Logout")}
                  </button>
                ) : (
                  <div className="flex flex-col">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        `py-2 px-4 text-center text-black dark:text-white ${isActive ? "text-orange-400" : ""
                        } hover:bg-gray-100 dark:hover:bg-gray-700`
                      }
                    >
                      {t("Login")}
                    </NavLink>

                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        `py-2 px-4 text-center text-black dark:text-white border-t ${isActive ? "text-orange-400" : ""
                        } hover:bg-gray-100 dark:hover:bg-gray-700`
                      }
                    >
                      {t("Register")}
                    </NavLink>
                  </div>
                )}
              </div>

            </div>
          </div>



        </div>
      </div>
      <div className="lg:flex items-center w-full justify-center  bg-black/80 text-white md:flex hidden">
        <ul className="menu menu-horizontal lg:px-1 px-0 bg- dark:bg-">
          {navLink}
        </ul>
      </div>
      <div className="navbar-center block md:hidden  items-center justify-center px-0.5">
        <div className="  lg:w-full  ">
          <div className="flex items-center lg:w-96 w- rounded-[5px] overflow-hidden border border-dashed border-[#fb923c] text-center justify-center">
            <input
              className="font-extralight font-poppins w-full px-3 py-2 bg-black/5 placeholder:text-sm text-base outline-none ring-0 focus:outline-none rounded-l-[5px]"
              type="search"
              placeholder="Search product name"
            />
            <div className="border-dashed border-l border-[#fb923c]">
              <button className="h-10 w-[36px] flex items-center justify-center bg-[#fb923c] hover:bg-yellow-500 transition text-black border-[#fb923c] border-l border-dashed">
                <CiSearch className="absolute" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
