import React from "react";
import images from "./image";


export function FashionCard(props) {
    return (
        <div className='flex flex-col border-2 border-gray-400 w-full max-w-xs justify-center p-4 rounded-lg shadow-lg hover:shadow-orange-200 transition duration-300 ease-in-out'>
            <div>
                <img src={props.image} alt="Shirt" className='hover:scale-105 h-64 w-full object-fit rounded-lg' />

                <div className='my-2'>
                    <p className='text-sm text-start'>
                        {props.name}
                    </p>
                    <div className='flex justify-start items-center mt-2'>

                        <span className='font-bold flex text-xl items-center'>
                            <img src={images.rupee} alt="rupee" className='h-5 mr-1' />
                            <span>{props.dPrice}</span>
                        </span>

                        <span className='ml-4 text-gray-400 line-through flex items-center'>
                            <img src={images.rupee1} alt="rupee" className='h-4 mr-1' />
                            <span>{props.price}</span>
                        </span>
                    </div>

                    <div className='text-start font-bold text-sm text-green-600 mt-2'>
                        <span>{props.discount}%</span>
                        <span className='ml-1'>off</span>
                    </div>

                    <div className='w-full mt-4 flex flex-wrap justify-start gap-2'>
                        <span className='text-gray-400 font-bold'>Size:</span>
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <span
                                key={size}
                                className='px-2 py-1 border border-gray-400 text-gray-700 rounded text-sm'
                            >
                                {size}
                            </span>
                        ))}
                    </div>
                    <div className='text-white flex mt-3 gap-4 font-bold '>
                        <button className=' hover:scale-105 border-2 text-black rounded-lg h-10 border-gray-400 w-full cursor-pointer'>
                            Add to cart
                        </button>
                        <button className='bg-blue-600 hover:scale-105 border-2 rounded-lg h-10 border-gray-400 w-full cursor-pointer'>
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}



export function ElectronicsCard(props) {
    return (
        <div className='flex flex-col border-2 border-gray-400 w-full max-w-xs justify-center p-4 rounded-lg shadow-lg hover:shadow-orange-200 transition duration-300 ease-in-out'>
            <div>
                <img src={props.image} alt="electronics" className='hover:scale-105 h-64 w-full object-fit rounded-lg' />

                <div className='my-2'>
                    <p className='text-sm text-start'>
                        {props.name}
                    </p>
                    <div className='flex justify-start items-center mt-2'>

                        <span className='font-bold flex text-xl items-center'>
                            <img src={images.rupee} alt="rupee" className='h-5 mr-1' />
                            <span>{props.dPrice}</span>
                        </span>

                        <span className='ml-4 text-gray-400 line-through flex items-center'>
                            <img src={images.rupee1} alt="rupee" className='h-4 mr-1' />
                            <span>{props.price}</span>
                        </span>
                    </div>

                    <div className='text-start font-bold text-sm text-green-600 mt-2'>
                        <span>{props.discount}%</span>
                        <span className='ml-1'>off</span>
                    </div>
             
                    <div className='text-white flex mt-3 gap-4 font-bold '>
                        <button className=' hover:scale-105 border-2 text-black rounded-lg h-10 border-gray-400 w-full cursor-pointer'>
                            Add to cart
                        </button>
                        <button className='bg-blue-600 hover:scale-105 border-2 rounded-lg h-10 border-gray-400 w-full cursor-pointer'>
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}



export function SpectaclesCard(props) {
    return (
        <div className='flex flex-col border-2 border-gray-400 w-full max-w-xs justify-center p-4 rounded-lg shadow-lg hover:shadow-orange-200 transition duration-300 ease-in-out'>
            <div>
                <img src={props.image} alt="spectacles" className='hover:scale-105 h-64 w-full object-fit rounded-lg' />

                <div className='my-2'>
                    <p className='text-sm text-start'>
                        {props.name}
                    </p>
                    <div className='flex justify-start items-center mt-2'>

                        <span className='font-bold flex text-xl items-center'>
                            <img src={images.rupee} alt="rupee" className='h-5 mr-1' />
                            <span>{props.dPrice}</span>
                        </span>

                        <span className='ml-4 text-gray-400 line-through flex items-center'>
                            <img src={images.rupee1} alt="rupee" className='h-4 mr-1' />
                            <span>{props.price}</span>
                        </span>
                    </div>

                    <div className='text-start font-bold text-sm text-green-600 mt-2'>
                        <span>{props.discount}%</span>
                        <span className='ml-1'>off</span>
                    </div>

                    <div className='text-white flex mt-3 gap-4 font-bold '>
                        <button className=' hover:scale-105 border-2 text-black rounded-lg h-10 border-gray-400 w-full cursor-pointer'>
                            Add to cart
                        </button>
                        <button className='bg-blue-600 hover:scale-105 border-2 rounded-lg h-10 border-gray-400 w-full cursor-pointer'>
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}


export function GroceryCard(props) {
    return (
        <div className='flex flex-col border-2 border-gray-400 w-full max-w-xs justify-center p-4 rounded-lg shadow-lg hover:shadow-orange-200 transition duration-300 ease-in-out'>
            <div>
                <img src={props.image} alt="grocery" className='hover:scale-105 h-64 w-full object-fit rounded-lg' />

                <div className='my-2'>
                    <p className='text-sm text-start'>
                        {props.name}
                    </p>
                    <div className='flex justify-start items-center mt-2'>

                        <span className='font-bold flex text-xl items-center'>
                            <img src={images.rupee} alt="rupee" className='h-5 mr-1' />
                            <span>{props.dPrice}</span>
                        </span>

                        <span className='ml-4 text-gray-400 line-through flex items-center'>
                            <img src={images.rupee1} alt="rupee" className='h-4 mr-1' />
                            <span>{props.price}</span>
                        </span>
                    </div>

                    <div className='text-start font-bold text-sm text-green-600 mt-2'>
                        <span>{props.discount}%</span>
                        <span className='ml-1'>off</span>
                    </div>

                    <div className='text-white flex mt-3 gap-4 font-bold '>
                        <button className=' hover:scale-105 border-2 text-black rounded-lg h-10 border-gray-400 w-full cursor-pointer'>
                            Add to cart
                        </button>
                        <button className='bg-blue-600 hover:scale-105 border-2 rounded-lg h-10 border-gray-400 w-full cursor-pointer'>
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}



export function BeautyCard(props) {
    return (
        <div className='flex flex-col border-2 border-gray-400 w-full max-w-xs justify-center p-4 rounded-lg shadow-lg hover:shadow-orange-200 transition duration-300 ease-in-out'>
            <div>
                <img src={props.image} alt="beauty" className='hover:scale-105 h-64 w-full object-fit rounded-lg' />

                <div className='my-2'>
                    <p className='text-sm text-start'>
                        {props.name}
                    </p>
                    <div className='flex justify-start items-center mt-2'>

                        <span className='font-bold flex text-xl items-center'>
                            <img src={images.rupee} alt="rupee" className='h-5 mr-1' />
                            <span>{props.dPrice}</span>
                        </span>

                        <span className='ml-4 text-gray-400 line-through flex items-center'>
                            <img src={images.rupee1} alt="rupee" className='h-4 mr-1' />
                            <span>{props.price}</span>
                        </span>
                    </div>

                    <div className='text-start font-bold text-sm text-green-600 mt-2'>
                        <span>{props.discount}%</span>
                        <span className='ml-1'>off</span>
                    </div>

                    <div className='text-white flex mt-3 gap-4 font-bold '>
                        <button className=' hover:scale-105 border-2 text-black rounded-lg h-10 border-gray-400 w-full cursor-pointer'>
                            Add to cart
                        </button>
                        <button className='bg-blue-600 hover:scale-105 border-2 rounded-lg h-10 border-gray-400 w-full cursor-pointer'>
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}



export function SportsCard(props) {
    return (
        <div className='flex flex-col border-2 border-gray-400 w-full max-w-xs justify-center p-4 rounded-lg shadow-lg hover:shadow-orange-200 transition duration-300 ease-in-out'>
            <div>
                <img src={props.image} alt="sports" className='hover:scale-105 h-64 w-full object-fit rounded-lg' />

                <div className='my-2'>
                    <p className='text-sm text-start'>
                        {props.name}
                    </p>
                    <div className='flex justify-start items-center mt-2'>

                        <span className='font-bold flex text-xl items-center'>
                            <img src={images.rupee} alt="rupee" className='h-5 mr-1' />
                            <span>{props.dPrice}</span>
                        </span>

                        <span className='ml-4 text-gray-400 line-through flex items-center'>
                            <img src={images.rupee1} alt="rupee" className='h-4 mr-1' />
                            <span>{props.price}</span>
                        </span>
                    </div>

                    <div className='text-start font-bold text-sm text-green-600 mt-2'>
                        <span>{props.discount}%</span>
                        <span className='ml-1'>off</span>
                    </div>

                    <div className='text-white flex mt-3 gap-4 font-bold '>
                        <button className=' hover:scale-105 border-2 text-black rounded-lg h-10 border-gray-400 w-full cursor-pointer'>
                            Add to cart
                        </button>
                        <button className='bg-blue-600 hover:scale-105 border-2 rounded-lg h-10 border-gray-400 w-full cursor-pointer'>
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}