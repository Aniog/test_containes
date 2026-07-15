import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Newsletter signup:", email);
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-espresso py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory font-light mb-3">
            10% off your first order
          </h2>
          <p className="font-sans text-sm text-ivory/60 leading-relaxed mb-8">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="border border-gold/40 px-8 py-5">
              <p className="font-serif text-xl text-gold font-light">
                Welcome to Velmora ✦
              </p>
              <p className="font-sans text-xs text-ivory/60 mt-2">
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
                className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-sans text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-gold text-espresso font-sans text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-dark transition-colors duration-200 font-medium flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={12} strokeWidth={2} />
              </button>
            </form>
          )}

          <p className="font-sans text-[10px] text-ivory/30 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
