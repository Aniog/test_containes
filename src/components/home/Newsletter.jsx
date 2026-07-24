import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      console.log('Newsletter signup:', email);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-velmora-ink">
      <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs font-sans tracking-[0.2em] uppercase text-velmora-gold mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl text-white font-light tracking-wide">
          Receive 10% off your first order
        </h2>
        <p className="mt-4 text-sm font-sans text-white/50 leading-relaxed">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-10 py-6">
            <p className="font-serif text-xl text-velmora-gold italic">
              Thank you. Check your inbox for your welcome code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-white/20 text-white text-sm font-sans px-5 py-3.5 placeholder:text-white/30 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button type="submit" className="btn-primary gap-2 whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}