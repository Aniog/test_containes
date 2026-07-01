import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-[#FAF8F6]">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-white overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="text-[#C9A962] uppercase tracking-widest text-sm">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Crafted with Intention
            </h2>
            <p className="text-[#6B635A] leading-relaxed mb-6">
              At Velmora, we believe jewelry is more than an accessory—it's a memory, a statement, a treasure. 
              Each piece in our collection is thoughtfully designed with attention to detail and crafted from 
              premium materials that stand the test of time.
            </p>
            <p className="text-[#6B635A] leading-relaxed mb-8">
              Our demi-fine jewelry bridges the gap between luxury and accessibility, offering pieces that 
              feel special without the exclusive price tag. We use only the finest 18K gold plating and 
              hypoallergenic materials, ensuring beauty that lasts.
            </p>
            <Link 
              to="/about"
              className="inline-block border-b border-[#1A1814] pb-1 text-sm uppercase tracking-widest hover:text-[#C9A962] hover:border-[#C9A962] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}