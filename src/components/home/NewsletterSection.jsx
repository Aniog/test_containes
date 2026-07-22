import React, { useState } from "react";
import { MailOpen, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubmitted(true);
    toast.success("Welcome to Velmora — your 10% code is on its way");
  };

  return (
    <section className="border-t border-noir-line bg-gradient-to-b from-noir to-noir-soft">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
        <MailOpen className="mx-auto h-8 w-8 text-gold" />
        <h2 className="mt-6 font-serif text-3xl font-medium text-cream md:text-5xl">
          Join for <span className="italic text-gold-soft">10% off</span> your first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-sand">
          Early access to new pieces, private sales, and stories from the atelier. No noise —
          just the good things.
        </p>

        {submitted ? (
          <div className="mx-auto mt-9 max-w-md border border-gold/40 bg-gold/10 px-6 py-5">
            <p className="font-serif text-xl italic text-gold-soft">
              You're on the list. Welcome to Velmora.
            </p>
            <p className="mt-2 text-xs text-sand">
              Watch your inbox — your welcome code arrives shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="h-13 flex-1 border border-noir-line bg-noir px-5 py-4 text-sm text-cream placeholder:text-sand/70 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-[11px] font-bold uppercase tracking-luxe text-noir transition-colors duration-300 hover:bg-gold-deep"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-sand/80">
          By subscribing you agree to our privacy policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
