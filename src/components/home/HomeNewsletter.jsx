import React, { useState } from 'react';
import { toast } from 'sonner';

const HomeNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for joining our inner circle!');
      setEmail('');
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto bg-brand-sand/30 p-12 md:p-24 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-brand-gold font-bold">The Journal</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Join Our Inner Circle</h3>
          <p className="text-muted font-sans text-sm tracking-widest uppercase">
            Sign up for 10% off your first order & exclusive access.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto pt-6">
          <input
            type="email"
            placeholder="Your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow bg-white border border-brand-sand px-6 py-4 font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors"
          />
          <button
            type="submit"
            className="bg-brand-charcoal text-brand-sand px-12 py-4 font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-charcoal/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-[10px] text-muted font-sans uppercase tracking-widest pt-4">
          By subscribing you agree to our Privacy Policy and Terms of Use.
        </p>
      </div>
    </section>
  );
};

export default HomeNewsletter;