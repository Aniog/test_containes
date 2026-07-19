import React, { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    setEmail("");
    toast.success("Welcome to Velmora — check your inbox for 10% off.");
  };

  return (
    <section className="bg-warmBlack text-ivory">
      <div className="container-wide py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="font-sans text-[10px] uppercase tracking-widest3 text-gold mb-4">
              Join the Inner Circle
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Join for 10% off
              <br />
              <em className="italic font-light">your first order</em>
            </h2>
            <p className="mt-5 text-sm md:text-base text-ivory/70 max-w-md font-light">
              Early access to new collections, quiet dispatches from the studio,
              and the occasional gift.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-5 w-full"
            aria-label="Subscribe to our newsletter"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent border border-ivory/30 px-5 py-4 text-sm text-ivory placeholder:text-ivory/50 focus:outline-none focus:border-gold transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-goldHover text-white font-sans text-[11px] uppercase tracking-widest2 font-medium py-4 px-7 transition-colors duration-300"
              >
                {submitted ? "Thank You" : "Subscribe"}
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            </div>
            <p className="mt-4 text-[11px] text-ivory/45 leading-relaxed">
              By subscribing, you agree to receive marketing emails. Unsubscribe
              at any time. See our Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
