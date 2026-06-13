import { BsPeopleFill, BsPersonFillAdd } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaPersonBooth, FaShoppingCart } from "react-icons/fa";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { RiDashboardHorizontalFill, RiHome4Fill, RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
    `flex p-2 items-center cursor-pointer rounded-sm w-full group
    ${isActive ? "text-blue-600 bg-gray-200 dark:bg-gray-700" : "text-gray-900 dark:text-white"}
    hover:bg-gray-200 dark:hover:bg-gray-700`;

const iconClass = (isActive) =>
    `text-lg ${isActive ? "text-blue-600" : "text-gray-600 group-hover:text-blue-600"}`;

const navItems = [
    { to: "/admin/dashboard",     icon: RiDashboardHorizontalFill, label: "Dashboard" },
    { to: "/admin/user",          icon: RiHome4Fill,               label: "Home" },
    { to: "/admin/addDeposit",    icon: RiMoneyDollarBoxFill,      label: "Add Money" },
    { to: "/admin/addCost",       icon: FaShoppingCart,            label: "Add Cost" },
    { to: "/admin/addMeal",       icon: MdOutlineSoupKitchen,      label: "Add Meal" },
    { to: "/admin/addMember",     icon: BsPersonFillAdd,           label: "Add Member" },
    { to: "/admin/allMember",     icon: BsPeopleFill,              label: "All Member" },
    { to: "/admin/AllMealsDetails", icon: TbListDetails,           label: "All Meals Details" },
    // { to: "/admin/changeManager", icon: FaPersonBooth,             label: "Change Manager" },
    { to: "/admin/sitesettings", icon: IoSettingsOutline,             label: "Site Settings" },
];

const Sidebar = () => {
    return (
        <div className="mt-[2px] h-screen bg-gray-100 p-1 dark:bg-gray-800 overflow-y-auto">
            <ul className="space-y-0.5 font-medium">

                {navItems.map(({ to, icon: Icon, label }) => (
                    <li key={to}>
                        <NavLink to={to} className={navLinkClass}>
                            {({ isActive }) => (
                                <>
                                    <Icon className={iconClass(isActive)} />
                                    <span className="flex-1 ms-3 whitespace-nowrap dark:text-white group-hover:text-blue-600">
                                        {label}
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </li>
                ))}

                {/* Logout */}
                <li>
                    <NavLink to="/login" className="flex items-center p-2 text-gray-900 rounded-sm dark:text-white hover:bg-gray-200 cursor-pointer group">
                        <BiLogOut className="text-lg text-gray-950 group-hover:text-blue-600" />
                        <span className="flex-1 ms-4 whitespace-nowrap group-hover:text-blue-600">
                            Log Out
                        </span>
                    </NavLink>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;