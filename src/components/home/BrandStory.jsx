import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-[1400px] mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            data-strk-img-id="brand-story-main"
            data-strk-img="artisan hands crafting gold jewelry workshop warm light"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora artisan crafting jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="lg:pl-6">
          <p className="text-velmora-gold text-xs tracking-[0.3em] uppercase mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-cream font-light leading-[1.2] mb-8">
            Jewelry That Feels Like
            <br />
            <em className="italic text-velmora-gold">You</em>
          </h2>
          <p className="text-velmora-text-secondary text-base leading-relaxed mb-5">
            Velmora was born from a simple belief: every woman deserves to wear jewelry that 
            feels special without the luxury markup. We design demi-fine pieces in 18K gold-plated 
            and sterling silver that are hypoallergenic, enduring, and beautifully crafted.
          </p>
          <p className="text-velmora-text-secondary text-base leading-relaxed mb-10">
            Each piece is designed in our studio and hand-finished by skilled artisans who share 
            our obsession with quality. From the first sketch to the final polish, we pour love 
            into every detail — so you can wear it with confidence, every single day.
          </p>
          <Link
            to="/about"
            className="inline-block px-8 py-3.5 border border-velmora-gold text-velmora-gold text-xs tracking-[0.2em] uppercase font-medium hover:bg-velmora-gold hover:text-velmora-bg transition-all duration-300"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
