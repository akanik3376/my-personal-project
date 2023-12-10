import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/gradient-triangle-molecule-logo-technology-design_53876-116026.jpg'
import Container from '../components/Container';
const Header = () => {

    const navLink = <>
        <li><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline " : ""
            }>Home</NavLink></li>

        <li><NavLink to='/about-me'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline " : ""
            }
        >About </NavLink></li>

        <li><NavLink to='/portfolio'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline " : ""
            }
        >Portfolio</NavLink></li>

        <li><NavLink to='/contact-me'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline " : ""
            }
        >Contact</NavLink></li>
    </>
    return (
        <div>
            <Container>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        {/* for sm */}
                        <div>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {navLink}
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                className=' md:block rounded-full'
                                src={logo}
                                alt='logo'
                                width='50'
                                height='50'
                            />
                            <h2 className="text-3xl font-semibold">Anik</h2>
                        </div>
                    </div>


                    {/* for md and lg */}
                    <div className=" hidden md:flex navbar-end">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Header;
