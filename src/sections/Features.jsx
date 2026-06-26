import {
  Settings,
  ShieldCheck,
  Globe,
  Wrench,
  Award,
  Clock,
} from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description:
      'Every machine is engineered to tight tolerances, ensuring accurate, repeatable folds across thousands of cycles.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    description:
      'Welded steel frames, hardened tooling, and industrial-grade components deliver decades of dependable service.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description:
      'Our network of service partners provides spare parts, training, and on-site support in over 60 countries.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description:
      'Modular components and accessible layouts make routine maintenance fast, minimizing costly downtime.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description:
      'ISO-certified manufacturing processes and rigorous testing before every machine leaves our facility.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description:
      'Streamlined production and logistics keep lead times short, even for custom configurations.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-[#f8f9fa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#c69c3f]">
            Why ARTITECT
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
            Engineering Excellence in Every Detail
          </h2>
          <p className="mt-4 text-lg text-[#6b7280]">
            We combine robust mechanical design with modern controls to help
            fabricators work faster, safer, and more accurately.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#c69c3f]/10">
                  <Icon className="h-6 w-6 text-[#c69c3f]" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[#6b7280]">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
