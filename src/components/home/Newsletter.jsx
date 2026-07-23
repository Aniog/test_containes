import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#1C1917] rounded-sm p-10 md:p-14">
          <p className="text-[#D4B96A] text-sm tracking-[0.15em] uppercase font-medium">
            Newsletter
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-white font-medium mt-3">
            Join for 10% Off
          </h2>
          <p className="text-[#A8A29E] mt-3 text-sm max-w-md mx-auto">
            Be the first to know about new collections, exclusive edits, and get
            10% off your first order.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-[#6B6358] text-sm focus:outline-none focus:border-[#B8943C] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#B8943C] text-white px-6 py-3 text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#D4B96A] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}