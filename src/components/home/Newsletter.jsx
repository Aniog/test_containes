import React, { useState } from "react";
import { Mail, Check } from "lucide-react";
import { toast } from "sonner";
import Reveal from "@/components/ui/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setDone(true);
    toast.success("Welcome to Velmora — your 10% code is on its way.");
    setEmail("");
    window.setTimeout(() => setDone(false), 3500);
  };

  return (
    <section className="bg-espresso">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 md:py-24">
        <Reveal>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
            <Mail size={20} strokeWidth={1.6} />
          </span>
          <h2 className="mt-6 font-display text-3xl leading-tight text-ivory md:text-5xl">
            Join for <span className="italic text-gold">10% off</span> your first order
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-ivory/70">
            Be first to know about new pieces, private sales, and stories from the
            atelier. No noise — just the good stuff.
          </p>

          <form onSubmit={submit} className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 border border-line-dark bg-transparent px-5 py-3.5 font-body text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gold px-7 py-3.5 font-body text-[12px] font-semibold uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:bg-gold-deep hover:text-ivory"
            >
              {done ? <Check size={15} /> : null}
              {done ? "You're In" : "Subscribe"}
            </button>
          </form>
          <p className="mt-4 font-body text-[11px] text-ivory/40">
            By subscribing you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
