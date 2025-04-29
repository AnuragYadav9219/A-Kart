import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Premium Slim Fit Watch",
            brand: "Noise",
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/0/8/b/-original-imah6s6p6zkhfnws.jpeg?q=70",
            price: 1799,
            discountedPrice: 899,
            quantity: 1
        },
        {
            id: 2,
            name: "Slim Fit Watch",
            brand: "Noise",
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/0/8/b/-original-imah6s6p6zkhfnws.jpeg?q=70",
            price: 2499,
            discountedPrice: 1249,
            quantity: 2
        }
    ]);


    const handleQuantityChange = (id, amount) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };


    const handleRemoveItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };


    const totalAmount = cartItems.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0);
    const totalDiscount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalPrice = cartItems.reduce(() => totalAmount + totalDiscount, 0);


    return (
        <div className='my-5 lg:mx-20 flex flex-col lg:flex-row p-6 gap-6'>
            <div className='flex-1'>
                <h1 className='font-bold text-2xl flex justify-center w-full'>Your Shopping Cart</h1>
                <p className='text-sm font-semibold mt-1 mb-8 text-center text-gray-600'>Review your items and proceed to checkout.</p>
                {cartItems.length === 0 ? (
                    <div className='h-96 flex flex-col justify-center items-center border-2 border-gray-200 rounded-md'>
                        <h2 className='text-xl font-semibold mb-2'>🛒 Your cart is empty!</h2>
                        <p className='mb-4 text-gray-400'>Looks like you haven’t added anything yet.</p>
                        <NavLink
                            to='/categories'
                            className='bg-blue-500 text-white px-4 py-2 font-semibold rounded cursor-pointer'>
                            Continue Shopping
                        </NavLink>
                    </div>
                ) : (
                    cartItems.map(item =>
                        <div key={item.id} className='flex items-center gap-5 border-b py-4 border-1 border-gray-200 px-2 rounded-md mb-2 shadow-md hover:shadow-orange-300'>
                            <img src={item.image} alt={item.name} className='w-24 h-24 object-fit rounded' />
                            <div className='flex-1'>
                                <h2 className='text-lg font-semibold'>{item.name}</h2>
                                <p className="text-sm text-gray-600">Brand: {item.brand}</p>
                                <div className='flex gap-4 items-center mt-2'>
                                    <span className='text-lg font-bold text-blue-600'>₹{item.discountedPrice}</span>
                                    <span className='text-sm line-through text-gray-400'>₹{item.price}</span>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <button
                                        onClick={() => handleQuantityChange(item.id, -1)}
                                        className="px-2 py-1 cursor-pointer bg-gray-300 rounded"
                                    >-</button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange(item.id, 1)}
                                        className="px-2 py-1 cursor-pointer bg-gray-300 rounded"
                                    >+</button>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-red-500 cursor-pointer hover:text-red-700"
                            >
                                <span className='font-bold'>X</span> Remove
                            </button>
                        </div>
                    )
                )}
            </div>

            <div className='w-full lg:w-1/3 lg:mt-10 bg-gray-100 p-6 rounded shadow-md h-fit'>
                <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
                <div className="flex justify-between mb-2">
                    <span>Price ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span className='font-semibold'>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-400">
                    <span>Total Discount</span>
                    <span className="font-semibold text-green-600">-₹{totalDiscount}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-400">
                    <span>Total Amount</span>
                    <span className="font-bold text-lg text-blue-600">₹{totalAmount}</span>
                </div>
                <div className='text-green-600 font-bold'>You will save ₹{totalDiscount} on this order.</div>
                <NavLink
                    to='/payment'
                >
                    <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 cursor-pointer rounded shadow-md hover:shadow-orange-300">
                        Proceed to Checkout
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default Cart;