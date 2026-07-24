import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-obsidian">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs tracking-ultra-wide uppercase text-champagne mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light leading-tight">
          10% off your<br />
          <em className="italic">first order</em>
        </h2>
        <p className="mt-5 text-sm text-ivory/60 font-sans leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="mt-10 py-4 px-8 border border-champagne/40 inline-block">
            <p className="font-serif text-lg text-champagne italic">
              Welcome to Velmora. Your code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder-ivory/40 font-sans text-sm px-5 py-4 focus:outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="bg-champagne text-obsidian font-sans text-xs tracking-widest uppercase px-6 py-4 flex items-center justify-center gap-2 hover:bg-champagne-light transition-colors duration-300 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="mt-4 text-[11px] text-ivory/30 font-sans">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
