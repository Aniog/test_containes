import { stats } from './data'

export default function Stats() {
  return (
    <section className="bg-[#0a0f14] border-y border-[#1f2c3a]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-[#4ade80] tracking-tight">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-[#8a9aab] leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
