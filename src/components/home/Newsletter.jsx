import { useState } from 'react';

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
    <section id="journal" className="py-16 md:py-20 bg-brand-charcoal">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-subheading text-brand-gold mb-4">Stay Connected</p>
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-brand-cream/60 mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-brand-gold">Thank you!</p>
            <p className="font-sans text-sm text-brand-cream/60 mt-2">Check your inbox for your welcome discount.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-brand-cream/10 border border-brand-cream/20 text-brand-cream placeholder-brand-cream/40 font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button type="submit" className="btn-gold py-3.5 px-8 whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
