import { useState } from 'react';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';

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
      toast.success('Welcome! Your 10% discount code is WELCOME10');
    }, 800);
  };

  return (
    <section className="bg-velmora-charcoal section-padding py-16 md:py-20">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-4">
          The Velmora Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-velmora-taupe mb-8">
          Be the first to know about new drops, exclusive offers, and styling inspiration.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-velmora-taupe font-sans text-sm focus:outline-none focus:border-velmora-gold transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-primary flex-shrink-0 gap-2 disabled:opacity-60"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
            {!loading && <ArrowRight size={14} />}
          </button>
        </form>

        <p className="font-sans text-[10px] text-velmora-taupe/70 mt-4">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}