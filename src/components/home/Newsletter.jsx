import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Newsletter = () => {
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
    <section className="py-20 md:py-24 bg-velmora-parchment">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-gold mb-3">
          Join the Inner Circle
        </p>
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide">
          10% off your first order
        </h2>
        <p className="font-manrope text-sm text-velmora-mist mt-3 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="mt-8 flex flex-col items-center gap-3 animate-fadeIn">
            <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center">
              <Check size={18} className="text-velmora-gold" strokeWidth={2} />
            </div>
            <p className="font-cormorant text-xl text-velmora-obsidian">
              Welcome to Velmora
            </p>
            <p className="font-manrope text-xs text-velmora-mist">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setError(''); }}
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 bg-velmora-cream border border-velmora-parchment px-4 py-3.5 font-manrope text-sm text-velmora-obsidian placeholder:text-velmora-whisper focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-obsidian text-velmora-cream font-manrope text-xs uppercase tracking-widest px-6 py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-charcoal transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={13} strokeWidth={1.5} />
            </button>
          </form>
        )}

        {error && (
          <p className="font-manrope text-xs text-red-500 mt-2">{error}</p>
        )}

        <p className="font-manrope text-[10px] text-velmora-whisper mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
