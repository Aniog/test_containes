import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm p-8 md:p-16 text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] mb-3 font-sans">Join Us</p>
          <h2 className="text-3xl md:text-4xl text-[#F5F0EB] font-serif">
            Receive 10% Off Your First Order
          </h2>
          <p className="text-sm md:text-base text-[#A0988E] mt-4 max-w-md mx-auto leading-relaxed">
            Be the first to know about new collections, exclusive offers, and jewelry care tips.
          </p>

          <div className="mt-8 max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#0F0F0F] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F5F0EB] placeholder:text-[#6B6560] focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
              <button className="bg-[#C9A96E] text-[#0F0F0F] px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#D4B87A] transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-[10px] text-[#6B6560] mt-3">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}