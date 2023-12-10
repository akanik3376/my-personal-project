import { NavLink } from "react-router-dom";

const NavLinks = () => {

    const navLink = <>
        <li><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline " : ""
            }>Home</NavLink></li>

        <li><NavLink to='/about-me'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline " : ""
            }
        >About Me</NavLink></li>

        <li><NavLink
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline " : ""
            }
        >My Project</NavLink></li>

        <li><NavLink

            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline " : ""
            }
        >Contact Me</NavLink></li>
    </>

    return (
        <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 text-xl font-semibold ">
                {
                    navLink
                }

            </ul>
        </div>
    );
};

export default NavLinks;