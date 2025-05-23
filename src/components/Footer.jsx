import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">A-Kart</h3>
          <p className="text-sm text-gray-400">
            Your trusted online marketplace for everything from daily needs to tech essentials. Shop smart, live better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/services" className="hover:underline">Services</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About Us</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/shippingInfo" className="hover:underline">Shipping Info</NavLink></li>
            <li><NavLink to="/faq" className="hover:underline">FAQs</NavLink></li>
            <li><NavLink to="/return" className="hover:underline">Returns</NavLink></li>
            <li><NavLink to="/privacyPolicy" className="hover:underline">Privacy Policy</NavLink></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-2">Get exclusive offers and updates right in your inbox.</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded text-white border-1 text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 rounded text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} A-Kart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
