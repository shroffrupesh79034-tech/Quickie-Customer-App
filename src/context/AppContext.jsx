import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('quickie_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [location, setLocation] = useState("Bagaha, Bihar, India");

  useEffect(() => {
    localStorage.setItem('quickie_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return newQty === 0 ? null : { ...item, quantity: newQty };
      }
      return item;
    }).filter(Boolean));
  };

  const clearCart = () => setCart([]);

  return (
    <AppContext.Provider value={{ cart, location, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
