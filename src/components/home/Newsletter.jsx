import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Exclusive Access</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light leading-tight">
          Join for 10% off
          <br />
          <em className="italic">your first order</em>
        </h2>
        <p className="font-sans text-sm text-whisper mt-5 leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-10 flex items-center justify-center gap-3 text-gold">
            <Check size={18} strokeWidth={1.5} />
            <span className="font-sans text-sm tracking-wide">
              Welcome to Velmora. Check your inbox for your discount code.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-charcoal border border-charcoal text-ivory placeholder-whisper px-5 py-4 font-sans text-sm focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-ivory px-6 py-4 font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-whisper/60 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
