import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="pt-24 pb-24" ref={containerRef}>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center mb-24 bg-secondary/30">
        <img 
          data-strk-img-id="about-hero"
          data-strk-img="jewelry designer studio high end editorial portrait"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          alt="Our studio"
          className="absolute inset-0 w-full h-full object-cover"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl uppercase tracking-widest mb-6">Our Story</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl mb-8 uppercase tracking-wide">Redefining Fine Jewelry</h2>
          <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
            Velmora Fine Jewelry was founded on a simple belief: quiet luxury shouldn't be reserved for special occasions or locked away in safes. 
          </p>
          <p className="text-lg font-light leading-relaxed text-muted-foreground">
            We are a direct-to-consumer brand specializing in demi-fine gold jewelry. Each piece is thoughtfully designed, meticulously crafted, and accessible—meant to be lived in, layered, and loved every single day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="aspect-[4/5] bg-secondary/50 relative">
             <img 
              data-strk-img-id="about-craft"
              data-strk-img="gold jewelry making process tools hands"
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              alt="Craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl uppercase tracking-widest mb-6">Craftsmanship</h3>
            <p className="font-light leading-relaxed text-muted-foreground mb-4">
              We partner directly with leading jewelers to bring you exceptional quality without the traditional retail markups. 
            </p>
            <p className="font-light leading-relaxed text-muted-foreground">
              Our core collection features an 18K gold vermeil finish over a sterling silver or brass base, ensuring durability and a rich, warm tone that stands the test of time. Every piece is hypoallergenic and nickel-free.
            </p>
          </div>
        </div>

        <div className="text-center bg-secondary/20 p-12 md:p-24 rounded">
          <h3 className="font-serif text-3xl uppercase tracking-widest mb-6">Ready to find your new everyday uniform?</h3>
          <Link to="/shop" className="inline-block border border-foreground px-8 py-3 uppercase tracking-widest font-semibold text-sm hover:bg-foreground hover:text-background transition-colors">
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;