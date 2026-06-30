import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    // Simulated network — replace with real list provider later
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    }, 700);
  };

  return (
    <section
      className="relative bg-espresso-900 text-ivory-50 overflow-hidden"
      aria-labelledby="newsletter-heading"
    >
      {/* Soft gold radial — adds depth without losing the dark editorial base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, rgba(184,147,90,0.45) 0%, rgba(184,147,90,0) 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle at center, rgba(184,147,90,0.35) 0%, rgba(184,147,90,0) 60%)",
        }}
      />

      <div className="container-x relative py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold-200/80">Be the first to know</p>
          <h2
            id="newsletter-heading"
            className="h-display mt-4 text-display-md text-ivory-50 text-balance"
          >
            Join for{" "}
            <span className="gold-shimmer">10% off</span>{" "}
            your first order.
          </h2>
          <p className="mt-5 text-ivory-50/80 max-w-md leading-relaxed">
            Quiet emails, sent rarely — new pieces, restocks, and the occasional
            behind-the-bench story. No spam, ever.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 max-w-lg"
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "submitting"}
              className="flex-1 bg-transparent border border-ivory-50/20 sm:border-r-0 px-5 py-4 text-ivory-50 placeholder:text-ivory-50/40 outline-none focus:border-gold-400 transition-colors font-sans text-sm"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-ivory-50 text-espresso-900 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-gold-400 hover:text-ivory-50 transition-colors duration-300 disabled:opacity-60"
            >
              {status === "submitting" ? "Joining…" : "Join"}
              {status !== "submitting" && <ArrowRight size={14} strokeWidth={1.5} />}
            </button>
          </form>
          {status === "success" && (
            <p
              role="status"
              className="mt-4 text-[12px] uppercase tracking-[0.22em] text-gold-200"
            >
              Welcome — check your inbox for your code.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
