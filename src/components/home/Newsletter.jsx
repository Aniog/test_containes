import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    setErrorMsg('');

    const { data: response, error } = await client
      .from('Newsletter Subscribers')
      .insert({
        data: {
          email,
          subscribed_at: new Date().toISOString(),
          source: 'homepage',
        },
      })
      .select()
      .single();

    if (error || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length
        ? response.errors.join(', ')
        : error?.message || 'Something went wrong. Please try again.';
      console.error('[Newsletter] Subscribe error:', msg);
      setErrorMsg(msg);
      setStatus('error');
      return;
    }

    console.log('[Newsletter] Subscribed:', response?.data?.email);
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="bg-charcoal py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-cream font-light mb-4">
            10% Off Your First Order
          </h2>
          <p className="font-inter text-sm text-cream/60 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {status === 'success' ? (
            <div className="animate-fadeIn">
              <p className="font-cormorant text-2xl text-gold italic mb-2">Thank you for joining us.</p>
              <p className="font-inter text-sm text-cream/60">Your 10% discount code is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                disabled={status === 'submitting'}
                className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-inter text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-gold text-white font-inter text-xs uppercase tracking-widest px-6 py-4 hover:bg-gold-dark transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-60"
              >
                {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
                {status !== 'submitting' && <ArrowRight size={14} strokeWidth={1.5} />}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="font-inter text-xs text-red-400 mt-3">{errorMsg}</p>
          )}

          <p className="font-inter text-[10px] text-cream/30 mt-5 uppercase tracking-widest">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
