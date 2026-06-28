import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-28 bg-mocha text-ivory relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-champagne mb-4">
            The Velmora Letter
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.1] tracking-tight">
            Join us for{" "}
            <span className="italic text-gold-soft">10% off</span>
            <br />
            your first order.
          </h2>
          <p className="mt-5 text-ivory/75 text-base md:text-lg">
            Quiet drops, styling notes, and access to new collections before anyone
            else. Never spam, always considered.
          </p>

          {submitted ? (
            <div className="mt-10 inline-flex items-center gap-3 px-6 py-4 border border-gold-soft/30 text-ivory">
              <Check size={16} className="text-champagne" strokeWidth={2} />
              <span className="text-sm">
                Thank you. Your code is on its way.
              </span>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 bg-transparent border border-ivory/30 sm:border-r-0 px-5 py-4 text-sm placeholder:text-ivory/50 text-ivory focus:outline-none focus:border-champagne transition-colors"
              />
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="sm:rounded-none whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </Button>
            </form>
          )}

          <p className="mt-5 text-xs text-ivory/50">
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
