import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for your 10% off code.');
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#accent] p-12 md:p-20 border border-neutral-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif">Join the Inner Circle</h2>
            <p className="text-neutral-500 max-w-sm mx-auto font-light leading-relaxed">
              Stay updated with new collections and editorial journals. Enjoy 10% off your first order.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-6 py-4 bg-[#FDFCFB] border border-neutral-200 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#111] text-white px-8 py-4 uppercase tracking-widest text-xs font-bold transition-all hover:bg-black hover:scale-[1.02]"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
