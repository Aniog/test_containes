import React, { useState } from "react";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("invalid");
      return;
    }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4500);
  };

  return (
    <section className="bg-ink-950 text-textondark">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="label-cap text-champagne-300">The List</span>
            <h2
              id="newsletter-title"
              className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05]"
            >
              Join for 10% off
              <br /> your first order.
            </h2>
            <p
              id="newsletter-subtitle"
              className="mt-5 text-textmuteondark max-w-md leading-relaxed"
            >
              Early access to new pieces, occasional stories from the studio, and a
              quiet hello when something special arrives. No noise.
            </p>
          </div>
          <div className="lg:col-span-6">
            <form onSubmit={onSubmit} className="space-y-4" aria-label="Newsletter signup">
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="Your email address"
                  className="flex-1 bg-transparent border-b border-textmuteondark text-textondark placeholder:text-textmuteondark focus:border-champagne-300 outline-none py-3 text-sm editorial-transition"
                />
                <Button type="submit" variant="accent" size="lg">
                  Subscribe
                </Button>
              </div>
              <p
                className="text-xs text-textmuteondark"
                role="status"
                aria-live="polite"
              >
                {status === "success" && (
                  <span className="text-champagne-300">
                    Welcome — your code is on its way to your inbox.
                  </span>
                )}
                {status === "invalid" && (
                  <span className="text-champagne-300">
                    Please enter a valid email address.
                  </span>
                )}
                {status === "idle" && (
                  <span>
                    By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
                  </span>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
