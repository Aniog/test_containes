import { useEffect, useRef } from 'react'
import { ShieldCheck, BadgeCheck, FileCheck2, Handshake } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const points = [
  {
    icon: ShieldCheck,
    title: 'On-the-ground team in China',
    desc: 'Our staff are based in Yiwu and Shenzhen, close to most manufacturing hubs. We visit factories in person, not by email.',
  },
  {
    icon: BadgeCheck,
    title: 'Independent of suppliers',
    desc: 'We are paid by you, not by factories. No hidden commissions, no incentives to push you toward a specific supplier.',
  },
  {
    icon: FileCheck2,
    title: 'Detailed written reports',
    desc: 'Every audit and inspection comes with a written report, photos, video and AQL findings — auditable and clear.',
  },
  {
    icon: Handshake,
    title: 'One contact for everything',
    desc: 'One bilingual project manager owns your order end-to-end, from sourcing to shipping, in your working hours.',
  },
]

export default function WhyChooseUs() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img
              alt="Sourcing team meeting at a Chinese factory"
              data-strk-img-id="home-why-team-4f12bd"
              data-strk-img="[why-title] sourcing agent meeting factory china industrial team"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              className="block w-full h-auto"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Why work with us"
              title="Trust built into every step"
              description="We are a small, focused team that takes responsibility for your order — not a marketplace and not a middleman."
              titleId="why-title"
            />

            <ul className="mt-8 space-y-5">
              {points.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="flex w-10 h-10 items-center justify-center rounded-md bg-blue-50 text-blue-700 shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
