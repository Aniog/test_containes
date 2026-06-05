import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Search, ShieldCheck, Eye, Package, Truck, CheckCircle } from 'lucide-react'

const steps = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Share Your Requirements',
    desc: 'Tell us what you need. Send us product specifications, photos, target pricing, and quantity requirements. The more detail you provide, the faster we can deliver accurate results.',
    timeline: 'Day 1',
    imgQuery: 'business consultation meeting discussion requirements',
  },
  {
    step: 2,
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team researches potential suppliers from our verified network. We match factories based on their capabilities, certifications, production capacity, and pricing competitiveness.',
    timeline: 'Days 2-5',
    imgQuery: 'supplier research factory database sourcing',
  },
  {
    step: 3,
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'We visit shortlisted factories in person. Our team checks business licenses, inspects production facilities, reviews quality management systems, and assesses the factory\'s ability to meet your requirements.',
    timeline: 'Days 5-8',
    imgQuery: 'factory audit verification inspection team',
  },
  {
    step: 4,
    icon: Package,
    title: 'Sample Development & Approval',
    desc: 'We arrange product samples from the best-matched suppliers. You review the samples and provide feedback. We manage revisions until you are satisfied and ready to proceed with production.',
    timeline: 'Days 8-20',
    imgQuery: 'product samples development review approval',
  },
  {
    step: 5,
    icon: ShieldCheck,
    title: 'Price Negotiation & Contract',
    desc: 'We negotiate pricing, payment terms, production timelines, and quality standards on your behalf. We ensure all terms are documented clearly in a contract with the supplier.',
    timeline: 'Days 15-20',
    imgQuery: 'business contract negotiation agreement signing',
  },
  {
    step: 6,
    icon: Eye,
    title: 'Production & Quality Control',
    desc: 'Once production begins, we monitor progress through regular factory visits. We conduct in-line inspections during production and a thorough pre-shipment inspection before goods are packed.',
    timeline: 'Production period',
    imgQuery: 'production line quality control inspection manufacturing',
  },
  {
    step: 7,
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We supervise container loading, prepare export documentation, coordinate with freight forwarders, and track your shipment to the destination. We handle all logistics from factory to your warehouse.',
    timeline: 'Shipping period',
    imgQuery: 'shipping container cargo logistics freight delivery',
  },
]

const HowItWorks = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-700 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">
            Our Process
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            How It Works
          </h1>
          <p className="mt-5 text-lg text-brand-200 max-w-2xl mx-auto">
            A clear, structured sourcing process that keeps you informed and in
            control at every stage. No surprises, no guesswork.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-brand-100" />

            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.step} className="relative flex gap-6 md:gap-8">
                  {/* Step number */}
                  <div className="relative z-10 w-12 md:w-16 h-12 md:h-16 bg-brand-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-lg shadow-brand-500/20">
                    {step.step}
                  </div>

                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <span className="px-3 py-0.5 bg-brand-50 text-brand-600 text-xs font-semibold rounded-full">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Makes Our Process Different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Full Transparency',
                desc: 'You receive regular updates, photos, and reports at every stage. You always know where your order stands.',
              },
              {
                title: 'Local Team, Global Service',
                desc: 'Our team is based in China, close to the factories. We speak the language and understand the culture.',
              },
              {
                title: 'Your Interests First',
                desc: 'We work for you, not the factories. Our recommendations are based solely on what is best for your business.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-7 text-center shadow-sm">
                <CheckCircle className="w-10 h-10 text-brand-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Send us your product requirements and we will walk you through the
            entire process from start to finish.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors shadow-sm"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
