import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] Subscribed:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-28 bg-champagne">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-gold/40" />
          <span className="text-gold text-lg font-cormorant">✦</span>
          <div className="w-12 h-px bg-gold/40" />
        </div>

        <p className="font-inter text-[10px] tracking-ultra-wide uppercase text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink mb-4">
          10% Off Your First Order
        </h2>
        <p className="font-inter text-sm text-stone leading-relaxed mb-10 max-w-md mx-auto">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="py-6">
            <p className="font-cormorant text-2xl text-ink italic mb-2">Thank you for joining.</p>
            <p className="font-inter text-xs text-stone tracking-wider">
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
              className="flex-1 bg-cream border border-linen px-5 py-4 font-inter text-sm text-ink placeholder:text-dust focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream px-6 py-4 font-inter text-xs tracking-widest uppercase hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-dust mt-4 tracking-wider">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
