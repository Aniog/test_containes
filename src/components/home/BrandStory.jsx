import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl">Our Story</h2>
            <div className="hairline my-6" />
            <p className="text-velmora-warm-gray leading-relaxed mb-6">
              Founded with a passion for timeless elegance, Velmora creates jewelry that transcends trends. Each piece is thoughtfully designed to become a cherished part of your personal story.
            </p>
            <p className="text-velmora-warm-gray leading-relaxed mb-8">
              Our commitment to quality means using only the finest materials—18K gold plating, genuine crystals, and hypoallergenic metals. We believe beautiful jewelry should be accessible, comfortable, and made to last.
            </p>
            <Link 
              to="/about" 
              className="inline-block btn-secondary text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
