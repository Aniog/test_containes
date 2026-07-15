import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

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
    <section className="section-padding py-16 md:py-20 bg-velmora-gold/10">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl mb-3">
          Join the Velmora Circle
        </h2>
        <p className="text-velmora-muted text-sm mb-8">
          Subscribe for 10% off your first order, early access to new collections, and insider styling tips.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-velmora-warm">
            <Check className="w-5 h-5" />
            <span className="text-sm font-medium">Thank you! Check your inbox for your code.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3.5 bg-white border border-velmora-stone text-sm placeholder:text-velmora-muted/60 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
