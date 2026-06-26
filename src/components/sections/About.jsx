import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PILLARS = [
  {
    k: 'Engineering',
    v: 'In-house R&D for frames, hydraulics, HMI, and backgauges — no white-labelled assemblies.',
  },
  {
    k: 'Manufacturing',
    v: 'Own foundry partners, stress-relieved frames, and one-setup machining on every weldment.',
  },
  {
    k: 'Service',
    v: 'Remote commissioning, video FAT, and a 24-hour parts promise for warranty customers.',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div ref={containerRef} className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Image side */}
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#0E1B2C] shadow-[0_24px_60px_-28px_rgba(14,27,44,0.45)]">
              <img
                alt="ARTITECT manufacturing facility"
                data-strk-img-id="artitect-about-image-3c91a4"
                data-strk-img="[about-image-caption] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0E1B2C]/40 via-transparent to-transparent" />
            </div>

            {/* Stat overlay card */}
            <div className="absolute -bottom-8 left-6 right-6 hidden rounded-xl border border-[#E5E1D8] bg-white p-6 shadow-[0_2px_24px_-12px_rgba(14,27,44,0.18)] md:block md:left-auto md:right-[-3rem] md:w-72">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-[#0E1B2C] tabular-nums">
                  1,800+
                </span>
                <span className="text-sm font-medium text-[#6B7280]">
                  installations worldwide
                </span>
              </div>
              <div className="mt-3 h-px w-full bg-[#E5E1D8]" />
              <p className="mt-3 text-xs leading-relaxed text-[#2C3E50]">
                From single-shop fabricators to tier-one OEM lines, our
                machines fold everything from architectural cladding to
                aerospace sub-assemblies.
              </p>
            </div>

            <p id="about-image-caption" className="sr-only">
              Engineers inspecting a sheet metal folding machine on the shop floor.
            </p>
          </div>

          {/* Text side */}
          <div className="lg:col-span-6">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C8A85B]">
              About ARTITECT
            </p>
            <h2
              id="about-title"
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#0E1B2C] md:text-4xl lg:text-5xl"
            >
              A focused machine tool builder
              <br />
              with a fabricator's mindset.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#2C3E50] md:text-lg">
              We make one thing, exceptionally well: precision sheet metal
              folding machines. Every product in our lineup — from the
              compact double folder to the heavy-duty sheet metal folding
              machine — shares the same welded monoblock frame, the same
              CNC backgauge platform, and the same engineering team.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#2C3E50] md:text-lg">
              That focus lets us ship faster, support deeper, and iterate on
              the details that matter to operators on the shop floor.
            </p>

            <div className="mt-10 space-y-5">
              {PILLARS.map((p) => (
                <div
                  key={p.k}
                  className="flex gap-5 border-l-2 border-[#C8A85B] pl-5"
                >
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A85B]">
                      {p.k}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[#2C3E50] md:text-base">
                      {p.v}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}