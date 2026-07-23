import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    // Local-only — the user wants a clean placeholder for backend later.
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast.success("Welcome — your 10% off code is on its way.");
    }, 600);
  }

  return (
    <section className="bg-bone-100 pb-20 sm:pb-28">
      <div className="container-x">
        <div
          className="relative overflow-hidden bg-espresso text-bone-50
                     px-6 sm:px-12 py-14 sm:py-20 text-center"
        >
          {/* Decorative gold corner */}
          <div
            aria-hidden
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(closest-side, rgba(176,141,87,0.55), transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="absolute -bottom-16 -left-12 w-56 h-56 rounded-full opacity-25"
            style={{
              background:
                "radial-gradient(closest-side, rgba(176,141,87,0.45), transparent 70%)",
            }}
          />

          <p
            id="newsletter-eyebrow"
            className="relative text-[11px] font-medium uppercase tracking-widest3 text-bone-100/65"
          >
            The Velmora Circle
          </p>
          <h2
            id="newsletter-title"
            className="relative display-serif mt-4 text-3xl sm:text-4xl lg:text-5xl"
          >
            Join for 10% off your first order.
          </h2>
          <p
            id="newsletter-subtitle"
            className="relative mt-4 text-bone-100/70 max-w-md mx-auto text-sm sm:text-base"
          >
            Early access to new pieces, private studio sales, and the occasional hand-written note.
          </p>

          <form
            onSubmit={onSubmit}
            className="relative mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2 sm:gap-0 sm:items-stretch"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              autoComplete="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-5 bg-transparent border border-bone-50/30 text-bone-50 placeholder:text-bone-100/45 focus:outline-none focus:border-bone-50 transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn btn-accent h-12 px-6 sm:rounded-none"
            >
              {loading ? "Sending..." : (
                <>
                  Subscribe
                  <ArrowRight size={14} strokeWidth={1.5} />
                </>
              )}
            </button>
          </form>

          <p className="relative mt-5 text-[11px] uppercase tracking-widest2 text-bone-100/45">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
