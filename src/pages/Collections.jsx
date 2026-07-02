import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import ProductCard from '@/components/product/ProductCard'
import { IMAGE_PLACEHOLDER, products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const collectionGroups = [
  {
    id: 'gift-edit',
    label: 'Gift Edit',
    title: 'Refined pieces for birthdays, thank-yous, and thoughtful little luxuries.',
    description:
      'Gift-ready styles with polished silhouettes and elevated presentation.',
    category: 'sets',
  },
  {
    id: 'everyday-icons',
    label: 'Everyday Icons',
    title: 'The soft-gold staples women reach for on repeat.',
    description:
      'Effortless huggies, cuffs, and delicate layers for morning-to-evening wear.',
    category: 'huggies',
  },
  {
    id: 'occasion-light',
    label: 'Occasion Light',
    title: 'A slightly dressier mood, still easy enough for real life.',
    description:
      'Textured drops and crystal detail for dinners, events, and celebratory dressing.',
    category: 'earrings',
  },
]

export default function Collections() {
  const containerRef = React.useRef(null)
  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef} className="bg-stone-100 text-stone-900">
      <section className="border-b border-stone-200 bg-stone-950 px-4 pb-12 pt-28 text-stone-50 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-lux text-amber-200">Collections</p>
          <h1 id="collections-title" className="mt-4 max-w-4xl font-display text-5xl text-stone-50 sm:text-6xl">
            Curated edits shaped by gifting, everyday polish, and warm editorial styling.
          </h1>
          <p id="collections-copy" className="mt-6 max-w-2xl text-base leading-8 text-stone-300">
            Explore Velmora through collections that make shopping feel more personal and less overwhelming.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {collectionGroups.map((group) => {
          const featuredProducts = products.filter((product) =>
            group.category === 'sets'
              ? product.category === 'sets' || product.category === 'necklaces'
              : product.category === group.category || product.category === 'earrings',
          )

          return (
            <section key={group.id} className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
              <div className="space-y-6 rounded-4xl border border-stone-200 bg-stone-50 p-6 shadow-velmora lg:p-8">
                <div className="overflow-hidden rounded-5xl border border-stone-200 bg-stone-200">
                  <img
                    alt={group.title}
                    className="aspect-[4/5] h-full w-full object-cover"
                    data-strk-img-id={`collection-${group.id}-image`}
                    data-strk-img={`[collection-${group.id}-desc] [collection-${group.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1200"
                    src={IMAGE_PLACEHOLDER}
                  />
                </div>
                <p className="text-xs uppercase tracking-lux text-stone-500">{group.label}</p>
                <h2 id={`collection-${group.id}-title`} className="font-display text-4xl text-stone-950">
                  {group.title}
                </h2>
                <p id={`collection-${group.id}-desc`} className="text-base leading-8 text-stone-600">
                  {group.description}
                </p>
                <Button as={Link} to={`/shop?category=${group.category}`}>
                  Shop this edit
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {featuredProducts.slice(0, 2).map((product) => (
                  <ProductCard key={`${group.id}-${product.id}`} product={product} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
