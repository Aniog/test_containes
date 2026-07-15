import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    toast.success('Welcome to Velmora! Check your inbox for 10% off.');
    setEmail('');
  };

  return (
    <section className="py-20 md:py-28 bg-brand-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Join the Velmora Circle</h2>
        <p className="text-white/60 mb-8">
          Sign up for exclusive access to new releases, styling tips, and 10% off your first order.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-brand-gold transition-colors duration-300"
            required
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-white/40 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
