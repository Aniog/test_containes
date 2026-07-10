import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-editorial">
        <div className="bg-ink text-cream px-7 py-14 sm:px-12 sm:py-16 md:px-20 md:py-24 relative overflow-hidden">
          {/* warm corner accent */}
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #B8893E 0%, transparent 70%)" }}
          />
          <div className="relative max-w-2xl">
            <div className="eyebrow text-gold-400 mb-5">Join the studio</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream leading-[1.1] text-balance">
              10% off your first order,
              <br className="hidden sm:block" /> and letters from the bench.
            </h2>
            <p className="mt-5 text-cream/70 text-sm md:text-base leading-relaxed max-w-lg">
              Be the first to know about new pieces, restocks and quiet, considered stories
              from the studio. No noise — only what matters.
            </p>

            {submitted ? (
              <div className="mt-8 inline-flex items-center gap-3 border border-gold-400/50 px-5 py-3">
                <Check className="w-4 h-4 text-gold-400" strokeWidth={2} />
                <span className="text-sm text-cream">Thank you. Check your inbox for your code.</span>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 bg-transparent border border-cream/30 px-5 py-3.5 text-sm text-cream placeholder:text-cream/45 outline-none focus:border-gold-400 transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-gold-500 text-cream px-7 py-3.5 text-[11px] uppercase tracking-widest2 font-medium hover:bg-gold-600 transition-colors"
                >
                  Get 10% off
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </form>
            )}
            <p className="mt-4 text-[11px] text-cream/45">
              By signing up you agree to receive marketing emails. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
