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
    <section className="bg-deep-800 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-gold-400">Join Velmora</p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-medium mt-4">
          {submitted ? 'Welcome to the Family' : '10% Off Your First Order'}
        </h2>
        <p className="font-sans text-sm text-deep-300 mt-3 max-w-md mx-auto">
          {submitted
            ? 'Check your inbox for your welcome gift. We\'re so glad you\'re here.'
            : 'Sign up for early access to new collections, exclusive offers, and styling inspiration.'
          }
        </p>

        {!submitted && (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-deep-700 border border-deep-600 text-cream font-sans text-sm placeholder:text-deep-400 focus:outline-none focus:border-gold-400 transition-colors"
            />
            <button type="submit" className="btn-gold text-xs whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}