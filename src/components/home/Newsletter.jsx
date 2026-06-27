import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="bg-velmora-gold px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center text-velmora-dark">
        <h2 className="font-serif text-3xl font-medium md:text-4xl">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-base text-velmora-dark/80">
          Be the first to see new arrivals, styling notes, and exclusive offers.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 border-b-2 border-velmora-dark/30 bg-transparent px-4 py-3 text-sm text-velmora-dark placeholder:text-velmora-dark/50 focus:border-velmora-dark focus:outline-none"
          />
          <button
            type="submit"
            className="bg-velmora-dark px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-velmora-cream transition-colors hover:bg-velmora-charcoal"
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm font-medium">
            Thank you — your code is on its way.
          </p>
        )}
      </div>
    </section>
  );
}
