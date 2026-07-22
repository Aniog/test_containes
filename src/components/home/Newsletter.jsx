import React, { useState } from "react";
import { Check, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  return (
    <section className="bg-espresso">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-gold-soft">
            The Velmora Circle
          </p>
          <h2 className="reveal mt-4 font-serif text-4xl font-medium leading-[1.1] text-ivory md:text-5xl">
            Join for 10% off
            <br />
            your first order
          </h2>
          <p className="reveal mt-5 text-sm leading-relaxed text-[#D8CDBC] md:text-base">
            Early access to new drops, styling notes from the atelier, and
            members-only gifting editions. No noise — one beautiful letter a
            week.
          </p>

          {subscribed ? (
            <div className="reveal mx-auto mt-9 flex max-w-md items-center justify-center gap-3 border border-gold-soft/40 bg-gold-soft/10 px-6 py-5">
              <Check className="h-5 w-5 shrink-0 text-gold-soft" strokeWidth={1.5} />
              <p className="text-sm tracking-wide text-ivory">
                Welcome to the circle — your code{" "}
                <span className="font-semibold text-gold-soft">VELMORA10</span>{" "}
                is on its way.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="reveal mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              noValidate
            >
              <label className="relative flex-1">
                <span className="sr-only">Email address</span>
                <Mail
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ivory/50"
                  strokeWidth={1.5}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full border border-ivory/25 bg-transparent py-4 pl-11 pr-4 text-sm tracking-wide text-ivory placeholder:text-ivory/50 focus:border-gold-soft focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="bg-bronze px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:bg-gold-soft hover:text-espresso"
              >
                Subscribe
              </button>
            </form>
          )}
          {error && !subscribed && (
            <p className="mt-3 text-xs tracking-wide text-gold-soft">{error}</p>
          )}
        </div>
      </div>
    </section>
  );
}
