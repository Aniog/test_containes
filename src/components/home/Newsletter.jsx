import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-obsidian-900 via-obsidian-950 to-obsidian-900 border border-obsidian-800/30 p-8 md:p-16 text-center">
          {/* Gold accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

          <p className="section-subtitle mb-3 text-gold-400">Stay in Touch</p>
          <h2 className="font-serif text-heading mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-sm text-obsidian-400 max-w-md mx-auto mb-8">
            Be the first to discover new collections, exclusive offers, and styling tips.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <p className="text-gold-400 font-sans text-sm tracking-wider">
                Welcome to the Velmora family. Check your inbox for your code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-obsidian-800/50 border border-obsidian-700/50 px-5 py-3.5 text-sm text-cream-100 placeholder:text-obsidian-500 focus:outline-none focus:border-gold-500/40 transition-colors"
              />
              <button type="submit" className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap">
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
