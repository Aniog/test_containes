import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Factory, Users, Rocket } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#f8f9fa]">
              <img
                alt="ARTITECT MACHINERY factory"
                className="h-full w-full object-cover"
                data-strk-img-id="about-factory-img-a1b2c3"
                data-strk-img="[about-title] [about-desc] industrial machinery manufacturing factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-[#1a1a1a] p-6 text-white shadow-xl lg:block">
              <div className="text-3xl font-extrabold text-[#c69c3f]">25+</div>
              <div className="text-sm font-medium">Years of expertise</div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#c69c3f]">
              About Us
            </p>
            <h2 id="about-title" className="mt-3 text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              A Legacy of Metal Folding Innovation
            </h2>
            <p id="about-desc" className="mt-4 text-lg text-[#6b7280]">
              ARTITECT MACHINERY has spent more than two decades designing and
              manufacturing folding solutions for the sheet metal industry. From
              small job shops to multinational manufacturers, our machines are
              trusted to deliver precise bends, shift after shift.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  icon: Factory,
                  title: 'In-House Manufacturing',
                  description:
                    'Every critical component is machined, assembled, and tested in our own facilities for complete quality control.',
                },
                {
                  icon: Users,
                  title: 'Customer-First Design',
                  description:
                    'We work directly with operators and production managers to build machines that solve real workshop challenges.',
                },
                {
                  icon: Rocket,
                  title: 'Continuous Innovation',
                  description:
                    'Our R&D team constantly refines hydraulics, control systems, and automation to keep you ahead of demand.',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c69c3f]/10">
                      <Icon className="h-5 w-5 text-[#c69c3f]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1a1a1a]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[#6b7280]">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
