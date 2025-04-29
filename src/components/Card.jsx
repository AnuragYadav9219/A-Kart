import React, { useState, useEffect } from 'react';
import images from '../components/image';


export function Card1() {
  const imageArray = [images.appleWatch, images.smartphone, images.plane, images.voltas, images.flight];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imageArray.length]);

  return (
    <div className="w-full px-5">
      <img
        src={imageArray[currentImageIndex]}
        alt={`Scroll Image ${currentImageIndex + 1}`}
        className="w-full object-fill h-60 rounded-lg transition-transform duration-300 shadow-2xl hover:shadow-orange-200 hover:scale-95 cursor-pointer"
      />
    </div>
  );
}


export function Card2() {
  const imageArray = [images.appleWatch, images.smartphone, images.perfume, images.voltas, images.flight];
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    setScrollPosition(event.target.scrollLeft);
  };

  return (
    <div className="whitespace-nowrap my-10 border border-gray-200 shadow-md px-5 mx-3 pb-3 rounded-2xl cursor-pointer hover:shadow-orange-200">
      <h1 className='font-bold text-2xl py-3'> Best of Electronics </h1>
      <div className='overflow-x-auto scrollbar-hide rounded-2xl'>
        <div
          className="flex"
          onScroll={handleScroll}
        >
          {imageArray.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Scrollable Image ${index + 1}`}
              className="inline-block rounded-2xl border border-gray-400 object-fill hover:scale-95 transition duration-200 ease-in-out mr-4 "
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Card3() {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Featured Products</h1>
      <div className="flex space-x-4">
        <div>
          <img src={images.mobileLogo} alt="Perfume" className="w-32 h-32  rounded-lg shadow-md cursor-pointer hover:scale-105 hover:shadow-2xl shadow-orange-300" />
          <h5 className='justify-center flex'>Mobiles</h5>
        </div>
        <div>
          <img src={images.eLogo} alt="Apple Watch" className="w-32 h-32 rounded-lg shadow-md cursor-pointer hover:scale-105 hover:shadow-2xl shadow-orange-300" />
          <h5 className='justify-center flex'>Electronics</h5>
        </div>
        <div>
          <img src={images.beautyLogo} alt="Smartphone" className="w-32 h-32 rounded-lg shadow-md cursor-pointer hover:scale-105 hover:shadow-2xl shadow-orange-300" />
          <h5 className='flex justify-center'>Beauty</h5>
        </div>

      </div>
    </div>
  );
}


export function Card4() {
  return (
    <div className="flex flex-col px-12 my-8 mx-3 rounded-2xl py-4 border border-gray-200 shadow-2xl hover:shadow-orange-200 ">
      <h1 className="text-2xl flex font-bold justify-between text-slate-800 px-1 mb-4">
        Featured Products
        <span>
          <img src={images.right} alt="View all" className='w-8 h-8 hover:scale-95' />
        </span>
      </h1>

      <div className="grid grid-cols-2 items-center gap-5 rounded-2xl p-3">
        <div className="flex flex-col ">
          <img src={images.mobileLogo} alt="Mobiles" className="relative border border-gray-200 hover:scale-95 w-full h-10/12 rounded-lg cursor-pointer hover:shadow-2xl shadow-orange-300" />
          <h5 className="mt-2 px-1 md:text-2xl">
            Mobiles <br />
            <span className='font-bold'>
              Popular
            </span>
          </h5>
        </div>

        <div className="flex flex-col md:text-2xl">
          <img src={images.eLogo} alt="Electronics" className="relative border border-gray-200 hover:scale-95 w-full h-10/12 rounded-lg cursor-pointer hover:shadow-2xl shadow-orange-300" />
          <h5 className="mt-2 px-1">
            Electronics <br />
            <span className='font-bold'>
              Trending
            </span>
          </h5>
        </div>

        <div className="flex flex-col md:text-2xl">
          <img src={images.beautyLogo} alt="Beauty" className="relative border border-gray-200 hover:scale-95 w-full h-10/12 rounded-lg cursor-pointer hover:shadow-2xl shadow-orange-300" />
          <h5 className="mt-2 px-1">
            Beauty <br />
            <span className='font-bold'>
              Top Sellers
            </span>
          </h5>
        </div>

        <div className="flex flex-col md:text-2xl">
          <img src={images.beautyLogo} alt="Beauty" className="relative border border-gray-200 hover:scale-95 w-full h-10/12 rounded-lg cursor-pointer hover:shadow-2xl shadow-orange-300" />
          <h5 className="mt-2 px-1">
            Beauty <br />
            <span className='font-bold'>
              Special
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
}


export function Card5() {
  return (
    <div className='hidden md:flex flex-row gap-1 px-2 my-8 mx-3 rounded-2xl py-4 border border-gray-200 shadow-2xl hover:shadow-orange-200'>
      <Card4 />
      <Card4 />
    </div>
  );
}


export function Card6() {
  return (
    <div className='mx-3 h-auto flex flex-col md:flex-row gap-4 rounded-2xl p-4 border-2 border-gray-200 cursor-pointer hover:shadow-2xl shadow-orange-300'>
      
      {/* Left Side */}
      <div className='flex flex-col md:w-5/12 w-full gap-4 rounded-md border-2 border-gray-200 p-4 hover:shadow-2xl shadow-orange-300'>
        
        {/* Top Image */}
        <div className='w-full'>
          <img
            src={images.mobileLogo}
            alt="Mobile"
            className="border border-gray-200 hover:scale-95 transition-transform duration-300 w-full h-40 md:h-56 object-cover rounded-lg cursor-pointer hover:shadow-2xl shadow-orange-300"
          />
          <h5 className="mt-2 text-center">
            Beauty <br />
            <span className='font-bold'>Top Sellers</span>
          </h5>
        </div>

        {/* Bottom Images */}
        <div className='flex flex-col gap-4'>
          <div className='w-full'>
            <img
              src={images.beautyLogo}
              alt="Beauty"
              className="border border-gray-200 hover:scale-95 transition-transform duration-300 w-full h-40 md:h-44 object-cover rounded-lg cursor-pointer hover:shadow-2xl shadow-orange-300"
            />
            <h5 className="mt-2 text-center">
              Beauty <br />
              <span className='font-bold'>Top Sellers</span>
            </h5>
          </div>

          <div className='w-full'>
            <img
              src={images.beautyLogo}
              alt="Beauty"
              className="border border-gray-200 hover:scale-95 transition-transform duration-300 w-full h-40 md:h-44 object-cover rounded-lg cursor-pointer hover:shadow-2xl shadow-orange-300"
            />
            <h5 className="mt-2 text-center">
              Beauty <br />
              <span className='font-bold'>Top Sellers</span>
            </h5>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='md:w-7/12 w-full rounded-md overflow-hidden'>
        <img
          src={images.capS}
          alt="Beauty Cap"
          className="border border-gray-200 w-full h-64 md:h-full object-cover rounded-lg cursor-pointer hover:shadow-2xl shadow-orange-300"
        />
      </div>

    </div>
  );
}


export function Card7() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-slate-800 mb-4'>You may like</h1>
      <div className='flex flex-row gap-1 px-2 my-8 mx-3 rounded-2xl py-4 border border-gray-200 shadow-2xl hover:shadow-orange-200'>
        <Card6 />
      </div>
    </div>
  );
}