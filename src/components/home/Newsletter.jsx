import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
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
    <section className="py-16 md:py-24 bg-warm-gold">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-white/80 text-xs tracking-[0.2em] uppercase font-medium mb-3">
            Exclusive Access
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join for 10% Off
          </h2>
          <p className="text-white/80 text-sm mb-8">
            Subscribe to receive early access to new collections, styling tips, and 10% off your first order.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-white">
              <Check size={18} />
              <span className="text-sm font-medium">Thank you! Check your inbox for your code.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-5 py-3.5 text-sm outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-warm-gold px-8 py-3.5 text-sm font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
