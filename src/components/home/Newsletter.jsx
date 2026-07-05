import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-[10px] tracking-widest uppercase text-gold mb-4">Exclusive Access</p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-parchment mb-4">
          Join for 10% Off
        </h2>
        <p className="font-manrope text-sm text-parchment/50 leading-relaxed mb-10">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration — delivered to your inbox.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-px bg-gold mx-auto" />
            <p className="font-cormorant text-xl italic text-gold-light">
              Welcome to Velmora. Your 10% code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-white/20 text-parchment placeholder-parchment/30 font-manrope text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-manrope text-xs tracking-widest uppercase px-6 py-4 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={12} />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-parchment/25 mt-5">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
