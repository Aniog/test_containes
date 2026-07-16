import { trustPoints } from '@/data/site'

export default function TrustBar() {
  return (
    <section className="border-y border-champagne bg-pearl/90">
      <div className="section-shell overflow-x-auto py-4">
        <div className="flex min-w-max items-center justify-center gap-4 text-xs uppercase tracking-[0.2em] text-mocha sm:gap-6">
          {trustPoints.map((point, index) => (
            <div key={point} className="flex items-center gap-4 sm:gap-6">
              <span>{point}</span>
              {index < trustPoints.length - 1 ? <span className="text-champagne">·</span> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
