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
    <section className="py-20 md:py-28 bg-ink text-white">
      <div className="max-w-xl mx-auto px-6 md:px-12 text-center">
        <p className="text-gold-400 text-xs tracking-widest uppercase font-sans mb-3">Join Us</p>
        <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-white/60 font-sans text-sm mt-3 max-w-sm mx-auto">
          Be the first to know about new collections, exclusive events, and early access.
        </p>

        {submitted ? (
          <p className="text-gold-400 font-sans text-sm mt-8">
            Thank you! Check your inbox for your welcome code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-sans text-sm focus:outline-none focus:border-gold-400 transition-colors"
            />
            <button
              type="submit"
              className="btn-primary flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}