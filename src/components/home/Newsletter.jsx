import React, { useState } from 'react';
import { ArrowRight, Check, Loader } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('submitting');
    setErrorMsg('');

    const { data: response, error } = await client
      .from('Newsletter Subscribers')
      .insert({
        data: {
          email: email.trim(),
          source: 'homepage_footer',
          subscribed_at: new Date().toISOString(),
        },
      })
      .select()
      .single();

    if (error || response?.success === false) {
      const msg =
        Array.isArray(response?.errors) && response.errors.length
          ? response.errors.join(' ')
          : error?.message || 'Something went wrong. Please try again.';
      console.error('[Newsletter] subscription error:', msg);
      setErrorMsg(msg);
      setStatus('error');
      return;
    }

    console.log('[Newsletter] subscribed:', response?.data?.email);
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-300 mb-4">
            10% off your first order
          </h2>
          <p className="font-sans text-sm text-cream/50 leading-relaxed mb-8">
            Subscribe for early access to new collections, styling inspiration, and exclusive offers. No spam, ever.
          </p>

          {status === 'success' ? (
            <div className="flex items-center justify-center gap-3 py-4">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <Check size={14} className="text-gold" />
              </div>
              <p className="font-sans text-sm text-cream/70">
                Welcome to Velmora. Your 10% code is on its way.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  disabled={status === 'submitting'}
                  className="flex-1 bg-transparent border border-cream/20 px-5 py-4 font-sans text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 flex-shrink-0 disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <Loader size={12} className="animate-spin" />
                  ) : (
                    <>Subscribe <ArrowRight size={12} /></>
                  )}
                </button>
              </form>

              {status === 'error' && (
                <p className="font-sans text-xs text-red-400 mt-3">
                  {errorMsg}
                </p>
              )}
            </>
          )}

          <p className="font-sans text-[10px] text-cream/25 mt-4 tracking-wide">
            By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
