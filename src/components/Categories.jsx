import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import allProducts from './datasets/categoryData';
import images from '../components/image';
import { DefaultCategoryContent } from './Routers';
import { useCart } from './CartContext';

export function Categories() {
    const { addToCart } = useCart();
    const { categoryName } = useParams();
    const navigate = useNavigate();

    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const categories = [
        { name: 'Fashion', path: 'fashion', subcategories: ['Men', 'Women', 'Boys', 'Girls'] },
        { name: 'Electronics', path: 'electronics', subcategories: ['Mobiles', 'Laptops', 'Gadgets', 'Appliances', 'Accessories'] },
        { name: 'Spectacles', path: 'spectacles', subcategories: ['Men', 'Women', 'Kids'] },
        { name: 'Grocery', path: 'grocery', subcategories: ['Fruits', 'Vegetables', 'Snacks'] },
        { name: 'Beauty', path: 'beauty', subcategories: ['Makeup', 'Skin Care', 'Hair Care'] },
        { name: 'Sports', path: 'sports', subcategories: ['Cricket', 'Football', 'Fitness'] },
    ];

    useEffect(() => {
        let filteredData = allProducts;

        if (categoryName) {
            filteredData = filteredData.filter(
                (product) => product.category.toLowerCase() === categoryName.toLowerCase()
            );
        }

        if (selectedSubcategories.length > 0) {
            filteredData = filteredData.filter((product) =>
                selectedSubcategories.includes(product.subcategory)
            );
        }

        setFiltered(filteredData);
    }, [categoryName, selectedSubcategories]);

    const toggleDropdown = (category) => {
        setOpenDropdown(openDropdown === category ? null : category);
    };

    const toggleSubcategory = (subcategory) => {
        setSelectedSubcategories((prev) =>
            prev.includes(subcategory)
                ? prev.filter((s) => s !== subcategory)
                : [...prev, subcategory]
        );
    };

    const handleCategoryClick = (path) => {
        setSelectedSubcategories([]);
        navigate(`/categories/${path}`);
        toggleDropdown(path);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 p-4 shadow-md bg-white">
                {categories.map(({ name, path, subcategories }) => (
                    <div key={path} className="mb-4 border rounded">
                        <div
                            onClick={() => handleCategoryClick(path)}
                            className={`flex justify-between items-center px-3 py-2 font-semibold cursor-pointer ${
                                categoryName === path ? 'text-blue-600' : 'text-gray-800'
                            }`}
                        >
                            {name}
                            <img
                                src={openDropdown === path ? images.angleUp : images.angleDown}
                                className="h-4 w-4"
                                alt=""
                            />
                        </div>

                        {openDropdown === path && (
                            <div className="px-3 border-t py-2">
                                {subcategories.map((sub) => (
                                    <div
                                        key={sub}
                                        onClick={() => toggleSubcategory(sub)}
                                        className={`text-sm px-2 border rounded border-gray-200 py-1 cursor-pointer mb-1 ${
                                            selectedSubcategories.includes(sub)
                                                ? 'bg-blue-500 text-white'
                                                : 'hover:bg-gray-100 text-gray-700'
                                        }`}
                                    >
                                        {sub}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                <button
                    onClick={() => setSelectedSubcategories([])}
                    className="text-sm text-red-500 mt-4 border cursor-pointer border-red-400 px-3 py-1 rounded hover:bg-red-100"
                >
                    Clear Subcategory Filters
                </button>
            </div>

            {/* Product Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
                {!categoryName ? (
                    <div className="col-span-full">
                        <DefaultCategoryContent />
                    </div>
                ) : filtered.length > 0 ? (
                    filtered.map((product) => (
                        <div key={product.id} className="border rounded p-3 shadow-sm">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-60 object-cover rounded"
                            />
                            <h3 className="mt-2 text-sm font-semibold truncate">{product.name}</h3>
                            <p className="text-xs text-gray-500">{product.subcategory}</p>
                            <div className="flex items-center gap-2 mt-1 text-sm">
                                <span className="text-blue-600 font-bold">₹{product.dPrice}</span>
                                <span className="line-through text-gray-400">₹{product.price}</span>
                                <span className="text-green-600 text-xs">{product.discount}% off</span>
                            </div>
                            <div className="flex justify-between gap-5 mt-3">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="border cursor-pointer flex justify-center items-center p-2 font-semibold hover:bg-gray-200 border-gray-400 rounded w-full"
                                >
                                    Add to Cart
                                </button>
                                <NavLink
                                    to="/shippingInfo"
                                    className="border flex justify-center items-center p-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold border-gray-400 rounded w-full"
                                >
                                    Buy Now
                                </NavLink>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500 mt-10">
                        No products found for this selection.
                    </p>
                )}
            </div>
        </div>
    );
}

