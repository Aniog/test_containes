import {
  Target,
  ShieldCheck,
  Cpu,
  Zap,
  Headset,
  HardHat,
} from "lucide-react"
import { Container, Section, SectionHeading } from "@/components/ui"
import { features } from "@/data/content"

const iconMap = {
  Target,
  ShieldCheck,
  Cpu,
  Zap,
  Headset,
  HardHat,
}

export function Features() {
  return (
    <Section id="features" className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Why ARTITECT"
          title="Built to fold better, longer"
          description="Every machine is the product of decades of fabrication experience — engineered for accuracy, durability, and the people who run them."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Target
            return (
              <div
                key={feature.title}
                className="rounded-xl border border-line bg-cloud p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-ink text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export default Features
