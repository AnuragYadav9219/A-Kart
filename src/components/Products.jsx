import React from 'react';
import { useState } from 'react';
import { Tabs, Tab } from "@mui/material";
import product from '../components/datasets/product';


const Products = () => {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [tabIndex, setTabIndex] = useState(0);


    return (
        <div className='flex flex-col justify-center lg:px-30 gap-16 p-6'>

            <div className='flex flex-col md:flex-row gap-6 items-center justify-between w-full'>
                <div className='w-full md:w-1/2 lg:w-1/3'>
                    <img src={product.mainImage}
                        alt={product.name}
                        className='w-full h-auto rounded-lg shadow-md'
                    />
                    <div className="flex gap-2 mt-4">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index}`}
                                className="w-16 h-16 object-cover rounded-md border cursor-pointer"
                            />
                        ))}
                    </div>
                </div>

                <div className='w-full md:w-1/2 flex flex-col gap-4'>
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        <h1 className='font-bold text-2xl'>{product.name}</h1>
                        <p className='text-gray-500 text-sm'>{product.brand}</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <span className="text-yellow-400 text-lg">★★★★☆</span>
                        <span className='text-gray-600 text-sm'>{product.reviewsCount}</span>
                    </div>

                    <div className="flex items-center gap-2 text-2xl font-semibold">
                        ₹{product.discountedPrice}
                        <span className="text-gray-400 line-through text-lg">₹{product.originalPrice}</span>
                        <span className="text-green-600 text-sm">({product.discount}% OFF)</span>
                    </div>

                    <p className='text-gray-700'>{product.shortDescription}</p>

                    <div>
                        <label className='font-semibold'>Size:</label>
                        <div className="flex gap-2 mt-2">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    className={`border rounded cursor-pointer px-3 py-1 ${selectedSize === size ? 'bg-blue-500 text-white' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="font-semibold">Color:</label>
                        <div className="flex gap-2 mt-2">
                            {product.colors.map(color => (
                                <div
                                    key={color}
                                    className={`w-8 h-8 rounded-full cursor-pointer border-2 ${selectedColor === color ? 'border-blue-500 shadow-md shadow-blue-400' : 'border-gray-300'}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-0.5 mt-4">
                        <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className='border-2 border-gray-300 rounded-l-sm cursor-pointer'>➖</button>
                        <span className='border-2 border-gray-300 px-5'>{quantity}</span>
                        <button onClick={() => setQuantity(q => q + 1)} className='border-2 border-gray-300 rounded-r-sm cursor-pointer'>➕</button>
                    </div>

                    {/* Sticky Bottom Bar for sm and md */}
                    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-y-1 mb-1 flex justify-around z-50">
                        <button className="text-black font-bold py-3 px-6 w-1/2 cursor-pointer hover:bg-gray-200">
                            Add to Cart
                        </button>
                        <button className="bg-blue-600 text-white font-bold py-2 px-6 w-1/2 cursor-pointer hover:bg-blue-700">
                            Buy Now
                        </button>
                    </div>

                    {/* Normal Buttons for lg and above */}
                    <div className="hidden md:flex gap-4 mt-6">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                            Add to Cart
                        </button>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg">
                            Buy Now
                        </button>
                    </div>

                    <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                        <h2 className="font-semibold mb-2">Available Offers:</h2>
                        {product.offers.map((offer, index) => (
                            <p key={index} className="text-sm">🎁 {offer}</p>
                        ))}
                    </div>
                </div>
            </div>


            <div className="mt-12">
                <Tabs value={tabIndex} onChange={(e, val) => setTabIndex(val)} centered>
                    <Tab label="Description" />
                    <Tab label="Reviews" />
                    <Tab label="Related Products" />
                </Tabs>

                <div className="mt-8">
                    {tabIndex === 0 && (
                        <div className="text-gray-700 leading-relaxed">
                            <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
                            <p>{product.longDescription}</p>
                        </div>
                    )}

                    {tabIndex === 1 && (
                        <div className="text-gray-700">
                            <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
                            {product.reviews.map((review, i) => (
                                <div key={i} className="border-b py-4">
                                    <p className="font-semibold">{review.user}</p>
                                    <p className="text-yellow-400">★★★★☆</p>
                                    <p>{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {tabIndex === 2 && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {product.relatedProducts.map((prod, i) => (
                                    <div key={i} className="border cursor-pointer h-72 p-4 rounded-lg text-center hover:shadow-lg shadow-orange-300 transition-shadow duration-300">
                                        <img src={prod.image} alt={prod.name} className="w-full h-48 object-fit rounded hover:scale-105" />
                                        <h3 className="font-semibold mt-2">{prod.name}</h3>
                                        <p className="text-green-600">₹{prod.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products