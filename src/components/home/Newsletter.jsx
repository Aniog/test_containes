import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-10">
        <p className="font-sans text-[11px] uppercase tracking-widest3 text-champagne">Join Velmora</p>
        <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
          10% off your first order
        </h2>
        <p className="mx-auto mt-5 max-w-md font-sans text-sm leading-relaxed text-cream/70">
          Be the first to know about new collections, private sales, and styling
          inspiration. Enjoy 10% off your first order when you subscribe.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-xl italic text-champagne">
            Welcome to Velmora. Check your inbox for your code.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border border-cream/30 bg-transparent px-5 py-4 font-sans text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 font-sans text-[11px] uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}
        <p className="mt-4 font-sans text-[11px] text-cream/40">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
