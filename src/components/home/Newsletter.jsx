import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-velvet py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs uppercase tracking-widest3 text-champagne mb-4 font-medium">
          Exclusive Access
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory mb-3 leading-snug">
          Join for 10% off your<br />first order
        </h2>
        <p className="font-sans text-sm text-ivory/60 mb-8 leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="fade-in-up">
            <p className="font-serif text-xl font-light text-champagne italic">
              Welcome to Velmora. ✦
            </p>
            <p className="font-sans text-xs text-ivory/50 mt-2">
              Your 10% discount code is on its way to your inbox.
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
              className="flex-1 bg-ivory/10 border border-ivory/20 text-ivory placeholder-ivory/40 font-sans text-sm px-5 py-3.5 outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="bg-champagne hover:bg-gold text-velvet font-sans text-xs uppercase tracking-widest font-semibold px-6 py-3.5 flex items-center justify-center gap-2 transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={13} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-ivory/30 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
