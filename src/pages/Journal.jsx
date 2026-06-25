import React from 'react'
import { Link } from 'react-router-dom'
import { StrkImage } from '@/components/ui/StrkImage'
import { Button } from '@/components/ui/Button'

const posts = [
  {
    id: 'j1',
    titleId: 'journal-1-title',
    descId: 'journal-1-desc',
    title: 'How to Layer Gold Necklaces',
    desc: 'A styling guide to layering fine gold chains at different lengths',
    excerpt: 'The art of the layered neckline — lengths, weights and the rule of three.',
    date: 'May 2026',
  },
  {
    id: 'j2',
    titleId: 'journal-2-title',
    descId: 'journal-2-desc',
    title: 'Caring for Gold Plated Jewelry',
    desc: 'Tips to keep 18K gold plated jewelry shining for years',
    excerpt: 'Simple rituals to keep your gold plate shining for years to come.',
    date: 'April 2026',
  },
  {
    id: 'j3',
    titleId: 'journal-3-title',
    descId: 'journal-3-desc',
    title: 'The Huggie Edit: Everyday Hoops',
    desc: 'A guide to choosing the perfect everyday gold huggie earrings',
    excerpt: 'Why the huggie is the only hoop you will never take off.',
    date: 'March 2026',
  },
]

export default function Journal() {
  return (
    <div className="bg-ivory pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="border-b border-sand pb-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Notes</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">The Journal</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-taupe">
            Styling notes, care guides and stories from the studio.
          </p>
        </div>

        <div className="grid gap-10 py-14 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <StrkImage
                  imgId={`journal-${post.id}`}
                  query={`[${post.descId}] [${post.titleId}]`}
                  ratio="4x3"
                  width={700}
                  alt={post.title}
                  titleId={post.titleId}
                  descId={post.descId}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-taupe">{post.date}</p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-ink transition-colors group-hover:text-gold-deep"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="sr-only">{post.desc}</p>
              <p className="mt-2 text-sm leading-relaxed text-taupe">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="pb-20 text-center">
          <Button as={Link} to="/shop" variant="outline">
            Shop the Collection
          </Button>
        </div>
      </div>
    </div>
  )
}
