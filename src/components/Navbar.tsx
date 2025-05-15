
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-2">
                <span className="font-bold text-white">S</span>
              </div>
              <span className="font-bold text-xl">SoftSell</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#how-it-works" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">How It Works</a>
            <a href="#why-choose-us" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">Why Choose Us</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">Testimonials</a>
            <Button asChild className="ml-4">
              <a href="#contact">Get Started</a>
            </Button>
          </div>
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#why-choose-us" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-base font-medium text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
