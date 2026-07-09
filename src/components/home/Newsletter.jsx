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
    <section className="py-20 md:py-28 bg-velmora-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold-light mb-4">
            Join the List
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide">
            {submitted ? 'Welcome to Velmora' : '10% Off Your First Order'}
          </h2>
          <p className="mt-4 text-sm text-white/50 leading-relaxed">
            {submitted
              ? 'Check your inbox for your welcome discount. You\'re now part of the Velmora circle.'
              : 'Sign up for early access to new collections, exclusive offers, and styling inspiration.'}
          </p>

          {!submitted && (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 bg-transparent border border-white/20 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-velmora-gold text-velmora-base text-xs tracking-widest uppercase font-sans font-medium hover:bg-velmora-gold-light transition-colors duration-300"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}