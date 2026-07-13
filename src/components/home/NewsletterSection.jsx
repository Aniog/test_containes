import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
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
    <section className="py-20 md:py-28 bg-espresso">
      <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-widest text-gold mb-4">
          Exclusive Access
        </p>
        <h2 className="font-serif font-medium text-4xl md:text-5xl text-ivory mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-ivory/60 leading-relaxed mb-10">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl text-gold italic">Thank you for joining Velmora.</p>
            <p className="font-sans text-sm text-ivory/60 mt-2">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/40 font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-espresso font-sans text-xs font-semibold uppercase tracking-widest px-6 py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-ivory/30 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
