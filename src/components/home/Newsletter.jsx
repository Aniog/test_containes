import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-obsidian px-8 md:px-16 py-14 md:py-16 text-center max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-4">Exclusive Access</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory font-light mb-3">
            Join for 10% Off
          </h2>
          <p className="font-sans text-sm text-taupe-light font-light mb-8 max-w-sm mx-auto">
            Subscribe to receive your welcome discount, early access to new collections, and styling inspiration.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-serif text-xl text-gold italic">Thank you for joining us.</p>
              <p className="font-sans text-xs text-taupe-light mt-2 tracking-wide">Check your inbox for your 10% off code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-obsidian-soft border border-obsidian-soft text-ivory placeholder-taupe font-sans text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-6 py-4 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={12} />
              </button>
            </form>
          )}

          <p className="font-sans text-[10px] text-taupe mt-5 tracking-wide">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
