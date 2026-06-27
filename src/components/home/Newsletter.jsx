import * as React from "react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

export function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("idle");
  const textRef = useReveal();
  const formRef = useReveal();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Simulated submission — in a real app, this would call a marketing endpoint.
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <section className="bg-gold text-cocoa py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div ref={textRef} className="reveal md:col-span-7">
          <p className="text-[11px] uppercase tracking-eyebrow font-medium text-cocoa/70">
            The Velmora List
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-cocoa leading-[1.05] max-w-2xl">
            Join for 10% off<br />your first order.
          </h2>
          <p className="mt-5 text-sm md:text-base text-cocoa/80 leading-relaxed max-w-md">
            Subscribe for early access to new collections, studio notes, and
            occasional dispatches from the bench. No spam — promise.
          </p>
        </div>

        <div ref={formRef} className="reveal reveal-delay-1 md:col-span-5">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4"
          >
            <div className="flex-1">
              <label
                htmlFor="newsletter-email"
                className="block text-[10px] uppercase tracking-eyebrow font-medium text-cocoa/70 mb-2"
              >
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                className="w-full bg-transparent text-cocoa placeholder:text-cocoa/50 border-b border-cocoa/40 focus:border-cocoa focus:outline-none h-12 px-0"
              />
            </div>
            <Button
              type="submit"
              variant="inverted"
              size="md"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </Button>
          </form>
          <p
            className="mt-4 text-xs text-cocoa/70 min-h-[18px]"
            aria-live="polite"
          >
            {status === "success" && "Welcome to the list. Check your inbox."}
            {status === "error" && "Please enter a valid email address."}
            {status === "idle" &&
              "By subscribing, you agree to our privacy policy."}
          </p>
        </div>
      </div>
    </section>
  );
}
