import { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmail('');
      toast.success('Welcome! Check your inbox for 10% off.');
    }, 800);
  };

  return (
    <section className="py-20 md:py-28 bg-base text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gold font-medium mb-4">
            Insider Access
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-white/70 text-sm mb-8">
            Be the first to know about new drops, exclusive offers, and styling inspiration.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 px-5 py-3.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gold text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-gold-hover transition-colors disabled:opacity-60"
            >
              {loading ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
