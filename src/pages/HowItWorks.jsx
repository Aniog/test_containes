import { Link } from 'react-router-dom'
import { processSteps, Icons } from '@/lib/data'

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Proven Sourcing Process
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            A transparent, step-by-step approach that takes the risk out of sourcing from China.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {processSteps.map((step, index) => {
                const IconComponent = Icons[step.icon]
                return (
                  <div key={step.step} className="relative pl-16 sm:pl-20">
                    {/* Circle on the line */}
                    <div className="absolute left-0 sm:left-2 top-0 w-12 h-12 sm:w-14 sm:h-14 bg-accent rounded-full flex items-center justify-center z-10 shadow-md">
                      <span className="text-white font-bold text-sm sm:text-base">{step.step}</span>
                    </div>

                    <div className="bg-surface-alt rounded-xl p-6 sm:p-8 border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
                      </div>
                      <p className="text-text-secondary leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-text-muted text-sm mb-6">
              Typical timeline: 4-8 weeks from inquiry to production-ready
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-md transition-colors shadow-sm"
            >
              Start Your Sourcing Project
              <Icons.ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}