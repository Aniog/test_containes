import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const BrandStory = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Jewelry craftsperson at work"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-champagne/30" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-6 leading-tight">
              Where Quiet Luxury
              <br />
              Meets <span className="italic text-cocoa">Timeless Craft</span>
            </h2>
            
            <div className="space-y-4 text-cocoa leading-relaxed mb-8">
              <p>
                Founded in 2019, Velmora was born from a simple belief: every woman deserves 
                jewelry that makes her feel extraordinary, without the extraordinary price tag.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed and crafted with 
                meticulous attention to detail. We use only the finest 18K gold plating over 
                hypoallergenic sterling silver, ensuring beauty that lasts.
              </p>
              <p>
                Our name, Velmora, is derived from the Italian words for "veil" and "gold" — 
                a tribute to the subtle, radiant beauty we aim to bring to everyday moments.
              </p>
            </div>

            <Link to="/about">
              <Button variant="secondary" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 inline-block transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
