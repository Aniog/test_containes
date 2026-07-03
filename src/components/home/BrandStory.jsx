import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 bg-velmora-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-velmora-warm-gray/10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-12">
            <h2 className="font-serif text-4xl text-velmora-base">Our Story</h2>
            <div className="hairline-divider my-6" />
            <p className="text-velmora-warm-gray leading-relaxed">
              Founded with a passion for creating jewelry that transcends trends, 
              Velmora represents the intersection of timeless elegance and modern sensibility. 
              Each piece is thoughtfully designed in our studio, using only the finest 
              materials and craftsmanship.
            </p>
            <p className="mt-4 text-velmora-warm-gray leading-relaxed">
              We believe that beautiful jewelry should be accessible—pieces that you can 
              wear every day, that become part of your story, and that you'll treasure 
              for years to come.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 btn-outline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}