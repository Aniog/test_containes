import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-warm-charcoal rounded-sm px-6 py-12 lg:py-16 lg:px-16 text-center">
          {!submitted ? (
            <>
              <h2 className="font-serif text-3xl lg:text-4xl text-cream mb-3">
                Join Our Inner Circle
              </h2>
              <p className="font-sans text-sm text-cream/60 mb-8 max-w-md mx-auto">
                Subscribe for 10% off your first order, plus early access to new collections and exclusive events.
              </p>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-transparent border border-cream/20 text-cream px-4 py-3 text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
                    />
                    {error && <p className="text-red-400 text-xs mt-1.5 text-left">{error}</p>}
                  </div>
                  <button
                    type="submit"
                    className="bg-gold text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-gold/90 transition-colors flex items-center gap-2"
                  >
                    <span className="hidden sm:inline">Subscribe</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Check size={24} className="text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-cream">You&apos;re In!</h3>
              <p className="font-sans text-sm text-cream/60">
                Check your inbox for your 10% off code.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}