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
    <section className="bg-espresso py-20 md:py-24">
      <div className="section-padding max-w-xl mx-auto text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-gold-light mb-4">
          Join Velmora
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
          {submitted ? 'Welcome to the Family' : '10% Off Your First Order'}
        </h2>
        <p className="font-sans text-sm text-taupe-light mb-8 leading-relaxed">
          {submitted
            ? 'Check your inbox for your welcome gift. Beautiful things await.'
            : 'Sign up for early access to new collections, exclusive offers, and a 10% discount on your first purchase.'}
        </p>

        {!submitted && (
          <form onSubmit={handleSubmit} className="flex gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-cream/10 border border-cream/20 text-cream placeholder:text-taupe-light/50 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-6 bg-gold text-white hover:bg-gold-light transition-colors flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
