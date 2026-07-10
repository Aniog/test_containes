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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-button uppercase text-gold mb-4">Exclusive Access</p>
        <h2 className="font-serif text-3xl md:text-4xl text-parchment font-light mb-3">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-whisper leading-relaxed mb-8">
          Subscribe to receive your welcome discount, early access to new collections, and styling inspiration — straight to your inbox.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl text-gold italic">Thank you for joining us.</p>
            <p className="font-sans text-sm text-whisper mt-2">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-stone/50 text-parchment placeholder-whisper font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-sans text-xs tracking-button uppercase px-6 py-3.5 hover:bg-gold-light transition-colors duration-200 font-medium flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-stone mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
