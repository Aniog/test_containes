import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-4">Join the Inner Circle</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory mb-4">
          10% off your first order
        </h2>
        <p className="font-sans text-sm text-taupe-light leading-relaxed mb-8">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <div className="w-10 h-px bg-gold mx-auto mb-4" />
            <p className="font-serif text-xl font-light text-ivory">
              Welcome to Velmora. <em className="italic">Your code is on its way.</em>
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
              className="flex-1 bg-transparent border border-taupe text-ivory font-sans text-sm px-5 py-4 placeholder:text-taupe focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-6 py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-taupe mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
