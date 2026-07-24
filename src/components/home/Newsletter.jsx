import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
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
    <section className="py-20 lg:py-28 bg-charcoal-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-caption uppercase tracking-[0.25em] text-gold-400 mb-3">
              Exclusive Offer
            </p>
            <h2 className="heading-section text-cream-50 mb-4">
              Join for 10% Off Your First Order
            </h2>
            <p className="text-body text-charcoal-300 mb-8">
              Be the first to discover new collections, receive styling tips,
              and enjoy member-only offers.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-3 py-4">
                <CheckCircle className="w-5 h-5 text-gold-400" />
                <p className="text-body text-gold-400">
                  Welcome to Velmora! Check your inbox for your 10% code.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3.5 bg-charcoal-700 border border-charcoal-600 text-cream-100 text-body placeholder:text-charcoal-400 focus:outline-none focus:border-gold-500 transition-colors"
                />
                <button
                  type="submit"
                  className="btn-gold px-8 py-3.5 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-xs">Subscribe</span>
                </button>
              </form>
            )}

            <p className="text-body-sm text-charcoal-500 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
