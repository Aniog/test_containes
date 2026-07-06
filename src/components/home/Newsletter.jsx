import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="bg-gold py-14 md:py-20" id="journal">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-espresso md:text-4xl">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-espresso/80">
          Subscribe for early access to new drops, styling notes, and your
          first order discount.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 border-b-2 border-espresso/30 bg-transparent px-4 py-3 text-espresso placeholder-espresso/50 outline-none transition-colors focus:border-espresso"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-espresso px-6 py-3 text-xs uppercase tracking-widest text-cream transition-colors hover:bg-cream hover:text-espresso"
          >
            Subscribe
            <ArrowRight size={14} />
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm font-medium text-espresso">
            Thank you — your discount code is on its way.
          </p>
        )}
      </div>
    </section>
  );
}
