import { useState } from "react";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Welcome! Check your inbox for 10% off.");
    setEmail("");
  };

  return (
    <section className="py-16 sm:py-24 bg-ink text-cream">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4">
          Insider Access
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide">
          Join for 10% Off
        </h2>
        <p className="mt-4 font-sans text-sm sm:text-base text-cream/70 max-w-md mx-auto leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 w-full bg-transparent border border-cream/30 px-4 py-3 text-sm font-sans text-cream placeholder:text-cream/40 focus:outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-accent text-white px-8 py-3 text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-accent-hover transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
