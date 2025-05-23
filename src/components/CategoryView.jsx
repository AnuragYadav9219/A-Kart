// import React from 'react';
// import { useParams, useLocation } from "react-router-dom";
// import { useState } from 'react';
// import productData from "./datasets/productData";
// import { ProductCard } from './Popular';


// const CategoryView = () => {
//     const { categoryId } = useParams();
//     const [visibleCount, setVisibleCount] = useState(8);
//     const [loading, setLoading] = useState(false);

//     const filtered = productData.filter(item =>
//         item.category?.toLowerCase().includes(categoryId.toLowerCase())
//     );

//     const handleLoadMore = () => {
//         setLoading(true);
//         setTimeout(() => {
//             setVisibleCount(prev => prev + 4);
//             setLoading(false);
//         }, 2000);
//     };


//     return (
//         <>
//             <h2 className="text-2xl font-bold capitalize mb-4">{categoryId}</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {filtered.slice(0, visibleCount).map(item => (
//                     <ProductCard key={item.id} {...item} />
//                 ))}
//             </div>
//             {visibleCount < filtered.length && (
//                 <div className="text-center mt-6">
//                     {loading ? (
//                         <div className="flex justify-center items-center space-x-2">
//                             <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
//                             </svg>
//                             <span>Loading...</span>
//                         </div>
//                     ) : (
//                         <button
//                             onClick={handleLoadMore}
//                             className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
//                         >
//                             Load More
//                         </button>
//                     )}
//                 </div>
//             )}
//         </>
//     );
// };


// export default CategoryView;















import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import productData from './datasets/productData';
import { ProductCard } from './Popular';

const CategoryView = () => {
  const { categoryId } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const subname = queryParams.get('subname') || '';

  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(false);

  // filter function based on subname string
  const filterBySubname = (item) => {
    if (!subname) return true;

    const s = subname.toLowerCase();

    // Match "under <price>"
    const underMatch = s.match(/under\s*₹?(\d+)/);
    if (underMatch) {
      const priceLimit = parseInt(underMatch[1], 10);
      return item.dPrice <= priceLimit;
    }

    // Match "min <percent>% off"
    const minOffMatch = s.match(/min\.?\s*(\d+)%\s*off/);
    if (minOffMatch) {
      const discountLimit = parseInt(minOffMatch[1], 10);
      return item.discount >= discountLimit;
    }

    return true;
  };

  const filtered = productData.filter(item => {
    const categoryMatch = categoryId
      ? item.category?.toLowerCase().includes(categoryId.toLowerCase())
      : true;

    const subnameMatch = filterBySubname(item);

    return categoryMatch && subnameMatch;
  });

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      {(categoryId || subname) && (
        <h2 className="text-2xl font-bold capitalize mb-4">
          {categoryId && `Category: ${categoryId}`}
          {subname && ` ${categoryId ? ' | ' : ''}Offer: ${subname}`}
        </h2>
      )}
      {filtered.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.slice(0, visibleCount).map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      )}
      {visibleCount < filtered.length && (
        <div className="text-center mt-6">
          {loading ? (
            <div className="flex justify-center items-center space-x-2">
              <svg
                className="animate-spin h-5 w-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              <span>Loading...</span>
            </div>
          ) : (
            <button
              onClick={handleLoadMore}
              className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default CategoryView;
