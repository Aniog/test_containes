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
    <section className="bg-obsidian py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs text-gold tracking-ultra-wide uppercase mb-4">
          Exclusive Access
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light leading-tight mb-4">
          Join for 10% off<br />
          <em className="italic text-gold">your first order</em>
        </h2>
        <p className="font-sans text-sm text-ivory/60 mb-10 leading-relaxed">
          Be the first to know about new collections, exclusive offers,
          and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-2xl text-gold italic mb-2">Thank you for joining.</p>
            <p className="font-sans text-sm text-ivory/60">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white font-sans text-xs tracking-widest uppercase px-6 py-4 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-ivory/30 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
