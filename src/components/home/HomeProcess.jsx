import { Container, SectionHeading } from '@/components/ui/Section'

const steps = [
  {
    n: '01',
    title: 'Consult',
    text: 'We assess your materials, part geometries, and production volume to recommend the right folder.',
  },
  {
    n: '02',
    title: 'Configure',
    text: 'Select folding length, tooling, and automation options tailored to your workflow.',
  },
  {
    n: '03',
    title: 'Build',
    text: 'Your machine is assembled, calibrated, and quality-tested to exact tolerances.',
  },
  {
    n: '04',
    title: 'Support',
    text: 'Installation, operator training, and ongoing service keep your production running.',
  },
]

export function HomeProcess() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="From Consultation to Production"
          description="A straightforward process that gets the right machine on your floor and running quickly."
          align="center"
          className="mb-14"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative flex flex-col p-7 border border-line rounded-xl bg-surface"
            >
              <span className="text-4xl font-extrabold text-copper mb-4">
                {s.n}
              </span>
              <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
