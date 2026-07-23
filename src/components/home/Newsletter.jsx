import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
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
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-xs tracking-widest uppercase text-gold mb-4">Exclusive Access</p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory mb-4">
          Join for 10% Off
        </h2>
        <p className="font-inter text-sm text-ivory/60 leading-relaxed mb-10">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration — delivered with care.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-px bg-gold mx-auto" />
            <p className="font-cormorant text-2xl text-ivory italic">Thank you for joining us.</p>
            <p className="font-inter text-xs text-ivory/60">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder-ivory/40 font-inter text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white font-inter text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold-dark transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-inter text-xs text-ivory/30 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
