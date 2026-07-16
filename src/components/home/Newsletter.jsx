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
    <section className="bg-deep-bronze py-16 md:py-20">
      <div className="max-w-xl mx-auto text-center px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-gold-light/70 mb-4">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-cream font-normal mb-4">
          {submitted ? 'Welcome to the family.' : 'Join for 10% off your first order'}
        </h2>
        {!submitted && (
          <p className="text-sm text-sand/60 mb-8 leading-relaxed">
            Early access to new collections, styling inspiration, and
            exclusive offers — delivered quietly to your inbox.
          </p>
        )}

        {submitted ? (
          <p className="text-sand/80 text-sm">
            Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 px-5 py-3 bg-cream/10 border border-sand/20 rounded-sm text-sm text-cream placeholder:text-sand/40 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button type="submit" className="btn-primary text-xs whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
