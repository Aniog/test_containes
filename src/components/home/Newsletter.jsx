import React, { useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Thank you for joining. Check your email for your 10% discount.');
    setEmail('');
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FCFBF7]">
      <div className="max-w-screen-lg mx-auto bg-[#1A1A1A] p-12 md:p-24 flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl text-white">Join the Velmora Journal</h2>
          <p className="font-sans text-white/60 uppercase tracking-[0.2em] text-xs">Join for 10% off your first order</p>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col md:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL ADDRESS"
            className="flex-grow bg-transparent border-b-[0.5px] border-white/30 py-4 px-2 text-white font-sans text-xs tracking-widest focus:outline-none focus:border-white transition-colors"
            required
          />
          <button 
            type="submit"
            className="bg-[#C5A059] text-white px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
