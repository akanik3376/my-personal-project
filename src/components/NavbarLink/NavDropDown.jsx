import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/gradient-triangle-molecule-logo-technology-design_53876-116026.jpg'

const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>

                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu className='text-2xl' />
                    <div className='hidden md:block'>
                        {/* Avatar */}
                        <img
                            className='rounded-full px-4 py-3'
                            referrerPolicy='no-referrer'
                            src={logo}
                            alt='profile'
                            height='30'
                            width='30'
                        />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm p-2'>

                    <div className="w-full pl-4">
                        <img
                            className='rounded-full '
                            referrerPolicy='no-referrer'
                            src={logo}
                            alt='profile'
                            height='40'
                            width='40'
                        />
                    </div>

                    <div className='flex flex-col cursor-pointer'>
                        <Link
                            to='/'
                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Home
                        </Link>


                    </div>

                </div>
            )}
        </div>
    )
}

export default MenuDropdown