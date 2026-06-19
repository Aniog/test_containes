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
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="bg-gold text-white py-16 md:py-20 px-8 md:px-16 text-center">
          <p className="font-sans text-xs tracking-[0.28em] uppercase text-white/70 mb-4">
            Join the Velmora Circle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide mb-4">
            {submitted ? 'Welcome to the Family' : '10% Off Your First Order'}
          </h2>
          <p className="font-sans text-sm text-white/80 max-w-md mx-auto mb-8">
            {submitted
              ? 'Check your inbox for your welcome gift. We can\'t wait to see how you style your Velmora pieces.'
              : 'Sign up for early access to new collections, exclusive offers, and styling inspiration.'}
          </p>

          {!submitted && (
            <form onSubmit={handleSubmit} className="flex max-w-md mx-auto gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-white/15 border border-white/30 text-white placeholder:text-white/50 px-4 py-3 text-sm outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-gold px-5 py-3 hover:bg-cream transition-colors"
                aria-label="Subscribe"
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