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
    <section className="py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-espresso p-10 md:p-14">
          <p className="text-gold-light text-xs uppercase tracking-[0.25em] font-sans mb-3">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-white leading-tight">
            Join for <span className="text-gold-light">10% off</span> your first order
          </h2>
          <p className="text-white/60 text-sm mt-3 font-sans max-w-sm mx-auto">
            Be the first to know about new collections, exclusive launches, and
            jewelry care tips.
          </p>

          {submitted ? (
            <p className="text-gold text-sm mt-6 font-sans">
              Thank you! Check your inbox for your welcome discount.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm font-sans focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="btn-primary inline-flex items-center justify-center gap-2 text-sm whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}