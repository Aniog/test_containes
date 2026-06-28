import { process } from '@/data/site-data'

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-4">
            Our Sourcing Process
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            A systematic approach to finding the right suppliers and ensuring quality delivery.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {process.map((step) => (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                {/* Step number */}
                <div className="relative z-10 w-12 h-12 bg-primary-light text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-secondary-text leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}