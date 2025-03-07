import GameGrid from "../components/GameGrid";
import { fallbackGames } from "../data/games";

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center text-retro-dark mb-8">Shop</h2>
      <GameGrid games={fallbackGames} /> {/* ✅ Show all games */}
    </div>
  );
};

export default Shop;
