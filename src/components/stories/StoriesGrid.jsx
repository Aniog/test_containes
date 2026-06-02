import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { STORIES } from './storiesData';

function StoryCard({ story, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Link to={`/stories/${story.slug}`} className="group block">
        {/* Image */}
        <div className="img-zoom relative overflow-hidden rounded-sm aspect-[4/3]">
          <img
            data-strk-img-id={`story-card-${story.id}-m3n4`}
            data-strk-img={`[story-card-desc-${story.id}] [story-card-title-${story.id}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={story.title}
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.85)' }}
          />
          <span id={`story-card-desc-${story.id}`} className="hidden">{story.coverDesc}</span>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#2C2C2C]/0 group-hover:bg-[#2C2C2C]/30 transition-all duration-500" />

          {/* Chapter badge */}
          <div className="absolute top-4 left-4 bg-[#F5EDE3]/90 px-3 py-1">
            <span className="section-label text-[0.6rem]">{story.chapter}</span>
          </div>

          {/* Region */}
          <div className="absolute bottom-4 right-4 bg-[#2C2C2C]/70 px-3 py-1">
            <span className="section-label text-white text-[0.6rem]">{story.region}</span>
          </div>
        </div>

        {/* Text */}
        <div className="mt-5">
          <h3
            id={`story-card-title-${story.id}`}
            className="text-xl md:text-2xl text-[#2C2C2C] group-hover:text-[#4A6741] transition-colors duration-300"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {story.title}
          </h3>
          <p className="mt-1 text-sm text-[#5A5A5A]">{story.subtitle}</p>
          <p className="mt-1 text-xs text-[#8B6F5E] tracking-wide">{story.location}</p>

          <div className="mt-3 flex items-center gap-2 text-[#4A6741] text-sm">
            <span>Read story</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function StoriesGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-12 bg-[#F5EDE3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {STORIES.map((story, i) => (
            <StoryCard key={story.id} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
