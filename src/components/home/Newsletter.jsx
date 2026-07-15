import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-text-primary">
      <div className="max-w-2xl mx-auto px-6 py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-widest text-accent-gold font-medium mb-4">
          Join the Inner Circle
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-cream leading-[1.15] mb-4">
          Receive 10% Off
          <br />
          Your First Order
        </h2>
        <p className="text-cream/60 text-sm font-light mb-10 max-w-sm mx-auto">
          Be the first to know about new collections, exclusive previews, and members-only events.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-accent-gold">
            <Check className="w-5 h-5" />
            <span className="text-sm font-medium">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/5 border border-white/20 text-cream placeholder:text-cream/30 px-5 py-4 text-sm 
                         focus:outline-none focus:border-accent-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-accent-gold text-white px-8 py-4 text-sm font-medium uppercase tracking-widest 
                         transition-all duration-300 hover:bg-accent-gold-hover flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}