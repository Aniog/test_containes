import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-goldpale">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-3">
          Join for 10% off your first order
        </h2>
        <p className="text-taupe text-sm mb-8 max-w-sm mx-auto">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="text-gold text-sm font-medium tracking-wider uppercase">
              Thank you! Check your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center max-w-md mx-auto gap-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 text-sm bg-warmwhite border border-warmgray/30 border-r-0 outline-none focus:border-gold transition-colors placeholder:text-taupe/60"
            />
            <button
              type="submit"
              className="bg-espresso text-warmwhite px-5 py-3.5 flex items-center justify-center hover:bg-gold transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRight size={18} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
