import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigate("/"); // Redirect to Home
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Google Login Successful!");
      navigate("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white">
      <h2 className="text-3xl font-bold mb-6 text-red-500">Login</h2>
      <form onSubmit={handleLogin} className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
        />
        <button type="submit" className="w-full p-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition">
          Login
        </button>
      </form>
      <button onClick={handleGoogleLogin} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
