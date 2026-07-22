import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] Subscribing:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold/40" />
            <span className="font-inter text-[10px] uppercase tracking-widest text-gold/60">Exclusive Access</span>
            <div className="h-px w-12 bg-gold/40" />
          </div>

          <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light tracking-wide mb-4">
            Join the Inner Circle
          </h2>
          <p className="font-inter text-sm text-ivory/60 leading-relaxed mb-10">
            Subscribe for 10% off your first order, early access to new collections, and styling inspiration delivered to your inbox.
          </p>

          {submitted ? (
            <div className="py-6">
              <p className="font-cormorant text-2xl text-gold italic">Thank you for joining us.</p>
              <p className="font-inter text-xs text-ivory/50 mt-2 uppercase tracking-widest">Check your inbox for your welcome gift.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-inter text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-ivory font-inter text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="font-inter text-[10px] text-ivory/30 mt-5 uppercase tracking-wider">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
