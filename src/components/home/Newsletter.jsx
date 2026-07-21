import React, { useState } from "react";
import { MailOpen, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 700);
  };

  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-soft/40 text-gold-soft">
            <MailOpen size={20} strokeWidth={1.5} />
          </span>
          <h2 className="mt-7 font-serif text-4xl font-medium text-ivory md:text-5xl">
            Join for <em className="italic text-gold-soft">10% off</em> your
            first order
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ivory/60">
            Early access to new collections, private sales, and stories from the
            atelier. No noise — just gold.
          </p>

          {status === "success" ? (
            <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 border border-gold-soft/40 bg-gold-soft/10 px-6 py-4">
              <Check size={16} className="text-gold-soft" />
              <p className="text-sm text-ivory">
                Welcome to Velmora — your code is on its way.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="flex-1 border border-line-dark bg-transparent px-5 py-4 text-sm text-ivory placeholder:text-ivory/40 outline-none transition-colors focus:border-gold-soft"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-gold-deep disabled:opacity-60"
              >
                {status === "submitting" ? "Joining…" : "Subscribe"}
              </button>
            </form>
          )}
          {error && (
            <p className="mt-3 text-xs text-gold-soft" role="alert">
              {error}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
