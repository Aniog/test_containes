import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for your 10% discount.');
      setEmail('');
    }
  };

  return (
    <section className="bg-accent py-24 px-6 md:px-12 flex justify-center overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
         <span className="font-serif text-[20vw] whitespace-nowrap tracking-tighter">VELMORA</span>
      </div>

      <div className="max-w-screen-md w-full relative z-10 text-center text-white space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif">Join the Inner Circle</h2>
          <p className="text-white/80 uppercase tracking-widest-xl text-xs">Be the first to know about new collection drops and receive 10% off your first order.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-stretch justify-center max-w-lg mx-auto">
          <div className="relative flex-grow group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 group-focus-within:text-white transition-colors" size={18} />
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-12 py-4 text-sm focus:outline-none focus:bg-white/20 focus:border-white transition-all backdrop-blur-sm"
            />
          </div>
          <button 
            type="submit"
            className="bg-white text-accent px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-foreground hover:text-white transition-all transform active:scale-95"
          >
            Join Now
          </button>
        </form>

        <p className="text-[10px] text-white/50 uppercase tracking-[0.15em]">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
