import { Settings, Award, Headphones, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const reasons = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description:
      'Every machine is built to tight tolerances, delivering repeatable bends with minimal setup time.',
  },
  {
    icon: Award,
    title: 'Proven Durability',
    description:
      'Industrial-grade frames and components designed for continuous operation in demanding environments.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description:
      'Our technical team provides guidance from machine selection through installation and maintenance.',
  },
  {
    icon: Clock,
    title: 'Fast Lead Times',
    description:
      'Streamlined production and global logistics get your equipment on the floor when you need it.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Fabricators Choose Us
          </h2>
          <p className="mt-4 text-muted-foreground">
            We combine robust machine design with responsive service so your shop
            can bend metal with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="rounded-xl border-border bg-background text-center transition-shadow hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <div className="mx-flex mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4 text-lg font-semibold text-foreground">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
