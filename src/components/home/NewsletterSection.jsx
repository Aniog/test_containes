import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', email);
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-dark-bg py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant font-light text-4xl md:text-5xl text-ivory leading-tight mb-4">
            10% off your<br />
            <em className="italic">first order</em>
          </h2>
          <div className="w-10 h-px bg-gold mx-auto mb-8" />
          <p className="font-inter text-sm text-ivory/50 mb-10 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="border border-gold/30 px-8 py-6">
              <p className="font-cormorant italic text-xl text-ivory mb-1">Thank you for joining.</p>
              <p className="font-inter text-xs text-ivory/50 tracking-widest uppercase">
                Your 10% discount code is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-ivory/20 px-5 py-4 text-sm font-inter text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-ivory font-inter text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="font-inter text-xs text-ivory/25 mt-5">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
