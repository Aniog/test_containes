import { useState } from "react";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Welcome — your 10% off code is on its way");
      setEmail("");
      setSubmitting(false);
    }, 600);
  };

  return (
    <section className="bg-cream-100">
      <div className="max-w-editorial mx-auto px-6 lg:px-10 pb-20 lg:pb-28">
        <div className="relative bg-ink overflow-hidden">
          <div
            className="absolute inset-0 opacity-50"
            data-strk-bg-id="newsletter-bg-009a"
            data-strk-bg="[newsletter-heading] [newsletter-eyebrow]"
            data-strk-bg-ratio="3x2"
            data-strk-bg-width="1200"
          />
          <div className="absolute inset-0 bg-ink/65" />
          <div className="relative px-7 sm:px-12 lg:px-20 py-16 lg:py-24 text-center">
            <span id="newsletter-eyebrow" className="eyebrow-cream text-gold">
              The inner circle
            </span>
            <h2
              id="newsletter-heading"
              className="font-serif text-cream mt-3 text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.05]"
            >
              Join for 10% off
              <br />
              <span className="italic">your first order.</span>
            </h2>
            <p className="mt-5 text-cream/80 text-[14px] sm:text-[15px] max-w-md mx-auto">
              Plus early access to new collections, styling edits, and the
              occasional love letter.
            </p>
            <form
              onSubmit={onSubmit}
              className="mt-9 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/50 px-4 py-3 text-[14px] focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                disabled={submitting}
                className="btn-gold disabled:opacity-60"
              >
                {submitting ? "Joining…" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
