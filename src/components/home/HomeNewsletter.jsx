import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function HomeNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden bg-[var(--color-ink)] text-[var(--color-bone)] px-6 sm:px-12 lg:px-20 py-16 md:py-24">
          {/* Soft glow */}
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--color-gold)]/15 blur-3xl"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-[0.7rem] uppercase tracking-eyebrow text-[var(--color-gold-soft)] font-medium">
                The Velmora Letter
              </span>
              <h2 className="mt-4 font-serif font-light text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.08] tracking-tight">
                Join for <em className="italic text-[var(--color-gold-soft)]">10% off</em>
                <br />
                your first order.
              </h2>
              <p className="mt-5 text-[var(--color-bone)]/70 max-w-md leading-relaxed">
                Quiet updates on new collections, restocks, and stories from the studio — once a fortnight, never more.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="w-full"
              aria-label="Newsletter sign up"
            >
              <div className="flex flex-col sm:flex-row items-stretch border border-[var(--color-bone)]/25 focus-within:border-[var(--color-gold-soft)] transition-colors">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-5 py-4 text-[var(--color-bone)] placeholder:text-[var(--color-bone)]/45 outline-none text-sm"
                />
                <button
                  type="submit"
                  className="px-7 py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-deep)] text-[var(--color-bone)] uppercase tracking-eyebrow text-[0.7rem] font-medium transition-colors inline-flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>
              <p className="mt-4 text-xs text-[var(--color-bone)]/55">
                By subscribing you agree to receive marketing emails. Unsubscribe anytime.
              </p>
              {submitted && (
                <p
                  role="status"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-gold-soft)] fade-up"
                >
                  <Check size={14} strokeWidth={2} />
                  Welcome — check your inbox for your code.
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}