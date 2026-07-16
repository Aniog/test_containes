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
    <section className="bg-velmora-espresso">
      <div className="section-padding py-20 md:py-24 text-center">
        <p className="text-xs font-medium tracking-widest uppercase text-velmora-gold mb-4">Join Velmora</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white mb-4">
          {submitted ? 'Welcome to the Family' : 'Get 10% Off Your First Order'}
        </h2>
        <p className="text-sm text-white/50 mb-10 max-w-md mx-auto">
          {submitted
            ? 'Check your inbox — your discount code is on its way. Thank you for joining the Velmora community.'
            : 'Sign up for early access to new collections, exclusive offers, and styling inspiration.'}
        </p>

        {!submitted && (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border-b border-white/20 text-white placeholder:text-white/30 text-sm px-0 py-3 outline-none focus:border-velmora-gold transition-colors"
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