import React from 'react';
import { useCart } from './CartContext';
import { NavLink } from 'react-router-dom';
import { FaShieldAlt, FaUndoAlt, FaCheckCircle, FaTags } from 'react-icons/fa';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();

    const totalAmount = cart.reduce(
        (sum, item) => sum + item.dPrice * item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const totalDiscount = totalPrice - totalAmount;

    return (<div className='my-2 lg:mx-20 flex flex-col lg:flex-row p-6 gap-6'>
        <div className='flex-1 border border-gray-300 p-1 rounded-md'>
            <div className='border rounded-md border-gray-300 mb-3 py-5'>
                <h1 className='font-bold text-2xl flex justify-center w-full'>Your Shopping Cart</h1>
                <p className='text-sm font-semibold mt-1 text-center text-gray-600'>Review your items and proceed to checkout.</p>
            </div>

            {cart.length === 0 ? (
                <div className='h-96 flex flex-col justify-center items-center border-2 border-gray-200 rounded-md'>
                    <h2 className='text-xl font-semibold mb-2'>🛒 Your cart is empty!</h2>
                    <p className='mb-4 text-gray-400'>Looks like you haven’t added anything yet.</p>
                    <NavLink to='/categories' className='bg-blue-500 text-white px-4 py-2 font-semibold rounded cursor-pointer'>
                        Continue Shopping
                    </NavLink>
                </div>
            ) : (
                cart.map(item => (
                    <div key={item.id} className='flex items-center gap-5 border-b py-4 border-1 border-gray-200 px-2 rounded-md mb-2 shadow-md hover:shadow-orange-300'>
                        <img src={item.image} alt={item.name} className='w-24 h-24 object-fit rounded' />
                        <div className='flex-1'>
                            <h2 className='text-lg font-semibold'>{item.name}</h2>
                            <div className='flex gap-4 items-center mt-2'>
                                <span className='text-lg font-bold text-blue-600'>₹{item.dPrice * item.quantity}</span>
                                <span className='text-sm line-through text-gray-400'>₹{item.price * item.quantity}</span>
                                <span className='text-xs font-semibold text-green-600'>
                                    {Math.round(((item.price - item.dPrice) / item.price) * 100)}% off
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 cursor-pointer bg-gray-300 rounded">-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 cursor-pointer bg-gray-300 rounded">+</button>
                            </div>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 cursor-pointer hover:text-red-700">
                            <span className='font-bold border-2 p-1 rounded-lg pb-2 px-2 hover:bg-gray-200'>Remove</span>
                        </button>
                    </div>
                ))
            )}
        </div>

        {cart.length > 0 && (
            <div className='w-full lg:w-1/3 border border-gray-100 rounded shadow-md bg-gray-100 h-fit lg:sticky lg:top-20'>
                <h2 className="text-lg text-gray-600 sm:text-xl flex justify-center items-center gap-2 font-bold pl-4 py-2">
                    <FaTags className="text-blue-500" />
                    PRICE DETAILS
                </h2>
                <div className='bg-white p-4 sm:p-6 border-y border-gray-300'>
                    <div className="flex justify-between text-sm sm:text-base mb-2">
                        <span>Price ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                        <span className='font-semibold'>₹{totalPrice}</span>
                    </div>

                    <div className="flex justify-between text-sm sm:text-base py-1 border-b pb-4 border-gray-300">
                        <span>Total Discount</span>
                        <span className="font-semibold text-green-600">-₹{totalDiscount}</span>
                    </div>

                    <div className="flex justify-between text-sm sm:text-base py-2 border-b border-gray-300">
                        <span className='font-bold'>Total Amount</span>
                        <span className="font-bold text-blue-600 text-base sm:text-lg">₹{totalAmount}</span>
                    </div>

                    <div className='text-green-600 font-bold text-sm sm:text-base mt-2'>You will save ₹{totalDiscount} on this order.</div>

                    <NavLink to='/payment'>
                        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 text-sm sm:text-base cursor-pointer font-semibold rounded shadow-md hover:shadow-orange-300 transition duration-200">
                            Proceed to Checkout
                        </button>
                    </NavLink>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-600 px-4 py-5">
                    <div className="flex items-center gap-2">
                        <FaShieldAlt className="text-green-600" />
                        <span>Secure Payments</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaUndoAlt className="text-blue-500" />
                        <span>Easy Returns</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-purple-600" />
                        <span>100% Authentic</span>
                    </div>
                </div>
            </div>
        )}
    </div>
    )
}

export default Cart;

