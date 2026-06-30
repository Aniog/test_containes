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
    <section className="bg-charcoal-800 py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto section-padding text-center">
        <p className="text-label text-gold-400 mb-3">Stay in Touch</p>
        <h2 className="heading-serif text-3xl lg:text-4xl text-white mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-sm text-charcoal-300 max-w-md mx-auto mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-lg text-gold-300 italic">Welcome to the Velmora family.</p>
            <p className="text-sm text-charcoal-400 mt-2">Check your inbox for your exclusive discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-charcoal-700 text-white placeholder-charcoal-400 text-sm border border-charcoal-600 focus:border-brand focus:outline-none transition-colors"
            />
            <button type="submit" className="btn-accent flex-shrink-0">
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[11px] text-charcoal-500 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
