import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-base">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-surface border border-white/5 p-10 md:p-16 text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans mb-4">
            The Inner Circle
          </p>
          <h2 className="font-serif text-cream text-[clamp(1.5rem,2.5vw,2.25rem)] mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-muted font-sans text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration delivered to your inbox.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-sage">
              <Check className="w-4 h-4" />
              <span className="font-sans text-sm">Thank you for subscribing</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-elevated border border-white/10 text-cream font-sans text-sm px-5 py-3.5 placeholder:text-subtle focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-hover text-base font-sans text-xs font-medium uppercase tracking-[0.15em] px-8 py-3.5 flex items-center justify-center gap-2 transition-colors duration-300"
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
