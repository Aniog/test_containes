import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Here you would typically send the email to your API
    }
  };

  return (
    <section className="py-20 bg-[#2C2C2C] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Mail size={48} className="mx-auto text-[#C9A96E] mb-6" />
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light mb-4 tracking-wide">
            Join the Velmora Family
          </h2>
          <div className="w-24 h-0.5 bg-[#C9A96E] mx-auto mb-6" />
          <p className="text-lg font-light max-w-2xl mx-auto">
            Subscribe to our newsletter and receive <span className="text-[#C9A96E] font-medium">10% off</span> your 
            first order. Be the first to know about new collections, exclusive offers, and jewelry care tips.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-[#C9A96E] bg-opacity-20 rounded-lg p-8 max-w-md mx-auto">
            <p className="text-xl font-['Cormorant_Garamond']">Thank you for subscribing! 💫</p>
            <p className="text-sm mt-2 opacity-80">Your discount code will arrive in your inbox shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 bg-transparent border border-gray-600 focus:border-[#C9A96E] outline-none text-white placeholder-gray-400 transition-colors"
              />
              <button
                type="submit"
                className="bg-[#C9A96E] text-white px-8 py-3 uppercase tracking-wider text-sm font-medium hover:bg-[#A67C52] transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                Subscribe
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
