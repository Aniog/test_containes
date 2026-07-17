import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

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
    <section className="py-20 md:py-28 bg-gold">
      <div className="max-w-content mx-auto px-5 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-cream/80 mb-4 reveal">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream reveal">
          10% Off Your First Order
        </h2>
        <p className="mt-4 text-cream/85 max-w-md mx-auto reveal">
          Be first to know about new collections, private sales, and styling notes.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3 reveal"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
            }}
            placeholder="Your email address"
            aria-label="Email address"
            className="flex-1 bg-cream/95 text-ink placeholder:text-stone px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-cream"
          />
          <button
            type="submit"
            className="bg-ink text-cream text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-ink-soft transition-colors flex items-center justify-center gap-2"
          >
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-cream">Welcome to Velmora — check your inbox.</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-ink">Please enter a valid email address.</p>
        )}
      </div>
    </section>
  );
}
