import React, { useState } from "react";
import { Send, Check } from "lucide-react";
import Container from "@/components/ui/Container";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-gold text-ink">
      <Container className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-[10px] uppercase tracking-eyebrow text-ink/70 mb-4">
            The Atelier Letter
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Join for 10% off your first order.
          </h2>
          <p className="mt-5 text-ink/75 max-w-md mx-auto leading-relaxed">
            Quiet notes on new pieces, behind-the-scenes from the studio, and the occasional first-look.
          </p>
          <form
            onSubmit={onSubmit}
            className="mt-10 max-w-md mx-auto flex items-center gap-0 border-b border-ink/40 focus-within:border-ink transition-colors"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 bg-transparent py-3 text-ink placeholder:text-ink/50 outline-none font-sans text-sm"
            />
            <button
              type="submit"
              className="ml-3 font-sans text-[11px] uppercase tracking-button text-ink hover:text-ink/70 transition-colors inline-flex items-center gap-2 py-3"
            >
              {submitted ? (
                <>
                  <Check size={16} strokeWidth={1.5} />
                  Welcome
                </>
              ) : (
                <>
                  Subscribe
                  <Send size={14} strokeWidth={1.5} />
                </>
              )}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
