import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Basic validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-charcoal-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative accent */}
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-gold-400 to-transparent mx-auto mb-6" />

        <p className="label text-gold-400 mb-4">Stay in the loop</p>
        <h2 className="heading-2 text-cream-50 mb-4 font-light">
          Join for 10% off your
          <br />
          <em className="italic text-gold-200">first order</em>
        </h2>
        <p className="body-text-sm text-charcoal-400 mb-8 max-w-md mx-auto">
          Plus early access to new collections, exclusive offers, and styling inspiration delivered to your inbox.
        </p>

        {status === 'success' ? (
          <div className="flex flex-col items-center gap-3 animate-in">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
              <Check size={22} className="text-gold-400" />
            </div>
            <p className="font-serif text-xl text-cream-50">You're on the list!</p>
            <p className="body-text-sm text-charcoal-400">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="Your email address"
                className={`w-full px-5 py-3.5 bg-charcoal-800 border text-cream-100 placeholder-charcoal-500 font-sans text-sm focus:outline-none focus:border-gold-400 transition-colors ${
                  errorMsg ? 'border-red-400/60' : 'border-charcoal-700'
                }`}
                disabled={status === 'submitting'}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary whitespace-nowrap gap-2 disabled:opacity-60"
            >
              {status === 'submitting' ? (
                <>
                  <span>Joining...</span>
                </>
              ) : (
                <>
                  <span>Get 10% Off</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>
          </form>
        )}

        {errorMsg && (
          <p className="mt-3 text-xs font-sans text-red-400">{errorMsg}</p>
        )}

        {/* Privacy note */}
        <p className="mt-4 text-[11px] font-sans text-charcoal-600">
          No spam, ever. Unsubscribe anytime. View our{' '}
          <a href="/privacy" className="text-charcoal-500 hover:text-charcoal-400 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
