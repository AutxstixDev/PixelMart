import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Game } from '../types';
import { useCart } from '../context/CartContext';
import GameModal from './GameModal';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <div 
        className="bg-retro-light pixel-corners shadow-pixel hover:shadow-pixel-lg transition-all duration-300 cursor-pointer overflow-hidden"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={game.imageUrl} 
            alt={game.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 right-0 bg-retro-accent text-white px-2 py-1 m-2 font-pixel text-sm">
            ${game.price.toFixed(2)}
          </div>
          <div className="absolute bottom-0 left-0 bg-retro-dark text-retro-light px-2 py-1 m-2 font-pixel text-xs">
            {game.platform}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-pixel text-sm mb-2 truncate text-retro-dark">{game.title}</h3>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center mr-2">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="font-pixel text-xs ml-1">{game.rating}</span>
            </div>
            <span className="font-pixel text-xs text-retro-secondary">{game.genre}</span>
          </div>
          
          <p className="text-retro-primary text-xs mb-4 line-clamp-2 font-pixel">{game.description}</p>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              addToCart(game);
            }}
            className="w-full bg-retro-accent hover:bg-retro-dark text-white font-pixel text-xs py-2 px-4 shadow-pixel transition-all duration-300 flex items-center justify-center"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>

      <GameModal
        game={game}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default GameCard;