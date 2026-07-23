import { useState } from "react";
import { Mail, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return;
    setDone(true);
  };

  return (
    <section className="bg-espresso py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <Mail className="mx-auto text-gold" size={26} strokeWidth={1.25} />
          <h2 className="mt-5 font-display text-4xl font-medium text-cream md:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/70">
            Early access to new drops, styling notes from the journal, and a
            welcome gift on your first order. No noise — just the good stuff.
          </p>

          {done ? (
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 border border-gold/50 bg-gold/10 px-6 py-4">
              <Check size={18} className="text-gold" />
              <p className="text-sm text-cream">
                Welcome to Velmora — your code is on its way to{" "}
                <span className="text-champagne">{email}</span>.
              </p>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="flex-1 border border-cream/25 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-cream transition-colors duration-300 hover:bg-gold-deep"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-[11px] text-cream/40">
            By subscribing you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
