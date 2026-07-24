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
    <section className="bg-obsidian py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
            Join the Circle
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light leading-tight">
            10% off your first order
          </h2>
          <p className="font-sans text-sm text-ivory-muted mt-4 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive offers. No spam — ever.
          </p>

          {submitted ? (
            <div className="mt-8 py-4 px-6 border border-gold/40 inline-block">
              <p className="font-serif text-lg text-gold italic">
                Welcome to Velmora. Your code is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-charcoal text-ivory font-sans text-sm px-5 py-4 border border-stone focus:border-gold focus:outline-none placeholder:text-ivory-muted/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-6 py-4 hover:bg-gold-light transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}

          <p className="font-sans text-[11px] text-ivory-muted/50 mt-4">
            By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
