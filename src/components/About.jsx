import { Shield, Wrench, HeadphonesIcon, Award } from 'lucide-react'

const VALUES = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Every machine is constructed from heavy-gauge steel with precision-machined components, ensuring decades of reliable service.',
  },
  {
    icon: Wrench,
    title: 'Operator-Friendly Design',
    description: 'We believe complex machinery should be simple to use. Our intuitive controls and clear interfaces minimize training time.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'From installation assistance to ongoing technical support, our team is with you every step of the way.',
  },
  {
    icon: Award,
    title: 'Proven Quality',
    description: 'Each machine undergoes rigorous testing before delivery. We stand behind our products with comprehensive warranties.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <span className="inline-block px-3 py-1 bg-brand-navy/5 text-brand-navy text-xs tracking-[0.15em] uppercase font-semibold rounded-full mb-4">
              About Artitect
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Engineering Precision
              <span className="block text-brand-gold">Since 1998</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Artitect Machinery was founded with a single mission: to build metal folding equipment
              that combines industrial-grade precision with genuine ease of use. Over the past two
              decades, we have grown from a small workshop to a trusted supplier serving fabrication
              shops across more than 40 countries.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Every Artitect machine reflects our commitment to quality engineering. We use only
              premium materials, precision CNC machining, and rigorous quality control. The result
              is equipment that delivers consistent, accurate folds — day after day, year after year.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-brand-gold">500+</div>
                <div className="text-xs text-text-muted uppercase tracking-wide mt-1">Machines Built</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-brand-gold">26+</div>
                <div className="text-xs text-text-muted uppercase tracking-wide mt-1">Years of Innovation</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-brand-gold">98%</div>
                <div className="text-xs text-text-muted uppercase tracking-wide mt-1">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right - Values Cards */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-surface rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-navy flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-brand-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}