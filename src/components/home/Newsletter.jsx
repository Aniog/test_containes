import React, { useState } from "react";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success | error

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="relative bg-mocha text-cream py-20 md:py-28 overflow-hidden">
      {/* faint background image */}
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="newsletter-bg-velmora-5e2d8a"
        data-strk-bg="[newsletter-title] gold demi-fine jewelry close-up texture warm editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-mocha/65" />

      <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="font-sans uppercase tracking-widest2 text-[11px] text-cream/70 mb-5">
          The Velmora List
        </p>
        <h2
          id="newsletter-title"
          className="font-serif text-3xl md:text-5xl leading-tight"
        >
          Join for <span className="italic text-gilt">10% off</span> your first order.
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-cream/80 leading-relaxed">
          Early access to new collections, restock alerts, and quiet, infrequent
          letters from our founder.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 max-w-lg mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            aria-label="Email address"
            className="flex-1 bg-transparent border border-cream/30 text-cream placeholder-cream/50 px-5 py-4 font-sans text-sm focus:outline-none focus:border-champagne transition-colors duration-300"
          />
          <Button type="submit" variant="accent" size="md" className="sm:px-8">
            Subscribe
          </Button>
        </form>
        {status === "success" ? (
          <p className="mt-5 text-sm text-gilt">
            Welcome to Velmora — check your inbox for your code.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="mt-5 text-sm text-cream/80">
            Please enter a valid email address.
          </p>
        ) : null}
        <p className="mt-6 text-[11px] uppercase tracking-widest2 text-cream/50">
          By subscribing, you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
