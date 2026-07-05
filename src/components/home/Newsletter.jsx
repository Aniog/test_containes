import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("You're in. Check your inbox for your 10% off code.");
      setSubmitting(false);
      setDone(true);
      setEmail("");
    }, 600);
  };

  return (
    <section className="container-velmora py-20 md:py-28">
      <div className="relative overflow-hidden bg-ink text-cream">
        {/* Decorative gold corner */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative grid grid-cols-1 items-center gap-10 px-8 py-16 md:grid-cols-12 md:px-16 md:py-24">
          <div className="md:col-span-7">
            <p className="eyebrow text-cream/60">The Velmora Letter</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-balance">
              Join for 10% off your first order — and a quiet note in your inbox every other Sunday.
            </h2>
            <p className="mt-4 text-sm text-cream/70 max-w-md">
              Early access to new collections, behind-the-bench stories, and the occasional gift.
            </p>
          </div>
          <div className="md:col-span-5">
            <form onSubmit={onSubmit} className="w-full">
              <label htmlFor="news-email" className="sr-only">
                Email address
              </label>
              <div className="flex items-center border-b border-cream/40 pb-3 focus-within:border-accent transition-colors">
                <input
                  id="news-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-transparent text-base text-cream placeholder:text-cream/50 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest2 text-cream transition-opacity hover:opacity-70 disabled:opacity-50"
                >
                  {done ? (
                    <>
                      <Check size={14} strokeWidth={2} /> Joined
                    </>
                  ) : submitting ? (
                    "Joining…"
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight size={12} strokeWidth={1.5} />
                    </>
                  )}
                </button>
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-widest2 text-cream/50">
                No spam. Unsubscribe in one click.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
