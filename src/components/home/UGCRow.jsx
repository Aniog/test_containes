import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcPosts } from '@/data/products';

const ugcImageQueries = {
  1: 'gold hoop earrings on woman ear closeup jewelry',
  2: 'layered gold necklaces on woman collarbone jewelry',
  3: 'gold jewelry on woman warm lighting portrait',
  4: 'multiple gold earrings on woman ear stack jewelry',
  5: 'luxury jewelry gift box unboxing elegant',
  6: 'elegant gold jewelry on woman evening portrait',
};

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-[#F5F0EB] overflow-hidden">
      <div className="container-custom mb-10 md:mb-12">
        <h2
          id="ugc-section-title"
          className="text-2xl md:text-3xl font-light tracking-wide text-foreground text-center"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          As Worn By You
        </h2>
        <p className="text-muted-foreground text-sm text-center mt-2">
          Tag @velmora to be featured
        </p>
      </div>

      {/* Horizontal Scroll Row */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-10 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcPosts.map(post => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[200px] md:w-[260px] snap-start"
          >
            <div className="relative aspect-[9/16] bg-[#E8E2DA] overflow-hidden group">
              <img
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={ugcImageQueries[post.id]}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  className="text-white/90 text-sm italic"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  "{post.caption}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
