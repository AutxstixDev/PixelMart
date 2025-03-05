import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Game, CartItem } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (game: Game) => void;
  removeFromCart: (gameId: number) => void;
  updateQuantity: (gameId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (game: Game) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.game.id === game.id);
      
      if (existingItem) {
        return prevItems.map((item) => 
          item.game.id === game.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      
      return [...prevItems, { game, quantity: 1 }];
    });
  };

  const removeFromCart = (gameId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.game.id !== gameId));
  };

  const updateQuantity = (gameId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(gameId);
      return;
    }
    
    setCartItems((prevItems) => 
      prevItems.map((item) => 
        item.game.id === gameId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.game.price * item.quantity, 
    0
  );

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};