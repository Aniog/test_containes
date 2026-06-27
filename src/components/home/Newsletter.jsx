import { useState } from "react";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Welcome! Check your inbox for your discount code.");
      setEmail("");
      setLoading(false);
    }, 800);
  };

  return (
    <section className="py-16 md:py-24 bg-charcoal text-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-4">Insider Access</p>
        <h2 className="serif text-3xl md:text-4xl font-light mb-4">Join for 10% Off</h2>
        <p className="text-warm-gray-light text-sm leading-relaxed mb-8">
          Subscribe to receive exclusive offers, early access to new collections, and styling inspiration delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-charcoal-light border border-warm-gray/30 text-cream placeholder:text-warm-gray px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-accent text-cream text-xs font-semibold uppercase tracking-[0.2em] px-8 py-3 hover:bg-accent-hover transition-colors disabled:opacity-60"
          >
            {loading ? "..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
