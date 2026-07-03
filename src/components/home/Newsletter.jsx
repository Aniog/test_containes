import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import Eyebrow from "../ui/Eyebrow.jsx";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubmitting(true);
    // Simulated network call — wire to your real provider here.
    window.setTimeout(() => {
      setSubmitting(false);
      setEmail("");
      toast.success("Welcome to Velmora — check your inbox for 10% off.");
    }, 600);
  };

  return (
    <section className="bg-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="relative overflow-hidden border border-ink-700 bg-ink-950 px-6 py-20 md:px-20 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(212,168,87,0.10),transparent_70%)]"
          />
          <div className="relative mx-auto max-w-xl text-center">
            <Eyebrow tone="gold">The List</Eyebrow>
            <h2 className="mt-5 font-serif text-[36px] font-light leading-[1.1] text-ink-100 md:text-[52px]">
              Join for 10% off
              <br />
              <span className="italic text-gold-300">your first order.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md font-sans text-[14px] leading-relaxed text-ink-300">
              Be the first to know about new collections, studio stories, and the
              occasional members-only release.
            </p>
            <form
              onSubmit={onSubmit}
              className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-end"
            >
              <label className="flex-1 text-left">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="input-editorial"
                />
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold-400 px-7 font-sans text-[11px] font-medium uppercase tracking-wider2 text-ink-950 transition-all duration-300 ease-out hover:bg-gold-300 disabled:opacity-50"
              >
                {submitting ? "Joining…" : "Subscribe"}
                <ArrowRight
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
            <p className="mt-5 font-sans text-[11px] text-ink-500">
              By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
