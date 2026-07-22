import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("[Newsletter] Subscribing:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-16 md:py-20 bg-espresso">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-cream mb-3">
            10% Off Your First Order
          </h2>
          <p className="font-inter text-sm text-cream/60 leading-relaxed mb-8">
            Subscribe for early access to new collections, styling inspiration, and exclusive offers.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-cormorant text-xl italic text-gold">
                Welcome to Velmora. ✦
              </p>
              <p className="font-inter text-xs text-cream/60 mt-2">
                Your 10% discount code is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-inter text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-espresso font-inter text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={12} strokeWidth={2} />
              </button>
            </form>
          )}

          <p className="font-inter text-[10px] text-cream/30 mt-4 uppercase tracking-[0.1em]">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
