import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[#E5DED5] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80"
              alt="Velmora Fine Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-[#B8943C] text-sm tracking-[0.15em] uppercase font-medium">
              Our Story
            </p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#1C1917] font-medium mt-4 leading-tight">
              Jewelry that feels
              <br />
              <span className="italic">like it was always yours</span>
            </h2>
            <div className="w-12 h-px bg-[#B8943C] mt-6" />
            <p className="text-[#6B6358] mt-6 leading-relaxed">
              Velmora was born from a belief that fine jewelry shouldn&apos;t
              be reserved for special occasions. Every piece is crafted in 18K
              gold plating with genuine gemstones — designed to be worn, layered,
              and lived in. From our hands to yours, with care at every step.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-sm tracking-[0.1em] uppercase text-[#1C1917] font-medium hover:text-[#B8943C] transition-colors group"
            >
              Discover More
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}