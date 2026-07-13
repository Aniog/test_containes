import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-24 bg-velmora-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-[10px] tracking-widest-xl uppercase text-velmora-gold mb-4">Exclusive Access</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-linen tracking-wide">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-4 text-sm text-velmora-ash leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling inspiration. No spam, ever.
        </p>

        {submitted ? (
          <div className="mt-10 py-4">
            <p className="font-serif text-lg italic text-velmora-gold">
              Welcome to Velmora. ✦
            </p>
            <p className="text-sm text-velmora-ash mt-2">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-velmora-obsidian border border-velmora-stone text-velmora-linen placeholder-velmora-stone text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian text-xs font-semibold tracking-widest uppercase px-6 py-4 hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="mt-4 text-[10px] text-velmora-stone tracking-wide">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
