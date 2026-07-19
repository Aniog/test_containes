import { useState } from "react";
import { Send } from "lucide-react";

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
    <section className="py-16 md:py-20 bg-gold/10">
      <div className="max-w-site mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-ink font-light tracking-wide-heading">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-warm-gray text-sm font-sans max-w-md mx-auto">
          Subscribe to receive exclusive offers, early access to new
          collections, and 10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8 inline-flex items-center gap-2 text-gold font-sans text-sm">
            <span className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-xs">
              ✓
            </span>
            Thank you! Check your email for your discount code.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 w-full sm:w-auto bg-parchment border border-cream px-4 py-3 text-sm font-sans text-ink placeholder:text-warm-gray/60 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-ink font-sans font-semibold text-xs uppercase tracking-[0.15em] px-6 py-3.5 flex items-center justify-center gap-2 transition-colors duration-200"
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
