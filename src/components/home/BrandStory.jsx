import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 lg:py-28 bg-velmora-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-velmora-gold/30 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-4xl lg:text-5xl text-velmora-charcoal mb-6">
              Our Story
            </h2>
            <div className="hairline max-w-16 mb-6" />
            <p className="text-velmora-charcoal/80 leading-relaxed mb-6">
              Founded in 2018, Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
            </p>
            <p className="text-velmora-charcoal/80 leading-relaxed mb-8">
              We craft each piece with intention, using only the finest 18K gold plating over sterling silver, ensuring both beauty and durability. Our designs blend timeless elegance with modern sensibility, creating jewelry that transitions effortlessly from day to night.
            </p>
            <Link 
              to="/about"
              className="inline-block btn-outline"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;