import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-20 md:py-28 bg-bone">
      <div className="container-velmora">
        <div className="bg-ink text-bone px-8 py-16 md:px-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-eyebrow text-bone/70 mb-5">
              The Velmora Circle
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-bone">
              Join for
              <span className="italic"> 10% off</span>
              <br className="hidden md:block" /> your first order.
            </h2>
            <p className="mt-5 text-sm md:text-base text-bone/75 max-w-md leading-relaxed">
              Editorial lookbooks, early access to new releases, and quiet
              dispatches from the studio. No noise.
            </p>
          </div>

          <div className="md:col-span-5">
            {status === "success" ? (
              <div className="flex items-center gap-3 text-bone">
                <span className="w-10 h-10 rounded-full border border-bone/40 flex items-center justify-center">
                  <Check className="w-4 h-4" strokeWidth={1.4} />
                </span>
                <div>
                  <p className="font-serif text-2xl">Welcome.</p>
                  <p className="text-sm text-bone/70">
                    Your code is on its way to your inbox.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent border-b border-bone/40 focus:border-bone py-3 text-bone placeholder:text-bone/50 outline-none transition-colors text-sm md:text-base"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 border border-bone text-bone px-7 py-3 text-[11px] uppercase tracking-product font-medium hover:bg-bone hover:text-ink transition-colors duration-300"
                  >
                    Subscribe
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                </div>
                <p className="text-[10px] uppercase tracking-eyebrow text-bone/55">
                  By subscribing you agree to our privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}