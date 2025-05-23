import React, { useState, useEffect } from 'react';
import images from '../components/image';
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


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
        className="w-full object-fill h-60 rounded-lg transition-transform duration-300 shadow-2xl hover:shadow-orange-200 cursor-pointer"
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
        <div className="flex" onScroll={handleScroll}>
          {imageArray.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Scrollable Image ${index + 1}`}
              className="inline-block rounded-2xl border border-gray-400 object-fill transition duration-200 ease-in-out mr-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
}


export function Card3() {
  const data = [
    { id: "1", name: "Mobiles", image: images.mobileLogo },
    { id: "2", name: "Electronics", image: images.eLogo },
    { id: "3", name: "Beauty", image: images.beautyLogo },
    { id: "4", name: "Cosmetics", image: images.cosmetics },
    { id: "5", name: "Laptop-Bags", image: images.bag },
    { id: "6", name: "Shoes", image: images.shoes },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Featured Products</h1>

      <div className="w-full flex lg:justify-center overflow-x-auto scrollbar-hide">
        <div className="flex flex-nowrap space-x-4 gap-8 px-4">
          {data.map(({ id, name, image }) => (

            <div key={id} className="flex-shrink-0">
              <NavLink
                to={`/popular/${name.toLowerCase()}`}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-32 h-32 rounded-lg shadow-md cursor-pointer hover:shadow-2xl shadow-orange-300"
                />
                <h5 className="text-center mt-2">{name}</h5>
              </NavLink>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}


// Helper to format subname into a URL-friendly string
function createSubnameParam(subname) {
  return subname.toLowerCase().replace(/\s+/g, '-');
}

export function Card4({ title, products }) {
  const imageMap = {
    Mobiles: images.mobileLogo,
    Electronics: images.eLogo,
    Cosmetics: images.cosmetics,
    Beauty: images.beautyLogo,
    "Laptop Bags": images.bag,
    "Face Wash": images.facewash,
    "Men's Slipper": images.slipper,
    "Food Products": images.food,
  };

  return (
    <div className="flex flex-col h-auto sm:h-[80%] px-4 sm:px-6 md:px-8 py-4 my-4 mx-2 sm:mx-4 rounded-xl border border-gray-200 shadow-xl hover:shadow-orange-200 transition-all">
      <h1 className="text-base sm:text-lg md:text-2xl flex font-bold justify-between items-center text-slate-800 mb-3">
        {title}
        <span>
          <img
            src={images.right}
            alt="View all"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
          />
        </span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 sm:gap-4">
        {products?.map((label, idx) => (
          <div key={idx} className="flex flex-col items-start text-xs sm:text-sm md:text-base">
            <NavLink
              to={`/popular/${label}?subname=${createSubnameParam(label)}`}
            >
              <img
                src={imageMap[label] || images.defaultLogo}
                alt={label}
                className="w-52 h-52 sm:h-28 md:h-32 rounded-lg border border-gray-200 object-cover cursor-pointer hover:shadow-xl shadow-orange-300 transition-all"
              />
              <h5 className="mt-2 leading-snug">
                {label} <br />
                <span className="font-bold">
                  {idx === 0
                    ? "Popular"
                    : idx === 1
                      ? "Trending"
                      : idx === 2
                        ? "Top Sellers"
                        : "Special"}
                </span>
              </h5>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}


export function Card5() {
  return (
    <div className="hidden lg:flex flex-row gap-4 px-2 my-8 mx-3 rounded-2xl py-4 border border-gray-200 shadow-2xl hover:shadow-orange-200 transition-all">
      <Card4 title="Featured Products" products={["Mobiles", "Electronics", "Beauty", "Cosmetics"]} />
      <Card4 title="Top Picks" products={["Face Wash", "Food Products", "Men's Slipper", "Laptop Bags"]} />
      <Card4 title="Top Trending" products={["Mobiles", "Electronics", "Beauty", "Cosmetics"]} />
    </div>
  );
}




export function Card6() {
  // Added category for filtering
  const data = [
    { id: "1", name: 'Top Rated Styles!', subname: 'Under ₹499', image: images.dress, category: 'premium fashion' },
    { id: "2", name: 'Grab or Gone!', subname: 'Under ₹99', image: images.shoe, category: 'fashion' },
    { id: "3", name: 'Skybags, Gear & More', subname: 'Min. 60% Off', image: images.bag, category: 'laptop-bags' },
    { id: "4", name: 'Titan, Tommy hilfiger & more', subname: 'Min. 50% Off', image: images.titan, category: 'electronics' },
    { id: "5", name: 'PUMA, ADIDAS & More', subname: 'Min. 65% Off', image: images.puma, category: 'shoes' },
  ];

  // helper to encode query param properly
  const createSubnameParam = (subname) => encodeURIComponent(subname.toLowerCase().replace(/\s+/g, ''));

  return (
    <div className='px-3 pt-2 border border-gray-200'>
      <h1 className='font-bold text-lg mb-5'>Trending Deals</h1>

      <div className='lg:hidden'>
        {data.map(({ id, name, subname, image, category }) => (
          <div
            key={id}
            className='flex px-3 items-center cursor-pointer border-b border-gray-300 justify-between'
          >
            <NavLink
              to={`/popular/${category}?subname=${createSubnameParam(subname)}`}
              className="flex py-4 items-center w-full"
            >
              <img src={image} alt={name} className='border h-16 w-16 object-cover' />
              <div className='mx-4 flex flex-col'>
                <span className='font-semibold'>{name}</span>
                <span className='text-sm font-semibold text-gray-500'>{subname}</span>
              </div>
              <div className='ml-auto'>
                <FaAngleRight />
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Large Screen */}
      <div className='hidden lg:flex gap-4 overflow-x-auto scrollbar-hide'>
        <div className='flex gap-4 min-w-fit'>
          {data.map(({ id, name, subname, image, category }) => (
            <NavLink
              key={id}
              to={`/popular/${category}?subname=${createSubnameParam(subname)}`}
              className='flex-shrink-0 flex flex-col text-center p-3 w-60 cursor-pointer hover:shadow-md transition overflow-hidden'
            >
              <div className='flex items-center justify-center'>
                <img src={image} alt={name} className='h-44 w-36 object-cover mb-2' />
              </div>
              <span className='font-semibold truncate w-full'>{name}</span>
              <span className='text-sm font-semibold text-gray-500 truncate w-full'>{subname}</span>
            </NavLink>
          ))}
        </div>
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


export function Card9({ title }) {
  const data = [
    { id: "1", name: 'Top Rated Styles!', subname: 'Under ₹499', image: images.dress, category: 'premium fashion' },
    { id: "2", name: 'Grab or Gone!', subname: 'Under ₹99', image: images.shoe, category: 'fashion' },
    { id: "3", name: 'Skybags, Gear & More', subname: 'Min. 60% Off', image: images.bag, category: 'laptop-bags' },
    { id: "4", name: 'Titan, Tommy hilfiger & more', subname: 'Min. 50% Off', image: images.titan, category: 'electronics' },
    { id: "5", name: 'PUMA, ADIDAS & More', subname: 'Min. 65% Off', image: images.puma, category: 'shoes' },
  ];

  const createSubnameParam = (subname) => encodeURIComponent(subname.toLowerCase().replace(/\s+/g, ''));


  return (
    <div className="flex flex-col h-auto sm:h-[80%] px-4 sm:px-6 md:px-8 py-4 my-4 mx-2 sm:mx-4 rounded-xl border border-gray-200 shadow-xl hover:shadow-orange-200 transition-all">
      <h1 className="text-base sm:text-lg md:text-2xl flex font-bold justify-between items-center text-slate-800 mb-3">
        {title}
        <span>
          <img
            src={images.right}
            alt="View all"
            className="w-8 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
          />
        </span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 max-h-[70vh] h-full">
        <div className="sm:col-span-3 flex flex-col gap-4 h-full">
          {data.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="flex-1 cursor-pointer flex border border-gray-200 p-1 rounded-md hover:shadow-md flex-col"
            >
              <NavLink
                to={`/popular/${item.category}?subname=${createSubnameParam(item.subname)}`}>
                <div className="w-full h-44 md:h-64 lg:h-44 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="font-semibold text-sm sm:text-base">{item.name}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.subname}</div>
              </NavLink>

            </div>
          ))}
        </div>

        <div className="sm:col-span-4 flex items-center cursor-pointer border border-gray-200 rounded-md px-2 py-10 lg:py-10 sm:px-4 md:px-6 h-full hover:shadow-md">
          {data.slice(2, 3).map((item) => (
            <div key={item.id} className="w-full h-full flex flex-col">
              <NavLink
                to={`/popular/${item.category}?subname=${createSubnameParam(item.subname)}`}
                className="flex flex-col items-center justify-center h-full"
              >
                <div className="flex-grow overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="mt-1 font-semibold text-sm sm:text-base">{item.name}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.subname}</div>
              </NavLink>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export function Card8() {
  return (
    <div className="hidden lg:flex w-full flex-row px-2 my-8 rounded-2xl py-4 border border-gray-200 shadow-2xl hover:shadow-orange-200 transition-all">
      <div className="w-[calc(70%+20px)] h-full">
        <Card9 title="Featured Products" />
      </div>
      <div className="relative w-full h-[560px] my-4 rounded-xl overflow-hidden">
        <img src={images.poster} alt="Product" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
