import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-velvet py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory tracking-wide mb-4">
          10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-champagne/80 leading-relaxed mb-8">
          Subscribe for early access to new collections, styling inspiration, and exclusive offers.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-lg text-gold italic">
              Thank you for joining. Your code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-bark/60 focus:border-gold text-champagne placeholder-driftwood font-sans text-sm px-4 py-3.5 outline-none transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-light text-velvet font-sans text-xs tracking-widest2 uppercase px-8 py-3.5 transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-driftwood mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
