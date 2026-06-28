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
    <section className="bg-dark py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-xs uppercase tracking-widest text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-4">
          10% off your first order
        </h2>
        <p className="font-inter text-sm text-white/60 mb-10 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration,
          and exclusive offers. No spam — ever.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-cormorant text-2xl text-gold italic">
              Welcome to Velmora ✦
            </p>
            <p className="font-inter text-xs text-white/60 mt-2">
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
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 font-inter text-xs px-5 py-4 outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white font-inter text-xs uppercase tracking-widest px-6 py-4 hover:bg-white hover:text-dark transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-white/30 mt-5">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
