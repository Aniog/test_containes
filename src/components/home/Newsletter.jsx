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
    <section className="bg-dark-forest">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <p className="text-muted-gold text-xs tracking-[0.25em] uppercase font-sans mb-3">
          Insider Access
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
          Join for 10% Off Your <br />First Order
        </h2>
        <p className="text-warm-gray/70 text-sm mt-3 font-sans max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive edits, and early access.
        </p>

        {submitted ? (
          <p className="text-muted-gold text-sm mt-6 font-sans">
            Thank you! Check your inbox for your welcome code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-warm-gray/50 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-muted-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-warm-gold text-white px-6 py-3 text-sm tracking-wider uppercase rounded-sm hover:bg-warm-gold/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}