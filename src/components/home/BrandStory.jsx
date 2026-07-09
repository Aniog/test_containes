import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 bg-muted/30" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16 lg:gap-24">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="jewelry artisan workshop gold pieces tools editorial aesthetic"
            data-strk-img-ratio="3x4"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt="Artisan at work"
            className="w-full h-full object-cover"
          />
          {/* Accent frame */}
          <div className="absolute top-8 left-8 right-8 bottom-8 border border-white/30" />
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.3em] font-sans font-medium text-accent">Craft & Philosophy</h2>
            <h3 className="text-4xl lg:text-5xl font-serif italic leading-tight">
              Quiet luxury, <br /> designed to be worn <br /> every single day.
            </h3>
          </div>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed font-sans max-w-lg">
            <p>
              VELMORA began with a simple belief: fine jewelry shouldn't be reserved for grand occasions. Our collection of demi-fine gold pieces is crafted from the highest quality 18K gold plating over recycled brass, creating a premium feel that remains accessible.
            </p>
            <p>
              Each piece is designed in our London studio, drawing inspiration from understated architectural lines and the raw beauty of natural botanicals. We focus on durability, comfort, and a lifetime of shine.
            </p>
          </div>

          <Link 
            to="/about" 
            className="inline-flex items-center gap-4 text-xs uppercase tracking-widest font-bold group border-b border-primary pb-2"
          >
            Our Story
            <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
