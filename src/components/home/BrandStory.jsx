import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F1EB]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-[#E8E2D9] overflow-hidden opacity-0 animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="opacity-0 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C2824] mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-[#6B635A] font-sans leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise.
              </p>
              <p>
                We craft demi-fine pieces that bridge the gap between luxury and accessibility — using premium materials like 18K gold plating, genuine crystals, and hypoallergenic metals.
              </p>
              <p>
                Each piece in our collection is designed to become a treasured part of your personal story, whether you're treating yourself or gifting someone special.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-sans tracking-wider text-[#2C2824] border-b border-[#2C2824] pb-1 hover:text-[#C9A962] hover:border-[#C9A962] transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}