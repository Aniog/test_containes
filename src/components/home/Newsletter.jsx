import React from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for joining our community!');
      setEmail('');
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto bg-[#1A1A1A] text-white p-12 md:p-20 text-center space-y-8 relative overflow-hidden group">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           <img
            data-strk-img-id="newsletter-bg"
            data-strk-img="delicate gold chain texture close up"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
            alt="background"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif">Join Our Community</h2>
          <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest leading-relaxed">
            Subscribe for exclusive access to new <br /> collections & 10% off your first order.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              required
              className="w-full md:w-80 bg-transparent border-b border-white/30 py-3 text-xs tracking-widest focus:border-accent transition-colors outline-none text-center md:text-left"
            />
            <button 
              type="submit"
              className="w-full md:w-auto px-12 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-luxury"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
