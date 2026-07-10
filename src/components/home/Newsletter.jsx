import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
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
    <section className="bg-espresso py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-cream font-light mb-3">
            10% off your first order
          </h2>
          <p className="font-inter text-sm text-cream/60 leading-relaxed mb-8">
            Subscribe for early access to new collections, styling inspiration, and exclusive offers.
          </p>

          {submitted ? (
            <div className="border border-gold/40 px-8 py-5">
              <p className="font-cormorant text-2xl text-cream italic">
                Welcome to Velmora.
              </p>
              <p className="font-inter text-xs text-cream/60 mt-2">
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
                className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-inter text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-gold text-espresso font-inter text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold-dark transition-colors duration-200 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}

          <p className="font-inter text-[10px] text-cream/30 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
