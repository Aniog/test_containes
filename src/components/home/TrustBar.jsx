import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-[#FAF9F6] border-b border-[#E5E1DA] py-4 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-center md:justify-around items-center space-x-8 md:space-x-0 whitespace-nowrap overflow-x-auto no-scrollbar">
          {items.map((item, i) => (
            <div key={i} className="flex items-center space-x-2 shrink-0">
              <span className="w-1 h-1 bg-[#B69750] rounded-full" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-70">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
EOF && cat <<EOF > src/components/home/Newsletter.jsx
import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-[#E5E1DA]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium">Join the World of Velmora</h2>
          <p className="font-sans text-sm opacity-60 tracking-wide">
            Subscribe to receive updates, access to exclusive deals, and 10% off your first order.
          </p>
          <form className="flex flex-col md:flex-row gap-4 mt-12">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-grow bg-transparent border-b border-[#1A1A1A] py-3 px-1 text-xs tracking-widest focus:outline-none focus:border-[#B69750] transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-[#1A1A1A] text-white px-10 py-3 uppercase text-[10px] tracking-[0.2em] font-sans font-bold hover:bg-[#B69750] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
EOF > src/components/home/TrustBar.jsx
import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-[#FAF9F6] border-b border-[#E5E1DA] py-4 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-center md:justify-around items-center space-x-8 md:space-x-0 whitespace-nowrap overflow-x-auto no-scrollbar">
          {items.map((item, i) => (
            <div key={i} className="flex items-center space-x-2 shrink-0">
              <span className="w-1 h-1 bg-[#B69750] rounded-full" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-70">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
EOF && cat <<EOF > src/components/home/Newsletter.jsx
import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-[#E5E1DA]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium">Join the World of Velmora</h2>
          <p className="font-sans text-sm opacity-60 tracking-wide">
            Subscribe to receive updates, access to exclusive deals, and 10% off your first order.
          </p>
          <form className="flex flex-col md:flex-row gap-4 mt-12">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-grow bg-transparent border-b border-[#1A1A1A] py-3 px-1 text-xs tracking-widest focus:outline-none focus:border-[#B69750] transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-[#1A1A1A] text-white px-10 py-3 uppercase text-[10px] tracking-[0.2em] font-sans font-bold hover:bg-[#B69750] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
