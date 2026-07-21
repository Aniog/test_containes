import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#C9A962] hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs uppercase tracking-widest text-[#C9A962]">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-6">
              Jewelry Designed to Be Treasured
            </h2>
            <p className="text-[#6B6560] leading-relaxed mb-6">
              At Velmora, we believe that jewelry should be more than an accessory—it should be a memory, a milestone, a moment captured in gold and stone. Our pieces are designed with intention, crafted with care, and made to be worn and treasured for generations.
            </p>
            <p className="text-[#6B6560] leading-relaxed mb-8">
              Each piece in our collection is created using only the finest materials: 18K gold plating over sterling silver, ethically sourced crystals, and a commitment to hypoallergenic luxury that doesn't compromise on quality.
            </p>
            <Link
              to="/about"
              className="inline-block text-sm uppercase tracking-widest border-b border-[#1A1A1A] pb-1 hover:text-[#C9A962] hover:border-[#C9A962] transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}