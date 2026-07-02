import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-velmora-obsidian py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-warm-white font-light leading-tight">
            10% off your<br />
            <em className="italic">first order</em>
          </h2>
          <p className="font-sans text-sm text-velmora-mist mt-5 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive offers.
          </p>

          {submitted ? (
            <div className="mt-10 py-4 border border-velmora-gold/40">
              <p className="font-serif text-lg text-velmora-gold italic">
                Welcome to Velmora. Your code is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-velmora-stone text-velmora-warm-white placeholder-velmora-stone font-sans text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-velmora-gold-light transition-all duration-300 flex items-center justify-center gap-2 font-medium whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </form>
          )}

          <p className="font-sans text-[11px] text-velmora-stone mt-4">
            No spam. Unsubscribe anytime. By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
