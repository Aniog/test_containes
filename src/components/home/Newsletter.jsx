import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-velmora">
        <div className="bg-velmora-accent px-6 py-14 text-center text-white md:px-16 md:py-20">
          <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/80">
            Join the Inner Circle
          </p>
          <h2 className="mx-auto max-w-xl font-serif text-3xl tracking-wide md:text-4xl">
            10% Off Your First Order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/85">
            Be the first to shop new drops, restocks, and editorials. No spam,
            just beautiful jewelry.
          </p>

          {status === "success" ? (
            <p className="mt-8 text-sm font-medium uppercase tracking-widest text-white">
              Welcome to Velmora.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:border-white focus:ring-white"
                required
              />
              <Button
                type="submit"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-velmora-accent"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
