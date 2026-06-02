import { useRef, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { STORIES } from './storiesData';

export default function StoryDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const story = STORIES.find((s) => s.slug === slug);

  useEffect(() => {
    if (containerRef.current) {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      return cleanup;
    }
  }, [slug]);

  if (!story) return <Navigate to="/stories" replace />;

  const currentIndex = STORIES.findIndex((s) => s.slug === slug);
  const prevStory = STORIES[currentIndex - 1];
  const nextStory = STORIES[currentIndex + 1];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F5EDE3]">
      {/* Hero */}
      <div className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <img
          data-strk-img-id={`story-hero-${story.id}-o5p6`}
          data-strk-img={`[story-hero-desc-${story.id}] [story-hero-title-${story.id}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={story.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.8) brightness(0.6)' }}
        />
        <span id={`story-hero-desc-${story.id}`} className="hidden">{story.heroDesc}</span>

        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="section-label text-white/60 mb-3">{story.chapter} · {story.region}</p>
            <h1
              id={`story-hero-title-${story.id}`}
              className="text-4xl md:text-7xl text-white leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {story.title}
            </h1>
            <p className="mt-3 text-white/70 text-lg md:text-xl">{story.subtitle}</p>
            <p className="mt-2 text-white/50 text-sm tracking-widest uppercase">{story.location} · {story.year}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        {/* Opening quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 pl-6 border-l-2 border-[#A8C5A0]"
        >
          <p
            className="text-2xl md:text-3xl text-[#8B6F5E] leading-snug"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            "{story.quote}"
          </p>
          <footer className="mt-3 text-sm text-[#5A5A5A] tracking-wide">
            — {story.attribution}
          </footer>
        </motion.blockquote>

        {/* Body text + images interleaved */}
        <div className="space-y-12">
          {story.body.map((paragraph, i) => (
            <div key={i}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[#2C2C2C] text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>

              {/* Insert image after first and second paragraphs */}
              {(i === 0 || i === 1) && story.images[i + 1] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="img-zoom mt-10 overflow-hidden rounded-sm"
                >
                  <img
                    data-strk-img-id={`story-body-${story.id}-${i}-q7r8`}
                    data-strk-img={`[story-body-desc-${story.id}-${i}] [story-hero-title-${story.id}]`}
                    data-strk-img-ratio={story.images[i + 1].ratio}
                    data-strk-img-width={story.images[i + 1].width}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${story.title} — scene ${i + 2}`}
                    className="w-full object-cover"
                    style={{ filter: 'saturate(0.85)' }}
                  />
                  <span id={`story-body-desc-${story.id}-${i}`} className="hidden">
                    {story.images[i + 1].desc}
                  </span>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Photo grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-2 gap-4"
        >
          {story.images.slice(0, 2).map((img, i) => (
            <div key={img.id} className="img-zoom overflow-hidden rounded-sm aspect-square">
              <img
                data-strk-img-id={`story-grid-${story.id}-${i}-s9t0`}
                data-strk-img={`[story-grid-desc-${story.id}-${i}] [story-hero-title-${story.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${story.title} ${i + 1}`}
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.85)' }}
              />
              <span id={`story-grid-desc-${story.id}-${i}`} className="hidden">{img.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Story navigation */}
      <div className="border-t border-[#E8D5C4] px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          {prevStory ? (
            <Link
              to={`/stories/${prevStory.slug}`}
              className="group flex items-center gap-3 text-[#5A5A5A] hover:text-[#4A6741] transition-colors"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <div>
                <p className="section-label text-[0.6rem]">Previous</p>
                <p className="text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {prevStory.title}
                </p>
              </div>
            </Link>
          ) : <div />}

          <Link
            to="/stories"
            className="section-label text-[#8B6F5E] hover:text-[#4A6741] transition-colors"
          >
            All Stories
          </Link>

          {nextStory ? (
            <Link
              to={`/stories/${nextStory.slug}`}
              className="group flex items-center gap-3 text-[#5A5A5A] hover:text-[#4A6741] transition-colors text-right"
            >
              <div>
                <p className="section-label text-[0.6rem]">Next</p>
                <p className="text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {nextStory.title}
                </p>
              </div>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
