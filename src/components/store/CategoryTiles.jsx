import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/store/SectionHeading.jsx'

const CategoryTiles = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let dispose

    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return
      }

      dispose = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)

      if (typeof dispose === 'function') {
        dispose()
      }
    }
  }, [])

  return (
    <section id="collections" className="section-padding scroll-mt-28 bg-ivory md:scroll-mt-32">
      <div className="content-wrap">
        <SectionHeading
          kicker="Shop the edit"
          title="By category"
          description="Streamlined layers, luminous ear stacks, and gift-ready sets."
        />

        <div ref={containerRef} className="grid gap-5 md:grid-cols-3">
          {categoryTiles.map((tile) => {
            const titleId = `${tile.id}-title`
            const descId = `${tile.id}-desc`

            return (
              <Link key={tile.id} to={tile.href} className="group relative overflow-hidden rounded-luxe border border-ink/10 bg-sand">
                <img
                  alt={tile.label}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-luxe group-hover:scale-105"
                  data-strk-img-id={tile.imageId}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p id={titleId} className="font-display text-4xl text-ivory">{tile.label}</p>
                  <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-ivory/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {tile.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
