import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="section-padding">
      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Left */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-image"
              data-strk-bg="elegant jewelry workshop artisan crafting gold jewelry"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              style={{ 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundColor: '#e8e4df'
              }}
            />
          </div>

          {/* Text Right */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Velmora, we believe that jewelry should be as unique as the woman who wears it. 
                Founded with a passion for accessible luxury, we create demi-fine pieces that bridge 
                the gap between costume and fine jewelry.
              </p>
              <p>
                Each piece is thoughtfully designed and crafted using 18k gold plating over 
                high-quality brass, ensuring our jewelry is not only beautiful but built to last. 
                We prioritize hypoallergenic materials, so you can wear your favorite pieces 
                from morning to night without irritation.
              </p>
              <p>
                Our commitment to quiet luxury means we don't follow trends—we create timeless 
                pieces that become treasured parts of your collection, worn and loved for years to come.
              </p>
            </div>
            <Link 
              to="/about" 
              className="btn-outline inline-flex items-center gap-2 mt-4"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
