import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowUpRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import StrkImg from '@/components/ui/StrkImg'
import Reveal from '@/components/ui/Reveal'

const POSTS = [
  {
    id: 'post-1',
    title: 'How to Layer Necklaces Like an Editor',
    excerpt: 'The rule of three, mixed lengths, and why odd numbers always win.',
    date: 'July 12, 2026',
    imgId: 'journal-img-1a2b3c4d',
    titleId: 'journal-post-1-title',
    excerptId: 'journal-post-1-excerpt',
  },
  {
    id: 'post-2',
    title: 'Caring for Demi-Fine: A 60-Second Ritual',
    excerpt: 'Five small habits that keep 18K gold glowing for years.',
    date: 'July 3, 2026',
    imgId: 'journal-img-2b3c4d5e',
    titleId: 'journal-post-2-title',
    excerptId: 'journal-post-2-excerpt',
  },
  {
    id: 'post-3',
    title: 'The Gifting Guide: For Her, For You',
    excerpt: 'Heirloom sets, huggies and the pieces that never miss.',
    date: 'June 21, 2026',
    imgId: 'journal-img-3c4d5e6f',
    titleId: 'journal-post-3-title',
    excerptId: 'journal-post-3-excerpt',
  },
]

export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <div className="border-b border-line bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-10 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">Stories & Styling</p>
          <h1 className="mt-3 font-display text-4xl font-light text-espresso md:text-5xl">The Journal</h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {POSTS.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <article className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-sand">
                  <StrkImg
                    imgId={post.imgId}
                    query={`[${post.excerptId}] [${post.titleId}] gold jewelry editorial`}
                    ratio="4x3"
                    width={800}
                    alt={post.title}
                    className="transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.28em] text-taupe">{post.date}</p>
                <h2
                  id={post.titleId}
                  className="mt-2 font-display text-2xl font-light leading-snug text-espresso transition-colors duration-300 group-hover:text-gold-deep"
                >
                  {post.title}
                </h2>
                <p id={post.excerptId} className="mt-2 text-sm leading-relaxed text-mocha">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
                  Read Story <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
