import { useState } from 'react';

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
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-charcoal rounded-sm px-8 md:px-16 py-16 md:py-20 text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">Join Velmora</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-4">
            {submitted ? 'Welcome to the family.' : '10% off your first order'}
          </h2>
          <p className="font-sans text-sm text-cream/60 mb-10 max-w-md mx-auto">
            {submitted
              ? 'Check your inbox for your welcome offer. You are now part of the Velmora community.'
              : 'Sign up for early access to new collections, exclusive offers, and timeless style inspiration.'}
          </p>

          {!submitted && (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full sm:flex-1 py-3 px-5 bg-transparent border border-cream/30 text-cream font-sans text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors rounded-sm"
              />
              <button type="submit" className="btn-primary whitespace-nowrap text-xs w-full sm:w-auto">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
