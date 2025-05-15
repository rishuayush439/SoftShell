
import React from 'react';
import { Upload, BarChart, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Licenses",
      description: "Simply upload your software license details through our secure portal. We support all major software vendors.",
      delay: "0.2s"
    },
    {
      icon: BarChart,
      title: "Get Instant Valuation",
      description: "Our proprietary algorithm calculates the best possible value for your unused licenses within minutes.",
      delay: "0.4s"
    },
    {
      icon: CreditCard,
      title: "Get Paid Quickly",
      description: "Accept our offer and receive payment via direct deposit, PayPal, or company credit within 24-48 hours.",
      delay: "0.6s"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-lg text-gray-600">
            Our streamlined process makes selling unused software licenses simple, fast, and profitable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow fade-in" 
              style={{ animationDelay: step.delay }}
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute mt-8 ml-[calc(100%-2rem)] justify-center items-center">
                  <div className="h-0.5 w-12 bg-gradient-to-r from-primary/40 to-secondary/40"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
