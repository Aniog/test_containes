import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-champagne/20 py-12 md:py-16 px-6 md:px-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
            Join for 10% Off
          </h2>
          <p className="text-sm text-taupe mt-2 max-w-md mx-auto">
            Subscribe for exclusive early access to new collections, styling
            tips, and 10% off your first order.
          </p>
          {submitted ? (
            <p className="mt-6 text-sm text-charcoal font-medium">
              Thank you! Check your inbox for your discount code.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white border border-stone text-sm placeholder:text-taupe focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne"
              />
              <button
                type="submit"
                className="bg-charcoal text-ivory px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="text-[11px] text-taupe mt-3">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
