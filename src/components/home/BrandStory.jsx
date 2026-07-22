import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[#1A1A1A] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] mb-3 font-sans">Our Story</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#F5F0EB] font-serif leading-tight">
              Jewelry That<br />Tells a Story
            </h2>
            <div className="w-12 h-[1px] bg-[#C9A96E] mt-6 mb-6" />
            <p className="text-sm md:text-base text-[#A0988E] leading-relaxed">
              At Velmora, we believe fine jewelry shouldn't be reserved for special occasions. 
              Every piece is crafted with care, using premium 18K gold plating and ethically 
              sourced materials — designed to be worn, layered, and loved every day.
            </p>
            <p className="text-sm md:text-base text-[#A0988E] leading-relaxed mt-4">
              From our atelier to your doorstep, we're redefining what accessible luxury means.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-[0.15em] uppercase text-[#C9A96E] hover:text-[#D4B87A] transition-colors font-medium"
            >
              Discover Our Collection
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}