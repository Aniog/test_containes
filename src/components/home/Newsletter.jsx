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
    <section className="py-20 md:py-24 bg-obsidian">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light mb-4">
          10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-whisper leading-relaxed mb-8">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers. No spam, ever.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-gold italic mb-2">Welcome to Velmora.</p>
            <p className="font-sans text-sm text-whisper">
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
              className="flex-1 bg-transparent border border-stone/50 text-ivory placeholder-stone font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-ivory font-sans text-xs tracking-widest uppercase font-medium px-6 py-3.5 hover:bg-gold-dark transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-stone mt-4">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
