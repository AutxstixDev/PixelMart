import GameGrid from "../components/GameGrid";
import { fallbackGames } from "../data/games";

const Deals = () => {
  // Apply discounts dynamically if not explicitly set
  const discountedGames = fallbackGames
    .map((game) => ({
      ...game,
      discountedPrice: game.discountedPrice ?? parseFloat((game.price * 0.8).toFixed(2)), // 20% discount fallback
    }))
    .sort((a, b) => (a.price - a.discountedPrice) - (b.price - b.discountedPrice)) // Sort by highest discount
    .slice(0, 10); // Show only 10 best deals

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center text-retro-dark mb-8">Deals</h2>
      <GameGrid games={discountedGames} />
    </div>
  );
};

export default Deals;
