import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
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
    <section className="py-20 md:py-24 bg-gold">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-xs tracking-[0.2em] uppercase text-obsidian/60 mb-3">
          Exclusive Access
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian tracking-wide mb-4">
          Join for 10% Off
        </h2>
        <p className="font-inter text-sm text-obsidian/70 leading-relaxed mb-8">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <p className="font-cormorant text-2xl italic text-obsidian">
              Thank you for joining us.
            </p>
            <p className="font-inter text-xs text-obsidian/60 mt-2">
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
              className="flex-1 bg-obsidian/10 border border-obsidian/20 text-obsidian placeholder-obsidian/40 font-inter text-sm px-5 py-3.5 outline-none focus:border-obsidian/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-obsidian text-ivory font-inter text-xs tracking-[0.12em] uppercase px-6 py-3.5 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors duration-300 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-obsidian/40 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
