import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="py-16 sm:py-24 bg-velmora-accent">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="font-serif text-3xl sm:text-4xl">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-white/80 font-light">
          Subscribe for early access to new drops, styling tips, and exclusive
          offers.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 bg-white/10 border border-white/30 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
          />
          <button
            type="submit"
            className="bg-white text-velmora-accent px-8 py-3 text-xs uppercase tracking-[0.14em] font-medium hover:bg-velmora-beige transition-colors"
          >
            Subscribe
          </button>
        </form>
        {status === "success" && (
          <p className="mt-3 text-xs text-white/90">
            Thank you! Check your inbox for your discount code.
          </p>
        )}
      </div>
    </section>
  );
}
