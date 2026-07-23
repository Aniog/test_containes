import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">
            Join for 10% Off
          </h2>
          <p className="text-bronze mb-8">
            Subscribe for early access to new collections, styling tips, and an
            exclusive 10% off your first order.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-espresso"
            >
              <Check size={18} className="text-gold" />
              <span className="text-sm font-medium">
                Thank you! Check your inbox for your discount code.
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-ivory border border-taupe/30 text-espresso text-sm placeholder:text-taupe focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-espresso text-ivory px-8 py-3.5 text-sm font-medium uppercase tracking-widest hover:bg-bronze transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
