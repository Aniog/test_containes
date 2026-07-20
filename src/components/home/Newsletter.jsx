import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Thank you for joining our circle.');
    setEmail('');
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto bg-velmora-stone p-12 md:p-20 text-center space-y-8">
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-velmora-gold font-sans font-semibold">Join the Circle</p>
          <h2 className="font-serif text-3xl md:text-5xl text-velmora-dark">10% Off Your First Order</h2>
          <p className="text-velmora-muted font-serif italic text-lg max-w-md mx-auto">
            Subscribe for exclusive access to new collections, editorial journal updates, and private sales.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto pt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            className="flex-grow bg-white border border-velmora-dark/10 px-6 py-4 font-sans text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-velmora-dark text-white px-10 py-4 uppercase tracking-exclusive text-[10px] font-sans font-semibold hover:bg-velmora-gold transition-colors duration-500 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="text-[10px] text-velmora-muted uppercase tracking-widest leading-relaxed">
          By signing up, you agree to our Terms of Service & Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
