import React, { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { toast } from "sonner";
import Reveal from "@/components/ui/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("Welcome to Velmora — your 10% code is on its way");
    setEmail("");
  };

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <Reveal>
          <Mail className="mx-auto h-6 w-6 text-gold-soft" strokeWidth={1.25} />
          <p className="eyebrow mt-5 text-gold-soft">The Velmora Letter</p>
          <h2 className="mt-3 font-serif text-4xl font-light text-ivory md:text-5xl">
            Join for <span className="italic text-gold-soft">10% off</span> your
            first order
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-muted-dark">
            New arrivals, styling notes and early access to small-batch drops.
            Once a week, never more.
          </p>
          <form
            onSubmit={submit}
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full flex-1 rounded-none border border-line-dark bg-transparent px-4 py-3.5 text-sm text-ivory placeholder:text-muted-dark/70 focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn-gold shrink-0">
              Subscribe
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
