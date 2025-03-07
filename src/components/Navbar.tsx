import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Gamepad2, LogOut } from "lucide-react";
import { useCart } from "../context/CartContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

interface NavbarProps {
  onCartClick: () => void;
  user: any; // User state passed from App.tsx
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, user }) => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out!"); // Debugging
    } catch (error: any) {
      console.error("Logout Error: ", error.message);
    }
  };

  return (
    <nav className="bg-retro-dark text-retro-light shadow-pixel sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Gamepad2 className="h-8 w-8 text-retro-accent mr-2" />
            <Link to="/" className="font-pixel text-lg text-retro-accent">
              PixelMart
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-pixel text-sm hover:text-retro-accent transition-colors">
              Home
            </Link>
            <Link to="/shop" className="font-pixel text-sm hover:text-retro-accent transition-colors">
              Shop
            </Link>
            <Link to="/new" className="font-pixel text-sm hover:text-retro-accent transition-colors">
              New
            </Link>
            <Link to="/deals" className="font-pixel text-sm hover:text-retro-accent transition-colors">
              Deals
            </Link>

            {/* Show Login/Signup if no user, otherwise show Logout */}
            {!user ? (
              <>
                <Link to="/login" className="font-pixel text-sm hover:text-retro-accent">
                  Login
                </Link>
                <Link to="/signup" className="font-pixel text-sm hover:text-retro-accent">
                  Signup
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="font-pixel text-sm text-red-400 hover:text-red-600 flex items-center"
              >
                Logout <LogOut className="ml-2 h-5 w-5" />
              </button>
            )}

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
            <button onClick={onCartClick} className="relative p-2 mr-2 rounded-md hover:bg-retro-primary transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-retro-accent text-white text-xs font-pixel rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-retro-primary transition-colors">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-retro-primary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="font-pixel text-sm block px-3 py-2 rounded-md hover:bg-retro-dark transition-colors">
              Home
            </Link>
            <Link to="/shop" className="font-pixel text-sm block px-3 py-2 rounded-md hover:bg-retro-dark transition-colors">
              Shop
            </Link>
            <Link to="/new" className="font-pixel text-sm block px-3 py-2 rounded-md hover:bg-retro-dark transition-colors">
              New
            </Link>
            <Link to="/deals" className="font-pixel text-sm block px-3 py-2 rounded-md hover:bg-retro-dark transition-colors">
              Deals
            </Link>

            {!user ? (
              <>
                <Link to="/login" className="font-pixel text-sm block px-3 py-2 hover:bg-retro-dark transition-colors">
                  Login
                </Link>
                <Link to="/signup" className="font-pixel text-sm block px-3 py-2 hover:bg-retro-dark transition-colors">
                  Signup
                </Link>
              </>
            ) : (
              <button onClick={handleLogout} className="font-pixel text-sm text-red-400 hover:text-red-600 flex items-center">
                Logout <LogOut className="ml-2 h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
