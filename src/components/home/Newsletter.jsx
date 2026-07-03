import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section className="section-padding py-16 md:py-24 bg-velmora-gold/10">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-light mb-3">
          Join the Inner Circle
        </h2>
        <p className="font-sans text-sm text-velmora-stone mb-8">
          Subscribe for early access to new collections, styling tips, and 10% off your first order.
        </p>
        {status === 'success' ? (
          <div className="py-4">
            <p className="font-serif text-lg text-velmora-espresso">Welcome to Velmora.</p>
            <p className="font-sans text-sm text-velmora-stone mt-1">
              Check your inbox for your exclusive code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-white border border-velmora-sand font-sans text-sm placeholder:text-velmora-taupe focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary disabled:opacity-60"
            >
              {status === 'submitting' ? 'Joining...' : (
                <>
                  Subscribe <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </form>
        )}
        <p className="font-sans text-[10px] text-velmora-taupe mt-4">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
