import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-gold-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-super-wide uppercase text-ink-muted mb-3">
          The Inner Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-ink-muted mb-8 md:mb-10">
          Be the first to know about new drops, styling tips, and member-only
          perks.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-ink font-medium">
            <Check size={18} className="text-gold-dark" />
            <span>Thank you — your code is on its way.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-cream-light border border-ink/10 px-5 py-3.5 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold-dark"
            />
            <button
              type="submit"
              className="bg-ink text-cream px-8 py-3.5 text-sm font-semibold tracking-widest uppercase inline-flex items-center justify-center gap-2 hover:bg-ink-light transition-colors"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
