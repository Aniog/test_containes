import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcPosts = [
  {
    id: 'ugc-1',
    imgId: 'ugc-ear-cuff-1a2b3c',
    caption: '"My everyday ear stack ✨"',
    title: 'Gold ear cuff on model',
    desc: 'Vivid Aura Jewels styling',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-necklace-4d5e6f',
    caption: '"The perfect layering piece"',
    title: 'Floral crystal necklace styling',
    desc: 'Majestic Flora Nectar worn',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-huggies-7g8h9i',
    caption: '"These never leave my ears"',
    title: 'Gold huggie earrings close up',
    desc: 'Golden Sphere Huggies daily wear',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-drops-j0k1l2',
    caption: '"Date night earrings 💫"',
    title: 'Filigree drop earrings evening',
    desc: 'Amber Lace Earrings styling',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-gift-m3n4o5',
    caption: '"Best gift I ever received"',
    title: 'Jewelry gift set unboxing',
    desc: 'Royal Heirloom Set presentation',
  },
  {
    id: 'ugc-6',
    imgId: 'ugc-stack-p6q7r8',
    caption: '"Stacked and styled my way"',
    title: 'Multiple gold jewelry pieces styled',
    desc: 'Velmora jewelry collection styling',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 overflow-hidden">
      <div className="text-center mb-10 px-6">
        <h2 className="serif-heading text-3xl md:text-4xl mb-2">As Worn By You</h2>
        <p className="text-muted-foreground text-sm">Tag @velmorajewelry to be featured</p>
      </div>
      <div className="flex gap-4 px-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcPosts.map(post => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] snap-start relative group"
          >
            <div className="aspect-[9/16] bg-secondary overflow-hidden rounded-sm">
              <img
                data-strk-img-id={post.imgId}
                data-strk-img={`[${post.desc}] [${post.title}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="serif-heading text-white text-sm italic">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
