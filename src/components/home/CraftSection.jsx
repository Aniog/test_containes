import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CraftSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-800">
            <img
              alt="Engineer inspecting a folded sheet metal panel"
              data-strk-img-id="craft-section-img-1f8e60"
              data-strk-img="[craft-subtitle] [craft-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
            Our Craft
          </p>
          <h2
            id="craft-title"
            className="mt-4 font-serif text-3xl md:text-5xl font-medium leading-[1.1]"
          >
            Heavy industry,<br />
            <span className="italic text-amber-400">handled with care.</span>
          </h2>
          <p
            id="craft-subtitle"
            className="mt-6 text-slate-300 leading-relaxed max-w-xl"
          >
            Every Artitect folder is welded, machined, and tuned in our own facility.
            We measure parts before we trust them, and we measure our machines before
            we ship them. The result is equipment that feels exact the day it arrives,
            and the year it retires.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-8 max-w-2xl">
            <div>
              <p className="font-serif text-3xl text-white">01.</p>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-amber-400 font-semibold">Design</p>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                FEA-validated frames and CAD-optimized geometries before a single chip is cut.
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-white">02.</p>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-amber-400 font-semibold">Build</p>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Stress-relieved welded frames machined as one piece for true geometry.
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-white">03.</p>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-amber-400 font-semibold">Tune</p>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Hand-tuned by senior engineers and verified across the full working envelope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
