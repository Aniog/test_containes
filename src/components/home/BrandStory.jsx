import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-[#E5E0D8] overflow-hidden animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in delay-200">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">Our Story</h2>
            <div className="w-16 h-px bg-[#C9A962] my-6" />
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Founded with a passion for quiet luxury, Velmora was born from the belief that beautiful jewelry should feel accessible without compromising on quality. Each piece in our collection is thoughtfully designed to become a treasured part of your personal story.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              We believe in jewelry that whispers rather than shouts—pieces that catch the light just right, that become your daily companions, that you reach for again and again. This is demi-fine jewelry elevated.
            </p>
            <Link 
              to="/about"
              className="inline-block text-sm tracking-wider uppercase border-b border-[#1A1A1A] pb-1 hover:text-[#C9A962] hover:border-[#C9A962] transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}