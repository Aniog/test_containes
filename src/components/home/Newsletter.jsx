import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="section-padding">
      <div className="max-w-page mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-surface via-surface-secondary to-surface border border-[#2a2a2a] rounded-sm p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="max-w-lg mx-auto relative z-10">
            <span className="text-xs tracking-widest uppercase text-accent font-sans">
              Newsletter
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-light mt-3">
              Join for <span className="italic">10% off</span> your first order
            </h2>
            <p className="text-sm text-secondary mt-3 font-sans">
              Be the first to know about new collections, exclusive offers, and
              behind-the-scenes stories.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 max-w-sm mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-background border border-[#2a2a2a] px-4 py-3 text-sm text-primary placeholder:text-[#555] font-sans focus:outline-none focus:border-accent/50 transition-colors"
                />
                <button
                  type="submit"
                  className="btn-primary flex items-center gap-2 px-6"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-accent mt-3 font-sans">
                  Thanks for subscribing! Check your inbox for your discount
                  code.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}