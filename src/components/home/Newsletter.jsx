import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            toast.success("Welcome to Velmora. Check your inbox for your 10% off code.");
            setEmail("");
        }
    };

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.4em] font-sans font-medium text-accent">The Journal</h2>
            <h3 className="text-4xl md:text-5xl font-serif italic">Join the Collection</h3>
            <p className="text-sm text-white/60 font-sans tracking-wide">
                Subscribe to receive seasonal collection launches, styling tips, <br className="hidden md:block" /> and 10% off your first order.
            </p>
        </div>

        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="your@email.com" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent border-b border-white/30 py-4 px-1 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-white/30"
          />
          <button 
            type="submit"
            className="bg-accent text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 font-bold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
