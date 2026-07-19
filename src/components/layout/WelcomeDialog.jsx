import React, { useEffect, useState } from "react";
import { X, Mail } from "lucide-react";

const STORAGE_KEY = "velmora_first_visit_dismissed_v1";
const SHOW_DELAY_MS = 1500;

export default function FirstVisitPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Show after a short delay, only if not previously dismissed.
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // localStorage may be blocked — fall through and show.
    }
    const timer = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  // Lock body scroll while the dialog is open and close on Escape.
  useEffect(() => {
    if (!visible) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [visible]);

  const close = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    window.setTimeout(() => setVisible(false), 2200);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="firstvisit-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="absolute inset-0 bg-warmBlack/70 backdrop-blur-[2px] transition-opacity duration-500"
        onClick={close}
      />
      <div className="relative w-full max-w-[880px] bg-ivory shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center text-espresso/70 hover:text-espresso hover:bg-ivory/60 rounded-full transition-colors"
        >
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>

        <div className="relative hidden md:block bg-sand">
          <img
            alt="Gold jewelry on a warm neutral background"
            data-strk-img-id="firstvisit-popup-img"
            data-strk-img="[firstvisit-subtitle] [firstvisit-title] gold jewelry editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warmBlack/35 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-ivory">
            <p className="font-sans text-[10px] uppercase tracking-widest2 text-ivory/80">
              Welcome to Velmora
            </p>
            <p className="font-serif text-2xl leading-snug mt-1">
              Quiet luxury, finished in 18K gold.
            </p>
          </div>
        </div>

        <div className="px-7 py-9 sm:px-10 sm:py-12 md:px-12 md:py-14 flex flex-col justify-center">
          <p className="eyebrow text-gold">A small welcome</p>
          <h2
            id="firstvisit-title"
            className="font-serif text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.05] mt-3"
          >
            <span id="firstvisit-subtitle">Get $10 off your first order</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-espresso/70 font-light leading-relaxed max-w-sm">
            Join the list for early access to new collections, care guides, and
            the occasional quiet note from the studio.
          </p>

          {submitted ? (
            <div className="mt-7 border-t border-hairline pt-6">
              <p className="font-serif text-2xl">Welcome in.</p>
              <p className="mt-2 text-sm text-espresso/70 font-light">
                Your code{" "}
                <span className="font-medium text-espresso">WELCOME10</span> is
                on its way to {email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-3">
              <label className="sr-only" htmlFor="firstvisit-email">
                Email address
              </label>
              <div className="flex items-center border-b border-espresso/40 focus-within:border-gold transition-colors">
                <Mail
                  className="w-4 h-4 text-espresso/50 mr-3 shrink-0"
                  strokeWidth={1.5}
                />
                <input
                  id="firstvisit-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent py-3 text-sm placeholder:text-espresso/40 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center mt-2"
              >
                Send my code
              </button>
              <button
                type="button"
                onClick={close}
                className="text-[11px] uppercase tracking-widest2 text-taupe hover:text-espresso transition-colors mt-1 self-center"
              >
                No thanks
              </button>
            </form>
          )}

          <p className="mt-6 text-[10px] uppercase tracking-widest2 text-taupe">
            Free worldwide shipping · 30-day returns
          </p>
        </div>
      </div>
    </div>
  );
}
