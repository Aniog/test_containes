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
    <section className="relative overflow-hidden bg-espresso">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(196, 162, 101, 0.1) 0%, transparent 70%)',
        }}
      />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gold/80 text-xs tracking-[0.3em] uppercase mb-4 font-sans">Join Velmora</p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-cream mb-3">
            {submitted ? 'Welcome to the family.' : 'Join for 10% off your first order'}
          </h2>
          {submitted ? (
            <p className="text-cream/60 text-sm font-sans">
              Check your inbox for your welcome code.
            </p>
          ) : (
            <>
              <p className="text-cream/60 text-sm mb-8 font-sans">
                Early access to new collections, exclusive offers, and styling inspiration.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/40 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <button type="submit" className="btn-gold whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}