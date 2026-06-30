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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-ultra-wide uppercase font-sans text-gold mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light leading-tight mb-4">
          10% off your<br />
          <em className="italic">first order</em>
        </h2>
        <p className="text-sm text-warm-gray-light font-sans leading-relaxed mb-8 max-w-sm mx-auto">
          Subscribe for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-gold italic">
              Welcome to Velmora. Your code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-warm-gray/40 text-ivory placeholder-warm-gray font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-gold-light transition-colors duration-200 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="text-xs text-warm-gray font-sans mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
