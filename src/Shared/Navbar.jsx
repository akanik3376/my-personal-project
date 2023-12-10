import { Link } from 'react-router-dom'
import MenuDropdown from '../components/NavbarLink/NavDropDown'
import logo from '../assets/gradient-triangle-molecule-logo-technology-design_53876-116026.jpg'
import NavLinks from '../components/NavbarLink/NavLinks'
const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-2 border-b-[1px]'>

                <div className='flex justify-between items-center gap-3 md:gap-0'>
                    {/* Logo */}
                    <div>
                        <Link to='/'>
                            <img
                                className='hidden md:block rounded-full'
                                src={logo}
                                alt='logo'
                                width='50'
                                height='50'
                            />
                        </Link>
                    </div>

                    {/* md or lg nav link */}
                    <NavLinks />

                    {/* Dropdown Menu */}
                    <div className='md:hidden'>
                        < MenuDropdown />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar