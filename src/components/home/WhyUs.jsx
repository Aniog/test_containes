import { Award, Globe, Headphones, Settings, Target, Wrench } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description:
      'Every machine is built to tolerances of ±0.1mm, ensuring consistent, repeatable folds across thousands of cycles.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description:
      'ISO 9001 and CE certified manufacturing. Our quality management system guarantees reliability and safety.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Trusted by fabricators in over 50 countries. Local service partners and fast spare-parts delivery worldwide.',
  },
  {
    icon: Settings,
    title: 'Advanced CNC Controls',
    description:
      'Intuitive touch-screen interfaces with programmable bend sequences, angle correction, and production analytics.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description:
      'Modular design and accessible components reduce downtime. Most routine service takes under 30 minutes.',
  },
  {
    icon: Headphones,
    title: 'Lifetime Support',
    description:
      'Dedicated technical support from installation through the full life of your machine. Remote diagnostics included.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 font-semibold text-sm tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-3 font-[var(--font-heading)]">
            Built Different, Built Better
          </h2>
          <p className="text-brand-600 mt-4 text-lg leading-relaxed">
            ARTITECT MACHINERY combines decades of folding expertise with
            cutting-edge engineering to deliver machines that outperform and
            outlast.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border border-brand-100 hover:border-accent-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-14 h-14 bg-brand-50 group-hover:bg-accent-50 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-600 group-hover:text-accent-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-brand-900 font-[var(--font-heading)]">
                  {reason.title}
                </h3>
                <p className="text-brand-600 mt-2 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-brand-900 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '50+', label: 'Countries Served' },
              { value: '3000+', label: 'Machines Delivered' },
              { value: '99.5%', label: 'Customer Satisfaction' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-accent-400 font-[var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-brand-300 mt-1 text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
