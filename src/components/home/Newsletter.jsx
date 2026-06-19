import React, { useState } from "react";
import { Mail, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email.");
      setStatus("error");
      return;
    }
    setError("");
    setStatus("submitting");
    // Local-only demo. A real implementation would call the backend.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    setEmail("");
  };

  return (
    <section
      id="journal"
      className="bg-terracotta text-ivory py-20 md:py-28 lg:py-32 relative overflow-hidden"
      aria-labelledby="newsletter-title"
    >
      {/* Soft texture using radial gradients — no external image */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#B86755] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#8C453F] blur-3xl" />
      </div>

      <div className="relative max-w-[820px] mx-auto px-5 md:px-8 text-center">
        <p className="eyebrow text-ivory/75 mb-5 md:mb-6">
          Join the Velmora circle
        </p>
        <h2
          id="newsletter-title"
          className="text-display text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] text-ivory leading-[1.05]"
        >
          <span className="text-display-italic">10% off</span> your first order.
        </h2>
        <p className="mt-6 md:mt-8 font-serif italic text-[1.0625rem] md:text-[1.1875rem] text-ivory/90 max-w-[48ch] mx-auto leading-[1.65]">
          Be the first to know about new collections, restocks, and the
          occasional studio journal. No noise, just signal.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 md:mt-14 max-w-[520px] mx-auto"
          noValidate
        >
          <div
            className={cn(
              "flex flex-col sm:flex-row items-stretch bg-ivory/10 backdrop-blur-sm border border-ivory/30 overflow-hidden transition-colors",
              status === "error" && "border-red-300/70",
            )}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex items-center px-5 sm:pl-6 sm:pr-3 py-4 sm:py-0 sm:h-14 flex-1">
              <Mail
                className="w-4 h-4 text-ivory/70 shrink-0 mr-3"
                strokeWidth={1.4}
              />
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="your@email.com"
                className="w-full bg-transparent border-0 outline-none placeholder:text-ivory/55 text-ivory font-sans text-sm sm:text-[0.9375rem]"
                disabled={status === "submitting" || status === "success"}
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="bg-ivory text-terracotta eyebrow-sm px-6 sm:px-7 py-4 sm:py-0 sm:h-14 hover:bg-cream transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === "submitting"
                ? "Sending..."
                : status === "success"
                  ? "Subscribed"
                  : (
                    <>
                      Subscribe
                      <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                    </>
                  )}
            </button>
          </div>

          {status === "success" && (
            <p
              className="mt-4 flex items-center justify-center gap-2 eyebrow-sm text-ivory"
              role="status"
            >
              <Check className="w-3.5 h-3.5" strokeWidth={2} />
              You&rsquo;re in. Check your inbox for your code.
            </p>
          )}
          {status === "error" && error && (
            <p className="mt-4 eyebrow-sm text-red-100" role="alert">
              {error}
            </p>
          )}
          <p className="mt-5 text-xs text-ivory/70 leading-[1.6]">
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}