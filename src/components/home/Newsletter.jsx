import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 sm:py-28 bg-ivory-50">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden bg-espresso-200 text-ivory-50">
          {/* Decorative backdrop */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(226,192,122,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(226,192,122,0.2), transparent 50%)",
            }}
          />
          <div className="relative px-6 sm:px-12 lg:px-20 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-[10px] sm:text-[11px] tracking-widest2 uppercase text-gold-300 mb-4">
                Join the studio list
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-ivory-50 leading-[1.05]">
                10% off your first
                <br />
                <span className="italic text-gold-200">quiet piece.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-ivory-100/80 max-w-md leading-relaxed">
                One note, every other Sunday. New pieces, the occasional story, never noise.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="w-full max-w-md md:ml-auto"
            >
              <label htmlFor="newsletter-email" className="text-[10px] tracking-widest2 uppercase text-ivory-100/70">
                Email address
              </label>
              <div className="mt-2 flex items-center border-b border-ivory-100/40 focus-within:border-gold-300 transition-colors">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="flex-1 bg-transparent border-0 outline-none text-base sm:text-lg py-3 placeholder:text-ivory-100/40 text-ivory-50"
                />
                <button
                  type="submit"
                  className="p-3 text-ivory-50 hover:text-gold-300 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-5 h-5" strokeWidth={1.4} />
                </button>
              </div>
              <p className="mt-4 text-[11px] text-ivory-100/60 tracking-wider2 uppercase min-h-[1.25rem]">
                {submitted ? "Welcome — your 10% code is on its way." : "No spam. Unsubscribe any time."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
