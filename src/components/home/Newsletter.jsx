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
    <section className="py-20 lg:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest font-sans text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ivory font-light mb-4">
            10% Off Your<br />First Order
          </h2>
          <p className="font-sans text-ivory/60 text-sm leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration,
            and exclusive member offers.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-serif text-ivory text-xl font-light italic">
                Welcome to Velmora ✦
              </p>
              <p className="text-ivory/60 text-xs font-sans mt-2">
                Your 10% discount code is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-stone/40 text-ivory placeholder-stone/60 text-xs font-sans px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-charcoal text-xs uppercase tracking-widest font-sans px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300 flex-shrink-0"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="text-stone/50 text-[10px] font-sans mt-4 uppercase tracking-wide">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
