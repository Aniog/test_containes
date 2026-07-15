import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("[Newsletter] Subscribed:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-espresso py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory">
            10% off your first order
          </h2>
          <p className="font-inter text-sm text-ivory/60 mt-4 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration,
            and exclusive member offers.
          </p>

          {submitted ? (
            <div className="mt-8 py-4 border border-gold/40">
              <p className="font-cormorant text-xl font-light text-gold italic">
                Welcome to Velmora
              </p>
              <p className="font-inter text-xs text-ivory/60 mt-1">
                Your 10% discount code is on its way.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/40 font-inter text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-white font-inter text-xs uppercase tracking-widest px-6 py-4 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-inter text-[10px] text-ivory/30 mt-4 uppercase tracking-wider">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
