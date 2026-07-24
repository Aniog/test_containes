import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { ugcPosts } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReels = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-velmora-sand overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest-2xl text-velmora-taupe mb-4">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-ink">
              Styled by You
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block text-xs uppercase tracking-widest text-velmora-brown hover:text-velmora-gold transition-colors"
          >
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 lg:px-10 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex-shrink-0 relative group cursor-pointer"
          >
            <div className="w-[220px] md:w-[260px] aspect-[9/16] bg-velmora-warm rounded-sm overflow-hidden relative">
              <img
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={`[ugc-${post.id}-caption] [ugc-${post.id}-handle] gold jewelry ear neck closeup`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p
                  id={`ugc-${post.id}-caption`}
                  className="font-serif text-white text-lg italic mb-1"
                >
                  {post.caption}
                </p>
                <p
                  id={`ugc-${post.id}-handle`}
                  className="text-white/70 text-xs"
                >
                  {post.handle}
                </p>
              </div>
              {/* Heart icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="w-5 h-5 text-white/80" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
