import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for joining our inner circle.");
      setEmail('');
    }
  };

  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-accent text-white">
      {/* Texture/Pattern background could go here if needed */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 id="newsletter-title" className="text-3xl md:text-5xl font-serif mb-6">The Inner Circle</h2>
        <p id="newsletter-subtitle" className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
          Be the first to explore new collections, receive styling advice, and enjoy 10% off your first treasure.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Your Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-white/30 text-white placeholder:text-white/50 rounded-none h-14 focus:border-white focus:ring-0"
            required
          />
          <Button 
            type="submit"
            className="bg-white hover:bg-stone-100 text-stone-900 rounded-none h-14 px-8 tracking-[0.2em] uppercase text-[10px] font-bold transition-all duration-300 shadow-lg"
          >
            Join Now
          </Button>
        </form>
        
        <p className="mt-8 text-white/40 text-[10px] uppercase tracking-[0.2em]">
          By subscribing, you agree to our Privacy Policy
        </p>
      </div>

      {/* Decorative background visual */}
      <div 
        data-strk-bg-id="newsletter-bg"
        data-strk-bg="[newsletter-title] [newsletter-subtitle] jewelry background texture dark"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
      />
    </section>
  );
};

export default NewsletterSection;
