import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12">
        <div className="bg-ink text-bone px-7 py-16 md:p-20 lg:p-24 text-center reveal">
          <p className="text-[10px] font-medium tracking-wide-4 uppercase text-gold-light">
            The Velmora Circle
          </p>
          <h2
            id="newsletter-title"
            className="mt-5 font-serif font-light text-3xl md:text-5xl lg:text-6xl leading-[1.1] max-w-2xl mx-auto"
          >
            Join for <em className="italic text-gold-light">10% off</em> your first order
          </h2>
          <p
            id="newsletter-subtitle"
            className="mt-6 text-[15px] font-light text-bone/75 max-w-md mx-auto"
          >
            Early access to new collections, quiet notes from the studio, and the occasional 10% — never spam.
          </p>

          {submitted ? (
            <div className="mt-10 inline-flex items-center gap-3 text-bone">
              <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-ink" strokeWidth={2.5} />
              </span>
              <span className="text-sm font-light">Welcome — check your inbox for your code.</span>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 mx-auto max-w-md flex flex-col sm:flex-row gap-3"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-bone/30 text-bone placeholder-bone/40 px-5 py-3.5 text-sm font-light focus:border-bone focus:outline-none transition-colors"
              />
              <Button type="submit" variant="light" size="md" className="sm:w-auto">
                Subscribe
                <ArrowRight className="w-3.5 h-3.5 ml-2" strokeWidth={1.5} />
              </Button>
            </form>
          )}
          {error && (
            <p role="alert" className="mt-3 text-[11px] uppercase tracking-wide-2 text-rose">
              {error}
            </p>
          )}
          <p className="mt-6 text-[10px] uppercase tracking-wide-3 text-bone/45">
            By subscribing you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
