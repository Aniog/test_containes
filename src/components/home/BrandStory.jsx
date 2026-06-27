import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4 leading-snug">
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p className="mt-6 text-sm text-stone leading-relaxed">
              Born from a love of understated luxury, Velmora creates demi-fine jewelry 
              that bridges the gap between costume and fine. Each piece is thoughtfully 
              designed and meticulously crafted with 18K gold plating over hypoallergenic 
              metals — because beautiful jewelry should never compromise on comfort.
            </p>
            <p className="mt-4 text-sm text-stone leading-relaxed">
              We believe in pieces that become part of your story. Jewelry you reach for 
              every morning, that catches the light in quiet moments, that makes you feel 
              like yourself — only more so.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold hover:text-cream transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
