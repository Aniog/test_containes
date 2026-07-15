import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-[#1A1A1A]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-[#242424] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs text-[#C9A962] uppercase tracking-[0.2em]">
              Our Story
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-[#F5F5F0] tracking-wide">
              Crafted with Intention
            </h2>
            <p className="mt-6 text-[#A8A8A0] leading-relaxed">
              At Velmora, we believe jewelry is more than an accessory—it's a form of 
              self-expression, a memory keeper, and a daily reminder of your worth.
            </p>
            <p className="mt-4 text-[#A8A8A0] leading-relaxed">
              Each piece in our collection is thoughtfully designed with premium materials 
              and crafted to last. We source ethically, create responsibly, and deliver 
              luxury that's accessible.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm text-[#C9A962] uppercase tracking-[0.15em] border-b border-[#C9A962] pb-1 hover:text-[#D4B978] hover:border-[#D4B978] transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
