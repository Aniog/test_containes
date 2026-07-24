import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-velmora-gold">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-widest-2xl text-velmora-ink/60 mb-4">
            Insider Access
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-ink mb-6">
            Join for 10% Off
          </h2>
          <p className="text-velmora-ink/70 mb-10">
            Subscribe to receive exclusive early access to new collections,
            styling tips, and 10% off your first order.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-velmora-ink">
              <Check className="w-5 h-5" />
              <span className="text-sm font-medium">
                Thank you! Check your inbox for your discount code.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-white/80 backdrop-blur-sm border-0 px-5 py-3.5 text-sm text-velmora-ink placeholder:text-velmora-taupe focus:outline-none focus:ring-2 focus:ring-velmora-ink/20"
              />
              <button
                type="submit"
                className="bg-velmora-ink text-velmora-cream px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-velmora-charcoal transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
