import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      className="section-tight bg-sand-soft"
      aria-label="Join the newsletter"
    >
      <div className="max-w-editorial mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow mb-4 text-brass-700">The List</p>
            <h2 className="font-display text-cocoa-900 text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em]">
              Join for{" "}
              <em className="italic font-normal">10% off</em>
              <br />
              your first order
            </h2>
            <p className="mt-5 text-cocoa-700 text-[15px] leading-relaxed max-w-md">
              Quiet notes from the studio, first access to small batches, and a
              small welcome gift on your birthday.
            </p>
          </div>

          <div className="md:col-span-5">
            {submitted ? (
              <div className="bg-ivory-50 border border-cocoa-900/10 p-7 rounded-sm">
                <p className="font-display text-2xl text-cocoa-900 mb-2">
                  Welcome to the list.
                </p>
                <p className="text-cocoa-700 text-sm">
                  Your code is on its way to <span className="font-medium">{email}</span>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="bg-ivory-50 border border-cocoa-900/10 p-6 md:p-7 rounded-sm"
              >
                <label
                  htmlFor="newsletter-email"
                  className="block text-[11px] tracking-button uppercase text-cocoa-900 mb-3"
                >
                  Email Address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input-elegant mb-5"
                />
                <button type="submit" className="btn-primary w-full">
                  Send My Code
                </button>
                <p className="mt-4 text-[11px] text-taupe-500 leading-relaxed">
                  By signing up you agree to receive marketing emails. Unsubscribe
                  anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
