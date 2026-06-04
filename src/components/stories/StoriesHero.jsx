import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function StoriesHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  return (
    <div ref={containerRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <img
        data-strk-img-id="stories-hero-bg-s1t2u3"
        data-strk-img="[stories-hero-title] [stories-hero-sub]"
        data-strk-img-ratio="16x9"
        data-strk-img-width="1600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt="Indigenous community in their natural environment"
        className="w-full h-full object-cover"
        style={{ opacity: 0.45 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(28,43,43,0.8) 0%, rgba(28,43,43,0.55) 50%, rgba(28,43,43,0.85) 100%)" }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-inter text-xs uppercase tracking-[0.35em] block mb-5"
          style={{ color: "#E8C9A0" }}
        >
          Chapter Two
        </motion.span>
        <motion.h1
          id="stories-hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-playfair text-5xl lg:text-7xl font-bold leading-tight mb-4"
          style={{ color: "#F5EFE6" }}
        >
          Global
          <br />
          <em style={{ color: "#E8C9A0" }}>Stories</em>
        </motion.h1>
        <motion.p
          id="stories-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="font-inter text-base max-w-lg leading-relaxed"
          style={{ color: "rgba(245,239,230,0.75)" }}
        >
          Indigenous communities whose lives, rituals, and identities are
          woven into the landscapes they call home.
        </motion.p>
      </div>
    </div>
  );
}
