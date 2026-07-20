import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="pt-40 pb-20" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-serif mb-8">Our Story</h1>
          <p className="text-lg font-light leading-relaxed text-muted-foreground mb-12">
            Velmora was founded on the belief that jewelry should be more than just an accessory. 
            It should be a reflection of your journey, your style, and your values.
          </p>
          <div className="aspect-[16/9] bg-secondary mb-12">
             <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop"
              alt="Our studio"
              className="w-full h-full object-cover"
              data-strk-img-id="about-studio-img"
              data-strk-img="jewelry design studio editorial"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
            />
          </div>
          <div className="text-left space-y-6 text-muted-foreground font-light">
            <p>
              Our journey began in a small studio, fueled by a passion for traditional craftsmanship 
              and a vision for modern, accessible luxury. We spent years perfecting our plating process, 
              ensuring that every piece of Velmora jewelry meets our rigorous standards for quality and durability.
            </p>
            <p>
              Today, we are proud to offer a curated collection of demi-fine jewelry that is as sustainable 
              as it is beautiful. We use recycled metals whenever possible and work only with partners 
               who share our commitment to ethical practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
