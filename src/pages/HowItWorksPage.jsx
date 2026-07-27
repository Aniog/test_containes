import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { MessageSquare, Search, FileCheck, Package, Ship, CheckCircle, ArrowRight, Clock, Users, Shield } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what product you need, including specifications, quantity, target price, and timeline. The more details you provide, the more accurate our sourcing will be.',
    details: [
      'Product description and specifications',
      'Target quantity and budget range',
      'Quality requirements and certifications',
      'Preferred timeline and delivery terms',
    ],
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Identification & Screening',
    description: 'Our team searches through our verified supplier network and industry databases to identify manufacturers that match your requirements. We conduct initial screening to shortlist the best candidates.',
    details: [
      'Search verified supplier database',
      'Initial capability assessment',
      'Business license verification',
      'Shortlist of 3-5 qualified suppliers',
    ],
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Quotation & Sample Collection',
    description: 'We collect quotations from shortlisted suppliers and coordinate sample production. You receive a comparison report with pricing, lead times, and supplier profiles to help you make an informed decision.',
    details: [
      'Competitive quotation collection',
      'Supplier comparison report',
      'Sample request coordination',
      'Sample consolidation and shipping',
    ],
  },
  {
    icon: Package,
    step: '04',
    title: 'Order Confirmation & Production',
    description: 'Once you select a supplier and approve samples, we help finalize the order details, negotiate terms, and monitor production from start to finish.',
    details: [
      'Contract review and negotiation',
      'Production schedule confirmation',
      'Regular production updates',
      'Quality inspections during production',
    ],
  },
  {
    icon: Ship,
    step: '05',
    title: 'Quality Inspection & Shipping',
    description: 'Before your goods leave the factory, we conduct a final pre-shipment inspection. Once approved, we arrange freight forwarding and handle all export documentation.',
    details: [
      'Pre-shipment quality inspection',
      'Detailed inspection report with photos',
      'Freight forwarding arrangement',
      'Export documentation and tracking',
    ],
  },
]

export default function HowItWorksPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">How Sourcing Works</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              A clear, step-by-step process designed to reduce risk, save time, and keep you informed
              from your first inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">{step.description}</p>

                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image placeholder */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    data-strk-bg-id={`process-step-${step.step}`}
                    data-strk-bg="[process-title]"
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                    className="w-full aspect-[4/3] bg-secondary rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hidden text for image query */}
        <h2 id="process-title" className="sr-only">China sourcing process factory inspection</h2>
      </section>

      {/* Why it works */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why This Process Works</h2>
            <p className="text-muted-foreground text-lg">
              Our structured approach minimizes risk and maximizes transparency at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Risk Reduction</h3>
              <p className="text-muted-foreground text-sm">
                Factory verification and quality inspections catch problems before they become expensive mistakes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Time Savings</h3>
              <p className="text-muted-foreground text-sm">
                We handle supplier communication, sampling, and logistics so you can focus on your business.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Clear Communication</h3>
              <p className="text-muted-foreground text-sm">
                Regular updates and detailed reports keep you informed at every stage of the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 mb-8">
              Submit your sourcing request and we will get back to you within 24 hours.
            </p>
            <Link to="/contact" className="btn-primary bg-amber-500 hover:bg-amber-600 text-primary font-semibold">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
