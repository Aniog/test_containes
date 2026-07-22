import { useState } from "react";
import { Mail, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <Container>
        <div className="bg-brass text-ivory">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-7 px-8 md:px-14 py-12 md:py-16 flex flex-col gap-5">
              <span className="eyebrow text-ivory/80">Welcome to Velmora</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-ivory">
                Join for 10% off <em className="italic">your first order</em>
              </h2>
              <p className="text-ivory/85 text-sm md:text-base font-light leading-relaxed max-w-md">
                Quiet emails. New launches, editorial stories, and the occasional
                members-only edit. No noise.
              </p>
            </div>
            <div className="md:col-span-5 px-8 md:px-14 pb-12 md:py-16">
              {submitted ? (
                <div className="flex items-center gap-3 text-ivory border-b border-ivory/30 pb-3">
                  <Check size={20} strokeWidth={1.5} />
                  <span className="font-serif text-xl">Welcome — check your inbox.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex border-b border-ivory/50 focus-within:border-ivory transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <Mail size={16} strokeWidth={1.3} className="text-ivory/80" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-1 bg-transparent py-3 text-sm md:text-base text-ivory placeholder:text-ivory/55 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="label text-ivory hover:text-ivory/80 px-3"
                  >
                    Join
                  </button>
                </form>
              )}
              <p className="text-[11px] text-ivory/65 font-light mt-4">
                By joining, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
