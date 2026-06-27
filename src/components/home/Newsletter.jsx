import { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section className="py-16 sm:py-20 bg-dark-900 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/10 rounded-full blur-[100px]" />
      
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <Mail className="w-8 h-8 text-gold-400 mx-auto mb-4" />
        <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-warm-400 text-sm font-sans mb-8">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-gold-400 font-serif text-lg italic">
            Welcome to the Velmora family ✦
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-dark-700 border border-dark-600 text-white text-sm font-sans placeholder:text-warm-400/60 focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-gold-500 text-dark-900 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-400 transition-colors btn-premium whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
