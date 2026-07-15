import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const articles = [
  {
    id: 'how-to-style-gold-earrings',
    title: 'How to Style Gold Earrings for Every Occasion',
    excerpt: 'From boardroom to bar, learn how to elevate any look with the right pair of gold earrings.',
    imgId: 'journal-earrings-3a5b7c',
    titleId: 'journal-earrings-title',
    descId: 'journal-earrings-desc',
  },
  {
    id: 'the-rise-of-demi-fine',
    title: 'The Rise of Demi-Fine Jewelry',
    excerpt: 'Why more women are choosing quality over quantity when it comes to their everyday pieces.',
    imgId: 'journal-demifine-9d1e3f',
    titleId: 'journal-demifine-title',
    descId: 'journal-demifine-desc',
  },
  {
    id: 'caring-for-gold-plated',
    title: 'Caring for Your Gold Plated Jewelry',
    excerpt: 'Simple tips to keep your pieces looking brand new, year after year.',
    imgId: 'journal-care-5g7h9i',
    titleId: 'journal-care-title',
    descId: 'journal-care-desc',
  },
]

export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal tracking-wide">
            The Journal
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
          <p className="font-sans text-sm text-brand-warm-gray mt-4 max-w-md mx-auto">
            Stories, styling tips, and inspiration from the world of Velmora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <div className="aspect-[4x3] overflow-hidden mb-5">
                <img
                  alt={article.title}
                  data-strk-img-id={article.imgId}
                  data-strk-img={`[${article.descId}] [${article.titleId}] jewelry styling`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 id={article.titleId} className="font-serif text-xl text-brand-charcoal group-hover:text-brand-gold transition-colors mb-2">
                {article.title}
              </h2>
              <p id={article.descId} className="font-sans text-sm text-brand-warm-gray leading-relaxed">
                {article.excerpt}
              </p>
              <span className="inline-block mt-3 font-sans text-xs uppercase tracking-wide text-brand-gold">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
