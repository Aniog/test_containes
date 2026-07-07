import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
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
    <section className="py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="bg-warm-100 rounded-sm py-14 md:py-20 px-6 md:px-10 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 mb-3">
            Join for 10% off your first order
          </h2>
          <p className="text-charcoal-500 text-sm mb-8 max-w-md mx-auto">
            Sign up for early access to new collections, exclusive offers, and a welcome discount on your first purchase.
          </p>

          {submitted ? (
            <p className="text-gold-600 font-medium text-sm">
              Thank you! Check your inbox for your discount code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 bg-cream border border-charcoal-200 text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button type="submit" className="btn-accent gap-2">
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;