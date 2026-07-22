import { useState } from "react";
import { Send, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-cocoa text-bone">
      <div className="container-shell py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <span className="eyebrow-light text-champagne">The Inner Circle</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 leading-[1.05]">
              Join for{" "}
              <span className="italic text-gold-gradient">10% off</span> your
              first order.
            </h2>
            <p className="mt-5 text-bone-soft text-base md:text-lg max-w-xl leading-relaxed">
              Early access to new collections, atelier stories, and a small
              thank-you for being part of the list.
            </p>
          </div>

          <div className="md:col-span-5">
            {submitted ? (
              <div className="flex items-center gap-3 border border-champagne/50 text-bone p-5">
                <span className="w-9 h-9 rounded-full bg-champagne text-espresso flex items-center justify-center">
                  <Check className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-sm">Welcome to the inner circle.</p>
                  <p className="text-[10px] tracking-wider-3 uppercase text-bone-soft mt-1">
                    Check your inbox for your code
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex border-b-2 border-bone/30 focus-within:border-champagne transition-colors duration-300">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    aria-label="Email address"
                    className="flex-1 bg-transparent text-bone placeholder:text-bone-soft/60 text-base py-3.5 outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="px-3 text-bone hover:text-champagne transition-colors duration-300"
                  >
                    <Send className="w-5 h-5" strokeWidth={1.25} />
                  </button>
                </div>
                <p className="text-[10px] tracking-wider-3 uppercase text-bone-soft/70">
                  By signing up you agree to our privacy policy
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
