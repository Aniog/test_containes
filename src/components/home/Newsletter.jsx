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
    <section className="bg-obsidian py-20 md:py-24 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-sans uppercase tracking-widest text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory mb-4 leading-tight">
          10% off your first order
        </h2>
        <p className="text-sm font-sans text-taupe-light leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration,
          and exclusive member offers.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mb-2">
              <span className="text-gold text-lg">✓</span>
            </div>
            <p className="font-serif text-xl font-light text-ivory">
              Welcome to Velmora
            </p>
            <p className="text-xs font-sans text-taupe-light">
              Your 10% discount code is on its way to your inbox.
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
              className="flex-1 bg-transparent border border-taupe/40 text-ivory placeholder-taupe text-sm font-sans px-5 py-3.5 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian text-xs uppercase tracking-widest font-sans font-semibold px-6 py-3.5 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={13} strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="text-[10px] font-sans text-taupe/60 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
