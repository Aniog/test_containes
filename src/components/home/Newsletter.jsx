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
    <section className="py-20 md:py-28 bg-velmora-charcoal">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-velmora-gold mb-4">
          Join Velmora
        </p>
        <h2 className="heading-lg text-white mb-4">
          {submitted ? 'Welcome to the Family' : '10% Off Your First Order'}
        </h2>
        <p className="text-sm md:text-base text-white/50 mb-8 max-w-md mx-auto">
          {submitted
            ? 'Check your inbox for your welcome gift. Be the first to know about new collections and exclusive offers.'
            : 'Sign up for early access to new collections, exclusive offers, and a welcome discount on your first purchase.'}
        </p>

        {!submitted && (
          <form onSubmit={handleSubmit} className="flex items-center max-w-md mx-auto gap-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border-b border-white/20 text-white placeholder:text-white/30 text-sm py-3 px-0 outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="ml-3 p-3 text-velmora-gold hover:text-white transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
