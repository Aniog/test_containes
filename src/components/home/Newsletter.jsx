import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="section-padding bg-velvet-600">
      <div className="container-page max-w-2xl mx-auto text-center">
        <Sparkles className="w-8 h-8 text-cream-200 mx-auto mb-5" />
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-cream-200/80 text-sm md:text-base mb-8">
          Be the first to know about new collections, exclusive offers, and the stories behind the pieces.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-cream-200/50 text-sm outline-none focus:border-white/40 transition-colors"
          />
          <button type="submit" className="bg-white text-charcoal-900 px-8 py-3.5 text-sm tracking-wider uppercase font-medium hover:bg-cream-100 transition-colors">
            Sign Up
          </button>
        </form>

        <p className="text-cream-200/50 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}