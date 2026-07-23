import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
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
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-4">
          Exclusive Access
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-light mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-cream/60 leading-relaxed mb-10">
          Be the first to know about new collections, restocks, and members-only offers.
          No spam, ever. Unsubscribe anytime.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-12 h-px bg-gold mx-auto mb-4" />
            <p className="font-serif text-xl text-cream font-light italic">
              Welcome to Velmora.
            </p>
            <p className="text-xs font-sans text-cream/60 mt-2 uppercase tracking-widest">
              Your 10% discount is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-cream/30 text-cream placeholder-cream/40 text-sm font-sans px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-espresso text-xs uppercase tracking-widest font-sans px-6 py-3.5 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="text-[10px] font-sans text-cream/30 mt-4 uppercase tracking-widest">
          By subscribing you agree to our privacy policy
        </p>
      </div>
    </section>
  );
}
