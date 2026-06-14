import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, FileCheck, Camera, Truck, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      duration: '1-2 days',
      desc: 'We start with a detailed discussion of your product requirements, target price range, quality expectations, order volume, and timeline.',
      items: [
        'Product specifications and technical requirements',
        'Quality standards and acceptable tolerances',
        'Target pricing and commercial terms',
        'Certifications or compliance needs',
      ],
    },
    {
      number: '02',
      title: 'Supplier Research & Shortlisting',
      duration: '5-10 business days',
      desc: 'We search our database and conduct targeted outreach to identify suppliers capable of meeting your needs. We present 3-5 qualified options.',
      items: [
        'Capability and capacity screening',
        'Price comparison and lead time estimates',
        'Preliminary background checks',
        'Detailed supplier profiles with photos',
      ],
    },
    {
      number: '03',
      title: 'Factory Verification',
      duration: '7-14 business days',
      desc: 'For shortlisted suppliers, we conduct on-site verification to confirm legitimacy, production capability, and working conditions.',
      items: [
        'Business registration and legal status',
        'Production equipment and workforce assessment',
        'Quality control processes review',
        'Photo and video documentation',
      ],
    },
    {
      number: '04',
      title: 'Sampling & Approval',
      duration: '2-4 weeks',
      desc: 'We coordinate sample production and shipping. You review and approve samples before authorizing mass production.',
      items: [
        'Sample order placement and tracking',
        'Sample review and feedback collection',
        'Specification refinement if needed',
        'Final approval documentation',
      ],
    },
    {
      number: '05',
      title: 'Production Monitoring',
      duration: 'Varies by order',
      desc: 'Once production begins, we track progress against the agreed schedule and report at key milestones.',
      items: [
        'Production start confirmation',
        'Mid-production status updates',
        'Issue identification and escalation',
        'Photo documentation of progress',
      ],
    },
    {
      number: '06',
      title: 'Final Inspection',
      duration: '1-3 business days',
      desc: 'Before shipment, we conduct a pre-shipment inspection to verify that finished goods meet your specifications and quality standards.',
      items: [
        'Random sampling per AQL standards',
        'Visual, dimensional, and functional checks',
        'Packaging and labeling verification',
        'Detailed inspection report with photos',
      ],
    },
    {
      number: '07',
      title: 'Shipping Coordination',
      duration: 'Varies by destination',
      desc: 'We assist with booking, documentation, and coordination so goods move smoothly from factory to your warehouse or customer.',
      items: [
        'Freight forwarder selection and booking',
        'Export documentation preparation',
        'Customs and compliance guidance',
        'Shipment tracking and updates',
      ],
    },
  ]

  const principles = [
    { icon: Users, title: 'Direct Communication', desc: 'We facilitate direct contact between you and suppliers when appropriate, while managing language and cultural gaps.' },
    { icon: FileCheck, title: 'Written Records', desc: 'All agreements, specifications, and inspection results are documented in writing for clarity and accountability.' },
    { icon: Camera, title: 'Visual Evidence', desc: 'We provide photos and videos at critical stages so you can see progress without traveling to China.' },
    { icon: CheckCircle, title: 'No Exaggerated Claims', desc: 'We report facts as we find them. If a supplier is not suitable, we say so clearly.' },
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-sm tracking-[2px] text-slate-400 mb-4">TRANSPARENT PROCESS</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">How We Work</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A clear, step-by-step approach designed to reduce risk and keep you informed at every stage.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="grid md:grid-cols-12 gap-8 border-b border-slate-200 pb-12 last:border-b-0 last:pb-0">
              <div className="md:col-span-3">
                <div className="text-xs font-mono tracking-[3px] text-slate-400 mb-2">{step.number}</div>
                <h3 className="font-semibold text-2xl tracking-tight text-slate-900 mb-1">{step.title}</h3>
                <div className="text-sm text-slate-500">{step.duration}</div>
              </div>
              <div className="md:col-span-9">
                <p className="text-slate-600 mb-5 leading-relaxed">{step.desc}</p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  {step.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-600">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <div className="text-sm tracking-[2px] text-slate-500 mb-3">OUR PRINCIPLES</div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">How We Approach Every Project</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-8">
                <p.icon className="w-7 h-7 text-slate-700 mb-5" />
                <h3 className="font-semibold text-lg mb-2 text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Ready to Begin?</h2>
        <p className="text-slate-600 mb-8">Start with a no-obligation consultation. We'll discuss your needs and outline next steps.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
