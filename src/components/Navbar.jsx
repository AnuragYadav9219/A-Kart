import React, { useState } from 'react';
import images from './image';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSlide, setIsSlide] = useState(false);
    const navigate = useNavigate();
    const [hasAccount, setHasAccount] = useState(true);

    const handleLoginClick = () => {
        if (hasAccount) {
            navigate('/login');
        } else {
            navigate('/signup');
        }
    };

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleSlide = () => setIsSlide(!isSlide);

    return (
        <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex justify-center items-center text-3xl font-bold font-mono">
                    <h1 className="whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        A-Kart
                    </h1>
                </div>


                {/* Desktop Menu */}
                <div className='flex justify-around items-center w-full'>
                    <div className='hidden md:flex items-center h-10 border-blue-600 border-2 focus:outline-none w-3/6 rounded-xl'>
                        <h1>
                            <img src={images.search} alt="Search" className='h-5 px-2 my-1 rounded-2xl' />
                        </h1>
                        <h1>
                            <input type="text" placeholder='Search for Products, Brands and more' className='border-none bg-white focus:outline-none w-80 rounded' />
                        </h1>
                    </div>

                    <div className='hidden md:flex items-center justify-between'>
                        <h1 className='flex'>

                            <NavLink
                                to="/cart"
                                className={(e) => {
                                    return e.isActive ? "text-black bg-gray-200 rounded-xl p-2 px-3 flex items-center font-bold justify-center transition duration-200 ease-in-out border-2 border-gray-200 hover:bg-gray-100 cursor-pointer hover:scale-105" :
                                        "p-2 px-3 flex items-center font-bold justify-center transition duration-200 ease-in-out rounded-xl border-2 border-gray-200 hover:bg-gray-100 cursor-pointer hover:scale-105"
                                }}
                            >
                                <img src={images.cart} alt="Cart" />
                                Cart
                            </NavLink>

                            <button
                                onClick={handleLoginClick}
                                className={`font-bold py-2 px-6 ml-8 h-full rounded-xl cursor-pointer border-2 border-gray-200 hover:scale-105 transition duration-200 ease-in-out hover:bg-gray-100 
                                    ${hasAccount ? 'text-black' : 'text-black'} 
                                `}
                            >
                                {hasAccount ? 'Login' : 'Sign Up'}
                            </button>

                        </h1>

                        <button onClick={toggleSlide} className=' p-2 h-10 flex justify-center w-10 ml-10 rounded-4xl focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer shadow-sm hover:shadow-orange-300 hover:scale-90 hover:bg-gray-100 transition-shadow duration-500 ease-in-out focus-within:shadow-[inset_0_2px_6px_rgba(255,184,106,0.5)]' >
                            {isSlide ?
                                <img src={images.dot} alt="Dot" className='h-6 px-1' /> :
                                <img src={images.dot} alt="Dot" className='h-6 px-1' />
                            }
                        </button>

                        {/* Desktop Slide Bar */}
                        {isSlide && (
                            <div className="fixed top-20 right-0 w-1/6 h-full bg-white shadow-md z-50">
                                <ul className="flex flex-col items-center py-4 h-full space-y-2 text-gray-700">

                                    <NavLink
                                        to="/"
                                        className={(e) => {
                                            return e.isActive ? "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 " :
                                                "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 "
                                        }}
                                    >
                                        Home
                                    </NavLink>
                                    <hr className="w-3/4 text-gray-300" />

                                    <NavLink
                                        to="/products"
                                        className={(e) => {
                                            return e.isActive ? "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 " :
                                                "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 "
                                        }}
                                    >
                                        Products
                                    </NavLink>
                                    <hr className="w-3/4 text-gray-300" />

                                    <NavLink
                                        to="/services"
                                        className={(e) => {
                                            return e.isActive ? "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 " :
                                                "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 "
                                        }}
                                    >
                                        Services
                                    </NavLink>
                                    <hr className="w-3/4 text-gray-300" />

                                    <NavLink
                                        to="/categories"
                                        className={(e) => {
                                            return e.isActive ? "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 " :
                                                "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 "
                                        }}
                                    >
                                        Categories
                                    </NavLink>
                                    <hr className="w-3/4 text-gray-300" />

                                </ul>
                            </div>
                        )}
                    </div>


                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden pl-4 justify-between w-5/6 flex">
                        <div className='flex lg:hidden md:hidden items-center h-10 border-blue-600 border-2 focus:outline-none w-5/6 rounded-xl'>
                            <img src={images.search} alt="Search" className='h-5 px-2 my-1 rounded-2xl ' />
                            <input type="text"
                                id="search"
                                name="search"
                                autoComplete="on"
                                minLength={1}
                                maxLength={100}
                                placeholder='Search for Products, Brands and more' className='border-none focus:outline-none w-9/12 rounded'
                            />
                        </div>
                        <button onClick={toggleMenu} className=' p-1 m-1 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer shadow-sm hover:shadow-orange-300 hover:scale-90 hover:bg-gray-100 transition-shadow duration-500 ease-in-out focus-within:shadow-[inset_0_2px_6px_rgba(255,184,106,0.5)] '>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed lg:hidden md:hidden top-19 right-0 w-1/2 h-full bg-white shadow-md z-50">
                    <ul className="flex flex-col items-center py-4 h-full space-y-2 text-gray-700">

                        <NavLink
                            to="/"
                            className={(e) => {
                                return e.isActive ? "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 " :
                                    "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 "
                            }}
                        >
                            Home
                        </NavLink>
                        <hr className="w-3/4 text-gray-300" />

                        <NavLink
                            to="/cart"
                            className={(e) => {
                                return e.isActive ? "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 " :
                                    "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 "
                            }}
                        >
                            Cart
                        </NavLink>
                        <hr className="w-3/4 text-gray-300" />

                        <NavLink
                            to="/products"
                            className={(e) => {
                                return e.isActive ? "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 " :
                                    "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 "
                            }}
                        >
                            Products
                        </NavLink>
                        <hr className="w-3/4 text-gray-300" />

                        <NavLink
                            to="/services"
                            className={(e) => {
                                return e.isActive ? "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 " :
                                    "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 "
                            }}
                        >
                            Services
                        </NavLink>
                        <hr className="w-3/4 text-gray-300" />

                        <NavLink
                            to="/categories"
                            className={(e) => {
                                return e.isActive ? "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 " :
                                    "text-lg font-medium cursor-pointer hover:text-yellow-500 hover:scale-105 "
                            }}
                        >
                            Categories
                        </NavLink>
                        <hr className="w-3/4 text-gray-300" />

                        <button
                            onClick={handleLoginClick}
                            className={`font-medium underline cursor-pointer hover:underline hover:text-yellow-500 hover:scale-105 ${hasAccount ? 'text-green-500' : 'text-red-500'}`}
                        >
                            {hasAccount ? 'Login' : 'Sign Up'}
                        </button>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar;