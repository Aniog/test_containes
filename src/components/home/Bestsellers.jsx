import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { bestsellers } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/hooks/useReveal"

export default function Bestsellers() {
  const containerRef = useRef(null)
  const { ref, visible } = useReveal()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""} flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left`}
        >
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
              Most Loved
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-5 font-sans text-[11px] uppercase tracking-[0.2em] text-ink underline-offset-8 transition-colors hover:text-gold hover:underline md:mt-0"
          >
            View All
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
