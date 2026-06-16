import Reveal from "@/components/ui/Reveal"
import { processSteps } from "@/data/site"

export default function Process() {
  return (
    <section id="process" className="bg-cream py-20 md:py-28 lg:py-32">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[11px] md:text-xs uppercase tracking-eyebrow text-brass-deep font-medium">
              <span className="inline-block w-8 h-px bg-brass align-middle mr-3" />
              How we work
            </p>
            <h2 className="mt-5 font-display font-light text-ink text-3xl md:text-5xl leading-tight">
              A measured path from first conversation to first folded part.
            </h2>
          </div>
        </Reveal>

        <ol className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {processSteps.map((s, i) => (
            <Reveal
              key={s.id}
              as="li"
              delay={i * 80}
              className="bg-cream p-7 md:p-8 flex flex-col min-h-[260px]"
            >
              <span className="font-display text-4xl md:text-5xl text-brass/70 leading-none">
                {s.step}
              </span>
              <h3 className="mt-8 font-display text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm text-slate leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
