import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="bg-bronze text-parchment py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-5xl mb-4">Join for 10% Off</h2>
        <p className="font-sans text-white/80 mb-8 md:text-lg">
          Be the first to discover new arrivals, styling notes, and exclusive offers.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 bg-white/10 border border-white/30 px-4 py-3 text-sm text-parchment placeholder:text-white/50 focus:outline-none focus:border-parchment"
          />
          <button
            type="submit"
            className="bg-parchment text-charcoal px-6 py-3 text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            Subscribe
            <ArrowRight size={14} />
          </button>
        </form>
        {status === "success" && (
          <p className="mt-4 text-sm text-white/90">Thank you. Check your inbox for your code.</p>
        )}
      </div>
    </section>
  );
}
