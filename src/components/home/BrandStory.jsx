import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Velmora artisan crafting jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-champagne rounded -z-10" />
          </div>

          {/* Content */}
          <div className="py-8 md:py-0">
            <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-section text-velvet mb-6 leading-tight">
              Designed with Intention,<br />
              <span className="italic">Crafted with Care</span>
            </h2>
            
            <div className="space-y-4 text-mocha leading-relaxed mb-8">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry 
                should be accessible to everyone. We source the finest materials 
                and partner with skilled artisans to create pieces that feel luxurious 
                without the luxury markup.
              </p>
              <p>
                Every piece in our collection is designed to become a treasured part 
                of your story—whether it's a gift for someone you love or a treat 
                for yourself. We believe in jewelry that celebrates life's moments, 
                big and small.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-velvet text-sm tracking-wide group"
            >
              <span className="relative">
                Learn More About Us
                <span className="absolute bottom-0 left-0 w-0 h-px bg-champagne transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
