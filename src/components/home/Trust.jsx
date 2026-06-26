import { ShieldCheck, Users, FileCheck2, Lock, BadgeCheck, HandCoins } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { trustPoints } from '@/data/content'

const icons = [Users, FileCheck2, HandCoins, ShieldCheck, Lock, BadgeCheck]

export default function Trust() {
  return (
    <section id="trust" className="py-20 md:py-24 bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why Buyers Trust Us"
          title="A sourcing partner built for international B2B buyers"
          description="Practical safeguards and transparent operations — the things that actually matter when you are buying from a factory on the other side of the world."
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {trustPoints.map((p, i) => {
            const Icon = icons[i] || ShieldCheck
            return (
              <div
                key={p.title}
                className="flex gap-4 p-6 md:p-7 border border-brand-line rounded-xl bg-white"
              >
                <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-mist text-brand-ink">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm md:text-base text-brand-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}