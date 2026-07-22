import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-text] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-warm-950/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 id="about-hero-title" className="font-serif text-4xl md:text-6xl tracking-wide">
            Our Story
          </h1>
          <p id="about-hero-text" className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Crafting demi-fine jewelry that lives with you, every day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding py-20 md:py-28">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="prose prose-warm max-w-none">
            <p className="text-lg text-warm-700 leading-relaxed">
              Velmora was born from a simple belief: that the jewelry you wear every day should feel
              as special as the pieces you save for occasions. We craft demi-fine jewelry in 18K gold
              plate — designed to move with you, layer effortlessly, and become a part of your story.
            </p>
            <p className="mt-6 text-warm-600 leading-relaxed">
              Every piece is designed in-house with meticulous attention to detail. We source only
              the finest materials, from hypoallergenic brass bases to brilliant cubic zirconia
              crystals, ensuring that each piece is as kind to your skin as it is beautiful to behold.
            </p>
            <p className="mt-6 text-warm-600 leading-relaxed">
              We believe luxury should be accessible. By selling directly to you, we cut out the
              traditional retail markups and pass the savings on — so you get premium quality
              without the premium price tag.
            </p>
          </div>

          <div className="mt-16 text-center">
            <Link to="/shop" className="btn-accent">
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}