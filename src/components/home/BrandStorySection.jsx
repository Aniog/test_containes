import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStorySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-400" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="section-subtitle block mb-4">OUR STORY</span>
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
              Jewelry that<br />
              <span className="italic">tells your story</span>
            </h2>
            
            <div className="space-y-4 text-charcoal-600 font-sans leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to wear jewelry that makes her feel 
                extraordinary. Our pieces are designed with intention—crafted to be layered, 
                mixed, and treasured for years to come.
              </p>
              <p>
                Each design begins with a sketch and ends with meticulous hand-finishing. 
                We source only the finest materials: 18K gold plating over sterling silver, 
                cubic zirconia stones, and hypoallergenic metals that are gentle on sensitive skin.
              </p>
            </div>

            <Link 
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-charcoal-900 font-sans text-sm tracking-wide group"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-charcoal-900 after:transform after:scale-x-0 after:origin-left after:transition-transform group-hover:after:scale-x-100">
                Discover Our Story
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
