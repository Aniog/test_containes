import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folder-a7',
    eyebrow: 'Flagship',
    title: 'A-7 Double Folding Machine',
    description:
      'Twin-beam double folder for advanced profiles and complex panels with effortless operator handling.',
    spec: 'Length 4.0 m · Thickness 1.5 mm',
    imgId: 'home-product-a7-d4f1a3',
    titleId: 'home-product-a7-title',
    descId: 'home-product-a7-desc',
  },
  {
    id: 'sheet-folder-s5',
    eyebrow: 'Workhorse',
    title: 'S-5 Sheet Metal Folder',
    description:
      'A reliable manual-assisted folder built for daily fabrication, with a refined back-gauge.',
    spec: 'Length 3.2 m · Thickness 1.2 mm',
    imgId: 'home-product-s5-9c08e2',
    titleId: 'home-product-s5-title',
    descId: 'home-product-s5-desc',
  },
  {
    id: 'metal-folder-c3',
    eyebrow: 'Compact',
    title: 'C-3 Metal Folder',
    description:
      'A compact metal folding machine designed for studio workshops and architectural detailing.',
    spec: 'Length 2.0 m · Thickness 1.0 mm',
    imgId: 'home-product-c3-7e2b4f',
    titleId: 'home-product-c3-title',
    descId: 'home-product-c3-desc',
  },
]

export default function HomeProducts() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span
              id="home-products-eyebrow"
              className="text-xs uppercase tracking-[0.28em] text-amber-700 font-medium"
            >
              Our machines
            </span>
            <h2
              id="home-products-title"
              className="mt-5 font-serif text-3xl md:text-5xl text-stone-900 leading-tight tracking-tight"
            >
              A folding machine for every bench, every batch.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-stone-900 font-medium border-b border-stone-900 pb-1 hover:text-amber-800 hover:border-amber-800 transition-colors"
          >
            View all products
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col border border-stone-200 bg-stone-50/40 hover:bg-white transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [home-products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.28em] text-amber-700 font-medium">
                  {product.eyebrow}
                </span>
                <h3
                  id={product.titleId}
                  className="mt-3 font-serif text-2xl text-stone-900 leading-snug"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="mt-3 text-sm text-stone-600 leading-relaxed flex-1"
                >
                  {product.description}
                </p>
                <div className="mt-6 pt-5 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-xs text-stone-500 tracking-wide">
                    {product.spec}
                  </span>
                  <Link
                    to="/products"
                    aria-label={`Learn more about ${product.title}`}
                    className="text-stone-900 group-hover:text-amber-800 transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
