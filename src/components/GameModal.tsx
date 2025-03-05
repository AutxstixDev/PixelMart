import React from 'react';
import { X, Star, ShoppingCart } from 'lucide-react';
import { Game } from '../types';
import { useCart } from '../context/CartContext';

interface GameModalProps {
  game: Game;
  isOpen: boolean;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, isOpen, onClose }) => {
  const { addToCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75" onClick={onClose} />

        <div className="relative inline-block w-full max-w-2xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-2">
            <div className="aspect-video w-full mb-4 overflow-hidden rounded-lg">
              <img
                src={game.imageUrl}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">{game.title}</h3>

            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="ml-1 text-lg font-semibold">{game.rating}</span>
              </div>
              <span className="text-gray-600">{game.genre} • {game.releaseYear}</span>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Platform</span>
                <span className="font-semibold">{game.platform}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Release Year</span>
                <span className="font-semibold">{game.releaseYear}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6">{game.description}</p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="text-2xl font-bold text-gray-900">
                ${game.price.toFixed(2)}
              </div>
              <button
                onClick={() => {
                  addToCart(game);
                  onClose();
                }}
                className="flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModal;