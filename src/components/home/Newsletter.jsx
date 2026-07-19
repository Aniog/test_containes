import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section
      aria-label="Newsletter"
      className="container-7xl py-20 md:py-28"
    >
      <div className="bg-ink text-ivory px-8 py-16 md:px-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow text-gold-soft">◆ Join the List</p>
          <h2
            id="section-newsletter-title"
            className="display-1 text-ivory mt-3 text-4xl md:text-5xl lg:text-6xl text-balance"
          >
            10% off your first order.
          </h2>
          <p className="text-sm md:text-base text-ivory/75 mt-5 max-w-md leading-relaxed">
            Be the first to see new pieces, restocks and the occasional
            behind-the-scenes from the studio. No spam, ever.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-5 w-full"
          aria-label="Subscribe to newsletter"
        >
          {submitted ? (
            <div className="flex items-center gap-3 text-ivory">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold-soft text-ink">
                <Check className="w-4 h-4" strokeWidth={1.75} />
              </span>
              <p className="text-sm">
                Welcome in. Check your inbox for your code.
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row items-stretch border border-ivory/30 focus-within:border-ivory/70 transition-colors">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-transparent text-ivory placeholder-ivory/50 px-4 py-4 text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-ivory text-ink px-6 py-4 text-[11px] uppercase tracking-eyebrow font-medium hover:bg-gold-soft transition-colors"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
              <p className="mt-3 text-[11px] text-ivory/55 tracking-wide">
                By subscribing, you agree to our Privacy Policy. Unsubscribe at
                any time.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
