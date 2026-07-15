import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-velvet py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-4">Exclusive Access</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light mb-4">
          Join the Inner Circle
        </h2>
        <p className="font-sans text-sm text-ivory/60 leading-relaxed mb-10">
          Subscribe for 10% off your first order, early access to new collections, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-champagne flex items-center justify-center mb-2">
              <span className="text-champagne text-xl">✓</span>
            </div>
            <p className="font-serif text-xl text-ivory">Welcome to Velmora.</p>
            <p className="font-sans text-sm text-ivory/50">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-mink text-ivory placeholder-ivory/30 font-sans text-sm px-5 py-4 focus:outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="bg-champagne text-velvet font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-ivory/30 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
