import { useState } from "react";
import { Send, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setDone(true);
    setEmail("");
  };

  return (
    <section className="bg-cream">
      <div className="container-editorial pb-20 md:pb-28">
        <div className="bg-ink text-cream px-7 py-14 md:px-16 md:py-20 lg:px-20 lg:py-24 text-center">
          <p className="text-[10px] md:text-[11px] uppercase tracking-widest-2 text-accent-soft font-medium">
            The inner circle
          </p>
          <h2 className="mt-5 font-serif font-light text-cream leading-[1.05] text-balance"
              style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)" }}>
            Join for 10% off your first order.
          </h2>
          <p className="mt-5 text-[15px] md:text-base text-cream/75 max-w-md mx-auto leading-relaxed">
            Quiet dispatches: new collections, restocks, and the stories behind
            the pieces. No noise.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
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
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-cream/30 px-5 py-4
                         text-cream placeholder:text-cream/50
                         focus:border-accent focus:outline-none transition-colors
                         text-[14px] font-sans"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-accent text-ivory px-7 py-4
                         font-sans uppercase tracking-widest-2 text-[11px] md:text-xs font-medium
                         transition-colors duration-300 ease-out hover:bg-accent-deep
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              {done ? (
                <>
                  Subscribed
                  <Check className="w-3.5 h-3.5" strokeWidth={1.8} />
                </>
              ) : (
                <>
                  Subscribe
                  <Send className="w-3.5 h-3.5" strokeWidth={1.6} />
                </>
              )}
            </button>
          </form>
          <p className="mt-5 text-[11px] text-cream/45">
            By subscribing you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
