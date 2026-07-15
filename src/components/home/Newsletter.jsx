import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          {submitted ? (
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-velmora-text font-light">
                You're on the List
              </h2>
              <p className="mt-3 text-sm text-velmora-muted">
                Welcome to Velmora. Check your inbox for your 10% off code.
              </p>
            </div>
          ) : (
            <>
              <span className="text-xs tracking-widest uppercase text-velmora-gold">
                Never Miss a Drop
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-velmora-text mt-2 font-light">
                Join for 10% Off Your First Order
              </h2>
              <p className="mt-3 text-sm text-velmora-muted max-w-sm mx-auto">
                Be the first to know about new collections, exclusive drops, and member-only offers.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 flex items-center gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-transparent border border-velmora-border px-4 py-3 text-sm text-velmora-text placeholder:text-velmora-muted/60 focus:outline-none focus:border-velmora-gold"
                />
                <button
                  type="submit"
                  className="bg-velmora-gold text-velmora-text px-6 py-3 text-sm uppercase tracking-widest font-medium hover:bg-velmora-gold-dark transition-colors flex items-center gap-2"
                >
                  <span className="hidden md:inline">Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}