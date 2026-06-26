import { Link } from 'react-router-dom'
import { processSteps, Icons } from '@/lib/data'

export default function HomeProcess() {
  return (
    <section className="py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary">
            Our Sourcing Process
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            A proven 7-step process that takes you from idea to delivered product — with complete transparency at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px" />

          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, index) => {
              const IconComponent = Icons[step.icon]
              const isEven = index % 2 === 0
              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-8 h-8 bg-accent rounded-full items-center justify-center z-10 shadow-md">
                    <span className="text-white text-xs font-bold">{step.step}</span>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right lg:pr-20' : 'lg:text-left lg:pl-20'}`}>
                    <div className={`bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow ${
                      isEven ? 'lg:ml-auto' : 'lg:mr-auto'
                    } max-w-md`}>
                      <div className="flex items-center gap-3 mb-3 lg:hidden">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shrink-0">
                          <span className="text-white text-xs font-bold">{step.step}</span>
                        </div>
                        <span className="text-accent text-xs font-semibold uppercase tracking-wider">Step {step.step}</span>
                      </div>
                      <div className="hidden lg:block mb-2">
                        <span className="text-accent text-xs font-semibold uppercase tracking-wider">Step {step.step}</span>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-sm transition-colors"
          >
            Learn more about our process
            <Icons.ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}