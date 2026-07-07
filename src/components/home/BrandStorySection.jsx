import { Link } from 'react-router-dom';

const BrandStorySection = () => {
  return (
    <section className="py-20 md:py-28 bg-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="text-gold font-sans text-xs tracking-ultra-wide uppercase mb-4">
              Our Story
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight mb-6">
              Where Craft Meets
              <br />
              <span className="italic">Everyday Luxury</span>
            </h2>

            <div className="space-y-4 text-warmgray font-light leading-relaxed">
              <p>
                At Velmora, we believe that beautiful jewelry shouldn't be reserved 
                for special occasions alone. Every piece in our collection is designed 
                to become a cherished part of your daily story.
              </p>
              <p>
                Each design begins as a sketch, brought to life by skilled artisans 
                who understand that the details matter. From the weight of a huggie 
                to the drape of a chain, we obsess over the qualities that make our 
                jewelry feel truly special.
              </p>
              <p>
                We source only the finest 18K gold plating over hypoallergenic metals, 
                ensuring that every piece is as comfortable as it is beautiful.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm text-charcoal hover:text-gold transition-colors group"
            >
              <span className="border-b border-transparent group-hover:border-gold transition-colors pb-0.5">
                Discover Our Journey
              </span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
