import React, { useState } from "react";
import { useReveal } from "@/lib/useReveal.js";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner.jsx";

export default function Newsletter() {
  const ref = useReveal();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setEmail("");
      toast.success("Welcome to Velmora — check your inbox for 10% off.");
    }, 600);
  };

  return (
    <section
      id="newsletter"
      className="relative bg-ink-900 text-cream-100 py-20 sm:py-28 overflow-hidden"
    >
      {/* Decorative gold gradient blob */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(184,147,90,0.6) 0%, rgba(184,147,90,0) 70%)",
        }}
      />

      <Toaster position="bottom-center" richColors closeButton />

      <div className="relative mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
        <div
          ref={ref}
          className="reveal max-w-2xl mx-auto text-center"
        >
          <p className="eyebrow text-cream-200/70">Insider List</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] text-cream-100">
            Join for 10% off your first order
          </h2>
          <p className="mt-5 text-sm sm:text-[15px] text-cream-200/80 leading-relaxed max-w-md mx-auto">
            Early access to new releases, atelier notes, and a quiet hello from us — never spam, always worth opening.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto"
            aria-label="Newsletter signup form"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email"
              className="flex-1 bg-transparent text-cream-100 placeholder:text-cream-200/40 text-sm py-3 px-4 border border-cream-200/30 focus:border-gold-300 outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={submitting}
              className="btn-gold py-3 px-6 disabled:opacity-60"
            >
              {submitting ? "Joining…" : "Subscribe"}
            </button>
          </form>
          <p className="mt-4 text-[10px] tracking-[0.24em] uppercase text-cream-200/50">
            By subscribing you agree to our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
}
