import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-accent">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl mx-auto text-center text-cream">
          <p className="text-xs uppercase tracking-[0.25em] text-cream/80 mb-3">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-4">
            10% Off Your First Order
          </h2>
          <p className="text-cream/90 mb-8 font-light">
            Be the first to know about new arrivals, exclusive edits, and
            styling inspiration.
          </p>

          {submitted ? (
            <p className="text-cream font-medium">
              Thank you. Use code WELCOME10 at checkout.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-cream/10 border border-cream/30 px-5 py-3.5 text-cream placeholder:text-cream/60 focus:outline-none focus:border-cream transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-cream text-espresso px-6 py-3.5 text-sm font-medium uppercase tracking-wide hover:bg-white transition-colors"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
