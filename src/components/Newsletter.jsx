import { useState } from "react";
import { Mail, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-section md:py-section-lg bg-charcoal-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <Mail size={32} strokeWidth={1} className="text-gold mx-auto mb-5" />
          <p className="text-overline uppercase text-gold-light tracking-[0.2em] mb-3">
            Join the Velmora Family
          </p>
          <h2
            className="text-display-md text-cream-50 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Get 10% Off Your First Order
          </h2>
          <p className="text-body-md text-charcoal-300 mb-8 max-w-lg mx-auto">
            Be the first to know about new collections, exclusive offers, and styling tips 
            delivered straight to your inbox.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 py-4 animate-fade-in">
              <Check size={20} className="text-gold" />
              <p className="text-body-md text-cream-100">
                Welcome! Check your inbox for your exclusive discount.
              </p>
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
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-charcoal-700 border border-charcoal-600 text-cream-100 placeholder-charcoal-400 rounded-lg focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-body-sm"
              />
              <button
                type="submit"
                className="px-7 py-3.5 bg-gold text-charcoal-800 text-overline uppercase tracking-[0.14em] font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-caption text-charcoal-500 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
