import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="bg-velmora-espresso text-velmora-cream py-20 md:py-28 relative overflow-hidden">
      {/* Soft accent backdrop */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-velmora-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-velmora-goldsoft/10 blur-3xl"
      />

      <div className="relative max-w-3xl mx-auto px-5 md:px-10 text-center">
        <span className="text-[11px] uppercase tracking-[0.32em] text-velmora-goldsoft">
          The Velmora List
        </span>
        <h2 className="mt-6 font-serif text-3xl md:text-5xl text-velmora-cream font-light leading-[1.1]">
          Join for <em className="italic text-velmora-goldsoft">10% off</em>
          <br className="hidden sm:block" /> your first piece.
        </h2>
        <p className="mt-5 text-[15px] text-velmora-cream/75 max-w-lg mx-auto leading-relaxed">
          New collections, restocks of bestsellers, and quiet notes from the
          atelier. No noise. Unsubscribe anytime.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-xl mx-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            className="flex-1 bg-transparent border-b border-velmora-cream/30 text-velmora-cream placeholder:text-velmora-cream/40 px-1 py-3 text-[15px] focus:outline-none focus:border-velmora-gold transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-velmora-cream text-velmora-espresso text-[11px] uppercase tracking-[0.24em] hover:bg-velmora-gold hover:text-velmora-cream transition-colors duration-500"
          >
            Sign Up
          </button>
        </form>

        {status === "success" && (
          <p className="mt-5 text-[13px] text-velmora-goldsoft velmora-fade-in">
            Welcome to Velmora. Your 10% code is on its way.
          </p>
        )}
        {status === "error" && (
          <p className="mt-5 text-[13px] text-velmora-goldsoft velmora-fade-in">
            Please enter a valid email address.
          </p>
        )}

        <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-velmora-cream/40">
          By signing up you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
