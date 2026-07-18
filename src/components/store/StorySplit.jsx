import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'

const StorySplit = () => {
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
    <section id="story" ref={containerRef} className="section-padding scroll-mt-28 bg-mist md:scroll-mt-32">
      <div className="content-wrap">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-luxe border border-ink/10 bg-sand shadow-velvet">
            <img
              alt="Velmora atelier story"
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id="story-image-velmora-2af45e"
              data-strk-img="[story-description] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          <div className="space-y-6">
            <p className="editorial-kicker">Our story</p>
            <h2 id="story-title" className="max-w-lg text-5xl leading-none text-velvet md:text-6xl">
              Jewelry with warmth, polish, and staying power
            </h2>
            <p id="story-description" className="max-w-xl text-sm leading-8 text-ink/75 md:text-base">
              Velmora was created to bridge the space between special and everyday: demi-fine jewelry that feels considered, beautifully giftable, and accessible enough to wear often.
            </p>
            <Link to="/#journal" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-velvet transition-colors hover:text-champagne">
              Our Story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StorySplit
