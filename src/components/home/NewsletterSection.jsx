import { useState } from 'react';
import { toast } from 'sonner';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-amber-700">
      <div className="container-wide text-center">
        <h2 className="serif-heading text-3xl md:text-5xl text-stone-50 mb-4">
          Join for 10% Off
        </h2>
        <p className="text-amber-100 mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-amber-500 text-stone-50 placeholder-amber-200 outline-none focus:border-white transition-colors text-sm"
            required
          />
          <button
            type="submit"
            className="bg-stone-50 text-amber-700 px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-white transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-amber-200 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
