import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setStatus('submitting');
    try {
      const { error: submitError } = await client
        .from('Newsletter')
        .insert({ data: { email: email.trim() } });

      if (submitError) throw submitError;
      setStatus('success');
      setEmail('');
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--charcoal)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4">
            The Inner Circle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-4 text-white/50 text-sm max-w-md mx-auto leading-relaxed">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3.5 font-sans text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-[var(--gold)] text-white font-sans text-xs uppercase tracking-[0.15em] px-8 py-3.5 flex items-center justify-center gap-2 hover:bg-[var(--gold-light)] transition-colors disabled:opacity-60"
            >
              {status === 'submitting' ? (
                'Subscribing...'
              ) : status === 'success' ? (
                <>
                  <Check className="w-4 h-4" />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-[var(--gold-light)]">Welcome to the Velmora family.</p>
          )}
          {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

          <p className="mt-4 text-[10px] text-white/30">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
