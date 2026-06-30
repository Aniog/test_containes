import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    // Simulate
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <section className="bg-primary/5 py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center md:px-12">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary">
          Newsletter
        </p>
        <h2 className="mt-4 font-serif text-3xl font-light text-foreground md:text-4xl">
          Join for 10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-foreground/50">
          Be the first to discover new collections, exclusive previews, and
          receive 10% off your first purchase.
        </p>

        {status === "success" ? (
          <p className="mt-8 font-sans text-sm text-primary">
            Thank you! Check your inbox for your welcome code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary whitespace-nowrap"
            >
              {status === "submitting" ? "Sending..." : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}