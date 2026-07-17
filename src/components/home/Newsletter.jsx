import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-obsidian py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light mb-4">
          10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-ivory/50 mb-10 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive offers.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl text-champagne italic">Welcome to Velmora.</p>
            <p className="font-sans text-sm text-ivory/50 mt-2">Your 10% code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="bg-champagne text-obsidian font-sans text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-champagne-light transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe <ArrowRight size={13} />
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-ivory/25 mt-6">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
