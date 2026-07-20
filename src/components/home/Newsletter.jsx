import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-espresso text-ivory">
      <div className="container-velmora py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="eyebrow text-bronze-light mb-4">Join the Atelier</p>
            <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl text-ivory text-balance">
              10% off your <em className="italic">first</em> order.
            </h2>
            <p className="mt-5 text-base md:text-lg text-ivory/75 max-w-md text-pretty">
              Be the first to know about new collections, restocks, and the
              occasional studio story. No noise, just considered things.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="flex items-center gap-3 text-ivory">
                <span className="w-10 h-10 inline-flex items-center justify-center bg-bronze/20 border border-bronze/40">
                  <Check className="w-5 h-5 text-bronze-light" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-serif text-2xl">Welcome to Velmora.</p>
                  <p className="text-sm text-ivory/70 mt-1">
                    Your code is on its way to {email}.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="flex flex-col sm:flex-row items-stretch gap-3"
                noValidate
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-transparent text-ivory placeholder:text-ivory/50 border-b border-ivory/30 focus:border-bronze-light py-3 text-sm focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 bg-bronze text-espresso px-7 py-3.5 text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300 ease-editorial hover:bg-bronze-light"
                >
                  Subscribe
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </button>
              </form>
            )}
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-ivory/50">
              By subscribing you agree to our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
