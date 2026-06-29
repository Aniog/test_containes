import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="bg-velmora-surface border border-velmora-border px-6 md:px-12 py-14 md:py-20 text-center">
        <p className="text-velmora-gold text-xs tracking-[0.3em] uppercase mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-velmora-cream font-light mb-3">
          Join for 10% off your first order
        </h2>
        <p className="text-velmora-text-secondary text-sm mb-8 max-w-md mx-auto">
          Be the first to discover new collections, exclusive offers, and jewelry styling inspiration.
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-2 text-velmora-success">
            <p className="text-sm font-medium tracking-wide">
              Thank you! Check your inbox for your welcome gift.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-velmora-card border border-velmora-border text-velmora-cream text-sm placeholder:text-velmora-muted focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-8 py-3.5 bg-velmora-gold text-velmora-bg text-xs tracking-[0.15em] uppercase font-semibold hover:bg-velmora-gold-light transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === "submitting" ? (
                "Sending..."
              ) : (
                <>
                  Subscribe
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
