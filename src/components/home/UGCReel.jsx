import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const ugcItems = [
    { id: 1, caption: "Summer Glow", query: "woman wearing gold huggies sunset" },
    { id: 2, caption: "Everyday Essentials", query: "woman wearing gold necklace white shirt" },
    { id: 3, caption: "Effortless Layers", query: "jewelry detail ear stack gold" },
    { id: 4, caption: "Night Out", query: "woman wearing statement gold earrings cocktail" },
    { id: 5, caption: "Timeless Gifts", query: "jewelry gift box gold aesthetic" },
    { id: 6, caption: "Beach Side", query: "woman wearing gold jewelry beach" }
  ];

  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl font-serif mb-2 italic">As worn by you</h2>
          <p className="text-xs uppercase tracking-widest text-[#888888]">Tag @VelmoraJewerly</p>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="flex space-x-4 px-6 md:px-12 overflow-x-auto no-scrollbar scroll-smooth snap-x"
      >
        {ugcItems.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[260px] md:w-[320px] aspect-[9/16] relative group snap-start bg-[#E5E2DA]"
          >
            <div 
              className="w-full h-full"
              data-strk-bg-id={`ugc-bg-${item.id}`}
              data-strk-bg={`[ugc-caption-${item.id}] [ugc-brand] jewelry`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="600"
            />
            <div id="ugc-brand" className="hidden">Velmora Fine Jewelry</div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6">
              <span 
                id={`ugc-caption-${item.id}`}
                className="text-white font-serif text-lg md:text-xl italic translate-y-2 block group-hover:translate-y-0 transition-transform duration-500"
              >
                "{item.caption}"
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
