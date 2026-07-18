import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("[Newsletter] Subscribed:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-cream mb-4">
            10% off your first order
          </h2>
          <p className="font-sans text-sm text-cream/60 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold text-xl">✓</span>
              </div>
              <p className="font-serif text-xl text-cream">Welcome to Velmora</p>
              <p className="font-sans text-sm text-cream/60">
                Your 10% discount code is on its way to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-gold text-ink font-sans text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-gold-dark transition-colors duration-200 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="font-sans text-xs text-cream/30 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
