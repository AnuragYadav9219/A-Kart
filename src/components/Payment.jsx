import React from 'react';
import { useState } from 'react';

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiry: '',
        cvv: '',
        name: '',
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Payment submitted', formData, paymentMethod);
        alert('Payment Successful!');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>

                {/* Select Payment Method */}
                <div className="mb-6">
                    <label className="block mb-2 text-gray-600 font-semibold">Choose Payment Method:</label>
                    <select
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="card">Credit/Debit Card</option>
                        <option value="upi">UPI</option>
                        <option value="cod">Cash on Delivery</option>
                    </select>
                </div>

                <form
                    action="#"
                    className='space-y-4'
                    
                >
                    {paymentMethod === 'card' && (
                        <>
                            <input
                                type="text"
                                inputmode="numeric"
                                pattern="[0-9]*"
                                maxlength="16"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                placeholder="Card Number"
                                className="w-full p-3 border rounded-lg "
                            />
                            <div className='flex gap-4'>
                                <input
                                    type="text"
                                    value={formData.expiry}
                                    inputmode="numeric"
                                    onChange={handleChange}
                                    placeholder="MM/YY"
                                    className="w-1/2 p-3 border rounded-lg"
                                />

                                <input
                                    type="text"
                                    inputmode="numeric"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    placeholder="CVV"
                                    pattern="[0-9]*"
                                    maxlength="3"
                                    className="w-1/2 p-3 border rounded-lg "
                                />
                            </div>

                            <input
                                type="text"
                                inputmode="numeric"
                                pattern="[0-9]*"
                                maxlength="16"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Card Holder Name"
                                className="w-full p-3 border rounded-lg "
                            />
                        </>
                    )}

                    {paymentMethod === 'upi' && (
                        <>
                            <input
                                type="text"
                                name='upiId'
                                onChange={handleChange}
                                placeholder='Enter UPI ID (example@upi)'
                                className='w-full p-3 border rounded-lg'
                                required
                            />
                        </>
                    )}

                    {paymentMethod === 'cod' && (
                        <p className='text-gray-700 text-center'>You will pay with cash when the order is delivered.</p>
                    )}

                    <button
                        onClick={handleSubmit}
                        type='submit'
                        className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 cursor-pointer'
                    >
                        Pay Now
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Payment;