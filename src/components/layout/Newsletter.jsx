import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  function onSubmit(e) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section className="bg-taupe">
      <div className="max-w-3xl mx-auto px-5 md:px-10 py-20 md:py-28 text-center">
        <div className="hairline-gold w-12 mx-auto mb-8" />
        <h2 className="font-serif text-3xl md:text-5xl text-espresso leading-tight">
          Join for 10% off your first order
        </h2>
        <p className="mt-5 text-base text-espresso-soft max-w-md mx-auto leading-relaxed">
          Studio dispatches, gifting edits, and early access — sent with care, twice a month.
        </p>
        <form
          onSubmit={onSubmit}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center max-w-lg mx-auto border-b border-espresso/30 focus-within:border-espresso transition-colors"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-transparent py-4 text-base text-espresso placeholder:text-espresso-soft focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="text-label text-espresso hover:text-champagne-deep transition-colors py-4 px-2 flex items-center gap-2 justify-center"
          >
            Subscribe
            <ArrowRight strokeWidth={1.25} className="w-4 h-4" />
          </button>
        </form>
        <div className="h-5 mt-3">
          {status === "success" && (
            <p className="text-sm text-espresso">
              Welcome to Velmora. Check your inbox.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-espresso-soft">
              Please enter a valid email address.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}