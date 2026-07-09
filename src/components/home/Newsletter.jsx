import { useState } from 'react';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function Newsletter() {
  const { ref, isVisible } = useScrollReveal();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section ref={ref} className="section-padding py-20 md:py-28 bg-brand-charcoal">
      <div className={`max-w-xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <p className="font-sans text-[11px] uppercase tracking-mega-wide text-brand-gold mb-4">
          Stay in Touch
        </p>
        <h2 className="font-serif text-heading-2 text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-white/50 mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-lg text-brand-gold mb-2">Welcome to Velmora</p>
            <p className="font-sans text-sm text-white/50">Check your inbox for your exclusive code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/30 font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
