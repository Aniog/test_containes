import { Check, Users, Factory, Globe } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const values = [
  {
    icon: Factory,
    title: 'Engineering Excellence',
    description:
      'We design and build every machine with precision components, rigorous testing, and a focus on long-term reliability.',
  },
  {
    icon: Users,
    title: 'Customer Partnership',
    description:
      'From first inquiry to after-sales service, we work alongside our customers to understand their workflow and recommend the right solution.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Our machines are trusted by fabricators and manufacturers across North America, Europe, Asia, and beyond.',
  },
]

const capabilities = [
  'Double folding machines for high-volume production',
  'Sheet metal folders for general fabrication',
  'Metal folding machines with CNC and manual controls',
  'Custom tooling and automation integrations',
  'Spare parts, training, and technical support',
]

export default function About() {
  return (
    <div>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                About ARTITECT MACHINERY
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                ARTITECT MACHINERY is a leading manufacturer of double folding
                machines, sheet metal folders, and metal folding machines. With
                decades of combined engineering experience, we build equipment that
                helps metal fabricators produce better parts faster and with greater
                consistency.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Whether you run a small job shop or a large-scale production
                facility, our goal is to deliver machinery that fits your workflow,
                your budget, and your quality standards.
              </p>
              <ul className="mt-8 space-y-3">
                {capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100"
              data-strk-bg-id="about-facility-bg"
              data-strk-bg="[about-title] [about-subtitle]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            >
              <div className="flex h-full w-full items-center justify-center bg-slate-200">
                <span className="text-sm text-muted-foreground">Facility image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="about-title"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Our Values
            </h2>
            <p id="about-subtitle" className="mt-4 text-muted-foreground">
              The principles that guide every machine we build and every customer
              relationship we form.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card
                key={value.title}
                className="rounded-xl border-border bg-white transition-shadow hover:shadow-md"
              >
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-lg font-semibold text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
