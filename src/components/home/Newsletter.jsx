import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="bg-gold-600">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/80 text-[11px] tracking-[0.25em] uppercase font-medium mb-3">
            Join the Circle
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-white font-light mb-3">
            {submitted ? 'Welcome to Velmora' : 'Join for 10% off your first order'}
          </h2>
          <p className="text-white/70 text-sm mb-8 max-w-md mx-auto">
            {submitted
              ? 'Thank you for signing up. Check your inbox for your welcome discount.'
              : 'Be the first to know about new collections, exclusive offers, and styling inspiration.'}
          </p>

          {!submitted && (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 bg-white/15 text-white placeholder:text-white/50 text-sm border border-white/20 focus:outline-none focus:border-white/50 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-white text-gold-700 text-sm tracking-wider uppercase font-medium hover:bg-velvet-50 transition-colors flex items-center gap-2"
              >
                Sign Up <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
