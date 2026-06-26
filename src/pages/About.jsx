import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Container, SectionHeading } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Award, Users, Globe, Wrench } from 'lucide-react'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

const stats = [
  { icon: Award, value: '20+', label: 'Years of engineering' },
  { icon: Users, value: '500+', label: 'Fabricators served' },
  { icon: Globe, value: '30+', label: 'Countries shipped to' },
  { icon: Wrench, value: '24/7', label: 'Service & support' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-ink text-ink-fg py-16 md:py-20">
        <Container>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-copper" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              About Us
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-3xl">
            Engineering Folding Machinery You Can Rely On
          </h1>
          <p className="text-lg text-ink-muted max-w-2xl">
            ARTITECT MACHINERY has spent over two decades designing and building
            sheet metal folding equipment for fabricators worldwide.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-line bg-white">
              <img
                alt="ARTITECT MACHINERY engineering floor"
                data-strk-img-id="about-page-img-5c9d2a"
                data-strk-img="[about-page-subtitle] [about-page-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Precision Is in Our DNA"
                description="What began as a small engineering workshop has grown into a trusted manufacturer of folding machinery, serving HVAC, automotive, and structural fabricators across the globe."
                className="mb-6"
                titleId="about-page-title"
                descId="about-page-subtitle"
              />
              <p className="text-muted leading-relaxed mb-4">
                We believe great machinery should be both precise and
                approachable. Every ARTITECT folder is engineered to tight
                tolerances, yet designed so operators can run it confidently
                from day one. From manual sheet metal folders to flagship CNC
                folding machines, our range covers the full spectrum of
                fabrication needs.
              </p>
              <p className="text-muted leading-relaxed">
                Our commitment does not end at delivery. Installation, training,
                and a global service network keep your production running for
                the long haul.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeading
            eyebrow="By the Numbers"
            title="A Track Record Built on Trust"
            align="center"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center p-8 bg-surface border border-line rounded-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-steel text-white mb-4">
                  <s.icon className="h-6 w-6" />
                </span>
                <div className="text-3xl font-extrabold text-copper mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-steel text-white">
        <Container>
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
              Let's find the right machine for your shop.
            </h2>
            <Button to="/contact" variant="accent">
              Talk to an Engineer
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
