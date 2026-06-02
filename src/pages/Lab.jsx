import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import LabGrid from '@/components/lab/LabGrid';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Lab() {
  const headerRef = useRef(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, headerRef.current);
    return cleanup;
  }, []);

  return (
    <PageTransition>
      {/* Dark header */}
      <div ref={headerRef} className="relative pt-32 pb-20 px-6 md:px-12 bg-[#2C2C2C] overflow-hidden">
        {/* Background texture image */}
        <div
          data-strk-bg-id="lab-header-bg-g3h4"
          data-strk-bg="[lab-header-bg-desc]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ filter: 'saturate(0) contrast(1.2)' }}
        />
        <span id="lab-header-bg-desc" className="hidden">
          microscope macro botanical pattern DNA helix science
        </span>

        <div className="relative max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="section-label text-[#5A5A5A] mb-4"
          >
            Science of Nature
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl text-white leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            The Lab
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-[#8B6F5E] max-w-xl leading-relaxed text-lg"
          >
            Macro photography revealing the hidden geometries of the natural
            world — patterns that echo through every living system, from
            cellular to cosmic scale.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-10"
          >
            {[
              { value: '6', label: 'Specimen Categories' },
              { value: '200×', label: 'Max Magnification' },
              { value: '3', label: 'Years of Research' },
              { value: '∞', label: 'Patterns Found' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-3xl text-[#A8C5A0]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {stat.value}
                </p>
                <p className="section-label text-[#5A5A5A] mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Science quote */}
      <div className="bg-[#E8D5C4] py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-2xl md:text-3xl text-[#8B6F5E]"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            "In every grain of sand, a universe. In every cell, a cosmos."
          </p>
          <p className="mt-3 section-label">— Intertwined Lab Notes, 2024</p>
        </div>
      </div>

      <LabGrid />
    </PageTransition>
  );
}
