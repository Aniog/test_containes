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
    <section className="py-20 lg:py-28 bg-sand/40">
      <div className="max-w-[720px] mx-auto px-6 text-center">
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-taupe mb-3">Join Velmora</p>
        <h2 className="font-serif text-3xl lg:text-4xl text-oxford">10% off your first order</h2>
        <p className="mt-4 text-sm text-mocha/70 leading-relaxed">
          Sign up for early access to new collections, exclusive offers, and styling inspiration — delivered with the same restraint we put into every piece.
        </p>

        {submitted ? (
          <div className="mt-8 py-4 px-6 bg-cream border border-sand rounded-sm">
            <p className="text-sm font-medium text-oxford">Thank you! Check your inbox for your 10% off code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-[420px] mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-cream border border-sand text-sm text-oxford placeholder:text-taupe/50 focus:outline-none focus:border-bronze rounded-sm transition-colors duration-300"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-oxford text-cream text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-oxford-light transition-colors duration-300"
            >
              Sign Up
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="mt-5 text-[11px] text-taupe/60">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
