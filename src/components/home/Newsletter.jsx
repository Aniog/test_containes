import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="section-container py-16 md:py-24">
      <div className="rounded-2xl bg-ink px-6 py-10 md:px-12 md:py-14 text-center text-white">
        <p className="eyebrow text-white/75">Stay in touch</p>
        <h2 className="mt-3 font-serif text-2xl md:text-4xl">Join for 10% off your first order</h2>
        <p className="mt-3 text-sm text-white/80 max-w-md mx-auto">
          Be the first to know about new releases, styling stories, and exclusive offers.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full sm:w-80 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <button type="submit" className="btn-primary bg-white text-ink hover:bg-accent-soft hover:text-ink">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
