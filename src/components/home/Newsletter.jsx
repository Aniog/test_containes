import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // Simulate brief async behavior so the user gets feedback.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="bg-ivory-soft py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-sm border border-cream bg-ivory p-10 text-center shadow-soft md:p-16">
          <span className="text-[11px] font-medium uppercase tracking-widest2 text-gold-deep">
            The Velmora Letter
          </span>
          <h2 className="font-serif text-4xl font-light leading-tight text-espresso sm:text-5xl md:text-[56px]">
            Join for <em className="italic text-gold-deep">10% off</em> your first order.
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-espresso-soft">
            Quiet, infrequent emails — first looks, restocks, and the occasional
            editorial. No spam, no hard sell.
          </p>

          {status === "success" ? (
            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold-soft/40 px-5 py-3 text-[12px] uppercase tracking-widest2 text-espresso">
              <Check size={14} strokeWidth={1.6} className="text-gold-deep" />
              Welcome — check your inbox.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Your email address"
                className="flex-1 border border-cream bg-ivory px-5 py-4 text-sm text-espresso placeholder:text-muted/80 focus:border-gold"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex items-center justify-center gap-2 bg-espresso px-7 py-4 text-[11px] font-medium uppercase tracking-widest2 text-ivory transition-colors hover:bg-espresso-soft disabled:opacity-60"
              >
                {status === "submitting" ? "Joining..." : "Subscribe"}
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          )}

          {status === "error" ? (
            <p className="text-[12px] text-espresso">
              Please enter a valid email address.
            </p>
          ) : (
            <p className="text-[10.5px] uppercase tracking-widest2 text-muted">
              By subscribing you agree to our privacy policy.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
