import { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

function generateDiscountCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "VELMORA10-";
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError(null);

    const code = generateDiscountCode();

    const { data: response, error: dbError } = await client
      .from("Newsletter Subscriptions")
      .insert({
        data: {
          email,
          source: "homepage",
          discount_code: code,
          subscribed_at: new Date().toISOString(),
        },
      })
      .select()
      .single();

    setLoading(false);

    if (dbError || response?.success === false) {
      const msgs = response?.errors?.join(", ") || dbError?.message || "Something went wrong.";
      setError(msgs);
      console.error("Newsletter signup error:", msgs);
      return;
    }

    console.log("Newsletter signup saved:", response?.data);
    setDiscountCode(code);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-velvet py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory tracking-wide mb-4">
          10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-champagne/80 leading-relaxed mb-8">
          Subscribe for early access to new collections, styling inspiration, and exclusive offers.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-lg text-gold italic mb-3">
              Thank you for joining. Your code is on its way.
            </p>
            {discountCode && (
              <p className="font-sans text-sm text-champagne/90 tracking-widest uppercase">
                Your code:{" "}
                <span className="font-semibold text-gold border border-gold/40 px-3 py-1 ml-1">
                  {discountCode}
                </span>
              </p>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              disabled={loading}
              className="flex-1 bg-transparent border border-bark/60 focus:border-gold text-champagne placeholder-driftwood font-sans text-sm px-4 py-3.5 outline-none transition-colors duration-300 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gold hover:bg-gold-light text-velvet font-sans text-xs tracking-widest2 uppercase px-8 py-3.5 transition-colors duration-300 whitespace-nowrap disabled:opacity-60"
            >
              {loading ? "Saving…" : "Subscribe"}
            </button>
          </form>
        )}

        {error && (
          <p className="font-sans text-xs text-red-400 mt-3">{error}</p>
        )}

        <p className="font-sans text-[10px] text-driftwood mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
