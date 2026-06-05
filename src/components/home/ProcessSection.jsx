import { ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your product requirements, target price, and quantity. We respond within 24 hours with a sourcing plan.',
    imgQuery: 'business meeting discussion planning',
  },
  {
    step: '02',
    title: 'We Find & Verify Suppliers',
    desc: 'Our team identifies qualified suppliers, visits factories, and verifies credentials before recommending them to you.',
    imgQuery: 'factory audit inspection verification',
  },
  {
    step: '03',
    title: 'Sample & Negotiate',
    desc: 'We arrange product samples, negotiate pricing on your behalf, and finalize terms with the chosen supplier.',
    imgQuery: 'product samples quality check manufacturing',
  },
  {
    step: '04',
    title: 'Production & QC',
    desc: 'We monitor production progress, conduct quality inspections at key stages, and keep you informed throughout.',
    imgQuery: 'quality control inspection production line',
  },
  {
    step: '05',
    title: 'Ship & Deliver',
    desc: 'We supervise loading, arrange shipping, handle customs paperwork, and track your goods to the final destination.',
    imgQuery: 'shipping container cargo logistics freight',
  },
]

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Your Sourcing Process in 5 Steps
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A clear, structured approach that removes the guesswork from sourcing
            in China. You stay informed at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-brand-200 z-0" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-brand-500/25">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-300" />
                  )}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
