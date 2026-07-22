import { useState } from "react";
import { Send } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-10 bg-velmora-cream">
      <div className="max-w-4xl mx-auto bg-velmora-gold text-white px-6 py-12 md:py-16 text-center">
        <p className="text-xs uppercase tracking-widest opacity-90 mb-3">
          Insider Perks
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
          Join for 10% Off
        </h2>
        <p className="max-w-md mx-auto opacity-90 mb-8 md:mb-10">
          Subscribe for early access to new collections, styling notes, and
          10% off your first order.
        </p>

        {submitted ? (
          <p className="font-serif text-xl">Welcome to Velmora — check your inbox.</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 bg-white/10 border border-white/30 placeholder-white/60 text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-velmora-base text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-velmora-base/90 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={14} />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
