import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <section className="py-20 md:py-28 bg-ink text-cream">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="mx-auto max-w-2xl flex flex-col items-center text-center gap-5">
          <span className="eyebrow text-champagne">The List</span>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Join for 10% off your first order.
          </h2>
          <p className="text-cream/65 text-sm md:text-base max-w-md">
            Be the first to know about new collections, atelier stories, and members-only pieces. No spam, ever.
          </p>

          <form
            onSubmit={submit}
            className="mt-4 w-full max-w-md flex items-stretch border border-cream/25 focus-within:border-champagne transition-colors"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 bg-transparent px-4 py-3.5 text-sm text-cream placeholder:text-cream/40 outline-none"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-5 bg-champagne text-ink hover:bg-champagne-deep transition-colors flex items-center gap-2"
            >
              <span className="eyebrow text-[0.65rem] text-ink">
                {status === "submitting" ? "Sending" : status === "success" ? "Thanks" : "Subscribe"}
              </span>
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
          {status === "success" && (
            <p className="text-xs text-champagne">Welcome — your code is on its way.</p>
          )}
        </div>
      </div>
    </section>
  );
}
