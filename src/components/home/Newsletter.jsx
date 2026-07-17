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
    <section className="py-20 md:py-28 bg-velmora-ink">
      <div className="container-wide section-padding max-w-2xl mx-auto text-center">
        <p className="font-sans text-xs tracking-super uppercase text-velmora-gold mb-4">Join Velmora</p>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          {submitted ? 'Welcome to the Family' : '10% Off Your First Order'}
        </h2>
        <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
          {submitted
            ? 'Check your inbox for your welcome discount. We\'re so glad you\'re here.'
            : 'Sign up for early access to new collections, exclusive offers, and styling inspiration.'
          }
        </p>

        {!submitted && (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap text-xs">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}