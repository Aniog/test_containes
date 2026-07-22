import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-champagne">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-widest2 text-gold-deep mb-4">
            Join the List
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 text-ink/70">
            Be first to know about new collections, private sales, and styling
            notes from the studio.
          </p>

          {submitted ? (
            <p className="mt-8 font-serif text-2xl text-ink italic">
              Thank you — check your inbox for your code.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-ivory/70 border border-ink/15 px-5 py-3.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-espresso text-ivory px-7 py-3.5 text-[11px] uppercase tracking-widest2 font-medium hover:bg-ink transition-colors"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-ink/50">
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
