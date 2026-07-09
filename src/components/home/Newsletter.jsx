import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-24 bg-espresso">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold mb-4">
          Exclusive Access
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory mb-4 leading-tight">
          Join for 10% Off<br />Your First Order
        </h2>
        <p className="font-sans text-sm text-ivory/60 mb-10 leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl text-gold">Thank you for joining.</p>
            <p className="font-sans text-xs text-ivory/50 mt-2">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-sans text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-ivory font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-light transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-ivory/30 mt-5">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
