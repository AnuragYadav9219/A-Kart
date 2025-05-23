import React, { useState } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import CategoryView from "./CategoryView";
import { useCart } from "./CartContext";
import images from './image';



function useQuery() {
    return new URLSearchParams(useLocation().search);
}



export function Popular() {
    const categories = [
        { id: "mobiles", title: "Mobiles" },
        { id: "electronics", title: "Electronics" },
        { id: "beauty", title: "Beauty" },
        { id: "cosmetics", title: "Cosmetics" },
        { id: "laptop-bags", title: "Laptop Bags" },
    ];


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Sidebar */}
            <div className={`p-4 lg:w-1/5 w-full lg:fixed lg:h-screen z-10 ${isMenuOpen ? "block" : "hidden"} lg:block`}>
                {categories.map(({ id, title }) => (
                    <NavLink
                        to={`/popular/${id}`}
                        key={id}
                        className={({ isActive }) =>
                            `block mb-2 p-2 rounded shadow cursor-pointer border border-gray-500 
                             ${isActive ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'}`
                        }
                    >
                        {title}
                    </NavLink>

                ))}
            </div>

            {/* Toggle for mobile */}
            <div className="lg:hidden border-b-2 flex justify-between items-center p-4">
                <h2 className="text-black text-lg font-semibold">Categories</h2>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black font-bold">
                    {isMenuOpen ? "Close" : "Menu"}
                </button>
            </div>

            {/* Main content */}
            <div className="flex-1 lg:ml-[20%] p-4">
                <Routes>
                    <Route path=":categoryId" element={<CategoryView />} />
                </Routes>
            </div>
        </div>
    );
}







// CategoryCard Component
const CategoryCard = ({
    category,
    id,
    name,
    image,
    dPrice,
    price,
    discount,
    showSize = false
}) => {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);

    const handleAddToCart = () => {
        if (showSize && !selectedSize) {
            alert("Please select a size before adding to cart.");
            return;
        }

        const product = {
            id,
            name,
            image,
            dPrice,
            price,
            discount,
            ...(showSize && { size: selectedSize })
        };

        addToCart(product);
    };

    return (
        <div className="flex flex-col border-2 border-gray-400 w-full max-w-xs justify-center p-4 rounded-lg shadow-lg hover:shadow-orange-200 transition duration-300 ease-in-out">
            <div>
                <img
                    src={image}
                    alt={category}
                    className="hover:scale-105 h-64 w-full object-cover rounded-lg"
                />

                <div className="my-2">
                    <p className="text-sm text-start line-clamp-2">{name}</p>

                    <div className="flex justify-start items-center mt-2">
                        <span className="font-bold flex text-xl items-center">
                            <img src={images.rupee} alt="rupee" className="h-5 mr-1" />
                            <span>{dPrice}</span>
                        </span>

                        <span className="ml-4 text-gray-400 line-through flex items-center">
                            <img src={images.rupee1} alt="rupee" className="h-4 mr-1" />
                            <span>{price}</span>
                        </span>
                    </div>

                    <div className="text-start font-bold text-sm text-green-600 mt-2">
                        <span>{discount}%</span>
                        <span className="ml-1">off</span>
                    </div>

                    {/* Size Selection - Only in FashionCard */}
                    {showSize && (
                        <div className="w-full mt-4 flex flex-wrap justify-start gap-2">
                            <span className="text-gray-400 font-bold">Size:</span>
                            {["S", "M", "L", "XL", "XXL"].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-2 py-1 border rounded text-sm ${selectedSize === size
                                        ? "bg-black text-white border-black"
                                        : "border-gray-400 text-gray-700"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="text-white flex mt-3 gap-4 font-bold">
                        <button
                            onClick={handleAddToCart}
                            className="overflow-hidden text-ellipsis whitespace-nowrap text-sm border-2 text-black rounded-lg h-10 border-gray-400 w-full cursor-pointer"
                        >
                            Add to cart
                        </button>
                        <button className="bg-blue-600 hover:scale-105 border-2 rounded-lg h-10 border-gray-400 w-full cursor-pointer">
                            <NavLink
                                to={"/shippingInfo"}
                            >
                                Buy Now
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export const ProductCard = (props) => (
    <CategoryCard {...props} category={props.category} />
);

export default CategoryCard;
export { CategoryCard };
