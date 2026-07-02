import React from 'react';
import { Button } from '@/components/ui/Button';

const Newsletter = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-velmora-base text-white p-12 md:p-24 text-center space-y-8 max-w-5xl mx-auto relative overflow-hidden">
          {/* Subtle Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-velmora-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-velmora-grey">The Velmora Collective</span>
            <h2 className="text-4xl md:text-6xl font-serif">Join for 10% off your first order</h2>
            <p className="text-gray-400 font-light tracking-wide max-w-md mx-auto">
              Be the first to explore new collections, exclusive previews, and journal entries on intentional living.
            </p>
            
            <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto pt-6">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full h-14 bg-transparent border-b border-white/20 text-white placeholder:text-gray-500 text-xs tracking-widest focus:outline-none focus:border-velmora-gold transition-colors text-center md:text-left"
                required
              />
              <Button className="w-full md:w-auto px-12 h-14 bg-white text-velmora-base hover:bg-velmora-gold hover:text-white transition-all duration-300">
                Join
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
