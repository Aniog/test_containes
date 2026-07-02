import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-velmora-obsidian py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-text-light mb-4">
            10% off your first order
          </h2>
          <p className="font-manrope text-sm text-velmora-text-light/60 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration,
            and exclusive offers — delivered with care.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-cormorant text-2xl italic text-velmora-gold">
                Thank you for joining us.
              </p>
              <p className="font-manrope text-xs text-velmora-text-light/50 mt-2">
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
                className="flex-1 bg-transparent border border-velmora-text-light/20 text-velmora-text-light placeholder:text-velmora-text-light/30 font-manrope text-sm px-5 py-4 focus:outline-none focus:border-velmora-gold transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest-md uppercase px-7 py-4 hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-manrope text-[10px] text-velmora-text-light/30 mt-5 tracking-wide">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
