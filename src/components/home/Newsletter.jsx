import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      toast.success("Welcome to Velmora — your 10% code is on its way.", {
        description: "Check your inbox in a moment.",
      });
      setEmail("");
    }, 600);
  };

  return (
    <section id="newsletter" className="bg-espresso text-ivory py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <p id="newsletter-eyebrow" className="eyebrow eyebrow-gold">
            The Velmora Letter
          </p>
          <h2
            id="newsletter-title"
            className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] mt-4"
          >
            Join for <span className="font-display-italic text-gold-soft">10% off</span>
            <br className="hidden md:block" />
            your first order.
          </h2>
          <p
            id="newsletter-subtitle"
            className="mt-5 text-ivory/75 text-[14px] leading-[1.7] max-w-md mx-auto"
          >
            New drops, restocks, and the occasional behind-the-scenes from the
            atelier. No noise, just the things worth knowing.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
            aria-label="Newsletter sign up"
          >
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent border-b border-ivory/40 focus:border-gold-soft outline-none py-3 px-1 text-[14px] text-ivory placeholder:text-ivory/40 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-gold sm:w-auto"
            >
              {status === "submitting" ? "Sending…" : "Subscribe"}
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
          <p className="mt-5 text-[10px] tracking-widest3 uppercase text-ivory/45">
            By subscribing you agree to our Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
}