import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubscribed(true);
  };

  return (
    <section className="bg-espresso py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 text-center md:px-10">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-goldlight">
            The Velmora List
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-ivory md:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
            New pieces, quiet launches and stories from the atelier — once a
            week, never more.
          </p>

          {subscribed ? (
            <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 border border-linedark bg-noir/40 px-6 py-4">
              <Check size={16} className="text-goldlight" />
              <p className="text-sm text-ivory">
                Welcome to the list — your code is on its way.
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 border border-linedark bg-noir/40 px-5 py-4 text-sm text-ivory placeholder:text-stone focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-goldlight"
              >
                Subscribe <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
