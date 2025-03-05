import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Gamepad2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-retro-dark text-retro-light shadow-pixel sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Gamepad2 className="h-8 w-8 text-retro-accent mr-2" />
            <span className="font-pixel text-lg text-retro-accent">PixelMart</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-pixel text-sm hover:text-retro-accent transition-colors">Home</a>
            <a href="#" className="font-pixel text-sm hover:text-retro-accent transition-colors">Shop</a>
            <a href="#" className="font-pixel text-sm hover:text-retro-accent transition-colors">New</a>
            <a href="#" className="font-pixel text-sm hover:text-retro-accent transition-colors">Deals</a>
            <button 
              onClick={onCartClick}
              className="relative p-2 rounded-md hover:bg-retro-primary transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-retro-accent text-white text-xs font-pixel rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={onCartClick}
              className="relative p-2 mr-2 rounded-md hover:bg-retro-primary transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-retro-accent text-white text-xs font-pixel rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-retro-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-retro-primary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="font-pixel text-sm block px-3 py-2 rounded-md hover:bg-retro-dark transition-colors">Home</a>
            <a href="#" className="font-pixel text-sm block px-3 py-2 rounded-md hover:bg-retro-dark transition-colors">Shop</a>
            <a href="#" className="font-pixel text-sm block px-3 py-2 rounded-md hover:bg-retro-dark transition-colors">New</a>
            <a href="#" className="font-pixel text-sm block px-3 py-2 rounded-md hover:bg-retro-dark transition-colors">Deals</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;