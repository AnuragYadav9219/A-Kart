import React, { useState } from 'react';
import images from './image';
import { NavLink, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export function Home() {

}


export function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Login successfully!');
    };

    return (
        <div className='h-[89vh] flex justify-center items-center'>
            <div className="w-10/12 sm:w-4/6 md:w-3/6 lg:w-2/6 xl:w-1/4 h-auto max-h-[90vh] border-2 border-gray-300 rounded-lg hover:shadow-2xl shadow-orange-300 pb-3 px-1 grid-cols-2 justify-center items-center transition-all duration-300 ease-in-out">
                <div className='flex justify-end text-gray-500 font-bold text-xl'>
                    <NavLink
                        to='/'
                        className='flex justify-center border-2 items-center rounded-full w-6 h-6 mt-1 pb-2 cursor-pointer border-gray-300 hover:scale-90 hover:text-gray-700 duration-300 ease-in-out shadow-2xl transition-shadow focus-within:shadow-[inset_0_2px_6px_rgba(255,184,106,0.5)]'>
                        x
                    </NavLink>
                </div>
                <h1 className='flex justify-center my-3 mb-8 items-center text-2xl font-bold'>
                    Welcome Back
                </h1>
                <div className='col-span-2 flex justify-center items-center'>
                    <form onSubmit={handleSubmit} className='w-10/12 justify-center items-center'>
                        <input
                            type="email"
                            required
                            className='w-full h-10 rounded-3xl p-4 my-2 border-2 border-gray-300 focus:outline-1'
                            placeholder='Email'
                        />
                        <input
                            type="password"
                            required
                            className='w-full h-10 rounded-3xl p-4 my-2 border-2 border-gray-300 focus:outline-1'
                            placeholder='Password'
                            autoComplete='current-password'
                        />
                        <div className='flex justify-between text-xs my-4 mr-1'>
                            <label className='ml-2 font-bold text-gray-500'>
                                <input type="checkbox" className='mr-1' />
                                Remember me
                            </label>
                            <span className='text-blue-500 hover:text-blue-700 underline font-bold cursor-pointer'>
                                Forget Password?
                            </span>
                        </div>

                        <button type="submit" className='w-full h-10 border-2 mt-1 rounded-3xl border-gray-300 text-white bg-blue-500 cursor-pointer shadow-lg drop-shadow-2xl active:shadow-none'>
                            Log in
                        </button>

                        <p className='text-xs my-2'>
                            Don't have an account?{' '}
                            <NavLink
                                to='/signUp'
                                className='text-blue-500 font-bold underline hover:text-blue-700'>
                                Sign up
                            </NavLink>
                        </p>

                        <button type="button" className='w-full h-10 border-2 mt-6 rounded-3xl border-gray-300 text-black bg-white cursor-pointer shadow-lg drop-shadow-2xl active:shadow-none'>
                            <img src={images.google} alt="Google" className='w-5 h-5 pb-0.5 mr-2 inline-block' />
                            Log in with Google
                        </button>
                        <button type="button" className='w-full h-10 border-2 my-4 rounded-3xl border-gray-300 text-black bg-white cursor-pointer shadow-lg drop-shadow-2xl active:shadow-none'>
                            <img src={images.facebook} alt="Facebook" className='w-5 h-5 pb-0.5 mr-2 inline-block' />
                            Log in with Facebook
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};




export function SignUp() {
    const [accepted, setAccepted] = useState(false);


    const navigate = useNavigate();

    useEffect(() => {
        const accepted = localStorage.getItem('privacyAccepted');
        if (accepted !== 'true') {
            navigate('/privacyPolicy');
        }
    }, [navigate]);


    const handleCheckbox = (e) => {
        setAccepted(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!accepted) {
            alert('Please accept the Privacy Policy to continue.');
            return;
        }
        alert('Account created successfully!');
    };

    return (
        <div className='h-[89vh] flex justify-center items-center'>
            <div className="w-10/12 sm:w-4/6 md:w-3/6 lg:w-2/6 xl:w-1/4 h-auto max-h-[90vh] border-2 border-gray-300 rounded-lg hover:shadow-2xl shadow-orange-300 pb-3 px-1 grid-cols-2 justify-center items-center transition-all duration-300 ease-in-out">
                <div className='flex justify-end text-gray-500 font-bold text-xl'>
                    <NavLink
                        to='/'
                        className='flex justify-center border-2 items-center rounded-full w-6 h-6 mt-1 pb-2 cursor-pointer border-gray-300 hover:scale-90 hover:text-gray-700 duration-300 ease-in-out shadow-2xl transition-shadow focus-within:shadow-[inset_0_2px_6px_rgba(255,184,106,0.5)]'>
                        x
                    </NavLink>
                </div>

                <h1 className='flex justify-center my-3 mb-8 items-center text-2xl font-bold'>
                    Register
                </h1>

                <div className='col-span-2 flex justify-center items-center'>
                    <form
                        action="#"
                        className='w-10/12 justify-center items-center'
                        onSubmit={handleSubmit}
                    >
                        <input type="text"
                            className='w-full h-10 rounded-3xl p-4 my-2 border-2 border-gray-300 focus:outline-1'
                            placeholder='Name'
                            required
                        />
                        <input type="email"
                            className='w-full h-10 rounded-3xl p-4 my-2 border-2 border-gray-300 focus:outline-1'
                            placeholder='Email'
                            required
                        />
                        <input type="password"
                            className='w-full h-10 rounded-3xl p-4 my-2 border-2 border-gray-300 focus:outline-1'
                            placeholder='Password'
                            autoComplete='new-password'
                            required
                        />

                        {/* Privacy Policy Agreement */}
                        <div className="text-xs my-2">
                            <label className="flex items-start space-x-2">
                                <input
                                    type="checkbox"
                                    checked={accepted}
                                    onChange={handleCheckbox}
                                    className="mt-1"
                                    required
                                />
                                <span>
                                    I have read and agree to the{' '}
                                    <NavLink
                                        to="/privacyPolicy"
                                        className="text-blue-500 underline hover:text-blue-700"
                                    >
                                        Privacy Policy
                                    </NavLink>.
                                </span>

                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={!accepted}
                            className={`w-full h-10 border-2 mt-1 rounded-3xl text-white ${accepted ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'
                                } border-gray-300 shadow-lg drop-shadow-2xl active:shadow-none`}
                        >
                            Create Account
                        </button>

                        <p className='text-xs my-2'>
                            Already have an account?{' '}
                            <NavLink
                                to='/login'
                                className='text-blue-500 font-bold underline cursor-pointer hover:text-blue-700'>
                                Log in
                            </NavLink>
                        </p>

                        <button className='w-full h-10 border-2 mt-6 rounded-3xl border-gray-300 text-black bg-white cursor-pointer shadow-lg drop-shadow-2xl active:shadow-none'>
                            <img src={images.google} alt="Google" className='w-5 h-5 pb-0.5 mr-2 inline-block' />
                            Sign up with Google
                        </button>
                        <button className='w-full h-10 border-2 my-4 rounded-3xl border-gray-300 text-black bg-white cursor-pointer shadow-lg drop-shadow-2xl active:shadow-none'>
                            <img src={images.facebook} alt="Facebook" className='w-5 h-5 pb-0.5 mr-2 inline-block' />
                            Sign up with Facebook
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}







export function DefaultCategoryContent() {
    return (
        <div className="w-full flex flex-col items-center pt-32 justify-center text-center text-gray-700 p-6">
            <img
                src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                alt="Select category"
                className="w-40 h-40 mb-6 opacity-80"
            />
            <h2 className="text-2xl font-semibold mb-2">Welcome to Our Store!</h2>
            <p className="text-lg max-w-md">
                Explore our product categories by clicking on the options in the left sidebar.
                Discover amazing deals on fashion, electronics, beauty, and more!
            </p>
        </div>
    );
}

