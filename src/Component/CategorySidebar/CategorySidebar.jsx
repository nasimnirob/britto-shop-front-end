import React from "react";
import { NavLink } from "react-router-dom";

function CategorySidebar({ coverEnabled, MainCategory }) {
    return (
        <aside
            className={`
        hidden lg:block
        w-72
        shrink-0
        h-full
        overflow-y-auto
        border-r
        dark:border-gray-700
        scrollbar-hide
        ${coverEnabled ? "text-white" : "text-gray-700 dark:text-white"}
      `}
        >
            <div className="flex flex-col text-base font-poppins">
                {MainCategory.map((category, index) => (
                    <NavLink
                        key={index}
                        to={`/category/${category.toLowerCase()}`}
                        className={({ isActive }) =>
                            `py-3 px-4 ${isActive
                                ? "text-orange-500"
                                : "hover:text-orange-400"
                            }`
                        }
                    >
                        {category}
                    </NavLink>
                ))}
            </div>
        </aside>
    );
}

export default CategorySidebar;