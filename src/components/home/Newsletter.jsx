import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="bg-charcoal-950 py-14 md:py-20 px-6 md:px-16 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-400 mb-4">Join Velmora</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 font-light mb-3">
            {submitted ? 'Welcome to the family.' : '10% off your first order'}
          </h2>
          <p className="text-sm font-sans text-charcoal-400 max-w-md mx-auto mb-8">
            {submitted
              ? 'Check your inbox for your welcome code. We\'re so glad you\'re here.'
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
                className="flex-1 px-5 py-3 bg-transparent border border-charcoal-700 text-cream-50 text-sm font-sans placeholder:text-charcoal-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cream-50 text-charcoal-900 font-sans text-sm font-medium tracking-[0.1em] uppercase hover:bg-cream-100 transition-colors"
              >
                Sign Up
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}