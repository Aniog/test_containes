import { Cog, Layers3, Shield, Sparkles } from 'lucide-react'

const highlights = [
  {
    title: 'Refined presentation',
    description: 'Elegant spacing, crisp hierarchy, and premium surfaces make heavy-duty machinery feel accessible.',
    icon: Sparkles,
  },
  {
    title: 'Technical confidence',
    description: 'Clear product framing helps buyers understand where each folding machine fits in the lineup.',
    icon: Cog,
  },
  {
    title: 'Durable impression',
    description: 'A strong visual system supports the engineering quality your machines are meant to convey.',
    icon: Shield,
  },
  {
    title: 'Simple decision path',
    description: 'User-friendly structure guides visitors from product discovery to a stronger inquiry conversation.',
    icon: Layers3,
  },
]

function CapabilityHighlights() {
  return (
    <section id="advantages" className="bg-slate-900 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Why it works</p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">An elegant but user-friendly experience for industrial buyers.</h2>
          <p className="text-lg leading-8 text-slate-300">The site balances premium brand presence with practical usability, making it easy for visitors to find the right product language, understand the range, and move toward the next discussion.</p>
          <div className="grid gap-4 pt-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-white">Premium</p>
              <p className="mt-2 text-sm text-slate-300">Confident visual tone without losing clarity.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-white">Readable</p>
              <p className="mt-2 text-sm text-slate-300">Explicit contrast across every section and card.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-white">Focused</p>
              <p className="mt-2 text-sm text-slate-300">The page stays centered on folding machinery and buyer intent.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950 p-6 shadow-lg shadow-slate-950/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CapabilityHighlights
