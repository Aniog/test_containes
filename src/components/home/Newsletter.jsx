import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for joining Velmora. Check your inbox for your 10% discount code.");
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-primary text-white px-6 md:px-12">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <h2 className="text-xs uppercase tracking-[0.3em] font-sans font-semibold opacity-70">The Velmora Journal</h2>
        <h3 className="text-4xl md:text-5xl font-serif italic">Join for 10% off your first order</h3>
        <p className="text-sm font-sans tracking-wide opacity-80 max-w-sm mx-auto leading-relaxed">
          Be the first to hear about new collections, exclusive previews, and the art of fine jewelry.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-10">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            className="flex-grow bg-transparent border-b border-white/30 py-4 px-2 text-sm font-sans tracking-widest placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-white text-primary px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
