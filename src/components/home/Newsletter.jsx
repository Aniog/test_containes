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
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-warmgold">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-white/70 mb-4">
          Join the Velmora Circle
        </p>
        <h2 className="serif-heading text-3xl md:text-4xl text-white mb-4">
          Receive 10% Off Your First Order
        </h2>
        <p className="font-sans text-white/80 text-sm md:text-base mb-8 leading-relaxed">
          Sign up for early access to new collections, exclusive offers, and styling inspiration — delivered with the same care we put into every piece.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-5 py-3 bg-white/15 border border-white/20 text-white placeholder:text-white/40 font-sans text-sm rounded-sm focus:outline-none focus:border-white/50 transition-colors"
          />
          <button
            type="submit"
            className="btn-primary bg-white text-warmgold hover:bg-goldpale hover:text-warmgold flex items-center gap-2 justify-center"
          >
            {submitted ? (
              <>
                <Check className="w-4 h-4" />
                Done
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
