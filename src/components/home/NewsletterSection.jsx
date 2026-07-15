import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-velmora-gold/10">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
          Join the List
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-wide md:text-4xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-velmora-charcoal/80">
          Be the first to know about new drops, styling tips, and exclusive
          offers.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl text-velmora-ink">
            Welcome to Velmora — check your inbox.
          </p>
        ) : (
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
              className="bg-white border-white"
            />
            <Button type="submit" variant="accent" className="shrink-0">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
