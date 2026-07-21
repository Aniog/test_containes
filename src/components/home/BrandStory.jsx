import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=1000&fit=crop"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-white/30 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-dark">Our Story</h2>
            <div className="w-16 h-px bg-velmora-gold mt-6 mb-8" />
            
            <p className="text-velmora-textLight leading-relaxed mb-6">
              Founded with a passion for creating jewelry that transcends trends, Velmora represents the 
              intersection of timeless elegance and modern sensibility. Each piece is thoughtfully designed 
              to become a cherished part of your personal story.
            </p>
            
            <p className="text-velmora-textLight leading-relaxed mb-8">
              Our demi-fine collection uses only the finest materials — 18K gold plating, genuine crystals, 
              and hypoallergenic metals — ensuring that your jewelry not only looks luxurious but feels 
              comfortable enough to wear every day.
            </p>

            <Link
              to="/about"
              className="inline-block btn-outline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;