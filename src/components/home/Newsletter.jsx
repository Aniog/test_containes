import React, { useState } from "react";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
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
    <section id="newsletter" className="bg-gold-pale/70">
      <div className="container-shell py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <span className="eyebrow">The Velmora Circle</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl md:text-[56px] text-ink leading-[1.05]">
              Join for 10% off
              <br />
              <span className="italic">your first order.</span>
            </h2>
            <p className="mt-5 text-ink/70 text-[15px] leading-relaxed max-w-lg">
              Early access to new collections, occasional studio notes, and a
              quiet inbox — never noise.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-5 md:pl-6 lg:pl-12"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex items-center gap-3 border-b border-ink/50 focus-within:border-ink transition-colors pb-3">
              <Mail size={16} strokeWidth={1.5} className="text-ink/70" />
              <input
                id="newsletter-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-0 outline-none text-ink placeholder:text-ink/40 text-[15px] py-2"
                required
              />
              <button
                type="submit"
                disabled={submitting}
                className="text-[11px] uppercase tracking-[0.24em] text-ink hover:text-cocoa-soft disabled:opacity-50"
              >
                {submitting ? "Joining…" : "Subscribe"}
              </button>
            </div>
            <p className="mt-3 text-xs text-ink/55">
              By subscribing you agree to receive marketing emails. Unsubscribe
              at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
