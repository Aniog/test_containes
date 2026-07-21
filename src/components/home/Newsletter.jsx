import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="bg-accent/5 border border-accent/20 p-8 md:p-14 lg:p-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-primary">
            Join the Circle
          </h2>
          <p className="text-secondary text-sm md:text-base mt-3 max-w-md mx-auto">
            Subscribe for 10% off your first order, early access to new
            collections, and styling inspiration.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-md mx-auto flex gap-3"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-transparent border-b border-primary/30 py-3 text-sm text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-xs uppercase tracking-[0.12em] font-medium transition-all duration-300 flex items-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {status === "success" && (
            <p className="text-accent text-xs mt-3 animate-fadeIn">
              Thank you! Check your inbox for your 10% off code.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}