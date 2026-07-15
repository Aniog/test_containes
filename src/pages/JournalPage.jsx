import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar } from 'lucide-react';

const JournalPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const articles = [
    {
      id: 'journal-1',
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and styles for an effortlessly chic look.',
      date: 'July 10, 2026',
      category: 'Styling',
      imgId: 'journal-img-1-a1b2c3',
      titleId: 'journal-1-title',
      descId: 'journal-1-desc',
    },
    {
      id: 'journal-2',
      title: 'The Care Guide: Keeping Your Gold Plated Jewelry Beautiful',
      excerpt: 'Simple tips and tricks to maintain the luster of your demi-fine pieces and keep them looking new for years to come.',
      date: 'July 5, 2026',
      category: 'Care Guide',
      imgId: 'journal-img-2-d4e5f6',
      titleId: 'journal-2-title',
      descId: 'journal-2-desc',
    },
    {
      id: 'journal-3',
      title: 'Behind the Design: Our Summer Collection',
      excerpt: 'A peek into the creative process behind our latest collection, inspired by Mediterranean sunsets and coastal elegance.',
      date: 'June 28, 2026',
      category: 'Behind the Scenes',
      imgId: 'journal-img-3-g7h8i9',
      titleId: 'journal-3-title',
      descId: 'journal-3-desc',
    },
    {
      id: 'journal-4',
      title: 'The Perfect Gift: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, discover how to choose the perfect piece of jewelry for the special women in your life.',
      date: 'June 20, 2026',
      category: 'Gifting',
      imgId: 'journal-img-4-j1k2l3',
      titleId: 'journal-4-title',
      descId: 'journal-4-desc',
    },
    {
      id: 'journal-5',
      title: 'Earring Stacking: A Modern Trend Guide',
      excerpt: 'Learn how to create stunning ear stacks with huggies, studs, and cuffs for a personalized, editorial look.',
      date: 'June 15, 2026',
      category: 'Styling',
      imgId: 'journal-img-5-m4n5o6',
      titleId: 'journal-5-title',
      descId: 'journal-5-desc',
    },
    {
      id: 'journal-6',
      title: 'Sustainable Jewelry: Our Commitment to the Planet',
      excerpt: 'How Velmora is reducing its environmental footprint through ethical sourcing, minimal waste, and eco-friendly packaging.',
      date: 'June 8, 2026',
      category: 'Sustainability',
      imgId: 'journal-img-6-p7q8r9',
      titleId: 'journal-6-title',
      descId: 'journal-6-desc',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="serif-heading text-4xl md:text-6xl mb-4">Journal</h1>
          <div className="w-12 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Styling tips, behind-the-scenes stories, and jewelry care guides from the Velmora team.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                alt="Featured journal article"
                className="w-full h-full object-cover"
                data-strk-img-id="journal-featured-img-s1t2u3"
                data-strk-img="[journal-featured-desc] [journal-featured-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div>
              <span className="text-xs tracking-widest uppercase text-primary mb-3 block">Featured</span>
              <h2 id="journal-featured-title" className="serif-heading text-2xl md:text-3xl mb-4">
                How to Layer Necklaces Like a Pro
              </h2>
              <p id="journal-featured-desc" className="text-muted-foreground leading-relaxed mb-6">
                Master the art of necklace layering with our simple guide to mixing lengths, textures, and styles for an effortlessly chic look.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> July 10, 2026
                </span>
                <span>Styling</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors">
                Read Article <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                  <img
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-strk-img-id={article.imgId}
                    data-strk-img={`[${article.descId}] [${article.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <span className="text-xs tracking-widest uppercase text-primary mb-2 block">{article.category}</span>
                <h3 id={article.titleId} className="serif-heading text-lg mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p id={article.descId} className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" /> {article.date}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="serif-heading text-2xl md:text-3xl mb-4">Stay Inspired</h2>
          <p className="text-muted-foreground mb-8">
            Get styling tips, new collection previews, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalPage;
