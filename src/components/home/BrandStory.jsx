import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F1EB]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#C9A66B]" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-sm font-sans font-medium tracking-[0.2em] text-[#C9A66B] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3D3833] mb-6 leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <div className="space-y-4 text-[#9A8E82] leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to feel extraordinary. 
                Our journey began with a simple vision: to create jewelry that bridges 
                the gap between fashion and fine, making luxury accessible without 
                compromising on quality.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed with 18K gold 
                plating and premium materials, ensuring you can wear your treasures 
                from morning meetings to evening celebrations — and everywhere in between.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-sans font-medium text-[#3D3833] hover:text-[#C9A66B] transition-colors group"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
