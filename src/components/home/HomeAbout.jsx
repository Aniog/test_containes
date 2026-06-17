import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HomeAbout = () => {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <p
              id="about-eyebrow"
              className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-5"
            >
              About Artitect
            </p>
            <h2
              id="about-title"
              className="font-serif font-light text-4xl md:text-5xl tracking-tight text-neutral-950"
            >
              Three generations of folding metal &mdash; the right way.
            </h2>
            <p
              id="about-desc"
              className="mt-8 text-lg text-neutral-700 leading-relaxed"
            >
              Founded in a small workshop in Giessen, the Netherlands, in 1987, Artitect Machinery
              has spent nearly four decades obsessing over a single craft: making sheet metal fold
              cleanly, precisely, and predictably.
            </p>
            <p className="mt-5 text-lg text-neutral-700 leading-relaxed">
              We design, machine, weld, assemble, and calibrate every folder under one roof.
              No outsourced frames. No mystery electronics. Just engineering you can trust on the
              shop floor at 3 a.m.
            </p>

            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neutral-950 border-b border-neutral-950 pb-1 hover:text-amber-600 hover:border-amber-600 transition"
            >
              Read our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/5] bg-neutral-200 overflow-hidden">
              <img
                alt="Artitect engineers calibrating a folding machine"
                className="absolute inset-0 w-full h-full object-cover"
                data-strk-img-id="about-image-2f81c3"
                data-strk-img="[about-desc] [about-title] machinist engineer calibrating large industrial sheet metal folder factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
