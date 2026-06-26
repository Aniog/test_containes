import { SectionLabel } from '@/components/ui/SectionLabel'
import { Gauge, ShieldCheck, Wrench, Globe } from 'lucide-react'

const reasons = [
  {
    icon: Gauge,
    title: 'Engineered Accuracy',
    description:
      'Tight tolerances and rigid frames deliver consistent folds across thousands of cycles.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    description:
      'High-grade steel construction, hardened tooling, and rigorous quality control.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description:
      'Modular components and accessible layouts keep downtime and service costs low.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description:
      'Local service partners and spare-parts stocking centers in over 45 countries.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-am-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionLabel>Why ARTITECT</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-am-text mb-6">
              Strength You Can Trust,
              <br />
              <span className="text-am-gold">Precision You Can See</span>
            </h2>
            <p className="text-base md:text-lg text-am-muted leading-relaxed mb-8">
              We combine decades of engineering experience with modern
              manufacturing to produce folding machinery that helps fabricators
              work faster, safer, and more accurately.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold bg-am-gold text-am-bg hover:bg-am-gold-hover transition-colors"
            >
              Talk to an Engineer
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-am-bg border border-white/10 rounded-2xl p-6 hover:border-am-gold/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-am-gold/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5 text-am-gold" />
                </div>
                <h3 className="text-lg font-bold text-am-text mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-am-muted leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
