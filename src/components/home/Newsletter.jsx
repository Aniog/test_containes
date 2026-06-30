import { useState } from "react";
import { toast } from "sonner";

/**
 * Email capture block — soft warm surface, single underline input, gold CTA.
 */
export default function Newsletter({ variant = "default" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      toast.error("Please enter a valid email address.");
      return;
    }
    setStatus("success");
    setEmail("");
    toast.success("Thank you. Your 10% off code is on its way.");
  };

  const isInline = variant === "inline";

  return (
    <section
      className={[
        "py-20 md:py-28",
        isInline ? "bg-cream" : "bg-surface-warm",
      ].join(" ")}
    >
      <div className="container-editorial">
        <div className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto">
          <span className="eyebrow">The Velmora list</span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-ink leading-[1.1]">
            Join for 10% off your first order.
          </h2>
          <p className="font-sans text-base text-ink-muted leading-relaxed max-w-md">
            Be the first to hear about new collections, studio stories, and the
            occasional gift.
          </p>
          <form
            onSubmit={onSubmit}
            className="w-full max-w-md mt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-end"
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
              placeholder="Your email address"
              className="input-line flex-1 text-base"
              aria-invalid={status === "error"}
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
          {status === "success" && (
            <p className="font-sans text-sm text-success">
              Thank you — check your inbox for your code.
            </p>
          )}
          {status === "error" && (
            <p className="font-sans text-sm text-danger">
              Please enter a valid email.
            </p>
          )}
          <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-ink-soft mt-2">
            By subscribing you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
