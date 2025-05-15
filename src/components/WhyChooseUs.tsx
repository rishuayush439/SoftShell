
import React from 'react';
import { Shield, Rocket, Headphones, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-level encryption and secure processes to protect your sensitive license information.",
      delay: "0.2s"
    },
    {
      icon: Rocket,
      title: "Fast Turnaround",
      description: "From valuation to payment in as little as 24 hours. No lengthy waiting periods.",
      delay: "0.4s"
    },
    {
      icon: Award,
      title: "Best Market Rates",
      description: "Our network of buyers ensures you get the highest possible value for your licenses.",
      delay: "0.6s"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Dedicated account managers to guide you through the entire selling process.",
      delay: "0.8s"
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose SoftSell</h2>
          <p className="text-lg text-gray-600">
            We specialize in making the software resale process simple, profitable, and risk-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow fade-in"
              style={{ animationDelay: benefit.delay }}
            >
              <div className="mb-4 h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
