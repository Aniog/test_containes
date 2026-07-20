import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] Subscribed:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-velmora-gold py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-inter text-xs uppercase tracking-widest-lg text-velmora-ink/60 mb-3">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-velmora-ink font-light mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-inter text-sm text-velmora-ink/70 leading-relaxed mb-8">
            Subscribe for early access to new collections, styling inspiration, and exclusive offers.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-velmora-ink flex items-center justify-center">
                <ArrowRight size={16} className="text-velmora-gold" />
              </div>
              <p className="font-cormorant text-2xl text-velmora-ink italic">
                Welcome to Velmora
              </p>
              <p className="font-inter text-sm text-velmora-ink/70">
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
                className="flex-1 bg-velmora-ink/10 border border-velmora-ink/20 text-velmora-ink placeholder-velmora-ink/50 font-inter text-sm px-5 py-4 outline-none focus:border-velmora-ink/60 transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-velmora-ink text-velmora-cream font-inter text-xs uppercase tracking-widest-md px-8 py-4 hover:bg-velmora-espresso transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="font-inter text-[10px] text-velmora-ink/50 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
