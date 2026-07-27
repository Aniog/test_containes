import SectionHeader from '@/components/SectionHeader'
import { trustPoints } from '@/data/siteData'

export default function TrustSection() {
  return (
    <section className="py-14 md:py-20 bg-brand-light/60 border-y border-slate-200">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {trustPoints.map((point) => (
            <div key={point.label}>
              <div className="text-4xl md:text-5xl font-extrabold text-brand">{point.stat}</div>
              <div className="mt-2 text-sm md:text-base font-medium text-slate-700">{point.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
