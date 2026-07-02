import React, { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export const CategoryTiles = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">Shop by Category</p>
          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Find Your Shine
          </h2>
        </div>

        <div ref={containerRef} className="grid gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((category, idx) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-ink"
            >
              <div
                data-strk-bg-id={`category-bg-${category.id}`}
                data-strk-bg={`[category-label-${idx}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width={category.width}
                className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 transition-colors duration-300 group-hover:bg-ink/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-label-${idx}`}
                  className="font-serif text-2xl uppercase tracking-[0.2em] text-white md:text-3xl"
                >
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
