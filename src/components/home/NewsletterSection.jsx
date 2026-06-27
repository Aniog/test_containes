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
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p
          className="text-xs tracking-widest uppercase text-gold mb-4"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Exclusive Access
        </p>
        <h2
          className="text-4xl md:text-5xl font-light text-cream leading-tight mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Join for 10% off<br />
          <em>your first order</em>
        </h2>
        <p
          className="text-sm text-warm-gray mb-10 leading-relaxed"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
              <span className="text-gold text-lg">✓</span>
            </div>
            <p
              className="text-sm text-gold-light"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Welcome to Velmora. Check your inbox for your discount code.
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
              className="flex-1 bg-white/5 border border-white/20 text-cream placeholder-warm-gray text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            />
            <button
              type="submit"
              className="bg-gold text-charcoal text-xs tracking-widest uppercase px-6 py-4 font-medium hover:bg-gold-dark transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Subscribe
              <ArrowRight size={13} strokeWidth={2} />
            </button>
          </form>
        )}

        <p
          className="text-xs text-warm-gray/60 mt-5"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
