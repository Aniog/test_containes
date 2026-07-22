import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("[Newsletter] Subscribing:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-24 bg-charcoal border-t border-taupe">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-[10px] uppercase tracking-widest text-gold mb-4">
          Exclusive Access
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory mb-4">
          Join the Inner Circle
        </h2>
        <p className="font-manrope text-sm text-ivory/60 leading-relaxed mb-10">
          Subscribe for 10% off your first order, early access to new
          collections, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <p className="font-cormorant text-2xl italic text-gold-light">
              Welcome to Velmora.
            </p>
            <p className="font-manrope text-xs text-ivory/60 mt-2">
              Your 10% discount code is on its way.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-manrope text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-ivory font-manrope text-[10px] uppercase tracking-widest px-6 py-3.5 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] text-ivory/30 mt-5 uppercase tracking-widest">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
