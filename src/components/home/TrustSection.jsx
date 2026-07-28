import SectionHeading from '@/components/shared/SectionHeading'
import { trustPoints } from '@/data/siteData'

export default function TrustSection() {
  return (
    <section className="bg-primary-dark py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={{ text: 'Why Choose Us', variant: 'secondary' }}
          title="Trusted by Buyers Across the World"
          description="Our clients rely on us because we prioritize transparency, verification, and consistent communication."
          className="[&_h2]:text-white [&_p]:text-blue-100"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.label} className="rounded-xl bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="mb-2 text-4xl font-bold text-white">{point.value}</div>
              <div className="text-sm font-medium text-blue-100">{point.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
