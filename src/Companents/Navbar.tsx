import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { SquareTerminal, Share2, FileText, User } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex items-center  justify-between px-8 py-4 bg-white shadow-xl fixed top-0 left-0 z-50 w-full">
            {/* Logo */}
            <div className="flex items-center text-xl font-bold text-gray-900">
                <span>•</span>
                <span className="ml-1">Dev.Alimardon    </span>
            </div>

            {/* Nav links */}
            <div className="flex items-center gap-10">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? " px-4 py-1.5 text-blue-600 text-sm font-medium bg-blue-50 rounded-full " : "text-gray-600 bg-white"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/AboutUs"
                    className={({ isActive }) =>
                        isActive ? " px-4 py-1.5 text-blue-600 text-sm font-medium bg-blue-50 rounded-full " : "text-gray-600 bg-white"
                    }
                >
                    About
                </NavLink>
             <NavLink
                    to="/Skills"
                    className={({ isActive }) =>
                        isActive ? " px-4 py-1.5 text-blue-600 text-sm font-medium bg-blue-50 rounded-full " : "text-gray-600 bg-white"
                    }
                >
                    Skills
                </NavLink>
                 <NavLink
                    to="/Projects"
                    className={({ isActive }) =>
                        isActive ? " px-4 py-1.5 text-blue-600 text-sm font-medium bg-blue-50 rounded-full " : "text-gray-600 bg-white"
                    }
                >
                    Projects
                </NavLink>
                 <NavLink
                    to="/Experience"
                    className={({ isActive }) =>
                        isActive ? " px-4 py-1.5 text-blue-600 text-sm font-medium bg-blue-50 rounded-full " : "text-gray-600 bg-white"
                    }
                >
                    Experience
                </NavLink>
                 <NavLink
                    to="/ContactCard"
                    className={({ isActive }) =>
                        isActive ? " px-4 py-1.5 text-blue-600 text-sm font-medium bg-blue-50 rounded-full " : "text-gray-600 bg-white"
                    }
                >
                    Contacts
                </NavLink>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
                <SquareTerminal size={20} className="text-gray-500" />
                <Share2 size={20} className="text-gray-500" />

                <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800  text-white text-sm font-medium px-4 py-2 rounded-full">
                    <FileText size={16} />
                    Resume / CV
                </button>

                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white">
                    <User size={18} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;