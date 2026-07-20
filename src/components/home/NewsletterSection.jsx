import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Newsletter signup:', email);
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-ink">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-velmora-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-cream tracking-wide mb-4">
            10% off your first order
          </h2>
          <p className="font-inter text-sm text-velmora-cream/60 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive offers. Unsubscribe anytime.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-cormorant text-2xl italic text-velmora-gold">
                Thank you for joining us.
              </p>
              <p className="font-inter text-sm text-velmora-cream/60 mt-2">
                Your 10% discount code is on its way to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-velmora-gold/30 text-velmora-cream placeholder-velmora-cream/30 font-inter text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-velmora-ink font-inter text-xs tracking-[0.15em] uppercase px-8 py-4 flex items-center justify-center gap-2 hover:bg-velmora-gold-light transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-inter text-[11px] text-velmora-cream/30 mt-4">
            By subscribing you agree to our Privacy Policy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
