import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const trimmed = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
      setError("Please enter a valid email.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // Simulated submission; integrate your provider here.
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <section className="py-20 sm:py-24 bg-ivory">
      <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
        <div
          className="relative overflow-hidden bg-espresso text-ivory px-6 sm:px-12 lg:px-20 py-14 sm:py-20 lg:py-24"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 20%, rgba(212,178,124,0.22) 0%, transparent 55%), radial-gradient(ellipse at 15% 90%, rgba(176,138,74,0.18) 0%, transparent 50%)",
            backgroundColor: "#1F1612",
          }}
        >
          <div className="relative max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-ivory/70 mb-4">
              The Velmora Letter
            </p>
            <h2
              id="newsletter-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory leading-tight"
            >
              Join for 10% off your first order.
            </h2>
            <p
              id="newsletter-subtitle"
              className="mt-4 text-ivory/75 text-sm sm:text-base max-w-md"
            >
              Early access to new pieces, atelier notes, and the occasional
              quiet surprise. No spam — only what we'd want to receive.
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-2 max-w-md"
              aria-busy={status === "submitting"}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error" || status === "success") {
                    setStatus("idle");
                    setError(null);
                  }
                }}
                placeholder="Your email"
                className="flex-1 h-12 px-4 bg-transparent border border-ivory/30 text-ivory placeholder:text-ivory/50 focus:border-ivory focus:outline-none transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn btn-outline-light h-12"
              >
                {status === "submitting" ? "Joining…" : "Subscribe"}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </form>

            {status === "success" && (
              <p
                role="status"
                className="mt-4 text-sm text-gold-200"
                style={{ color: "#D4B27C" }}
              >
                Welcome. Your code is on its way.
              </p>
            )}
            {status === "error" && error && (
              <p role="alert" className="mt-4 text-sm text-rose-200/90">
                {error}
              </p>
            )}
            <p className="mt-3 text-xs text-ivory/55">
              By subscribing you agree to our privacy policy. Unsubscribe at
              any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
