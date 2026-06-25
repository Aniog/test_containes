import React from 'react'
import { Link } from 'react-router-dom'
import { StrkImage } from '@/components/ui/StrkImage'
import { categories } from '@/data/products'
import { Button } from '@/components/ui/Button'

export default function Collections() {
  return (
    <div className="bg-ivory pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="border-b border-sand pb-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Curated Edits</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Collections</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-taupe">
            Small, considered collections — each piece designed to layer, stack
            and live with you.
          </p>
        </div>

        <div className="grid gap-8 py-14 md:grid-cols-3">
          {categories.map((cat) => (
            <Link key={cat.slug} to={`/shop?category=${cat.slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                <StrkImage
                  imgId={`coll-${cat.imgId}`}
                  query={`[${cat.descId}] [${cat.titleId}]`}
                  ratio="3x4"
                  width={700}
                  alt={cat.name}
                  titleId={cat.titleId}
                  descId={cat.descId}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                  <h2
                    id={cat.titleId}
                    className="font-serif text-2xl uppercase tracking-[0.15em] text-ivory"
                  >
                    {cat.name}
                  </h2>
                  <p id={cat.descId} className="sr-only">{cat.desc}</p>
                </div>
              </div>
              <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] text-taupe group-hover:text-gold-deep">
                {cat.tagline}
              </p>
            </Link>
          ))}
        </div>

        <div className="pb-20 text-center">
          <Button as={Link} to="/shop" variant="outline">
            Shop All Jewelry
          </Button>
        </div>
      </div>
    </div>
  )
}
