import * as Icons from 'lucide-react'
import { trustPoints } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'

export default function TrustSection() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Why SSourcing China"
          title="A local team you can rely on"
          subtitle="Being on the ground in China means faster response, real factory visits, and clear communication throughout your project."
          light
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((t) => {
            const Icon = Icons[t.icon] || Icons.Circle
            return (
              <div
                key={t.title}
                className="rounded-xl bg-white/5 ring-1 ring-white/10 p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-action/20 text-action">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {t.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
