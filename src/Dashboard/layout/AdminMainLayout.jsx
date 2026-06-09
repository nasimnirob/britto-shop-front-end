import { RiMenu2Line } from "react-icons/ri";
import Sidebar from "../component/Sidebar";
import TopNavbar from "../component/TopNavbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import logo from '../../../public/logo.png'

const AdminMainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="mx-auto text-black">

            {/* Top Navbar */}
            <div className={`fixed top-0 z-40 w-full bg-white shadow-md transition-all duration-300 ml-0
                ${isSidebarOpen
                    ? "lg:w-[calc(100%-230px)] md:w-[calc(100%-230px)] lg:left-[224px] md:left-[224px]"
                    : "lg:w-[calc(100%-72px)] md:w-[calc(100%-72px)] lg:left-[72px] md:left-[64px]"
                }`}>
                <TopNavbar />
            </div>

            <div className="lg:flex">

                {/* Sidebar */}
                <div className={`lg:fixed md:fixed hidden lg:block md:block left-0 top-0 h-screen px-1 z-40 bg-gray-100
                    ${isSidebarOpen
                        ? "w-52 transition-all duration-500 overflow-hidden"
                        : "w-[57px] transition-all duration-500 overflow-hidden"
                    }`}>

                    <div className={`bg-gray-100 mt-3 ${isSidebarOpen ? "shadow-gray-200 shadow-[rgba(0,0,15,0.5)_0px_2px_0px_0px]" : "pb-2"}`}>
                        <img className="w-10 ms-2" src={logo} alt="Logo" />
                        <h5 className={`text-[19px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-semibold p-2 transition-opacity duration-500
                            ${isSidebarOpen
                                ? "opacity-100 w-[250px] ml-1 visible"
                                : "hidden opacity-0"
                            }`}>
                            Mess Management
                        </h5>
                    </div>

                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className={`pt-[72px] w-full transition-all duration-500
                    ${isSidebarOpen
                        ? "lg:w-[calc(100%-230px)] md:w-[calc(100%-230px)] lg:ml-56 md:ml-56"
                        : "lg:w-[calc(100%-72px)] md:w-[calc(100%-72px)] lg:ml-16 md:ml-16 lg:pl-2"
                    }`}>

                    {/* Sidebar Toggle Button */}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className={`lg:fixed md:fixed hidden lg:block md:block z-40 top-4 bg-gray-200 p-2 rounded-md text-blue-800 transition-all duration-500
                            ${isSidebarOpen
                                ? "lg:left-[235px] md:left-[230px]"
                                : "lg:left-[83px] md:left-[70px]"
                            }`}>
                        <RiMenu2Line className="text-xl" />
                    </button>

                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminMainLayout;