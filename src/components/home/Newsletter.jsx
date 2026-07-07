import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success | error

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <div className="bg-champagne text-ink">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] items-center">
            <div className="px-7 py-12 md:px-14 md:py-20">
              <p className="text-[11px] uppercase tracking-[0.3em] text-ink/70 mb-4">
                The List
              </p>
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.05]">
                Join for 10% off
                <br />
                your first order.
              </h2>
              <p className="mt-5 text-sm md:text-base text-ink/80 max-w-md">
                Early access to new collections, studio notes, and the
                occasional behind-the-scenes from our workshop.
              </p>
            </div>
            <form
              onSubmit={onSubmit}
              className="px-7 pb-12 md:px-14 md:py-20 w-full"
            >
              <label
                htmlFor="newsletter-email"
                className="block text-[11px] uppercase tracking-editorial text-ink/70 mb-3"
              >
                Email address
              </label>
              <div className="flex items-center border-b border-ink/40 focus-within:border-ink transition-colors">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus("idle");
                  }}
                  className="flex-1 bg-transparent py-3 text-base text-ink placeholder:text-ink/40 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="p-2 text-ink hover:text-ink/60 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>

              {status === "success" && (
                <p
                  role="status"
                  className="mt-3 text-xs text-ink/80"
                >
                  Welcome to The List — check your inbox for your code.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="mt-3 text-xs text-ink/90">
                  Please enter a valid email.
                </p>
              )}
              <p className="mt-5 text-[11px] text-ink/60">
                By subscribing you agree to our privacy policy. Unsubscribe any
                time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
