import { useState } from "react";
import { toast } from "sonner";

export function HomeNewsletter() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Welcome to Velmora — your 10% code is on its way.");
      setEmail("");
      setSubmitting(false);
    }, 500);
  };

  return (
    <section className="px-6 md:px-10 lg:px-16 py-20 md:py-28 bg-bone">
      <div className="max-w-3xl mx-auto text-center bg-champagne px-8 md:px-16 py-16 md:py-20">
        <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-4">
          The Inner Circle
        </p>
        <h2 className="font-serif text-ink text-3xl md:text-5xl font-light leading-tight">
          Join for 10% off
          <br />
          <span className="italic">your first order</span>
        </h2>
        <p className="mt-5 text-ink/75 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          New arrivals, restocks, and quiet inspiration — delivered once a week, never more.
        </p>
        <form
          onSubmit={onSubmit}
          className="mt-9 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-bone border border-hairline px-5 py-4 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors"
            required
          />
          <button
            type="submit"
            disabled={submitting}
            className="bg-ink text-bone px-8 py-4 text-[11px] uppercase tracking-wider2 font-medium hover:bg-gold-deep transition-colors disabled:opacity-50"
          >
            {submitting ? "Joining…" : "Join"}
          </button>
        </form>
        <p className="mt-5 text-[10px] uppercase tracking-wider2 text-muted">
          By signing up you agree to our Privacy Policy
        </p>
      </div>
    </section>
  );
}
