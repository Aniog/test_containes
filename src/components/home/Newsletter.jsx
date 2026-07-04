import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    setSubmitted(true);
    toast.success("Welcome to Velmora. Check your inbox for 10% off.");
  };

  return (
    <section className="py-20 sm:py-24 bg-rose">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow">The list</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
            Join for 10% off
            <br />
            <span className="italic font-light">your first order.</span>
          </h2>
          <p className="mt-5 font-sans text-[0.95rem] text-mute leading-relaxed">
            Early access to new collections, quiet notes from the workbench,
            and the occasional gifting guide. No noise.
          </p>

          {submitted ? (
            <div className="mt-8 inline-flex items-center gap-3 bg-cream border border-ink/10 rounded-sm px-6 py-4">
              <Check size={18} className="text-bronze" />
              <span className="font-sans text-[0.9rem] text-ink">
                Thanks — your code is on its way.
              </span>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-cream border border-ink/15 rounded-sm px-4 h-12 text-ink placeholder:text-mute focus:outline-none focus:border-ink"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-ink text-cream h-12 px-6 font-sans uppercase tracking-wider2 text-[0.78rem] rounded-sm hover:bg-black transition-colors"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          )}

          <p className="mt-4 font-sans text-[0.75rem] text-mute">
            By subscribing, you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </div>
      </Container>
      <Toaster position="bottom-center" richColors closeButton theme="light" />
    </section>
  );
};

export default Newsletter;
