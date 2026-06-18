import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="bg-ink text-ivory py-20 md:py-28">
      <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="max-w-md">
          <p className="text-[11px] uppercase tracking-wider2 text-goldSoft mb-3">The Velmora Letter</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Join for 10% off your first order.
          </h2>
          <p className="mt-5 text-ivory/70 text-base leading-relaxed">
            Quiet dispatches — new pieces, styling notes, and the occasional studio detail.
            Once a month, never more.
          </p>
        </div>

        <div>
          {submitted ? (
            <div className="border border-goldSoft/40 px-6 py-8 flex items-start gap-4">
              <Check size={20} strokeWidth={1.5} className="text-goldSoft flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-serif text-2xl">Welcome to Velmora.</p>
                <p className="mt-2 text-sm text-ivory/70">
                  Your code is on its way to <span className="text-goldSoft">{email}</span>.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex items-center border-b border-ivory/30 focus-within:border-goldSoft transition">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-transparent py-3 text-ivory placeholder:text-ivory/40 focus:outline-none text-base"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="ml-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-editorial text-goldSoft hover:text-ivory transition"
                >
                  Sign Up
                  <ArrowRight size={14} strokeWidth={1.6} />
                </button>
              </div>
              {error && (
                <p role="alert" className="mt-3 text-xs text-goldSoft">
                  {error}
                </p>
              )}
              <p className="mt-4 text-xs text-ivory/40">
                By subscribing you agree to receive marketing emails from Velmora.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
