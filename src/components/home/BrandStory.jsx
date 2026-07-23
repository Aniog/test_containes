import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section-padding bg-[#F5EDDA]/20">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3/4] bg-[#E8E2D9] rounded-sm overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80)',
              }}
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-6">
              Jewelry That Tells<br />Your Story
            </h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                Velmora was born from a simple belief: luxury shouldn't be reserved for special occasions. 
                Every piece in our collection is designed to be worn, loved, and lived in.
              </p>
              <p>
                We craft demi-fine jewelry in 18K gold plating over sterling silver — the perfect balance 
                of quality and accessibility. Each design is inspired by the quiet moments that make life beautiful.
              </p>
            </div>
            <Link to="/about" className="btn-secondary mt-8 inline-flex">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
