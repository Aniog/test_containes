import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 1,
    title: 'How to Build the Perfect Ear Stack',
    excerpt: 'A guide to curating a layered ear that feels personal, polished, and effortlessly cool — from studs to huggies to cuffs.',
    date: 'July 15, 2026',
    imgId: 'journal-ear-stack-3a4b',
    titleId: 'journal-title-ear-stack',
  },
  {
    id: 2,
    title: 'The Art of Gifting Jewelry',
    excerpt: 'How to choose a piece that says exactly what you mean — for birthdays, anniversaries, and just-because moments.',
    date: 'July 8, 2026',
    imgId: 'journal-gifting-5c6d',
    titleId: 'journal-title-gifting',
  },
  {
    id: 3,
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Simple habits that keep your demi-fine pieces luminous for years. What to avoid, how to clean, and when to store.',
    date: 'June 30, 2026',
    imgId: 'journal-care-7e8f',
    titleId: 'journal-title-care',
  },
  {
    id: 4,
    title: 'Behind the Design: Royal Heirloom Set',
    excerpt: 'A closer look at the inspiration, craftsmanship, and detail behind our most gifted set — from sketch to final polish.',
    date: 'June 22, 2026',
    imgId: 'journal-design-9g0h',
    titleId: 'journal-title-design',
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <h1 className="section-title">The Journal</h1>
          <p className="section-subtitle mt-3">Stories, style guides, and behind-the-scenes</p>
        </div>

        {/* Hero article */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="aspect-[4/3] bg-velmora-sand overflow-hidden">
            <img
              alt={articles[0].title}
              data-strk-img-id={articles[0].imgId}
              data-strk-img={`[${articles[0].titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs text-velmora-muted tracking-wide">{articles[0].date}</p>
            <h2 id={articles[0].titleId} className="font-serif text-2xl md:text-3xl font-medium mt-3 leading-snug">
              {articles[0].title}
            </h2>
            <p className="mt-4 text-velmora-muted leading-relaxed font-light">
              {articles[0].excerpt}
            </p>
            <div className="mt-6">
              <span className="btn-subtle">Read More</span>
            </div>
          </div>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {articles.slice(1).map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-velmora-sand overflow-hidden">
                <img
                  alt={article.title}
                  data-strk-img-id={article.imgId}
                  data-strk-img={`[${article.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="mt-4 text-xs text-velmora-muted tracking-wide">{article.date}</p>
              <h3 id={article.titleId} className="font-serif text-lg font-medium mt-2 leading-snug">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-velmora-muted leading-relaxed font-light">
                {article.excerpt}
              </p>
              <span className="inline-block mt-3 text-xs tracking-wider uppercase text-velmora-gold font-medium">
                Read More &rarr;
              </span>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/shop" className="btn-outline">
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
