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
    <section className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7">
            <p className="text-[11px] tracking-[0.35em] uppercase text-gold-soft mb-5">
              The Velmora List
            </p>
            <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Join for 10% off your<br />first order.
            </h2>
            <p className="mt-6 text-cream/70 max-w-md leading-relaxed">
              Early access to new collections, slow-craft notes, and a small
              welcome gift in your inbox.
            </p>
          </div>

          <div className="md:col-span-5">
            {submitted ? (
              <div className="flex items-center gap-3 text-cream border-b border-cream/30 pb-4">
                <Check size={18} strokeWidth={1.5} className="text-gold-soft" />
                <p className="text-sm tracking-wide">
                  Thank you — your code is on its way.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="w-full">
                <div className="flex items-center border-b border-cream/30 focus-within:border-gold-soft transition-colors">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 bg-transparent py-4 outline-none text-cream placeholder:text-cream/45 text-sm tracking-wide"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="ml-3 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-cream hover:text-gold-soft transition-colors"
                  >
                    Subscribe <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
                <p className="mt-4 text-xs text-cream/50">
                  By subscribing you agree to our Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
