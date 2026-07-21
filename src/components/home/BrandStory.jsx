import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section bg-[#F5F2ED]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Story</h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Velmora was born from a simple belief: beautiful jewelry should be accessible. 
              We craft demi-fine pieces that bridge the gap between fashion and fine jewelry, 
              creating timeless accessories that don't break the bank.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Each piece is designed with intention, using quality materials like 18K gold plating 
              and sterling silver. We believe in jewelry that tells your story — whether it's a 
              gift for someone special or a treat for yourself.
            </p>
            <Link 
              to="/about" 
              className="btn-secondary inline-flex"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
