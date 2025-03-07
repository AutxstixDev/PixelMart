import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameGrid from "./components/GameGrid";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Shop from "./components/Shop";
import Deals from "./components/Deals";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { fallbackGames } from "./data/games";

// ✅ Filter only games with IDs 1, 3, 5, and 7 for the home page
const featuredGames = fallbackGames.filter((game) => [1, 3, 5, 7].includes(game.id));

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth State Changed: ", currentUser);
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-retro-light">
          <Navbar onCartClick={toggleCart} user={user} />
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <section id="games" className="max-w-7xl mx-auto px-4 py-12">
                      <h2 className="text-2xl font-pixel text-retro-dark mb-8">Featured Games</h2>
                      <GameGrid games={featuredGames} /> {/* ✅ Only selected games */}
                    </section>
                  </>
                }
              />
              <Route path="/shop" element={<Shop />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
              <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
