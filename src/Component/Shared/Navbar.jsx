import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PiBagLight } from "react-icons/pi";
import { BsDashLg } from "react-icons/bs";
import { motion } from "framer-motion";
import { BiMoon, BiSun } from "react-icons/bi";
import useCategory from "../../Hooks/useCategory";
import useTheme from "../../Hooks/useTheme";

import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../Language/LanguageSelector";
import { RxPerson } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

const Navbar = ({ openCart, setOpenCart, openProfile, setOpenProfile, open, setOpen }) => {
  const { user, logOut, loading } = useContext(AuthContext);
  // const [open, setOpen] = useState(false);
  // const [openProfile, setOpenProfile] = useState(false);
  // const [openCart, setOpenCart] = useState(false);
  const wrapperRef = useRef();
  const menuRef = useRef(null);
  const profileRef = useRef(null);
  const cartRef = useRef(null);
  const [dropdown, setDropdown] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const [isSticky, setIsSticky] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

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
  const handleCartToggle = () => {

    setOpenCart((prev) => !prev);

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
      }

      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpenProfile(false);
      }

      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setOpenCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openCart, openProfile, open]);


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
    <div className="z- relative">
      <div className={`w-full fixed top-0 left-0 z-50 backdrop-blur-[6px] transition-all duration-300 mt- ${isSticky ? "bg-black/50 shadow-md rounded-b-[4.5px] text-white" : "bg-transparent rounded-b-[4.5px] text-black dark:text-white"
        }`}>
        <div
          className={`navbar mx-auto flex items-center justify-between max-w-[1524px] px- ${isSticky ? "text-white " : "text-black dark:text-white"
            }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                onClick={handleToggle}
                role="button"
                className="w-10 h-10 hover:bg-black/10 rounded-full lg:hidden md:hidden select-none"
              >
                {open ? (
                  <AiOutlineClose className="h-10 w-10 p-2" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 p-2"
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
                ref={menuRef}
                className={`lg:hidden md:hidden fixed top-0 left-0 h-screen 
    lg:w-[505px] md:w-[240px] sm:w-[320px] w-[300px]
    z-40 bg-black/30 backdrop-blur-md
    border border-gray-600 shadow-sm text-white
    transform transition-transform duration-500 ease-in-out
    ${open ? "translate-x-0" : "-translate-x-full"}
  `}
              >
                <div className="flex flex-row  lg:hidden md:hidden pt-2.5 pl-2 pb-4 bg-black/20">
                  <div
                    onClick={handleToggle}
                    role="button"
                    className="w-10 h-10 hover:bg-black/10 rounded-full lg:hidden md:hidden"
                  >
                    {open ? (
                      <AiOutlineClose className="h-10 w-10 p-2" />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 p-2"
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
                  <div className="flex flex-row ml-5  items-center lg:gap-3 md:gap-  w-full sm:px-5 md:px-2  lg:w-2/4 md:w-4/4 select-none">
                    <NavLink to="/" className="px- ">
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
                {navLink}
              </ul>
            </div>
            <div className="flex flex-row ml-5  items-center lg:gap-3 md:gap-  w-full sm:px-5 md:px-2  lg:w-2/4 md:w-4/4">
              <NavLink to="/" className="px- ">
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
                  className={`font-extralight font-poppins w-full px-3 py-2 bg-black/5 placeholder:text-sm ${isSticky ? 'placeholder:text-gray-100' : 'placeholder:text-gray-600'} text-base outline-none ring-0 focus:outline-none rounded-l-[5px]`}
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

          <div className="navbar-end flex justify-end items-center gap-2">
            <div className="h-16 px-0 -mb-4 -mt-4 lg:hidden md:hidden block py-2.5 hover:text-orange-400">
              <button onClick={() => setOpenSearch(prev => !prev)}>
                <CiSearch className="w-10 h-10 rounded-full p-1 mt-0.5 hover:bg-black/10 dark:hover:bg-black/15" />
              </button>
            </div>
            <div
              className={`
    fixed top-16 left-0 w-full z-40
    lg:hidden md:hidden
    transition-all duration-300 ease-in-out
    ${openSearch ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
  `}
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-black shadow-md">
                <input
                  type="text"
                  placeholder="Search product..."
                  className="w-full px-3 py-2 rounded-md border outline-none text-black dark:text-white"
                  autoFocus
                />
                <button onClick={() => setOpenSearch(false)}>
                  <AiOutlineClose className="text-2xl" />
                </button>
              </div>
            </div>


            <div
              ref={profileRef}
              className={` relative ml-1 flex items-center justify-center rounded-full h-10
    ${openProfile ? " bg-black/15 dark:bg-black/10 w-10 h-10 " : " h-10 w-10 dark:hover:bg-black/15"}
  `}
              onMouseEnter={() => window.innerWidth >= 768 && setOpenProfile(true)}
              onMouseLeave={() => window.innerWidth >= 768 && setOpenProfile(false)}
            >

              {
                user ? <>
                  <div className="">
                    <button className="lg:block md:block hidden lg:h-16 md:h-16 h-10 -mt-4 -mb-4">
                      {loading ? (
                        <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                      ) : user?.photoURL ? (
                        <img
                          className="rounded-full p-1 w-10 h-10  hover:bg-black/10 dark:hover:bg-black/15"
                          src={user?.photoURL}
                          alt="Profile"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <RxPerson className="text-4xl rounded-full border-yellow-700 p-1 mt-1.5 hover:bg-black/10 dark:hover:bg-black/15" />
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
                        ? "hover:text-orange-400 text-base lg:px- lg:py-1 md:py- md:px-2 py-1 xl:px-5 w-full  lg:block md:block hidden "
                        : "text-inherit hover:text-orange-400 text-base lg:px- lg:py-1 md:py- md:px-2 py-1 xl:px-5 w-full  lg:block md:block hidden"
                    }
                  >
                    <h2 className="lg:flex md:flex hidden justify-between text-lg lg:text-lg items-center gap-3  pl- lg:pl-0 lg:bg-transparent md:bg-transparent bg-black bg-opacity-40 lg:shadow-none md:shadow-none shadow-md lg:py-3.5 md:py-0 py-2 ">
                      <span>{t("Login")} </span>
                      <RxPerson />
                    </h2>
                  </NavLink>
              }

              {/* Profile Button */}
              <div className=" h-16 px-0 -mb-4 -mt-4 lg:hidden md:hidden block py-2.5 hover:text-orange-400"
                onClick={handleProfileToggle}
              >
                <button className="">
                  {loading ? (
                    <div className=" w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                  ) : user?.photoURL ? (
                    <img
                      className=" rounded-full p-1 w-10 h-10 hover:bg-black/5 dark:hover:bg-black/15"
                      src={user?.photoURL}
                      alt="Profile"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <RxPerson className="text-4xl hover:text-[36px] rounded-full border-yellow-700 p-1 mt-1 hover:bg-black/10 dark:hover:bg-black/15" />
                  )}
                </button>
              </div>

              {/* Dropdown Panel — SHOW ON HOVER */}
              <div
                className={`absolute -right-14 top-[50px] w-64 
                bg-white dark:bg-primary-dark dark:text-white text-white 
                  rounded-md shadow-lg dark:border-gray-600 z-50
                  ${openProfile ? "block" : "hidden"}`}
              >

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

                <div className=" flex flex-col items-center p-4 text-black dark:text-white">
                  {user ? (
                    <img
                      className="w-20 h-20 rounded-full border border-gray-100 dark:border-gray-600"
                      src={user?.photoURL}
                      alt="Profile"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <RxPerson className=" w-16 h-16 p-1" />
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
                        onClick={() => {
                          setOpenProfile(false);
                        }}
                        className={({ isActive }) =>
                          `py-2 px-4 text-center text-black dark:text-white ${isActive ? "text-orange-400" : ""
                          } hover:bg-gray-100 dark:hover:bg-gray-700`
                        }
                      >
                        {t("Login")}
                      </NavLink>

                      <NavLink
                        to="/register"
                        onClick={() => {
                          setOpenProfile(false);
                        }}
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

            <div ref={cartRef} className={`relative ml-1 flex items-center justify-center rounded-full
    ${openCart ? "bg-black/15 dark:bg-black/10 w-10 h-10" : "hover:bg-black/10 w-10 h-10 dark:hover:bg-black/15"}
  `}
              onMouseEnter={() => window.innerWidth >= 768 && setOpenCart(true)}
            // onMouseLeave={() => window.innerWidth >= 768 && setOpenCart(false)}
            >
              <div onClick={handleCartToggle} className=" cursor-pointer flex items-center justify-center h-16 -mb-4 -mt-4 py-2.5 hover:text-orange-400 border border-none">
                <p className="hover:text-orange-400 text-base lg:px- lg:py-1 md:py- md:px- py-1 xl:px- w-full h-12 -mb- ">
                  <PiBagLight className="rounded-full p-1 mt-[1px] w-10 h-10 hover:bg-black/10 dark:hover:bg-black/15" />
                  <span className=" absolute rounded-full bg-red-600 text-sm border px-[px]  text-center hover:text-white text-white -top-2 lg:right- xl:right-1 md:right-1 right-1 border-none"><p className="font-bold text-sm hover:text-base h-4 w-4 flex items-center mt-0.5 border-none justify-center">5</p></span>
                </p>
              </div>

              <div
                className={
                  openCart
                    ? "fixed right-0 top-[52px] h-screen mt-3 lg:w-[505px] md:w-[505px] sm:w-[505px] w-[300px] p-2 z-40 bg-black/15 dark:border-gray-600 border-gray-600 border rounded-md shadow-sm backdrop-blur-[900px] text-white transform translate-x-0 transition-all duration-500 ease-out"
                    : "fixed right-0 top-[64px] h-screen lg:w-[505px] md:w-[505px] sm:w-[505px] w-[400px] z-40 transform translate-x-full transition-all duration-500 ease-out"
                }

              >
                <div
                  className="relative lg:left-[440px] md:left-[440px] sm:left-[440px] left-[350px] top-3.5 w-7 border bg-gray-600 hover:bg-red-500 border-gray-500 h-6 cursor-pointer lg:hidden md:hidden block"
                  onClick={handleCartToggle}
                >
                  <AiOutlineClose className="text-xl text-white ml-[3px] font-thin" />
                </div>

                <div className="group relative lg:left-[440px] md:left-[440px] sm:left-[440px] left-[350px]  top-3.5 w-7 border bg-gray-600 hover:bg-red-500 border-gray-500 h-6  cursor-pointer lg:block md:block hidden" onClick={handleCartToggle}>
                  {/* Close Icon (default) */}
                  <AiOutlineClose
                    className="
                  absolute inset-0 
                  text-xl text-white
                  transition-opacity duration-100
                  opacity-100 group-hover:opacity-0 ml-[3px] font-thin
                "
                  />

                  {/* Dash Icon (on hover) */}
                  <BsDashLg
                    className="
                  absolute inset-0 
                  text-xl text-white
                  transition-opacity duration-100
                  opacity-0 group-hover:opacity-100 ml-[3px] font-thin hover:text-white
                "
                  />
                </div>

                <div className="flex items-center justify-center font-mono h-2/6 w-full mt-8">
                  <h1 className="lg:text-2xl md:text-xl sm:text-sm text-[15px] hover:text-blue-500">Your cart is currently empty.</h1>
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
        {/* <div className="navbar-center block md:hidden  items-center justify-center px-0.5">
          <div className="  lg:w-full  ">
            <div className="flex items-center lg:w-96 w- rounded-[5px] overflow-hidden border border-dashed border-[#fb923c] text-center justify-center">
              <input
                className={`${isSticky ? "font-poppins  w-full px-3 py-2 bg-black/5 placeholder:text-sm placeholder:text-gray-200 dark:placeholder:text-gray-300 text-[15px]  outline-none ring-0 focus:outline-none rounded-l-[5px]" : "font-poppins  w-full px-3 py-2 bg-black/5 placeholder:text-sm placeholder:text-gray-700 dark:placeholder:text-gray-200 text-[15px]  outline-none ring-0 focus:outline-none rounded-l-[5px]"}`}
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
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
