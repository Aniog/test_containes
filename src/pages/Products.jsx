import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  {
    name: 'Electronics & Components',
    examples: 'Consumer electronics, PCBA, cables, chargers, batteries, semiconductors',
    imgId: 'cat-electronics-8f2a9c',
  },
  {
    name: 'Machinery & Industrial Parts',
    examples: 'Motors, fasteners, valves, tooling, automation components, metal parts',
    imgId: 'cat-machinery-7b3c1d',
  },
  {
    name: 'Home & Garden',
    examples: 'Furniture, kitchenware, lighting, gardening tools, home decor',
    imgId: 'cat-home-4d5e6f',
  },
  {
    name: 'Apparel & Textiles',
    examples: 'Garments, fabrics, bags, footwear, accessories, sportswear',
    imgId: 'cat-apparel-1a2b3c',
  },
  {
    name: 'Packaging & Printing',
    examples: 'Boxes, bags, labels, displays, retail packaging, custom printing',
    imgId: 'cat-packaging-9g8h7i',
  },
  {
    name: 'Beauty & Personal Care',
    examples: 'Skincare, cosmetics, hair tools, personal grooming, wellness products',
    imgId: 'cat-beauty-2j3k4l',
  },
  {
    name: 'Sports & Outdoor',
    examples: 'Fitness equipment, camping gear, bicycles, outdoor accessories',
    imgId: 'cat-sports-3m4n5o',
  },
  {
    name: 'Toys & Baby Products',
    examples: "Educational toys, baby gear, games, plush toys, children's products",
    imgId: 'cat-toys-6p7q8r',
  },
  {
    name: 'Automotive & Accessories',
    examples: 'Car parts, accessories, electronics, maintenance tools, EV components',
    imgId: 'cat-automotive-9s0t1u',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Products We Source
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We source across a broad range of categories. If you do not see yours, contact us anyway.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.name}
                className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={category.imgId}
                    data-strk-img={`[products-subtitle] [products-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{category.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{category.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Looking for a Custom Product?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Share your specifications and we will find the right factory for your project.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-white">
            <Link to="/contact">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
