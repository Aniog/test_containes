import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
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
    <section className="bg-charcoal py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Exclusive Access</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-cream leading-tight">
            Join for 10% Off<br />
            <em className="italic text-gold-light">Your First Order</em>
          </h2>
          <p className="font-sans text-sm text-cream/60 mt-4 leading-relaxed">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration. No spam, ever.
          </p>

          {submitted ? (
            <div className="mt-10 py-4 px-8 border border-gold/40 inline-block">
              <p className="font-serif text-lg italic text-gold-light">Thank you for joining Velmora.</p>
              <p className="font-sans text-xs text-cream/60 mt-1">Your 10% discount code is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-white/20 text-cream placeholder-cream/40 font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-white font-sans text-xs tracking-widest uppercase px-6 py-4 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-sans text-[10px] text-cream/30 mt-4">
            By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
