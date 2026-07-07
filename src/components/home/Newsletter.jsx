import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-velmora-espresso text-velmora-sand py-14 md:py-20 px-6 md:px-12 text-center"
        >
          <p className="text-xs tracking-ultra uppercase text-velmora-gold font-medium mb-3">
            Insider Access
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join for 10% off your first order
          </h2>
          <p className="text-sm text-velmora-warm max-w-md mx-auto mb-8">
            Be the first to know about new drops, exclusive offers, and styling tips from the Velmora studio.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-velmora-gold">
              <Check className="w-5 h-5" />
              <span className="text-sm font-medium">Thank you! Check your inbox for your code.</span>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm px-4 py-3.5 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-white text-xs font-medium tracking-widest uppercase px-6 py-3.5 hover:bg-velmora-goldDark transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
