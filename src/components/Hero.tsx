import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-retro-dark text-retro-light">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" 
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="font-pixel text-2xl md:text-3xl tracking-tight mb-6 text-retro-accent">
            Level Up Your
            <br />Gaming Collection
          </h1>
          <p className="font-pixel text-sm md:text-base mb-8 text-retro-light">
            Discover retro and modern games
            <br />at unbeatable prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#games" 
              className="bg-retro-accent hover:bg-retro-primary text-white font-pixel text-sm py-3 px-6 shadow-pixel transition-all duration-300 inline-flex items-center justify-center"
            >
              Shop Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <Link 
              to="/deals" 
              className="bg-retro-primary hover:bg-retro-secondary text-white font-pixel text-sm py-3 px-6 shadow-pixel transition-all duration-300 inline-flex items-center justify-center"
            >
              View Deals
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
