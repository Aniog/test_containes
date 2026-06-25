import { useEffect, useRef } from 'react'
import { CheckCircle2, MapPin, Users, FileCheck2, Globe2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '../SectionHeader'

const points = [
  {
    icon: MapPin,
    title: 'Based in China, working in your time zone',
    desc: 'Our team is on the ground in Zhejiang and Guangdong. We can visit a factory the same week you ask.',
  },
  {
    icon: Users,
    title: 'Senior sourcing managers, not call-center agents',
    desc: 'Each account is handled by a dedicated manager with 5+ years of China sourcing experience.',
  },
  {
    icon: FileCheck2,
    title: 'Written reports for every step',
    desc: 'Supplier audits, inspection results and shipping documents are all delivered as clear PDF reports.',
  },
  {
    icon: Globe2,
    title: 'Experience with global buyers',
    desc: 'We serve importers in North America, Europe, the Middle East, Australia and Southeast Asia.',
  },
  {
    icon: CheckCircle2,
    title: 'Transparent fees, no hidden markups',
    desc: 'You see the supplier’s real quote. Our service fees are agreed in writing before work begins.',
  },
  {
    icon: CheckCircle2,
    title: 'NDA and IP-aware workflow',
    desc: 'For OEM and private-label projects we sign NDAs and segment information between suppliers.',
  },
]

export default function TrustSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why buyers work with us"
              title="A practical, low-risk way to source from China"
              description="We replace guesswork with verification, reporting and on-the-ground presence. Our goal is simple: fewer surprises, better shipments."
            />
            <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
              <img
                alt="SSourcing China team meeting with a factory manager"
                className="aspect-[4/3] w-full object-cover"
                data-strk-img-id="trust-team-img-d31fa9"
                data-strk-img="[trust-team-caption] sourcing agent meeting factory manager china"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <p
                id="trust-team-caption"
                className="bg-slate-50 px-5 py-3 text-xs font-medium text-slate-600"
              >
                Sourcing manager reviewing production samples with a supplier in Zhejiang.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {points.map((p) => {
                const Icon = p.icon
                return (
                  <div
                    key={p.title}
                    className="rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1B6FB8]/10 text-[#1B6FB8]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 text-sm font-semibold text-[#0B2545]">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{p.desc}</p>
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
