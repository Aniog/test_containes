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
    <section className="py-20 lg:py-28 bg-velmora-obsidian relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-velmora-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-velmora-gold/30 to-transparent" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-4xl lg:text-5xl text-velmora-ivory font-light mb-4">
          10% Off Your First Order
        </h2>
        <p className="font-manrope text-sm text-velmora-ivory/50 leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-12 h-px bg-velmora-gold mx-auto mb-4" />
            <p className="font-cormorant text-2xl text-velmora-gold italic">
              Welcome to Velmora
            </p>
            <p className="font-manrope text-xs text-velmora-ivory/50 mt-2 uppercase tracking-widest">
              Your discount code is on its way
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
              className="flex-1 bg-transparent border border-velmora-ivory/20 text-velmora-ivory placeholder-velmora-ivory/30 font-manrope text-xs px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-6 py-4 hover:bg-velmora-gold-light transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-velmora-ivory/25 mt-5 uppercase tracking-widest">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
