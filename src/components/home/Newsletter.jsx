import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="bg-[#A68D47] py-20 lg:py-28 text-white relative overflow-hidden">
      {/* Decorative large ampersand or logo watermark could go here */}
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Join the Velmora Insider
          </h2>
          <p className="font-sans font-light tracking-wide text-[#FAF9F5]/90 mb-10">
            Subscribe to receive 10% off your first order, early access to new collections, and exclusive editorial content.
          </p>
          
          {status === "success" ? (
            <div className="p-4 border border-white/30 bg-white/10 font-sans tracking-wide">
              Thank you for subscribing. Check your inbox for your welcome code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent border-b border-white pb-3 px-2 text-white placeholder-white/60 font-sans text-sm tracking-widest uppercase focus:outline-none focus:border-opacity-100 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#2D2A26] text-white py-3 px-8 font-sans text-xs tracking-widest uppercase font-medium hover:bg-black transition-colors disabled:opacity-70 flex-shrink-0"
              >
                {status === "loading" ? "Submitting..." : "Subscribe"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
