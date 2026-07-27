import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, Clock, FileText, Search, Factory, Package, Ship } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionHeader from '@/components/home/SectionHeader'

const steps = [
  {
    step: '01',
    icon: FileText,
    title: 'Submit Your Requirements',
    duration: 'Day 1-2',
    desc: 'Fill out our inquiry form with your product details — specifications, target price, order quantity, certifications needed, and any reference images. The more detail you provide, the faster we can find the right supplier.',
    whatWeDo: [
      'Review your product requirements in detail',
      'Clarify any questions about specifications',
      'Provide initial feasibility assessment',
      'Confirm project timeline and scope',
    ],
    whatYouDo: [
      'Share product specifications and images',
      'Tell us your target price and quantity',
      'Specify any certification requirements',
    ],
    imgId: 'htw-step1-a1b2c3',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Identification',
    duration: 'Week 1-2',
    desc: 'We search our network of 50,000+ verified suppliers and industry databases. We shortlist 3-5 qualified candidates based on product match, production capacity, quality history, certifications, and export experience.',
    whatWeDo: [
      'Search supplier database and industry networks',
      'Screen candidates for product and capability fit',
      'Verify basic credentials and export history',
      'Present shortlist with detailed supplier profiles',
    ],
    whatYouDo: [
      'Review supplier shortlist and profiles',
      'Provide feedback on preferred candidates',
      'Approve suppliers for factory audit',
    ],
    imgId: 'htw-step2-d4e5f6',
  },
  {
    step: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    duration: 'Week 2-3',
    desc: 'We visit each shortlisted factory in person. Our comprehensive audit covers business licenses, production lines, quality systems, equipment, workforce, certifications, and export documentation. You receive a detailed report with photos.',
    whatWeDo: [
      'On-site factory visit and inspection',
      'Verify business licenses and certifications',
      'Assess production capacity and equipment',
      'Deliver detailed audit report with photos',
    ],
    whatYouDo: [
      'Review factory audit reports',
      'Select preferred factory for sampling',
    ],
    imgId: 'htw-step3-g7h8i9',
  },
  {
    step: '04',
    icon: Package,
    title: 'Sampling & Negotiation',
    duration: 'Week 3-5',
    desc: 'We coordinate samples from your chosen factory, handle international shipping to you, and help you evaluate quality. We negotiate pricing, payment terms, and production timelines on your behalf to get the best deal.',
    whatWeDo: [
      'Coordinate sample production and shipping',
      'Negotiate pricing and payment terms',
      'Compare offers across suppliers',
      'Finalize production agreement',
    ],
    whatYouDo: [
      'Evaluate samples and provide feedback',
      'Approve final pricing and terms',
      'Place initial order',
    ],
    imgId: 'htw-step4-j0k1l2',
  },
  {
    step: '05',
    icon: CheckCircle,
    title: 'Production & Quality Control',
    duration: 'Ongoing',
    desc: 'Once production begins, we monitor progress with regular factory visits. Our QC team conducts inspections at key stages — raw materials, in-process, and pre-shipment — ensuring your products meet specifications before they ship.',
    whatWeDo: [
      'Weekly production progress reports',
      'In-process quality inspections',
      'Pre-shipment inspection (AQL standard)',
      'Issue identification and resolution',
    ],
    whatYouDo: [
      'Review progress reports and photos',
      'Approve pre-shipment inspection results',
      'Authorize final shipment',
    ],
    imgId: 'htw-step5-m3n4o5',
  },
  {
    step: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    duration: '2-6 weeks',
    desc: 'We coordinate the entire logistics process — freight booking, documentation, customs clearance, and tracking. Whether by sea, air, or rail, we ensure your goods arrive safely and on schedule at your destination.',
    whatWeDo: [
      'Book freight and optimize shipping costs',
      'Prepare all export/import documentation',
      'Handle customs clearance',
      'Track shipment until delivery',
    ],
    whatYouDo: [
      'Provide import documentation if needed',
      'Receive and inspect your shipment',
      'Confirm delivery and quality',
    ],
    imgId: 'htw-step6-p6q7r8',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent-400 font-medium text-sm mb-3">OUR PROCESS</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">How It Works</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            A transparent, step-by-step process designed to give you confidence and control over your sourcing from China.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-[35px] top-0 bottom-0 w-0.5 bg-slate-200" />

            <div className="space-y-16">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="md:flex gap-8">
                    {/* Step number */}
                    <div className="hidden md:flex shrink-0 relative z-10 w-[70px] justify-center">
                      <div className="w-[70px] h-[70px] bg-brand-600 text-white rounded-2xl flex flex-col items-center justify-center shadow-lg">
                        <span className="text-lg font-bold leading-none">{step.step}</span>
                        <span className="text-[10px] mt-1 opacity-80">{step.duration}</span>
                      </div>
                    </div>

                    {/* Mobile step number */}
                    <div className="md:hidden flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-brand-600 text-white rounded-xl flex flex-col items-center justify-center shrink-0">
                        <span className="text-base font-bold leading-none">{step.step}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-accent-500">{step.duration}</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold text-brand-900 mb-2">{step.title}</h2>
                      <p className="text-slate-500 leading-relaxed mb-6">{step.desc}</p>

                      {/* What we do / What you do */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-brand-50 rounded-xl p-5">
                          <h4 className="text-sm font-semibold text-brand-700 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" /> What We Do
                          </h4>
                          <ul className="space-y-2">
                            {step.whatWeDo.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="text-brand-400 mt-0.5">&#8226;</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-5">
                          <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" /> What You Do
                          </h4>
                          <ul className="space-y-2">
                            {step.whatYouDo.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="text-slate-400 mt-0.5">&#8226;</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-slate-200 mb-8">The first step is simple — tell us what you need, and we'll take it from there.</p>
          <Button variant="accent" size="xl" onClick={() => navigate('/contact')}>
            Submit Your Requirements
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}