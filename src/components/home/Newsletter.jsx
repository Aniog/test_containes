import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  return (
    <section className="container-x py-16 md:py-24">
      <div className="bg-gold/30 border border-gold/40 px-8 py-14 md:px-16 md:py-20 text-center">
        <span className="eyebrow mb-3 block">The Velmora Letter</span>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] max-w-xl mx-auto">
          Join for <em className="italic">10% off</em> your first order.
        </h2>
        <p className="text-mocha mt-4 max-w-md mx-auto text-[15px]">
          New collections, restocks, and quiet dispatches from the studio — never spam.
        </p>
        {done ? (
          <p className="mt-8 font-serif text-2xl italic">
            Welcome to the list. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-9 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email address"
              className="flex-1 bg-ivory border border-taupe px-5 py-3.5 text-sm placeholder:text-mocha focus:outline-none focus:border-espresso transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-espresso text-ivory font-sans text-[12px] uppercase tracking-wider-2 px-7 py-3.5 hover:bg-espresso-soft transition-colors"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.4} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
