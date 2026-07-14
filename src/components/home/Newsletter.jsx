import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-obsidian py-20 lg:py-24">
      <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-[10px] tracking-ultra-wide uppercase font-sans text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl text-parchment mb-4" style={{ fontWeight: 300 }}>
          10% Off Your First Order
        </h2>
        <p className="text-sm text-parchment/60 font-sans leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fade-up">
            <p className="font-serif text-2xl text-gold italic">Thank you for joining.</p>
            <p className="text-sm text-parchment/60 font-sans mt-2">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-parchment/20 text-parchment placeholder-parchment/30 text-sm font-sans px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian text-xs tracking-widest uppercase font-sans font-semibold px-8 py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="text-[10px] text-parchment/30 font-sans mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
