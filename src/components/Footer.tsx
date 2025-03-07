import React from 'react';
import { Gamepad2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Gamepad2 className="h-8 w-8 text-indigo-500 mr-2" />
              <span className="font-bold text-xl">PixelMart</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for all gaming needs. Find the latest titles, pre-order upcoming releases, and discover great deals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Releases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pre-orders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Deals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                <span className="text-gray-400">123 Gaming Street, Digital City, GA 30303</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-500 mr-2" />
                <span className="text-gray-400">+91 28374 29019</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-500 mr-2" />
                <span className="text-gray-400">support@pixelmart.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} PixelMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;