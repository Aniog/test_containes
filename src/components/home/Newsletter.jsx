import { useState } from "react";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section
      id="newsletter-section"
      className="bg-ivory py-20 md:py-28 border-t border-hairline"
    >
      <Container>
        <div className="relative overflow-hidden bg-gold text-paper px-8 py-16 md:px-16 md:py-20 text-center">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.15) 0%, transparent 50%)",
            }}
          />
          <div className="relative max-w-xl mx-auto">
            <p
              id="newsletter-section-eyebrow"
              className="text-[11px] uppercase tracking-ui text-paper/80"
            >
              The List
            </p>
            <h2
              id="newsletter-section-title"
              className="mt-3 font-serif text-3xl md:text-5xl font-light text-paper leading-[1.05]"
            >
              Join for 10% off <em className="italic">your first order</em>.
            </h2>
            <p
              id="newsletter-section-subtitle"
              className="mt-4 text-[14px] text-paper/80 max-w-md mx-auto"
            >
              Early access to drops, atelier notes, and a quiet inbox — never noisy.
            </p>

            {submitted ? (
              <p className="mt-8 text-[13px] uppercase tracking-ui text-paper bg-ink/20 inline-block px-5 py-3">
                Welcome — check your inbox.
              </p>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mt-8 flex flex-col sm:flex-row gap-2 sm:gap-0 max-w-md mx-auto"
              >
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <div className="relative flex-1">
                  <Mail
                    size={14}
                    strokeWidth={1.4}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-paper/70"
                  />
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 pl-11 pr-4 bg-transparent text-paper placeholder:text-paper/60 border border-paper/40 focus:border-paper focus:outline-none text-[14px]"
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 px-6 bg-ink text-paper uppercase tracking-ui text-[12px] font-medium hover:bg-ink-soft transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
