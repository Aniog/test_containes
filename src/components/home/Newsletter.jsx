import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [revealRef, revealed] = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-brand-espresso">
      <div
        ref={revealRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-white/60 font-sans max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>
        {submitted ? (
          <p className="mt-8 text-sm text-brand-gold font-sans tracking-wide">
            Welcome to Velmora! Check your inbox for your 10% code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-gold text-white px-6 py-3 text-xs font-sans font-semibold tracking-ultra-wide uppercase hover:bg-brand-gold-dark transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
