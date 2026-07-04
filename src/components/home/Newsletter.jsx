import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="container-x pb-20 md:pb-28">
      <div className="bg-gold text-bg">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12 px-7 py-14 md:px-14 md:py-20">
          <div className="md:col-span-7">
            <p className="label-cap text-bg/80 mb-3">The Velmora letter</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.05] max-w-xl">
              Join for 10% off your first order.
            </h2>
            <p className="mt-4 text-[14px] md:text-[15px] text-bg/85 max-w-md leading-relaxed">
              Early access to new collections, edits from the studio, and
              occasional gifts for our subscribers.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-5 w-full"
            noValidate
          >
            <div className="flex flex-col sm:flex-row items-stretch border border-bg/40 bg-transparent">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Email address"
                className="flex-1 bg-transparent text-bg placeholder:text-bg/60 px-4 py-3.5 text-[14px] outline-none"
                aria-invalid={status === "error"}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-bg text-ink label-cap px-5 py-3.5 hover:bg-cream transition-colors"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            </div>
            <p className="mt-3 text-[11px] text-bg/75 min-h-[16px]">
              {status === "error"
                ? "Please enter a valid email address."
                : status === "success"
                  ? "Welcome — check your inbox for your 10% off code."
                  : "By subscribing you agree to our privacy policy."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
