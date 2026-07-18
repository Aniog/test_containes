import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
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
    <section className="py-20 md:py-28 bg-velmora-dark text-white">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide">
          Join for <span className="text-velmora-gold italic">10% off</span> your first order
        </h2>
        <p className="text-white/70 mt-4 font-sans text-sm tracking-wide">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="mt-8 p-4 bg-white/10 rounded-sm">
            <p className="font-serif text-lg text-velmora-gold">Welcome to Velmora!</p>
            <p className="text-white/70 text-sm mt-1">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3.5 text-sm font-sans focus:outline-none focus:border-velmora-gold transition-colors"
              required
            />
            <button type="submit" className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap">
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
