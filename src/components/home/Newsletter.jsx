import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/common/Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("invalid");
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 700);
  };

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="bg-ink text-cream px-8 py-16 sm:px-16 sm:py-20 lg:py-24 relative overflow-hidden">
          {/* Decorative gold bokeh */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(232,201,154,0.15), transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(232,201,154,0.10), transparent 65%)",
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-2xl mx-auto text-center">
            <span className="label-eyebrow text-gold-pale">The List</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-cream mt-5 leading-[1.05]">
              Join for 10% off
              <br />
              <em className="italic text-gold-pale">your first order</em>
            </h2>
            <p className="text-cream/70 mt-5 max-w-md mx-auto">
              Subscribe to receive private launches, restocks, and stories from
              the atelier. No spam — only treasures.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "invalid" || status === "success") setStatus("idle");
                }}
                placeholder="your@email.com"
                aria-label="Email address"
                className="field-input field-input-light text-center sm:text-left placeholder:text-cream/40"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-gold whitespace-nowrap"
              >
                {status === "loading" ? "Joining…" : status === "success" ? (
                  <>
                    Subscribed
                    <Check size={14} />
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </>
                )}
              </button>
            </form>
            {status === "invalid" && (
              <p className="text-xs text-gold-pale mt-4">
                Please enter a valid email address.
              </p>
            )}
            {status === "success" && (
              <p className="text-xs text-gold-pale mt-4">
                Welcome to Velmora. Your code is on its way.
              </p>
            )}
            <p className="text-[11px] text-cream/40 mt-6">
              By subscribing you agree to our Privacy Policy. Unsubscribe any time.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
