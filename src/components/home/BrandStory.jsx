import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="section-padding bg-velmora-warm">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute top-8 left-8 w-20 h-20 border-2 border-white/40" />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-lg text-velmora-charcoal mb-6">
                Our Story
              </h2>
              <div className="w-16 h-px bg-velmora-gold mb-8" />
            </div>

            <div className="space-y-6 font-sans text-base leading-relaxed text-velmora-charcoal-light">
              <p>
                At Velmora, we believe that jewelry should be as unique as the moments it celebrates. 
                Founded with a passion for quiet luxury, we create demi-fine pieces that bridge the gap 
                between precious and accessible.
              </p>
              <p>
                Each design is thoughtfully crafted using 18K gold plating and hypoallergenic materials, 
                ensuring that our jewelry not only looks beautiful but feels comfortable for everyday wear. 
                From delicate huggies to statement necklaces, every piece tells a story.
              </p>
              <p>
                We're committed to sustainable practices and ethical sourcing, because true luxury 
                should never come at the cost of our planet or its people.
              </p>
            </div>

            <Link
              to="/about"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Discover Our Journey
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
