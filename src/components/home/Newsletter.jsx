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
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gold mb-4">Join the Circle</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velvet mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-manrope text-sm text-text-secondary leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and an exclusive welcome offer.
          </p>

          {submitted ? (
            <div className="animate-fadeIn">
              <div className="w-10 h-px bg-gold mx-auto mb-5" />
              <p className="font-cormorant text-2xl text-velvet italic">Thank you for joining.</p>
              <p className="font-manrope text-xs text-text-secondary mt-2">Check your inbox for your welcome gift.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-ivory border border-linen px-5 py-4 font-manrope text-xs text-velvet placeholder:text-text-tertiary focus:outline-none focus:border-gold transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-velvet text-ivory font-manrope text-[11px] tracking-[0.14em] uppercase px-7 py-4 flex items-center justify-center gap-2 hover:bg-gold hover:text-velvet transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={13} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-manrope text-[10px] text-text-tertiary mt-5">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
