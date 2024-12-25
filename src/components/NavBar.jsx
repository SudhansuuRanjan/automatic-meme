import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiOutlineCode, HiOutlineCloud, HiOutlinePhone, HiOutlineLogout } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import { LuBookText } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useState } from "react";


const Navbar = () => {
    const navlinks = [
        {
            name: 'Home',
            icon: <HiOutlineHome />,
            path: "/"
        },
        {
            name: 'AI Code Review',
            icon: <HiOutlineCode />,
            path: "/code-review"
        },
        {
            name: 'Cloud Security',
            icon: <HiOutlineCloud />,
            path: "/cloud-security"
        },
        {
            name: 'How to Use',
            icon: <LuBookText />,
            path: "/how-to-use"
        },
        {
            name: 'Settings',
            icon: <LuSettings />,
            path: "/settings"
        },
    ];

    const [isActive, setActive] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);


        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <div className='lg:w-[14rem] md:w-[14rem] w-0 relative'>
            <nav className="p-2 z-30 fixed top-0 lg:w-[12rem] md:w-[12rem] w-full md:h-screen h-fit flex flex-col overflow-hidden bg-white border border-l-gray-300">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="logo" className="h-8" />
                        <div className="font-light text-lg">CodeAnt AI</div>
                    </div>

                    <button
                        onClick={() => setActive(!isActive)}
                        className="md:hidden text-2xl">
                        <IoIosMenu />
                    </button>
                </div>
                {isActive && <>
                    <select
                        className="bg-white w-full border mb-4 rounded-lg p-1.5 text-sm mt-4"
                        name="profile"
                        id="profile"
                    >
                        <option className="bg-white">Sudhanshu Ranjan</option>
                    </select>

                    <div className="flex flex-col md:justify-between md:gap-4 h-full overflow-y-auto">
                        {/* Navigation Links */}
                        <div className="flex flex-col gap-1">
                            {navlinks.map((navlink) => (
                                <NavigationLink
                                    key={navlink.name}
                                    icon={navlink.icon}
                                    name={navlink.name}
                                    path={navlink.path}
                                />
                            ))}
                        </div>

                        {/* Footer Buttons */}
                        <div>
                            <button className="flex w-full items-center text-sm gap-2 p-2 rounded hover:bg-gray-100 text-gray-800">
                                <span className="text-lg">
                                    <HiOutlinePhone />
                                </span>
                                <div className="font-semibold">Support</div>
                            </button>

                            <button className="flex w-full items-center text-sm gap-2 p-2 rounded hover:bg-gray-100 text-gray-800">
                                <span className="text-lg">
                                    <HiOutlineLogout />
                                </span>
                                <div className="font-semibold">Logout</div>
                            </button>
                        </div>
                    </div>
                </>}
            </nav>
        </div>
    );
};

export default Navbar;

const NavigationLink = ({ path, name, icon }) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `flex items-center text-sm gap-2 p-2 rounded ${isActive
                    ? "bg-[#1570EF] text-white"
                    : "hover:bg-gray-100 text-gray-800"
                }`
            }
        >
            <span className="text-lg">{icon}</span>
            <div className="font-semibold">{name}</div>
        </NavLink>
    );
};
