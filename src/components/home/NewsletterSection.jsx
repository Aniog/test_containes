import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] Subscribing:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-4">Exclusive Access</p>
        <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light mb-4">
          Join for 10% Off<br />
          <em className="italic">Your First Order</em>
        </h2>
        <p className="font-manrope text-sm text-ivory/60 leading-relaxed mb-10 max-w-sm mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-12 h-px bg-gold mx-auto mb-4" />
            <p className="font-cormorant text-2xl text-ivory italic">Thank you for joining.</p>
            <p className="font-manrope text-xs text-ivory/50 mt-2 tracking-wide">
              Your 10% discount code is on its way.
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
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-manrope text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-gold text-ivory font-manrope text-xs tracking-widest uppercase px-6 py-4 hover:bg-gold-light transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-ivory/30 mt-4 tracking-wide">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
