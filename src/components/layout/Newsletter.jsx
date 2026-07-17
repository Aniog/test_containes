import { useState } from "react";
import { toast } from "@/components/ui/Toast";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      toast("Please enter a valid email address.", "error");
      return;
    }
    setSubmitted(true);
    toast("You're in. Your 10% off code is on its way.");
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      aria-labelledby="newsletter-title"
      className="relative bg-ink-deep text-ivory overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 20%, rgba(180,138,74,0.18) 0%, rgba(180,138,74,0) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 md:px-10 py-20 md:py-24 text-center">
        <p className="eyebrow eyebrow-on-dark">The Velmora Circle</p>
        <h2
          id="newsletter-title"
          className="mt-3 font-display text-4xl md:text-5xl leading-tight"
        >
          Join for <em className="text-gold-soft">10% off</em> your first order.
        </h2>
        <p className="mt-4 text-sm md:text-base text-ivory/70 max-w-md mx-auto">
          Early access to new pieces, styling notes, and the occasional
          behind-the-bench story. No noise, ever.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 sm:items-end max-w-md mx-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="input-base input-on-dark flex-1 text-center sm:text-left"
            autoComplete="email"
            required
          />
          <button
            type="submit"
            className="btn-primary btn-gold"
            disabled={submitted}
          >
            {submitted ? "Welcome" : "Subscribe"}
            {!submitted && <ArrowRight className="h-4 w-4" strokeWidth={1.5} />}
          </button>
        </form>
        <p className="mt-4 text-[11px] tracking-eyebrow uppercase text-ivory/45">
          By subscribing, you agree to our privacy policy.
        </p>
      </div>
    </section>
  );
}
