import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 border-t border-cream-400/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-espresso-800 border border-gold/10 p-10 md:p-16 lg:p-20 text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 font-medium">Join Us</p>
          <h2 className="serif-heading text-2xl md:text-3xl text-cream-100 mb-3">
            10% Off Your First Order
          </h2>
          <p className="text-cream-300/50 text-sm mb-8 max-w-sm mx-auto">
            Sign up for early access to new collections, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <p className="text-gold text-sm tracking-[0.04em] animate-fade-in">
              Thank you! Check your inbox for your discount code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-espresso-700 border border-cream-400/10 border-r-0 px-4 py-3 text-cream-100 text-sm placeholder:text-cream-300/30 focus:outline-none focus:border-gold/40 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-espresso px-5 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
