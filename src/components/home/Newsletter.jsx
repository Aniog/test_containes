import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-espresso py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ivory mb-3">
            10% Off Your First Order
          </h2>
          <p className="font-inter text-sm font-light text-stone-light/70 mb-10 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and an exclusive welcome offer.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-px bg-gold mx-auto" />
              <p className="font-cormorant text-xl italic text-ivory">
                Welcome to Velmora.
              </p>
              <p className="font-inter text-xs text-stone-light/60">
                Your 10% discount code is on its way to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-stone-light/20 text-ivory placeholder-stone-light/40 font-inter text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-espresso font-inter text-xs uppercase tracking-[0.2em] px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="font-inter text-[11px] text-stone-light/30 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
