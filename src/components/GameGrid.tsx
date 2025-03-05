import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import { Game } from '../types';
import { Search, Filter } from 'lucide-react';
import { fetchRetroGames } from '../services/api';
import { fallbackGames } from '../data/games';

const GameGrid: React.FC = () => {
  const [games, setGames] = useState<Game[]>(fallbackGames);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const retroGames = await fetchRetroGames();
        setGames(retroGames.length > 0 ? retroGames : fallbackGames);
      } catch (error) {
        console.error('Error loading games:', error);
        setGames(fallbackGames);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  // Get unique platforms and genres
  const platforms = Array.from(new Set(games.map(game => game.platform.split(', ')).flat()));
  const genres = Array.from(new Set(games.map(game => game.genre)));

  // Filter and sort games
  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = selectedPlatform === '' || game.platform.includes(selectedPlatform);
    const matchesGenre = selectedGenre === '' || game.genre === selectedGenre;
    
    return matchesSearch && matchesPlatform && matchesGenre;
  });

  const sortedGames = [...filteredGames].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.releaseYear - a.releaseYear;
      default:
        return 0;
    }
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="font-pixel text-retro-accent animate-pulse">Loading games...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-retro-dark p-4 rounded-lg mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-retro-light" />
            </div>
            <input
              type="text"
              placeholder="Search games..."
              className="pl-10 pr-4 py-2 w-full rounded-md border border-retro-primary bg-retro-light focus:outline-none focus:ring-2 focus:ring-retro-accent font-pixel text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <select
              className="px-4 py-2 rounded-md border border-retro-primary bg-retro-light focus:outline-none focus:ring-2 focus:ring-retro-accent font-pixel text-sm"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              <option value="">All Platforms</option>
              {platforms.map((platform) => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
            
            <select
              className="px-4 py-2 rounded-md border border-retro-primary bg-retro-light focus:outline-none focus:ring-2 focus:ring-retro-accent font-pixel text-sm"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
            
            <select
              className="px-4 py-2 rounded-md border border-retro-primary bg-retro-light focus:outline-none focus:ring-2 focus:ring-retro-accent font-pixel text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>
      
      {sortedGames.length === 0 ? (
        <div className="text-center py-10">
          <Filter className="h-12 w-12 mx-auto text-retro-accent mb-4" />
          <h3 className="text-xl font-pixel text-retro-dark">No games found</h3>
          <p className="text-retro-secondary mt-2 font-pixel text-sm">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GameGrid;