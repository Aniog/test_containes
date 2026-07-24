import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useReveal } from '@/hooks/useReveal'
import NewsletterSection from '@/components/NewsletterSection'

const ARTICLES = [
  {
    id: 'layering-guide',
    title: 'The Quiet Art of Layering Necklaces',
    excerpt: 'Three chains, one rule: vary the length, never the metal. A simple formula for an effortless neckline.',
    date: 'July 2026',
    readTime: '4 min read',
  },
  {
    id: 'gold-care',
    title: 'How to Make 18K Gold Plating Last for Years',
    excerpt: 'Water, perfume and storage — the three things that decide how long your gold keeps its glow.',
    date: 'June 2026',
    readTime: '5 min read',
  },
  {
    id: 'gift-guide',
    title: 'A Gift Guide for the Woman Who Has Everything',
    excerpt: 'Understated pieces that land every time — chosen by our stylists for mothers, sisters and friends.',
    date: 'May 2026',
    readTime: '6 min read',
  },
]

export default function JournalPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useReveal(containerRef)

  return (
    <div ref={containerRef} className="pt-24 md:pt-32">
      <header className="border-b border-line bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
            The Velmora journal
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium uppercase tracking-[0.08em] text-ink md:text-6xl">
            Notes on Gold
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
            Styling notes, care rituals and gift guides — written slowly, like everything we make.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <article key={article.id} className="reveal group cursor-pointer">
              <div className="relative overflow-hidden bg-sand">
                <div className="aspect-[4/3] w-full">
                  <img
                    data-strk-img-id={`journal-${article.id}`}
                    data-strk-img={`[journal-title-${article.id}] gold jewelry editorial photography, warm tones`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
                  {article.date} · {article.readTime}
                </p>
                <h2
                  id={`journal-title-${article.id}`}
                  className="mt-2 font-serif text-2xl leading-snug text-ink transition-colors group-hover:text-gold-deep"
                >
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{article.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors group-hover:text-gold-deep">
                  Read the story
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </div>
  )
}
