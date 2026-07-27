import { useEffect, useRef } from 'react'
import { ShieldCheck, FileText, Globe2, Users } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import { TRUST_POINTS } from '@/data/site'

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'No hidden markups',
    text: 'You see the factory\'s actual quotation. Our service fees are agreed upfront, in writing, before work begins.',
  },
  {
    icon: FileText,
    title: 'Documented everything',
    text: 'Audit reports, inspection photos, test results, and shipping documents — all delivered to you, always.',
  },
  {
    icon: Globe2,
    title: 'Bilingual, bicultural team',
    text: 'We negotiate in Mandarin and report in clear English. Nothing gets lost between you and the factory.',
  },
  {
    icon: Users,
    title: 'Your interests only',
    text: 'We work for you, not the supplier. We never take commissions from factories — a conflict we refuse to create.',
  },
]

export default function TrustSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-primary-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Why Work With Us"
          title="Built for buyers who can't afford surprises"
          description="Sourcing decisions are only as good as the information behind them. We make sure yours are based on verified facts."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((point) => (
            <div key={point.label} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-4xl font-extrabold tracking-tight text-white">{point.value}</p>
              <p className="mt-2 font-semibold text-accent-200">{point.label}</p>
              <p className="mt-1 text-sm text-slate-400">{point.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <img
              alt="SSourcing China team member reviewing supplier documentation with a factory manager"
              className="w-full rounded-2xl object-cover shadow-xl"
              data-strk-img-id="trust-team-meeting-g7h8i9"
              data-strk-img="[trust-img-caption]"
              data-strk-img-ratio="3x2"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <p id="trust-img-caption" className="mt-3 text-center text-sm text-slate-400">
              Our team reviewing production documentation with a factory partner in Dongguan
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {REASONS.map((reason) => (
                <div key={reason.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <reason.icon className="h-6 w-6 text-accent-200" />
                  <h3 className="mt-3 font-semibold text-white">{reason.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
