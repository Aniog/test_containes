import { useState } from "react";
import { Send, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-ink text-bone">
      <div className="container-page py-20 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-bone/70">The Atelier Letter</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05]">
              Join the list —{" "}
              <em className="italic">10% off</em> your first order.
            </h2>
            <p className="mt-5 text-bone/70 max-w-lg text-sm sm:text-base leading-relaxed">
              Quiet, monthly notes from the studio. New pieces, behind-the-scenes
              from the bench, and the occasional early access.
            </p>
          </div>
          <div className="lg:col-span-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                setSent(true);
                setEmail("");
                setTimeout(() => setSent(false), 4000);
              }}
              className="w-full"
            >
              <label htmlFor="news-email" className="sr-only">
                Email address
              </label>
              <div className="flex items-center border-b border-bone/40 focus-within:border-bone transition-colors duration-300">
                <input
                  id="news-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-transparent py-4 text-bone placeholder:text-bone/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-3 -mr-2 text-[11px] uppercase tracking-[0.18em] font-medium text-bone hover:text-gold transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  {sent ? (
                    <>
                      <Check className="w-4 h-4" strokeWidth={1.5} />
                      Thank you
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send className="w-4 h-4" strokeWidth={1.5} />
                    </>
                  )}
                </button>
              </div>
              <p className="mt-4 text-xs text-bone/50">
                By subscribing you agree to our privacy policy. Unsubscribe at
                any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
