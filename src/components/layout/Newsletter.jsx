import { useState } from "react";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setStatus("submitting");
    // Simulated submit — wire to a real endpoint in src/api when ready.
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      toast.success("Welcome to Velmora. Check your inbox for 10% off.");
    }, 600);
  };

  return (
    <section
      id="newsletter"
      className="bg-charcoal py-20 text-ivory md:py-28"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <p className="eyebrow !text-ivory/60">Join the atelier</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-ivory md:text-5xl">
              <span className="italic text-gold-soft">Ten percent</span> on
              your first order, and a slow letter from us each month.
            </h2>
            <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-ivory/70">
              New collections, behind-the-bench stories, and the occasional
              gift guide. No noise, ever.
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="md:col-span-6"
            aria-label="Join the Velmora newsletter"
          >
            <label htmlFor="newsletter-email" className="eyebrow !text-ivory/60">
              Email
            </label>
            <div className="mt-3 flex items-center gap-3 border-b border-ivory/30 pb-3">
              <Mail size={16} strokeWidth={1.4} className="text-ivory/60" />
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 bg-transparent font-sans text-[15px] text-ivory placeholder:text-ivory/40 focus:outline-none"
                required
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="font-sans text-[12px] font-medium uppercase tracking-product text-ivory transition-colors hover:text-gold-soft disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Subscribe →"}
              </button>
            </div>
            <p className="mt-4 font-sans text-[12px] text-ivory/55">
              By subscribing, you agree to our privacy policy. Unsubscribe any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
