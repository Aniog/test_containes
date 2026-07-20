import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-champagne py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-velvet/60 mb-3 font-medium">
          Exclusive Offer
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-velvet font-light leading-tight mb-4">
          Join for 10% off<br />your first order
        </h2>
        <p className="font-sans text-sm text-velvet/70 mb-8 leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
          Unsubscribe anytime.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl text-velvet font-light">
              Welcome to Velmora. ✦
            </p>
            <p className="font-sans text-sm text-velvet/70 mt-2">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-velvet/10 border border-velvet/20 text-velvet placeholder-velvet/40 font-sans text-sm focus:outline-none focus:border-velvet/60 transition-colors"
            />
            <button
              type="submit"
              className="px-7 py-3.5 bg-velvet text-champagne font-sans text-xs tracking-widest uppercase font-semibold hover:bg-charcoal transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-velvet/40 mt-4 tracking-wide">
          By subscribing you agree to our Privacy Policy. No spam, ever.
        </p>
      </div>
    </section>
  );
}
