import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4 font-medium">
          Exclusive Access
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory mb-4 leading-tight">
          Join for 10% Off<br />
          <em className="italic">Your First Order</em>
        </h2>
        <p className="font-sans text-sm text-ivory/60 leading-relaxed mb-8">
          Be the first to know about new collections, exclusive offers, and styling inspiration. No spam, ever.
        </p>

        {submitted ? (
          <div className="animate-fade-in-up">
            <div className="w-10 h-px bg-gold mx-auto mb-4" />
            <p className="font-serif text-xl font-light text-ivory">
              Thank you for joining us.
            </p>
            <p className="font-sans text-sm text-ivory/60 mt-2">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/40 font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-sans text-xs tracking-[0.2em] uppercase font-semibold px-6 py-4 hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-ivory/30 mt-4">
          By subscribing you agree to our Privacy Policy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
