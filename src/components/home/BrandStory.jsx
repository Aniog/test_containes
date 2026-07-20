import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-a4b5c6"
              data-strk-img="artisan crafting gold jewelry workshop warm lighting closeup"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src=""
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold-400/30 hidden lg:block" />
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold-500 mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800 mb-6 leading-tight">
              Jewelry That Tells
              <br />
              <span className="italic">Your Story</span>
            </h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: that every woman deserves
                to feel adorned with jewelry that's both beautiful and
                meaningful, without the luxury markup.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed and
                crafted using 18K gold plating over premium brass, ensuring a
                warm, lasting glow that's also hypoallergenic. We work directly
                with skilled artisans who share our commitment to quality and
                detail.
              </p>
              <p>
                From our studio to your jewelry box, every Velmora piece is made
                to be treasured — a quiet luxury that becomes part of your
                everyday story.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm tracking-wider uppercase text-charcoal-700 hover:text-gold-500 transition-colors group"
            >
              Read Our Story
              <ArrowRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
