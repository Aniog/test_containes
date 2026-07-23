import { useState } from "react";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  return (
    <section className="py-20 sm:py-24 bg-espresso text-ivory">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow text-gold mb-5">Stay In Touch</p>
          <h2 id="newsletter-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05]">
            Join for 10% off<br />your first order.
          </h2>
          <p id="newsletter-subtitle" className="mt-5 text-sm sm:text-base text-ivory/75 max-w-md mx-auto font-light">
            Be the first to know about new collections, restocks and the occasional secret sale.
          </p>

          {done ? (
            <div className="mt-10 inline-flex items-center gap-2 px-5 py-3 border border-gold text-gold">
              <Check size={14} strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-widest font-medium">
                Welcome — your code is on its way.
              </span>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 max-w-md mx-auto"
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-transparent border border-ivory/30 px-5 text-sm text-ivory placeholder:text-ivory/50 focus:border-gold focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-7 bg-gold text-espresso text-[11px] uppercase tracking-widest font-medium hover:bg-gold-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="mt-4 text-[10px] uppercase tracking-widest text-ivory/40">
            By subscribing you agree to our privacy policy.
          </p>
        </div>
      </Container>
    </section>
  );
}
