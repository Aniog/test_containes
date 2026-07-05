import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#d4af37]" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mt-3 mb-6 leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <div className="space-y-4 text-[#1a1a1a]/70 leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to feel like her most radiant self. 
                Our demi-fine jewelry bridges the gap between fine jewelry and fashion pieces, 
                offering exceptional quality at accessible prices.
              </p>
              <p>
                Each piece is thoughtfully designed with 18K gold plating over hypoallergenic 
                materials, ensuring comfort and longevity. From the studio to your jewelry box, 
                we craft pieces that become cherished parts of your personal story.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm tracking-[0.2em] text-[#1a1a1a] hover:text-[#d4af37] transition-colors border-b border-[#1a1a1a] hover:border-[#d4af37] pb-1"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
