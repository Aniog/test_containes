import React from 'react';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Welcome to the community! Check your inbox for your 10% off code.");
    e.target.reset();
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-serif tracking-tight font-light italic">
          Join the Inner Circle
        </h2>
        <p className="text-zinc-400 font-light tracking-wide max-w-lg mx-auto uppercase-widest text-xs">
          Sign up to receive 10% off your first order and stay updated on new collection drops.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto pt-4">
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            required
            className="flex-grow bg-transparent border-b border-zinc-700 py-3 text-xs tracking-widest focus:border-white transition-colors outline-none text-center md:text-left"
          />
          <button 
            type="submit"
            className="bg-white text-zinc-900 px-10 py-4 text-[10px] uppercase-widest tracking-[0.2em] font-bold hover:bg-accent transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
