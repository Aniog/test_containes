import React, { useState } from "react";
import { MailOpen, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  return (
    <section className="bg-gold-tint py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <MailOpen size={26} strokeWidth={1.25} className="mx-auto text-gold-deep" />
          <h2 className="mt-5 font-serif text-3xl font-medium text-ink md:text-4xl">
            Join for 10% off your first order
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            Early access to new pieces, atelier notes, and offers we never post publicly. One
            considered letter a month — never more.
          </p>

          {done ? (
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 border border-gold bg-cream px-6 py-4 animate-fade-in">
              <Check size={18} className="text-gold-deep" />
              <p className="text-sm font-medium text-ink">
                Welcome to Velmora — your code is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-13 flex-1 border border-ink/20 bg-cream px-5 py-4 text-sm text-ink placeholder:text-taupe focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="bg-ink px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-gold-deep"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
