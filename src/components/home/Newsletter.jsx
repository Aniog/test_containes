import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-3xl mx-auto bg-velmora-charcoal text-white text-center py-14 md:py-20 px-6 md:px-12">
        <p className="text-xs tracking-[0.2em] uppercase text-velmora-gold mb-3">Exclusive Access</p>
        <h2 className="font-serif text-2xl md:text-3xl font-light">Join for 10% Off Your First Order</h2>
        <p className="mt-3 text-sm text-white/60 max-w-md mx-auto">
          Be the first to know about new collections, styling tips, and members-only offers.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-velmora-gold tracking-wide">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-light transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
