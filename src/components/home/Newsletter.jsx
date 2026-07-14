import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-4">Exclusive Access</p>
        <h2 className="font-serif text-4xl md:text-5xl text-parchment mb-4 leading-[1.1]">
          Join for 10% Off<br />
          <em className="italic font-light">Your First Order</em>
        </h2>
        <p className="font-sans text-sm text-whisper leading-relaxed mb-10">
          Be the first to know about new collections, exclusive offers, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="border border-gold/40 px-8 py-5">
            <p className="font-serif text-xl text-gold">Thank you for joining.</p>
            <p className="font-sans text-sm text-whisper mt-2">Your 10% discount code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-stone/50 text-parchment placeholder-stone font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-sans text-xs uppercase tracking-[0.15em] px-6 py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-stone mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
