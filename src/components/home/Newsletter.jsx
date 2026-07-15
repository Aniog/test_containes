import React, { useState } from "react";
import { Send, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="container-page">
      <div className="bg-sable text-ivory px-6 sm:px-12 lg:px-20 py-16 sm:py-20 relative overflow-hidden">
        {/* decorative gold corner */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gold/10 blur-2xl" />
        <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow !text-gold-light">The List</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-light mt-3 leading-[1.05] text-ivory">
              Join for{" "}
              <span className="italic text-gold-light">10% off</span>{" "}
              your first order
            </h2>
            <p className="mt-4 text-ivory/70 text-sm sm:text-base font-sans font-light max-w-md">
              Early access to new collections, styling notes, and a quiet
              inbox — no noise.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full lg:justify-end"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 lg:max-w-sm bg-transparent border border-ivory/25 px-5 py-3.5 text-sm font-sans text-ivory placeholder:text-ivory/45 focus:border-gold focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold hover:bg-ivory hover:text-sable text-ivory font-sans text-[12px] font-medium tracking-widest2 uppercase transition-colors"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4" /> Welcome
                </>
              ) : (
                <>
                  Subscribe <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
