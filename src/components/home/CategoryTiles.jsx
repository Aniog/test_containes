import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { StrkImage } from '@/components/product/StrkImage'

const TILES = [
  {
    to: '/shop/earrings',
    label: 'Earrings',
    eyebrow: 'Drop · Cuff · Stud',
    imageId: 'cat-earrings',
    query: '[cat-earrings-label] [cat-context] gold earrings editorial still life',
  },
  {
    to: '/shop/necklaces',
    label: 'Necklaces',
    eyebrow: 'Pendant · Chain',
    imageId: 'cat-necklaces',
    query: '[cat-necklaces-label] [cat-context] gold necklace editorial still life',
  },
  {
    to: '/shop/huggies',
    label: 'Huggies',
    eyebrow: 'The everyday hoop',
    imageId: 'cat-huggies',
    query: '[cat-huggies-label] [cat-context] gold huggie hoop earrings editorial',
  },
]

export function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-page">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow text-mocha">Shop by Category</p>
          <h2 className="display-2 mt-3 text-deep">Find your piece</h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {TILES.map((tile) => (
            <li key={tile.to}>
              <Link
                to={tile.to}
                className="group block relative aspect-[4/5] bg-sand overflow-hidden"
              >
                <StrkImage
                  id={tile.imageId}
                  query={tile.query}
                  ratio="4x5"
                  width={800}
                  alt={`Shop ${tile.label}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/20 to-transparent transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-cream">
                  <p className="eyebrow-light text-cream/80">{tile.eyebrow}</p>
                  <h3
                    id={`${tile.imageId}-label`}
                    className="font-serif text-3xl md:text-4xl mt-2"
                  >
                    {tile.label}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-eyebrow uppercase font-sans text-cream/85 group-hover:text-champagne transition-colors">
                    Shop the edit
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <span id="cat-context" className="sr-only">editorial still life warm light</span>
      </div>
    </section>
  )
}
