import { trustPoints } from '@/data/site-data'

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((point) => (
            <div key={point.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{point.number}</div>
              <div className="text-white/70 text-sm">{point.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}