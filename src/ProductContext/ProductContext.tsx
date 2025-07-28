import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product } from '../types/index';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart?: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

const KART_KEY = 'clothing_cart';
const KART_TIMESTMAP_KEY = 'cart_timestamp';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const data = localStorage.getItem(KART_KEY);
    const timestamp = localStorage.getItem(KART_TIMESTMAP_KEY);

    if (data && timestamp) {
      const hoursPassed = (Date.now() - parseInt(timestamp)) / (1000 * 60 * 60);
      if (hoursPassed < 2) {
        setCart(JSON.parse(data));
      } else {
        localStorage.removeItem(KART_KEY);
        localStorage.removeItem(KART_TIMESTMAP_KEY);
      }
    }
  }, []);

  // save to localStorage

  useEffect(() => {
    localStorage.setItem(KART_KEY, JSON.stringify(cart));
    localStorage.setItem(KART_TIMESTMAP_KEY, Date.now().toString());
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(KART_KEY);
    localStorage.removeItem(KART_TIMESTMAP_KEY);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
