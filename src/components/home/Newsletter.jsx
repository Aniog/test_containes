import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="bg-gold py-16 text-white sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-white/80">
          Join the List
        </p>
        <h2 className="font-serif text-3xl font-light sm:text-4xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/90">
          Be the first to know about new drops, styling tips, and exclusive
          offers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 border-white/30 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white"
          />
          <Button
            type="submit"
            variant="secondary"
            className="h-12 shrink-0 px-8"
          >
            Subscribe
          </Button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm font-medium text-white">
            Thank you. Your discount code is on its way.
          </p>
        )}
      </div>
    </section>
  );
}
