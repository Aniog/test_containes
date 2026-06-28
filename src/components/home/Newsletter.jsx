import { useState } from "react";

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
    <section className="bg-[#1A1410] text-[#F7F2EA] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-[#D9BE85] mb-5">
          Become a Velmora Insider
        </p>
        <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-tight">
          Join for <em className="italic text-[#D9BE85]">10% off</em>
          <br />
          your first order.
        </h2>
        <p className="mt-6 text-[#F7F2EA]/75 max-w-md mx-auto leading-relaxed">
          Early access to new drops, gift guides, and styling notes — once a week,
          never more.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-0 max-w-md mx-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            className="flex-1 bg-transparent border border-[#F7F2EA]/30 focus:border-[#D9BE85] outline-none px-5 py-4 text-sm placeholder:text-[#F7F2EA]/40 text-[#F7F2EA] transition-colors"
          />
          <button
            type="submit"
            className="bg-[#B8924A] hover:bg-[#D9BE85] hover:text-[#1A1410] text-[#F7F2EA] uppercase tracking-[0.22em] text-xs py-4 px-8 transition-colors duration-300 sm:border sm:border-[#B8924A]"
          >
            Subscribe
          </button>
        </form>

        <div className="h-6 mt-4 text-xs">
          {status === "success" && (
            <p className="text-[#D9BE85]">
              Welcome to the family. Your code is on its way.
            </p>
          )}
          {status === "error" && (
            <p className="text-[#F7F2EA]/80">
              Please enter a valid email address.
            </p>
          )}
        </div>

        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#F7F2EA]/40">
          We respect your privacy · Unsubscribe anytime
        </p>
      </div>
    </section>
  );
}
