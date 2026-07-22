import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="bg-brand-ivory px-6 py-16 lg:px-10 lg:py-24">
      <div
        className={cn(
          "mx-auto max-w-[1400px] bg-brand-rose px-6 py-14 text-center md:px-12 lg:py-20",
          isVisible && "animate-fadeUp"
        )}
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/80">
          The Velmora Edit
        </p>
        <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl text-white md:text-5xl">
          Join for 10% Off Your First Order
        </h2>

        {submitted ? (
          <p className="mt-8 text-sm font-medium uppercase tracking-widest text-white">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 flex-1 border-b-2 border-white/40 bg-transparent px-4 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
            />
            <Button
              type="submit"
              variant="secondary"
              className="bg-white text-brand-charcoal hover:bg-brand-cream"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
