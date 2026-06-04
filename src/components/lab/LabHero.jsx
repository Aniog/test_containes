import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function LabHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  return (
    <div ref={containerRef} className="relative h-[70vh] min-h-[500px] overflow-hidden bg-charcoal">
      <img
        data-strk-img-id="lab-hero-bg-l1m2n3"
        data-strk-img="[lab-hero-title] [lab-hero-sub]"
        data-strk-img-ratio="16x9"
        data-strk-img-width="1600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt="Macro photography of plant cell structure"
        className="w-full h-full object-cover"
        style={{ opacity: 0.35 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(28,43,43,0.85) 0%, rgba(28,43,43,0.65) 50%, rgba(28,43,43,0.92) 100%)" }}
      />

      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(143,188,143,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(143,188,143,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-inter text-xs uppercase tracking-[0.35em] block mb-5"
          style={{ color: "#8FBC8F" }}
        >
          Chapter Three
        </motion.span>
        <motion.h1
          id="lab-hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-playfair text-5xl lg:text-7xl font-bold leading-tight mb-4"
          style={{ color: "#F5EFE6" }}
        >
          The
          <br />
          <em style={{ color: "#8FBC8F" }}>Lab</em>
        </motion.h1>
        <motion.p
          id="lab-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="font-inter text-base max-w-lg leading-relaxed"
          style={{ color: "rgba(245,239,230,0.7)" }}
        >
          At the microscopic scale, nature reveals its deepest secrets —
          patterns that echo across every living system on Earth.
        </motion.p>
      </div>
    </div>
  );
}
