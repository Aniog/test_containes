import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-[#1a1a14]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-24 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-[0.05em] text-white">
          Join for 10% Off
        </h2>
        <p className="mt-4 font-sans text-sm text-white/50 max-w-sm mx-auto leading-relaxed">
          Be the first to discover new collections, exclusive previews, and
          receive 10% off your first order.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-white/5 border border-white/20 text-white placeholder:text-white/30
                font-sans text-sm focus:outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-[#1a1a14] font-sans text-sm tracking-[0.08em] uppercase
                transition-all duration-300 hover:bg-white/90"
            >
              Subscribe
            </button>
          </div>
          {subscribed && (
            <p className="mt-4 font-sans text-sm text-[#b68860]">
              Thank you! Check your inbox for your 10% off code.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}