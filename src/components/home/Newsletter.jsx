import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gold">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-white/80 mb-3">Newsletter</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
          Join for 10% Off
        </h2>
        <p className="text-sm md:text-base text-white/90 mb-8 max-w-md mx-auto">
          Subscribe for early access to new collections, styling notes, and a welcome gift on your first order.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-4 bg-white text-espresso text-sm placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-espresso text-white text-xs uppercase tracking-[0.2em] hover:bg-espresso/90 transition-colors"
          >
            {submitted ? "Subscribed" : "Subscribe"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
