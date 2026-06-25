import { Gauge, ShieldCheck, Wrench } from 'lucide-react'

const points = [
  {
    icon: Gauge,
    title: 'Precision-focused output',
    text: 'Designed to help teams produce clean bends with repeatable positioning and controlled handling.',
  },
  {
    icon: ShieldCheck,
    title: 'Stable industrial build',
    text: 'Strong frames, durable components, and balanced operation support demanding workshop use.',
  },
  {
    icon: Wrench,
    title: 'Easy to use and maintain',
    text: 'Clear interaction points and service-friendly access keep operators confident and downtime lower.',
  },
]

export default function EngineeringSection() {
  return (
    <section id="engineering" className="bg-slate-950 py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-300">Engineering approach</p>
          <h2 id="engineering-title" className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Elegant machines that feel simple to operate.
          </h2>
          <p id="engineering-subtitle" className="mt-5 text-lg leading-8 text-slate-300">
            ARTITECT MACHINERY combines strong industrial capability with a friendly customer experience, helping buyers choose the right metal folder machine with confidence.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {points.map((point, index) => {
            const Icon = point.icon
            return (
              <div key={point.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white shadow-xl shadow-black/10">
                <div className="flex flex-col gap-5 sm:min-h-64 lg:min-h-0 lg:flex-row lg:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-slate-950">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-200">0{index + 1}</p>
                    <h3 className="mt-2 text-2xl font-black text-white">{point.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{point.text}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
