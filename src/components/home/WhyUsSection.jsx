import { ShieldCheck, Settings, Award, Headphones } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    description: 'Rugged welded frames, hardened tooling, and premium components ensure decades of dependable service.',
  },
  {
    icon: Settings,
    title: 'Operator Friendly',
    description: 'Intuitive controls, quick setup, and ergonomic design reduce training time and increase throughput.',
  },
  {
    icon: Award,
    title: 'Precision Engineering',
    description: 'Tight tolerances, accurate backgauges, and repeatable results meet the demands of modern fabrication.',
  },
  {
    icon: Headphones,
    title: 'Global Support',
    description: 'From installation to spare parts, our technical team supports you across every timezone.',
  },
]

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why ARTITECT"
          title="The difference is in the details"
          description="We combine industrial-grade engineering with thoughtful design so your team can fold faster, safer, and more accurately."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="p-6 rounded-lg border border-border-soft bg-cream hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded bg-gold/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{benefit.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
