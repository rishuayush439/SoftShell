
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent w-full h-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Turn Unused Software into <span className="gradient-text">Instant Cash</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-lg">
              SoftSell helps businesses quickly sell unused software licenses at competitive rates. Fast, secure, and hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="button-gradient text-white font-medium px-8">
                <a href="#contact">Sell My Licenses</a>
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                <a href="#how-it-works">Learn How It Works</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10 fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 float-animation">
              <div className="flex justify-between items-center mb-4 border-b pb-4">
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">Adobe Creative Cloud</span>
                  <span className="text-sm text-gray-500">3 Enterprise Licenses</span>
                </div>
                <div className="bg-green-50 text-green-700 font-medium rounded-full px-3 py-1 text-sm">
                  Valuation Ready
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">License Value:</span>
                  <span className="font-medium">$1,799.97</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">SoftSell Offer:</span>
                  <span className="font-bold text-lg gradient-text">$1,259.99</span>
                </div>
              </div>
              <Button className="w-full button-gradient text-white">Accept Offer</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
