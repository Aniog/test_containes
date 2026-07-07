import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-obsidian py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-champagne mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-ivory leading-tight mb-4">
          10% off your first order
        </h2>
        <p className="font-sans text-sm text-stone leading-relaxed mb-10 max-w-md mx-auto">
          Subscribe for early access to new collections, styling inspiration, and exclusive offers. No spam — ever.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 animate-fade-in">
            <div className="w-10 h-10 rounded-full border border-champagne flex items-center justify-center">
              <span className="text-champagne text-lg">✓</span>
            </div>
            <p className="font-serif text-xl text-ivory">Welcome to Velmora</p>
            <p className="font-sans text-sm text-stone">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-champagne/30 text-ivory placeholder-stone/50 font-sans text-sm px-5 py-4 focus:outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="bg-champagne text-obsidian font-sans text-xs uppercase tracking-[0.15em] font-semibold px-8 py-4 hover:bg-champagne-dark transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-stone/40 mt-5 tracking-wide">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
