import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameGrid from "./components/GameGrid";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { auth } from "./firebase"; 
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<any>(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth State Changed: ", currentUser); // Debugging
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
                    <section id="games" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                      <h2 className="text-2xl font-pixel text-retro-dark mb-8">Featured Games</h2>
                      <GameGrid />
                    </section>
                  </>
                }
              />

              {/* Redirect to home if already logged in */}
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
