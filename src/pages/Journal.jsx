import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const articles = [
  {
    id: 'layering-guide',
    title: 'The Art of Layering',
    subtitle: 'How to stack necklaces and earrings like a stylist',
    excerpt: 'Master the effortless stacked look with our guide to combining chains, huggies, and statement pieces for every occasion.',
    category: 'Style Guide',
    date: 'July 2026',
    imgId: 'journal-layering-a1b2c3',
    titleId: 'journal-layering-title',
    descId: 'journal-layering-desc',
  },
  {
    id: 'gold-care',
    title: 'Caring for Gold-Plated Jewelry',
    subtitle: 'Keep your pieces shining for years',
    excerpt: 'Simple daily habits and storage tips that preserve the luster of your 18K gold-plated jewelry season after season.',
    category: 'Care',
    date: 'June 2026',
    imgId: 'journal-care-d4e5f6',
    titleId: 'journal-care-title',
    descId: 'journal-care-desc',
  },
  {
    id: 'gift-edit',
    title: 'The Gift Edit',
    subtitle: 'Thoughtful presents for every milestone',
    excerpt: 'From birthdays to "just because" — curated gift ideas that feel personal, luxurious, and always appreciated.',
    category: 'Gift Guide',
    date: 'June 2026',
    imgId: 'journal-gift-g7h8i9',
    titleId: 'journal-gift-title',
    descId: 'journal-gift-desc',
  },
  {
    id: 'studio-visit',
    title: 'Inside the Studio',
    subtitle: 'A look at how our pieces come to life',
    excerpt: 'From initial sketch to final polish, step inside our design process and meet the artisans behind every Velmora piece.',
    category: 'Behind the Scenes',
    date: 'May 2026',
    imgId: 'journal-studio-j1k2l3',
    titleId: 'journal-studio-title',
    descId: 'journal-studio-desc',
  },
  {
    id: 'summer-essentials',
    title: 'Summer Essentials',
    subtitle: 'Jewelry that transitions from beach to dinner',
    excerpt: 'Water-resistant, sweat-proof, and effortlessly elegant — our top picks for jewelry that keeps up with summer.',
    category: 'Seasonal',
    date: 'May 2026',
    imgId: 'journal-summer-m4n5o6',
    titleId: 'journal-summer-title',
    descId: 'journal-summer-desc',
  },
  {
    id: 'minimalist-wardrobe',
    title: 'The Minimalist Jewelry Wardrobe',
    subtitle: 'Five pieces that do it all',
    excerpt: 'Build a capsule jewelry collection with just five versatile pieces that take you from morning meetings to evening dinners.',
    category: 'Style Guide',
    date: 'April 2026',
    imgId: 'journal-minimal-p7q8r9',
    titleId: 'journal-minimal-title',
    descId: 'journal-minimal-desc',
  },
]

const Journal = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24 bg-cream-50">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal tracking-tight">
            The Journal
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4 mb-6" />
          <p className="font-sans text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Stories, guides, and inspiration for the modern jewelry lover.
          </p>
        </div>

        {/* Featured article */}
        <Link to="/shop" className="group block mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="aspect-[4x3] overflow-hidden">
              <img
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <span className="font-sans text-xs font-medium tracking-nav uppercase text-gold">
                {featured.category}
              </span>
              <h2
                id={featured.titleId}
                className="font-serif text-2xl md:text-3xl font-semibold text-charcoal tracking-tight mt-2 mb-3"
              >
                {featured.title}
              </h2>
              <p
                id={featured.descId}
                className="font-sans text-sm text-stone-500 mb-4"
              >
                {featured.subtitle}
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <span className="font-sans text-xs font-medium tracking-btn uppercase text-gold group-hover:text-gold-dark transition-colors">
                Read More →
              </span>
            </div>
          </div>
        </Link>

        {/* Divider */}
        <div className="h-px bg-stone-200 mb-16 md:mb-24" />

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {rest.map((article) => (
            <Link
              key={article.id}
              to="/shop"
              className="group block"
            >
              <div className="aspect-[4x3] overflow-hidden mb-5">
                <img
                  data-strk-img-id={article.imgId}
                  data-strk-img={`[${article.descId}] [${article.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="font-sans text-xs font-medium tracking-nav uppercase text-gold">
                {article.category}
              </span>
              <h3
                id={article.titleId}
                className="font-serif text-lg font-semibold text-charcoal tracking-wide mt-1 mb-2"
              >
                {article.title}
              </h3>
              <p
                id={article.descId}
                className="font-sans text-sm text-stone-500 mb-3"
              >
                {article.subtitle}
              </p>
              <p className="font-sans text-sm text-stone-600 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              <span className="inline-block font-sans text-xs font-medium tracking-btn uppercase text-gold mt-4 group-hover:text-gold-dark transition-colors">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Journal
