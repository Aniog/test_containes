import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-50 via-cream-100 to-gold-100" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-300/20 rounded-full blur-3xl" />

      <div className="container-narrow relative z-10 text-center">
        <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold-700 mb-4">
          Stay in touch
        </p>
        <h2 className="font-serif text-heading-lg md:text-heading-xl text-charcoal-800 mb-4">
          Join the Velmora Family
        </h2>
        <p className="font-sans text-charcoal-600 mb-8 max-w-md mx-auto">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 bg-white border border-charcoal-200 text-charcoal-800 placeholder:text-charcoal-400 font-sans text-sm focus:outline-none focus:border-gold-500 transition-colors"
          />
          <button
            type="submit"
            className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {submitted ? (
              'Thank You!'
            ) : (
              <>
                Subscribe
                <Send size={14} />
              </>
            )}
          </button>
        </form>

        <p className="font-sans text-xs text-charcoal-400 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
