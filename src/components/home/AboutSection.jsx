import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Target, Users, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Precision Engineering',
    desc: 'Every machine is calibrated to micron-level accuracy, ensuring consistent, repeatable results.',
  },
  {
    icon: Users,
    title: 'Customer Partnership',
    desc: 'We work alongside you from consultation through installation and beyond.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Innovation',
    desc: 'Our R&D team pushes the boundaries of what metal folding machinery can achieve.',
  },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Engineering the future of <span className="text-amber-500">metal fabrication</span>
            </h2>
            <p id="about-desc" className="mt-6 text-slate-600 leading-relaxed">
              ARTITECT MACHINERY has been at the forefront of metal folding technology for over two decades. 
              Our double folding machines and sheet metal folders are trusted by manufacturers worldwide 
              for their unmatched build quality, precision, and longevity.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              From small fabrication shops to automotive assembly lines, our machines deliver the 
              accuracy and reliability that modern manufacturing demands. Every machine leaving our 
              factory undergoes rigorous quality testing before it reaches your floor.
            </p>

            {/* Values */}
            <div className="mt-10 space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{v.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <img
                alt="ARTITECT MACHINERY factory"
                data-strk-img-id="about-image-x1y2z3"
                data-strk-img={`[about-desc]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats card overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-100 px-6 py-5">
              <div className="text-3xl font-bold text-slate-900">20+</div>
              <div className="text-sm text-slate-500">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
