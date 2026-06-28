import { useState } from "react";
import { Mail, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="bg-onyx text-ivory">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6">
            <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-champagne">
              The Velmora List
            </span>
            <h2 className="mt-3 font-serif font-light text-4xl md:text-5xl tracking-tight">
              Join for <em className="not-italic text-champagne">10% off</em><br />
              your first order.
            </h2>
            <p className="mt-5 font-sans text-ivory/75 max-w-md leading-relaxed">
              Quiet drops, gifting edits, and styling letters. No spam, ever.
              Unsubscribe in one tap.
            </p>
          </div>

          <div className="md:col-span-6">
            {submitted ? (
              <div className="flex items-start gap-4 border border-champagne/40 p-6 md:p-8">
                <div className="w-10 h-10 rounded-full bg-champagne text-onyx flex items-center justify-center shrink-0">
                  <Check size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-2xl text-ivory">
                    Welcome to Velmora.
                  </p>
                  <p className="font-sans text-sm text-ivory/75 mt-2">
                    Check your inbox — your 10% code is on its way.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="w-full">
                <label
                  htmlFor="newsletter-email"
                  className="font-sans text-[11px] uppercase tracking-[0.28em] text-ivory/60"
                >
                  Email address
                </label>
                <div className="mt-3 flex items-center border-b border-ivory/40 focus-within:border-champagne transition-colors">
                  <Mail size={18} strokeWidth={1.25} className="text-ivory/60 mr-3" />
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent py-3 font-sans text-base text-ivory placeholder:text-ivory/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="ml-2 font-sans text-[11px] uppercase tracking-[0.28em] text-champagne hover:text-ivory transition-colors py-3 pl-2"
                  >
                    Subscribe
                  </button>
                </div>
                {error && (
                  <p className="mt-3 font-sans text-xs text-champagne">
                    {error}
                  </p>
                )}
                <p className="mt-4 font-sans text-xs text-ivory/50">
                  By subscribing, you agree to our Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
