import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'layering-guide',
    slug: 'how-to-layer-necklaces',
    title: 'The Art of Layering Necklaces',
    excerpt: 'Master the effortless stacked look with our complete guide to mixing lengths, textures, and pendants.',
    category: 'Styling',
    date: 'June 2026',
    titleId: 'journal-post-1-title',
    descId: 'journal-post-1-desc',
    imgId: 'journal-layering-img-v1w2x3',
  },
  {
    id: 'ear-cuff-guide',
    slug: 'ear-cuff-styling-guide',
    title: 'Ear Cuffs: The No-Piercing Statement',
    excerpt: 'Everything you need to know about styling ear cuffs — from subtle everyday looks to bold evening stacks.',
    category: 'Styling',
    date: 'May 2026',
    titleId: 'journal-post-2-title',
    descId: 'journal-post-2-desc',
    imgId: 'journal-earcuff-img-y3z4a5',
  },
  {
    id: 'gifting-guide',
    slug: 'jewelry-gifting-guide',
    title: 'The Velmora Gifting Guide',
    excerpt: 'Finding the perfect jewelry gift shouldn\'t be stressful. Our curated guide makes it effortless.',
    category: 'Gifts',
    date: 'April 2026',
    titleId: 'journal-post-3-title',
    descId: 'journal-post-3-desc',
    imgId: 'journal-gifting-img-b5c6d7',
  },
];

export default function JournalPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto container-px section-padding">
        <div className="text-center mb-14">
          <p className="text-overline mb-3">Inspiration</p>
          <h1 className="font-serif text-display-sm md:text-[3.5rem] text-charcoal">The Velmora Journal</h1>
          <p className="font-sans text-body text-warm-gray mt-3 max-w-md mx-auto">
            Styling tips, stories behind our collections, and the art of intentional adornment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-5">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] jewelry styling editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                />
              </div>
              <p className="text-overline mb-2">{post.category} · {post.date}</p>
              <h2 id={post.titleId} className="font-serif text-heading-sm text-charcoal group-hover:text-gold transition-colors duration-300">
                {post.title}
              </h2>
              <p id={post.descId} className="font-sans text-body text-warm-gray mt-2 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block mt-3 font-sans text-[11px] uppercase tracking-[0.12em] text-gold border-b border-gold/40 pb-0.5 group-hover:border-gold transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
