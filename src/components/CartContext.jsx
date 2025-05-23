import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            if (!product) return prevCart; 
            return [...prevCart, { ...product, quantity: 1, id: uuidv4() }];
        });
    };


    const removeFromCart = (id) => {
        setCart((prevCart) => {
            return prevCart.filter(item => item.id !== id);
        });
    };
    
    const updateQuantity = (id, qty) => {
        setCart(prevCart => {
            return prevCart.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + qty) }
                    : item
            );
        });
    };

    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
