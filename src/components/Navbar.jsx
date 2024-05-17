import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="lg:px-10 px-5 py-8 sticky bg-black  shadow-xl shadow-slate-950/40 w-full h-[50px] flex items-center ml-auto">
            <ul className="flex justify-start items-center sm:gap-10 gap-5 w-full h-full text-white">
                <NavLink
                    to={"./work"}
                    className={({ isActive }) =>
                        `${
                            isActive
                                ? "text-fuchsia-500 border-gray-100"
                                : "text-white"
                        }   text-sm h-full flex items-center  hover:text-fuchsia-500 cursor-pointer w-[50px] text-center justify-center`
                    }
                >
                    Work
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `  text-sm h-full flex items-center  hover:text-fuchsia-500 cursor-pointer`
                    }
                >
                    Resume
                </NavLink>
                <NavLink
                    to={"./Achievement"}
                    className={({ isActive }) =>
                        `${
                            isActive
                                ? "text-fuchsia-500  border-gray-100"
                                : "text-white"
                        }   text-sm h-full flex items-center  hover:text-fuchsia-500 cursor-pointer w-[100px] text-center justify-center`
                    }
                >
                    Achievement
                </NavLink>
                <NavLink
                    to={"/About"}
                    className={({ isActive }) =>
                        `${
                            isActive
                                ? "text-fuchsia-500  border-gray-100"
                                : "text-white"
                        } hidden text-sm h-full sm:flex items-center  hover:text-fuchsia-500 cursor-pointer w-[80px] text-center justify-center`
                    }
                >
                    About me
                </NavLink>
            </ul>
            <NavLink
                to={"/"}
                className={({ isActive }) =>
                    `${
                        isActive
                            ? "text-fuchsia-500  border-gray-100"
                            : "text-white"
                    } text-sm h-full flex items-center justify-center  px-2 text-white hover:text-fuchsia-500 cursor-pointer`
                }
            >
                Home
            </NavLink>
        </div>
    );
}

export default Navbar;
