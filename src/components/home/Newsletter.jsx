import React, { useState } from "react";
import { Check, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="reveal font-sans text-xs font-semibold uppercase tracking-overline text-goldSoft">
          The Velmora List
        </span>
        <h2 className="reveal mt-4 font-display text-3xl leading-tight text-cream md:text-5xl">
          Join for 10% off your first order
        </h2>
        <p className="reveal mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/70">
          New arrivals, styling notes and private offers — delivered with
          restraint, never noise.
        </p>

        {done ? (
          <div className="reveal is-visible mx-auto mt-9 flex max-w-md items-center justify-center gap-2 border border-gold/40 bg-gold/10 px-6 py-4 text-goldSoft">
            <Check size={18} className="text-gold" />
            <span className="text-sm font-medium">
              Welcome to the list. Your code is on its way.
            </span>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="reveal mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label className="relative flex-1">
              <Mail
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cream/40"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full border border-cream/20 bg-cream/5 py-4 pl-11 pr-4 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="bg-gold px-8 py-4 font-sans text-[13px] font-semibold uppercase tracking-luxe text-cream transition-colors hover:bg-goldDark"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
