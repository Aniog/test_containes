import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-obsidian py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-champagne text-xs tracking-widest3 uppercase mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light mb-4">
          10% off your first order
        </h2>
        <p className="font-sans text-ivory/60 text-base mb-10">
          Subscribe for early access to new collections, styling inspiration,
          and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-champagne-light text-2xl italic mb-2">
              Welcome to Velmora.
            </p>
            <p className="font-sans text-ivory/60 text-sm">
              Your 10% discount code is on its way to your inbox.
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
              className="flex-1 bg-obsidian-light border border-obsidian-mid text-ivory placeholder-stone font-sans text-sm px-5 py-4 focus:outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="bg-champagne text-obsidian font-sans text-xs font-semibold tracking-widest uppercase px-6 py-4 hover:bg-champagne-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-stone text-xs mt-5">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
