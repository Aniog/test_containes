import * as React from "react"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export function ProductCard({ product }) {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <Link
      to={`/products/${product.slug}`}
      ref={ref}
      className="group block rounded-md border border-line bg-slate-850 overflow-hidden hover:border-copper-500/60 transition-colors duration-300"
    >
      <div className="relative aspect-[4/3] bg-ink overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          data-strk-bg-id={`product-${product.slug}-card`}
          data-strk-bg={`[${product.slug}-tagline] [${product.slug}-name]`}
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <span className="absolute top-4 left-4 inline-flex items-center rounded-full border border-copper-500/40 bg-ink/70 backdrop-blur px-3 py-1 text-[11px] tracking-eyebrow uppercase text-copper-400">
          {product.category}
        </span>
      </div>

      <div className="p-6">
        <p className="text-xs tracking-eyebrow uppercase text-text-dim">
          {product.model}
        </p>
        <h3
          id={`${product.slug}-name`}
          className="mt-2 text-xl font-semibold text-text group-hover:text-copper-400 transition-colors"
        >
          {product.name}
        </h3>
        <p
          id={`${product.slug}-tagline`}
          className="mt-2 text-sm text-text-muted leading-relaxed line-clamp-2"
        >
          {product.tagline}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <ul className="flex flex-wrap gap-2">
            {product.covers.slice(0, 2).map((tag) => (
              <li
                key={tag}
                className="text-[10px] tracking-eyebrow uppercase px-2 py-1 rounded border border-line text-text-dim"
              >
                {tag}
              </li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-copper-400">
            Details
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
