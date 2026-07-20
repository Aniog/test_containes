import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const POSTS = [
  {
    id: 'journal-1',
    title: 'How to Build a Capsule Jewelry Wardrobe',
    excerpt: 'Five pieces that work from Monday morning to Saturday night.',
    category: 'Styling',
    imgId: 'journal-1-img-4f1',
    titleId: 'journal-1-title',
    descId: 'journal-1-desc',
  },
  {
    id: 'journal-2',
    title: 'Caring for Gold Plated Jewelry',
    excerpt: 'Simple rituals to keep your pieces warm and luminous for years.',
    category: 'Care',
    imgId: 'journal-2-img-7b2',
    titleId: 'journal-2-title',
    descId: 'journal-2-desc',
  },
  {
    id: 'journal-3',
    title: 'The Art of the Curated Ear',
    excerpt: 'A no-rules guide to stacking huggies, cuffs, and drops.',
    category: 'Styling',
    imgId: 'journal-3-img-9c4',
    titleId: 'journal-3-title',
    descId: 'journal-3-desc',
  },
]

export default function Journal() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="pt-24 md:pt-28 bg-sand">
        <div className="container-velmora py-12 md:py-16 text-center">
          <p className="eyebrow mb-3">Notes from the Studio</p>
          <h1 className="font-serif font-light text-5xl md:text-6xl text-ink">
            The Journal
          </h1>
        </div>
      </div>

      <section ref={ref} className="py-16 md:py-24 bg-cream">
        <div className="container-velmora">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {POSTS.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial warm`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src={PLACEHOLDER}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-5">{post.category}</p>
                <h2
                  id={post.titleId}
                  className="font-serif text-2xl md:text-3xl text-ink mt-2 leading-snug group-hover:text-champagne-deep transition-colors"
                >
                  {post.title}
                </h2>
                <p id={post.descId} className="mt-3 text-sm text-espresso/75 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-xs uppercase tracking-widest2 text-espresso border-b border-espresso pb-0.5">
                  Read More
                </span>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
