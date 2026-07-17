import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setDone(true);
    setEmail("");
  };

  return (
    <section className="bg-gold-soft">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-ink-secondary">The Inner Circle</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-ink md:text-5xl">
              Join for <span className="italic">10% off</span> your first order
            </h2>
            <p className="mt-5 max-w-md text-ink-secondary leading-relaxed">
              Early access to new drops, private events, and the occasional
              love letter from our studio. No spam — only the good things.
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="flex w-full max-w-md items-center border-b-2 border-ink/70 md:justify-self-end md:w-full"
            aria-label="Newsletter signup"
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
              className="flex-1 bg-transparent py-4 text-base text-ink placeholder:text-ink/50 focus:outline-none"
            />
            <button
              type="submit"
              className="ml-3 inline-flex items-center gap-2 py-4 text-[11px] uppercase tracking-wider2 font-medium text-ink hover:text-ink-secondary"
            >
              Subscribe <ArrowRight size={14} strokeWidth={1.4} />
            </button>
          </form>
        </div>
        {done && (
          <p
            className="mt-6 text-sm text-ink"
            role="status"
          >
            Thank you. Your code is on its way to your inbox.
          </p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
