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
    <section className="bg-gold py-16 lg:py-20">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-obsidian/60 text-xs uppercase tracking-widest mb-3">Join the Circle</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-obsidian mb-4">
            10% Off Your First Order
          </h2>
          <p className="text-obsidian/70 text-sm leading-relaxed mb-8">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="bg-obsidian/10 px-8 py-5 inline-block">
              <p className="font-serif text-xl text-obsidian">
                Welcome to Velmora ✦
              </p>
              <p className="text-sm text-obsidian/70 mt-1">
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
                className="flex-1 bg-obsidian/10 border border-obsidian/20 text-obsidian placeholder-obsidian/50 px-5 py-3 text-sm focus:outline-none focus:border-obsidian/50 transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-obsidian text-ivory px-6 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-charcoal transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}

          <p className="text-obsidian/40 text-[10px] mt-4 tracking-wide">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
