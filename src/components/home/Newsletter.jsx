import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useToast } from "@/context/ToastContext";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { push } = useToast();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      push("Please enter a valid email");
      return;
    }
    setSubmitted(true);
    push("Welcome — check your inbox for 10% off");
  };

  return (
    <section className="bg-espresso py-20 text-cream md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <p id="newsletter-eyebrow" className="font-sans text-[11px] tracking-[0.32em] uppercase text-gold-soft">
          Welcome to Velmora
        </p>
        <h2
          id="newsletter-title"
          className="display-lg mt-4 text-cream"
        >
          Join for <em className="italic text-gold-soft">10% off</em> your first order.
        </h2>
        <p
          id="newsletter-subtitle"
          className="mt-5 font-serif text-[16px] italic text-cream/70"
        >
          Early access to new collections, occasional stories from the atelier, and
          the occasional discount — never spam.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 flex max-w-lg flex-col items-stretch gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 border border-cream/30 bg-transparent px-5 py-4 font-sans text-[14px] text-cream placeholder:text-cream/40 focus:border-gold-soft focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 font-sans text-[11px] tracking-[0.28em] uppercase text-espresso transition-colors duration-500 ease-editorial hover:bg-gold-soft"
          >
            {submitted ? (
              <>
                <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                Subscribed
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
