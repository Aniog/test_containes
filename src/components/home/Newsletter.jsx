import { useState } from "react";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setJoined(true);
  };

  return (
    <section className="bg-espresso text-ivory">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <Reveal>
          <p className="text-xs tracking-[0.4em] uppercase text-gold-light">
            The Velmora Letter
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium md:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-sand/85">
            New arrivals, styling notes and early access to limited pieces —
            once a week, never more.
          </p>

          {joined ? (
            <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 border border-gold-light/40 px-6 py-4">
              <Check size={18} className="text-gold-light" />
              <p className="text-sm tracking-wide text-ivory">
                Welcome to Velmora — your code is on its way to {email}
              </p>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-13 flex-1 border border-ivory/25 bg-transparent px-5 py-4 text-sm text-ivory placeholder:text-sand/50 focus:border-gold-light focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gold px-8 py-4 text-xs font-semibold tracking-[0.3em] uppercase text-ivory transition-colors duration-300 hover:bg-gold-deep"
              >
                Subscribe
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
