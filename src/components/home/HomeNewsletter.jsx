import React, { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export default function HomeNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    const valid = /^\S+@\S+\.\S+$/.test(email);
    if (!valid) {
      setStatus("error");
      toast.error("Please enter a valid email.");
      return;
    }
    setStatus("success");
    toast.success("Welcome — check your inbox for 10% off.");
    setEmail("");
  };

  return (
    <section className="container-editorial py-20 md:py-28">
      <div className="bg-ink text-ivory p-8 md:p-16 lg:p-20 relative overflow-hidden">
        {/* Decorative gold glints */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, #D4B27C 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #B08949 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-2xl">
          <div className="label-eyebrow text-ivory/60 mb-4">
            The Velmora Letter
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-ivory">
            Join for <em className="italic text-gold-light">10% off</em>
            <br />
            your first order.
          </h2>
          <p className="mt-4 text-ivory/70 max-w-md text-sm md:text-base">
            New arrivals, styling notes, and early access — delivered once a week, never more.
          </p>
          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 max-w-lg"
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              className="flex-1 bg-transparent border border-ivory/30 px-4 py-3.5 text-ivory placeholder:text-ivory/40 focus:border-gold-light focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-ivory text-ink px-6 py-3.5 text-[11px] tracking-[0.32em] uppercase font-medium hover:bg-gold-light transition-colors"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
          <p className="mt-3 text-[11px] tracking-[0.22em] uppercase text-ivory/40">
            By subscribing you agree to our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
}
