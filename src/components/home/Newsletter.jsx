import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section className="py-16 md:py-20 bg-velvet-950">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold-400 mb-4">
            Join the Velmora Circle
          </p>
          <h2 className="text-heading text-3xl sm:text-4xl text-ivory-50 mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="text-sm text-ivory-200/50 mb-8">
            Plus early access to new collections, exclusive offers, and styling tips.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-velvet-900 border border-velvet-700 text-ivory-50 
                        text-sm placeholder:text-ivory-200/30 focus:outline-none focus:border-gold-500 
                        transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-gold whitespace-nowrap"
            >
              {status === 'submitting' ? 'Joining...' : 'Join Now'}
            </button>
          </form>

          {status === 'success' && (
            <p className="text-sm text-gold-400 mt-4 animate-fade-in">
              Welcome to the circle! Check your inbox for your 10% off code.
            </p>
          )}

          <p className="text-[10px] text-ivory-200/30 mt-4">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
