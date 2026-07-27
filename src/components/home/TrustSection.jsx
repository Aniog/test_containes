import { trustPoints } from '@/data/site'
import Icon from '@/components/shared/Icon'
import SectionHeading from '@/components/shared/SectionHeading'

export default function TrustSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Buyers Trust Us"
          title="On the ground in China, working for you"
          subtitle="We are not a remote middleman. Our team is based in Shenzhen and works directly with factories, inspectors, and freight forwarders."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((t) => (
            <div key={t.id} className="flex gap-4 rounded-xl border border-slate-200 bg-canvas p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber/10 text-amber">
                <Icon name={t.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-ink">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
