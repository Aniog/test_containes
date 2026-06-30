import { useState } from 'react';
import { Send } from 'lucide-react';

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
    <section className="py-20 md:py-28 bg-charcoal-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-widest-xl uppercase text-gold-400 mb-3 font-medium">
          Stay in Touch
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-4" style={{ fontWeight: 400 }}>
          Join for 10% Off Your First Order
        </h2>
        <p className="text-cream-300/60 text-sm mb-8 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="text-gold-400 font-serif text-lg">Welcome to the Velmora family.</p>
            <p className="text-cream-300/60 text-sm mt-2">Check your inbox for your exclusive discount.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3.5 bg-charcoal-700 border border-charcoal-600 text-cream-100 text-sm placeholder-charcoal-400 focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-gold-500 text-white text-xs tracking-widest-xl uppercase font-medium hover:bg-gold-600 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
