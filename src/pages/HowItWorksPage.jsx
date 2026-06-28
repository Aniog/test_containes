import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { process } from '@/data/site-data'

export default function HowItWorksPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/95 to-primary/80 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              A clear, step-by-step process from your initial inquiry to delivered goods.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {process.map((step, i) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-light text-white rounded-full flex items-center justify-center text-lg font-bold shrink-0">
                    {step.step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className={`pb-8 ${i < process.length - 1 ? '' : ''}`}>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-secondary-text leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to Get Started?</h2>
          <p className="text-secondary-text text-lg mb-8 max-w-2xl mx-auto">
            Share your requirements and we&apos;ll begin the process within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-light hover:bg-primary text-white font-semibold rounded-lg px-8 py-3.5 transition-colors"
          >
            Start Your Sourcing Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}