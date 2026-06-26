import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'

const problems = [
  'Hard to verify which suppliers are real factories versus trading companies',
  'Language barriers and slow response times delaying decisions',
  'Quality issues discovered only after goods arrive',
  'Production delays with limited visibility into progress',
  'Confusing shipping quotes and missing export documents',
]

const solutions = [
  'On-site factory audits and license verification',
  'Bilingual project managers based in China',
  'Pre-shipment and inline inspections with photo reports',
  'Weekly production updates and milestone tracking',
  'Freight coordination and customs documentation support',
]

export function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <Container>
        <SectionHeading
          label="Problems We Solve"
          title="Buying from China Shouldn't Feel Like a Gamble"
          description="Overseas buyers face real risks. We reduce those risks with boots-on-the-ground support and clear communication."
          className="text-white [&_h2]:text-white [&_p]:text-primary-light"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white/10 p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">Common Challenges</h3>
            <ul className="space-y-4">
              {problems.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 text-accent">
                    <Icon name="X" className="h-5 w-5" />
                  </span>
                  <span className="text-primary-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6 md:p-8 text-neutral-700">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">How We Help</h3>
            <ul className="space-y-4">
              {solutions.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 text-primary">
                    <Icon name="CheckCircle" className="h-5 w-5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
