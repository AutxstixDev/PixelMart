import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-retro-light">
        <Navbar onCartClick={toggleCart} />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        <main className="flex-grow">
          <Hero />
          
          <section id="games" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-pixel text-retro-dark mb-8">Featured Games</h2>
            <GameGrid />
          </section>
          
          <section className="bg-retro-dark text-retro-light py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl font-pixel mb-4 text-retro-accent">Join Our Newsletter</h2>
              <p className="text-retro-light mb-8 max-w-2xl mx-auto font-pixel text-sm">
                Subscribe to get updates on new releases, exclusive deals, and gaming news.
              </p>
              <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-l-md text-retro-dark focus:outline-none font-pixel text-sm"
                />
                <button className="bg-retro-accent hover:bg-retro-primary px-6 py-3 rounded-r-md font-pixel text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;