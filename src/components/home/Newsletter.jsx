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
    <section className="bg-charcoal py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-[10px] tracking-widest uppercase text-champagne mb-4">
          Exclusive Access
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-stone leading-relaxed mb-8">
          Subscribe to the Velmora edit — new arrivals, styling inspiration, and an exclusive 10% off your first order.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl text-champagne italic">
              Welcome to Velmora. Your code is on its way.
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
              className="flex-1 bg-mink/40 border border-mink/60 text-ivory placeholder-stone font-sans text-xs px-5 py-4 outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="bg-champagne text-velvet font-sans text-xs tracking-widest uppercase font-semibold px-6 py-4 hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={12} strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-stone/60 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
