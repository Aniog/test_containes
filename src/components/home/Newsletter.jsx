import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  return (
    <section
      aria-labelledby="newsletter-title"
      className="bg-charcoal text-bone py-20 md:py-28"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow text-bone/70 mb-5">The Inner Circle</p>
            <h2
              id="newsletter-title"
              className="font-serif text-h2 md:text-[52px] leading-[1.05] text-bone"
            >
              Join for{" "}
              <em className="italic font-normal text-champagne-soft">
                10% off
              </em>{" "}
              your first order
            </h2>
            <p className="mt-4 text-body text-bone/70 max-w-lg">
              Early access to new collections, restock alerts, and a slow, considered
              letter from the studio — once a month, never more.
            </p>
          </div>

          <div className="md:col-span-5">
            {done ? (
              <div className="flex items-center gap-4 border border-bone/20 p-6">
                <span className="w-10 h-10 grid place-items-center bg-champagne text-ink">
                  <Check className="w-4 h-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-serif text-2xl text-bone">You're in.</p>
                  <p className="text-small text-bone/70 mt-1">
                    Check your inbox for your code.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="flex flex-col sm:flex-row gap-3"
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
                  className="flex-1 bg-transparent border border-bone/30 text-bone placeholder:text-bone/45 px-4 py-4 text-body focus:outline-none focus:border-champagne transition-colors"
                />
                <button type="submit" className="btn-primary !bg-bone !text-ink hover:!bg-champagne-soft">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-3" strokeWidth={1.5} />
                </button>
              </form>
            )}
            <p className="text-[11px] uppercase tracking-[0.2em] text-bone/45 mt-4">
              By subscribing, you agree to receive marketing email. Unsubscribe any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
