import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-medium mb-4">
            The Velmora Edit
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-3 tracking-wide">
            Join for 10% off your first order
          </h2>
          <p className="text-sm text-white/50 mb-8 font-light">
            Early access to new collections, exclusive offers, and styling inspiration — delivered with intention, never spam.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-white/20 text-white text-sm px-5 py-3 placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-gold flex items-center justify-center gap-2">
              {submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
