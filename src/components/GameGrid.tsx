import React, { useState, useMemo } from "react";
import GameCard from "./GameCard";
import { Game } from "../types";
import { Search, Filter } from "lucide-react";
import { fallbackGames } from "../data/games";

interface GameGridProps {
  games?: Game[];
}

const GameGrid: React.FC<GameGridProps> = ({ games = fallbackGames }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Extract unique platforms and genres from games data
  const platforms = useMemo(() => {
    return Array.from(new Set(games.map((game) => game.platform?.toLowerCase())));
  }, [games]);

  const genres = useMemo(() => {
    return Array.from(new Set(games.map((game) => game.genre?.toLowerCase())));
  }, [games]);

  // ✅ Apply filtering and sorting efficiently
  const displayedGames = useMemo(() => {
    let result = [...games];

    result = result.filter((game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedPlatform === "" || game.platform?.toLowerCase().includes(selectedPlatform.toLowerCase())) &&
      (selectedGenre === "" || game.genre?.toLowerCase() === selectedGenre.toLowerCase())
    );

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((b, a) => a.price - b.price);
        break;
      case "rating":
        result.sort((b, a) => a.rating - b.rating);
        break;
      case "newest":
        result.sort((b, a) => (a.releaseYear || 0) - (b.releaseYear || 0));
        break;
    }

    return result;
  }, [games, searchTerm, selectedPlatform, selectedGenre, sortBy]);

  return (
    <div>
      {/* 🔍 Search Bar & Filtering */}
      <div className="bg-retro-dark p-4 rounded-lg mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-retro-light" />
            <input
              type="text"
              placeholder="Search games..."
              className="pl-10 pr-4 py-2 w-full rounded-md border border-retro-primary bg-retro-light focus:ring-2 focus:ring-retro-accent font-pixel text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* 🔽 Platform Filter */}
          <select
            className="px-3 py-2 rounded-md border border-retro-primary bg-retro-light text-sm font-pixel focus:ring-2 focus:ring-retro-accent"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="">All Platforms</option>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>{platform}</option>
            ))}
          </select>

          {/* 🔽 Genre Filter */}
          <select
            className="px-3 py-2 rounded-md border border-retro-primary bg-retro-light text-sm font-pixel focus:ring-2 focus:ring-retro-accent"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>

          {/* 🔽 Sorting Dropdown */}
          <select
            className="px-3 py-2 rounded-md border border-retro-primary bg-retro-light text-sm font-pixel focus:ring-2 focus:ring-retro-accent"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* ❌ No Games Found */}
      {displayedGames.length === 0 ? (
        <div className="text-center py-10">
          <Filter className="h-12 w-12 mx-auto text-retro-accent mb-4" />
          <h3 className="text-xl font-pixel text-retro-dark">No games found</h3>
          <p className="text-retro-secondary mt-2 font-pixel text-sm">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      ) : (
        // 🕹️ Display Games
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GameGrid;