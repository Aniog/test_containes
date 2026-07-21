import { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      toast.success('Welcome to Velmora — your 10% code is VELMORA10');
      setEmail('');
    }, 800);
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-gold">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest-xl text-velmora-espresso/70 mb-3">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-espresso mb-4">
            10% Off Your First Order
          </h2>
          <p className="text-velmora-espresso/80 mb-8 md:mb-10">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 bg-velmora-cream text-velmora-espresso placeholder:text-velmora-warm-gray text-sm focus:outline-none focus:ring-2 focus:ring-velmora-espresso/20"
              required
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-8 py-4 bg-velmora-espresso text-velmora-cream text-xs uppercase tracking-widest font-semibold hover:bg-velmora-charcoal transition-colors disabled:opacity-70"
            >
              {status === 'submitting' ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
          <p className="text-[10px] text-velmora-espresso/60 mt-4 uppercase tracking-wider">
            By subscribing, you agree to receive marketing emails from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}
