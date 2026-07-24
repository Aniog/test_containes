import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="max-w-3xl mx-auto px-5 md:px-8 lg:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="text-white/80 mb-8 font-light">
          Subscribe for exclusive early access to new collections, styling
          stories, and your first order discount.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-5 py-4 bg-white/10 border border-white/30 text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-white transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-white text-accent text-xs tracking-widest uppercase font-medium hover:bg-cream transition-colors"
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-white" role="status">
            Thank you. Your discount code is on its way.
          </p>
        )}
      </div>
    </section>
  );
}
