import React from 'react';
import cardData from './datasets/cardData';
import electronicsData from './datasets/electronicsData';
import spectaclesData from './datasets/spectaclesData';
import groceryData from './datasets/groceryData';
import sportsData from './datasets/sportsData';
import beautyData from './datasets/beautyData';
import { FashionCard, ElectronicsCard, SpectaclesCard, GroceryCard, BeautyCard, SportsCard } from './CategoriesCard';

export function Fashion() {
    return (
        <div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {cardData.map(item => (
                    <FashionCard
                        key={item.id}
                        name={item.name}
                        dPrice={item.dPrice}
                        price={item.price}
                        discount={item.discount}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
};



export function Electronics() {
    return (
        <div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {electronicsData.map(item => (
                    <ElectronicsCard
                        key={item.id}
                        name={item.name}
                        dPrice={item.dPrice}
                        price={item.price}
                        discount={item.discount}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
};


export function Spectacles() {
    return (
        <div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {spectaclesData.map(item => (
                    <SpectaclesCard
                        key={item.id}
                        name={item.name}
                        dPrice={item.dPrice}
                        price={item.price}
                        discount={item.discount}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
};



export function Grocery() {
    return (
        <div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {groceryData.map(item => (
                    <GroceryCard
                        key={item.id}
                        name={item.name}
                        dPrice={item.dPrice}
                        price={item.price}
                        discount={item.discount}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
};



export function Beauty() {
    return (
        <div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {beautyData.map(item => (
                    <BeautyCard
                        key={item.id}
                        name={item.name}
                        dPrice={item.dPrice}
                        price={item.price}
                        discount={item.discount}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
};



export function Sports() {
    return (
        <div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {sportsData.map(item => (
                    <SportsCard
                        key={item.id}
                        name={item.name}
                        dPrice={item.dPrice}
                        price={item.price}
                        discount={item.discount}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
};