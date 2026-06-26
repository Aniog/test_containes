import { Container, SectionHeading } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { CheckCircle2 } from 'lucide-react'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

const points = [
  'Over two decades of sheet metal machinery engineering',
  'Machines deployed across HVAC, automotive, and structural fabrication',
  'Global service network with rapid parts availability',
  'Custom tooling and automation integration available',
]

export function HomeAbout() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-line bg-white">
              <img
                alt="ARTITECT MACHINERY fabrication facility"
                data-strk-img-id="about-img-2b8e1d"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 md:right-6 bg-steel text-white rounded-xl p-6 shadow-lg max-w-[200px]">
              <div className="text-3xl font-extrabold text-copper">20+</div>
              <div className="text-sm text-ink-muted mt-1">
                Years engineering folding machinery
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About Us"
              title="A Tradition of Precision Fabrication"
              description="ARTITECT MACHINERY designs and builds sheet metal folding equipment for fabricators who refuse to compromise on accuracy or reliability."
              className="mb-8"
              titleId="about-title"
              descId="about-subtitle"
            />
            <ul className="space-y-4 mb-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-copper shrink-0 mt-0.5" />
                  <span className="text-muted">{p}</span>
                </li>
              ))}
            </ul>
            <Button to="/about" variant="primary">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
