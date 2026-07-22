import { useState } from 'react';
import { Send } from 'lucide-react';

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
    <section className="bg-deep-base py-16 md:py-20">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold-accent mb-4">
            Join the Velmora Family
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-cream mb-3">
            Get 10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-cream/60 mb-8 max-w-md mx-auto">
            Subscribe for exclusive access to new arrivals, styling tips, and special offers.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <p className="font-serif text-lg text-gold-accent">
                Thank you for joining us!
              </p>
              <p className="font-sans text-sm text-cream/60 mt-2">
                Check your inbox for your welcome discount.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 bg-deep-base-light border border-white/15 text-cream placeholder-cream/40 font-sans text-sm focus:outline-none focus:border-gold-accent transition-colors"
              />
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Send size={14} />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
