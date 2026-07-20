import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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
    <section className="py-16 sm:py-20 bg-gold-500">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl text-white tracking-wide mb-3">
          Join for 10% Off
        </h2>
        <p className="text-white/80 text-sm mb-8">
          Subscribe for exclusive offers, early access to new collections, and
          styling inspiration.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-white">
            <Check className="w-5 h-5" />
            <span className="text-sm font-medium">Thank you for subscribing!</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/30 text-white placeholder:text-white/60 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-gold-700 px-6 py-3 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-cream-50 transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
