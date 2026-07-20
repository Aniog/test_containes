import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto bg-[#FDFCFB] border border-gray-100 p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
        {/* Subtle Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium">Be the first to know</p>
          <h2 className="text-4xl md:text-5xl font-serif">Join for 10% off your <br className="hidden md:block" /> first order</h2>
          <p className="text-gray-500 max-w-lg mx-auto font-light">
            Subscribe to receive exclusive offers, early access to new collections, and jewelry care tips.
          </p>
        </div>

        <form className="relative z-10 max-w-md mx-auto flex flex-col md:flex-row gap-4 pt-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 bg-white border border-gray-200 px-6 py-4 outline-none focus:border-black transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-10 py-4 uppercase tracking-[0.2em] text-sm hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
EOF > /workspace/my-app/src/components/home/Newsletter.jsx
import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto bg-[#FDFCFB] border border-gray-100 p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
        {/* Subtle Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium">Be the first to know</p>
          <h2 className="text-4xl md:text-5xl font-serif">Join for 10% off your <br className="hidden md:block" /> first order</h2>
          <p className="text-gray-500 max-w-lg mx-auto font-light">
            Subscribe to receive exclusive offers, early access to new collections, and jewelry care tips.
          </p>
        </div>

        <form className="relative z-10 max-w-md mx-auto flex flex-col md:flex-row gap-4 pt-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 bg-white border border-gray-200 px-6 py-4 outline-none focus:border-black transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-10 py-4 uppercase tracking-[0.2em] text-sm hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
