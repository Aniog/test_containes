import { Container, SectionHeading } from '@/components/ui/Section'
import { Gauge, ShieldCheck, Cpu, Wrench } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Precision Engineering',
    text: 'Tight tolerances and repeatable bends, with backgauge accuracy down to ±0.05 mm on CNC models.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    text: 'Stress-relieved frames and hardened blades deliver dependable performance over years of production.',
  },
  {
    icon: Cpu,
    title: 'Intuitive Controls',
    text: 'Touchscreen CNC and PLC interfaces let operators of any skill level produce accurate parts fast.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    text: 'Tool-less adjustments and quick-change tooling keep downtime low and throughput high.',
  },
]

export function HomeFeatures() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Why ARTITECT"
          title="Engineered for the Demands of Production"
          description="Every machine is designed around four principles that matter most on the shop floor."
          align="center"
          className="mb-14"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-start p-7 bg-surface border border-line rounded-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-steel text-white mb-5">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold text-ink mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
