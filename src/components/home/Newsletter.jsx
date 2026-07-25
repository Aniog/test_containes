import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would connect to your email service
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
  };
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
          Join the Velmora Family
        </h2>
        <p className="text-lg text-white text-opacity-90 mb-2">
          Get 10% off your first order
        </p>
        <p className="text-white text-opacity-75 mb-10 max-w-2xl mx-auto">
          Subscribe to receive exclusive offers, early access to new collections, 
          and jewelry care tips from our founders.
        </p>
        
        {isSubmitted ? (
          <div className="bg-white bg-opacity-20 rounded-lg p-8 max-w-md mx-auto">
            <p className="text-white text-lg font-medium">
              Thank you for joining us! 
            </p>
            <p className="text-white text-opacity-90 mt-2">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-none border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-900 placeholder-gray-400"
              />
              <button 
                type="submit"
                className="bg-white text-accent px-8 py-4 font-medium tracking-wide uppercase hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-white text-opacity-60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
