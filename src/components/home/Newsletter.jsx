import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] Subscribing:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-espresso py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-4">Exclusive Access</p>
        <h2 className="font-serif text-3xl md:text-4xl text-white-warm font-light mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-white-warm/50 leading-relaxed mb-10">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl text-gold italic">Thank you for joining Velmora.</p>
            <p className="font-sans text-xs text-white-warm/50 mt-2">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-white-warm/20 text-white-warm placeholder-white-warm/30 font-sans text-sm px-5 py-3 focus:outline-none focus:border-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-gold text-white-warm font-sans text-xs tracking-widest uppercase px-8 py-3 hover:bg-gold-dark transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-white-warm/30 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
