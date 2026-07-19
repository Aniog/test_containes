import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-cream-100 py-16 md:py-24">
      <div className="container-wide">
        <div className="bg-espresso-300 text-cream-50 px-6 py-14 md:px-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-200">
              Join the List
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-[1.1] tracking-tight">
              Join for <em className="italic text-gold-200">10% off</em> your
              first order.
            </h2>
            <p className="mt-4 text-cream-100/80 text-sm md:text-base max-w-md">
              New arrivals, styling notes, and the occasional discount — never
              spam, easy to unsubscribe.
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="md:col-span-5 w-full"
            aria-label="Newsletter signup"
          >
            <label className="block font-sans text-[11px] uppercase tracking-widest2 text-cream-200/85 mb-3">
              Email Address
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-cream-100/30 px-4 py-3.5 text-cream-50 placeholder:text-cream-100/45 font-sans text-sm focus:outline-none focus:border-gold-200 transition-colors"
              />
              <button
                type="submit"
                className="btn bg-cream-50 text-espresso-300 px-7 py-3.5 hover:bg-gold-200 hover:text-espresso-300"
              >
                Subscribe
              </button>
            </div>
            {submitted && (
              <p className="mt-3 text-[12px] uppercase tracking-widest2 text-gold-200">
                Welcome — check your inbox.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
