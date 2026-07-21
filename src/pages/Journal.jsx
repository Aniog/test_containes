import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import StockImage from '@/components/ui/StockImage'
import Reveal from '@/components/ui/Reveal'

const POSTS = [
  {
    id: 'care-guide',
    title: 'How to Make Gold-Plated Jewelry Last for Years',
    tag: 'Jewelry Care',
    date: 'July 2026',
    desc: 'gold jewelry care soft cloth velvet pouch still life warm light',
    excerpt:
      'Five small rituals — the last thing you put on, the first thing you take off — that keep 18K plating luminous.',
  },
  {
    id: 'layering',
    title: 'The Art of Layering Necklaces Without Tangling',
    tag: 'Styling Notes',
    date: 'June 2026',
    desc: 'layered gold necklaces on neck elegant styling editorial',
    excerpt:
      'The two-inch rule, mixing chain weights, and when to let one pendant speak entirely on its own.',
  },
  {
    id: 'gift-guide',
    title: 'A Gift Guide for People Who Are Hard to Shop For',
    tag: 'Gifting',
    date: 'May 2026',
    desc: 'elegant jewelry gift box ribbon wrapping warm tones editorial',
    excerpt:
      'Start with huggies, graduate to heirlooms. Our foolproof framework for gifting gold with confidence.',
  },
]

export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <header className="velmora-container py-16 text-center md:py-24">
        <Reveal>
          <p className="eyebrow">The Journal</p>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-tight text-velmora-ink md:text-6xl">
            Notes from the Atelier
          </h1>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-velmora-muted">
            Care rituals, styling notes and the occasional love letter to warm
            gold.
          </p>
        </Reveal>
      </header>

      <section className="velmora-container grid gap-12 pb-24 md:grid-cols-3 md:gap-8">
        {POSTS.map((post, i) => (
          <Reveal key={post.id} delay={i * 100}>
            <article className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden bg-velmora-surface">
                <StockImage
                  imgId={`journal-${post.id}`}
                  query={`${post.desc}`}
                  ratio="4x3"
                  width={700}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="hairline-t mt-0 pt-5">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.24em]">
                  <span className="text-velmora-gold">{post.tag}</span>
                  <span className="text-velmora-muted">{post.date}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-velmora-ink transition-colors duration-300 group-hover:text-velmora-gold-light">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-velmora-muted">{post.excerpt}</p>
                <span className="mt-5 inline-block border-b border-velmora-gold/50 pb-1 text-[11px] font-bold uppercase tracking-[0.26em] text-velmora-gold transition-colors group-hover:border-velmora-gold-light group-hover:text-velmora-gold-light">
                  Read the Story
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  )
}
