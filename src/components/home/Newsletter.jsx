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
    <section className="bg-gold/10 py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
          Join the Inner Circle
        </h2>
        <p className="text-muted text-sm md:text-base mt-4 max-w-sm mx-auto leading-relaxed">
          Subscribe for 10% off your first order, early access to new collections, 
          and exclusive stories from our atelier.
        </p>

        {submitted ? (
          <div className="mt-8 p-4 bg-surface rounded-sm animate-fade-in">
            <p className="text-foreground font-medium">
              Thank you! Check your inbox for your welcome code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-surface border border-border/60 rounded-sm text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-3.5 text-sm tracking-widest uppercase rounded-sm hover:bg-gold-hover transition-all duration-300 whitespace-nowrap"
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