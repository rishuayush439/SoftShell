
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SoftSell helped us recover over $50,000 from unused Adobe and Microsoft licenses. The process was incredibly easy and the payment was processed within 24 hours.",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "Meridian Tech Solutions",
      delay: "0.2s"
    },
    {
      quote: "After downsizing our team, we had 25+ unused licenses sitting idle. SoftSell gave us a fair market price and handled all the transfer details. I'd recommend them to any finance team looking to recover costs.",
      name: "Michael Chen",
      role: "CFO",
      company: "Nexus Innovations",
      delay: "0.4s"
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it — hear from companies that have successfully sold their licenses through SoftSell.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 relative fade-in"
              style={{ animationDelay: testimonial.delay }}
            >
              <div className="absolute -top-3 -left-3 text-primary text-6xl opacity-20">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
