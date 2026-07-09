import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="bg-velmora-obsidian py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-4">
          Exclusive Offer
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-ivory mb-4">
          Join the Velmora Circle
        </h2>
        <p className="font-manrope text-sm text-velmora-stone leading-relaxed mb-8">
          Subscribe for 10% off your first order, early access to new collections, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-velmora-gold/20 flex items-center justify-center">
              <Check size={20} className="text-velmora-gold" strokeWidth={1.5} />
            </div>
            <p className="font-cormorant text-xl font-light italic text-velmora-ivory">
              Welcome to the circle.
            </p>
            <p className="font-manrope text-xs text-velmora-stone">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-velmora-charcoal text-velmora-ivory font-manrope text-sm px-5 py-4 placeholder:text-velmora-mink focus:outline-none focus:border-velmora-gold transition-colors duration-200"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-6 py-4 hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Join Now
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        {error && (
          <p className="font-manrope text-xs text-red-400 mt-3">{error}</p>
        )}

        {!submitted && (
          <p className="font-manrope text-[10px] text-velmora-mink mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        )}
      </div>
    </section>
  );
}
