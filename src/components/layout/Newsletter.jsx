import { useState } from "react";
import { Send, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Newsletter({ variant = "dark" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const dark = variant === "dark";

  function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // Simulated submission — replace with your real newsletter endpoint
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 700);
  }

  return (
    <section
      className={cn(
        "py-20 sm:py-24",
        dark ? "bg-onyx-900 text-cream-100" : "bg-cream-200 text-onyx-800",
      )}
    >
      <div className="container-narrow text-center">
        <p
          className={cn(
            "font-sans uppercase tracking-widest-2 text-[11px] mb-4",
            dark ? "text-gold-300" : "text-mocha-500",
          )}
        >
          The List
        </p>
        <h2
          className={cn(
            "font-display text-[40px] sm:text-[56px] leading-[1.05] tracking-tight",
          )}
        >
          Join for 10% off
          <br />
          <span className="italic">your first order.</span>
        </h2>
        <p
          className={cn(
            "mt-5 text-[15px] max-w-[44ch] mx-auto leading-relaxed",
            dark ? "text-cream-200/70" : "text-mocha-600",
          )}
        >
          Early access to new collections, restocks, and quiet letters from
          the studio. No noise — just the pieces we love.
        </p>

        <form
          onSubmit={onSubmit}
          className={cn(
            "mt-10 mx-auto flex items-stretch max-w-[480px] border-b",
            dark ? "border-cream-200/30 focus-within:border-gold-300" : "border-onyx-800/30 focus-within:border-onyx-800",
          )}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Your email"
            aria-label="Your email"
            className={cn(
              "flex-1 bg-transparent outline-none py-3.5 text-[15px] placeholder:opacity-50",
            )}
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className={cn(
              "px-4 font-sans uppercase tracking-widest-2 text-[11px] inline-flex items-center gap-2 transition-colors",
              dark ? "text-cream-100 hover:text-gold-300" : "text-onyx-800 hover:text-gold-500",
              status === "submitting" && "opacity-60",
            )}
          >
            {status === "success" ? (
              <>
                <Check size={16} strokeWidth={2} /> Subscribed
              </>
            ) : status === "submitting" ? (
              "Sending…"
            ) : (
              <>
                Subscribe <Send size={14} strokeWidth={1.5} />
              </>
            )}
          </button>
        </form>
        {status === "error" && (
          <p className="mt-3 text-[12px] text-rose-300">{error}</p>
        )}
        <p
          className={cn(
            "mt-5 text-[11px] uppercase tracking-widest-2",
            dark ? "text-cream-200/40" : "text-mocha-400",
          )}
        >
          By subscribing you agree to receive marketing from Velmora.
        </p>
      </div>
    </section>
  );
}
