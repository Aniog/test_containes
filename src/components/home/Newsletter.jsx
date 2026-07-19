import { useState } from "react";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("success");
    setEmail("");
    window.setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      aria-labelledby="newsletter-title"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="newsletter-bg"
        data-strk-bg="[newsletter-eyebrow] [newsletter-title] [newsletter-sub] warm gold jewelry flatlay"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-ink-300/85" />

      <div className="relative mx-auto max-w-editorial px-6 py-20 text-center text-cream-100 md:px-10 md:py-28 lg:px-14">
        <p id="newsletter-eyebrow" className="eyebrow text-gold-300">
          Join the Atelier
        </p>
        <h2
          id="newsletter-title"
          className="mt-3 font-serif text-4xl leading-tight md:text-5xl"
        >
          10% off your first order
        </h2>
        <p
          id="newsletter-sub"
          className="mx-auto mt-4 max-w-md text-base text-cream-100/80"
        >
          Be first to know about new pieces, restocks, and the occasional
          studio sale.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          aria-label="Subscribe to our newsletter"
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="h-12 flex-1 border border-cream-100/30 bg-transparent px-4 text-sm text-cream-100 placeholder:text-cream-100/55 focus:border-gold-300 focus:outline-none"
          />
          <button type="submit" className="btn-primary h-12 bg-gold-300 border-gold-300 text-ink-300 hover:bg-cream-100 hover:border-cream-100">
            Subscribe
          </button>
        </form>
        {status === "success" && (
          <p
            role="status"
            className="mt-4 text-xs text-gold-300"
          >
            Welcome to the Atelier — your code is on its way.
          </p>
        )}
        <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-cream-100/55">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
