import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, FileText, Search, CheckSquare, Factory, Truck, Headphones } from 'lucide-react'

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const steps = [
    {
      icon: FileText,
      number: '01',
      title: 'Submit Your Requirements',
      desc: 'Complete our inquiry form or contact us directly with details about the products you want to source, target specifications, estimated quantities, and timeline.',
      details: ['Product description and specs', 'Target price range', 'Order volume and frequency', 'Quality and compliance requirements', 'Preferred timeline'],
    },
    {
      icon: Search,
      number: '02',
      title: 'Supplier Research & Shortlisting',
      desc: 'We search our network and conduct targeted outreach to identify manufacturers that match your criteria. You receive a shortlist with profiles and initial assessments.',
      details: ['3-5 qualified suppliers presented', 'Capability comparison table', 'Location and lead time overview', 'Preliminary pricing indications', 'Risk notes where relevant'],
    },
    {
      icon: CheckSquare,
      number: '03',
      title: 'Verification & Sampling',
      desc: 'We conduct on-site audits of shortlisted factories and coordinate sample production. You review reports and approve samples before proceeding.',
      details: ['Factory audit with photos and findings', 'Sample coordination and review', 'Specification alignment', 'Price and terms negotiation support', 'Final supplier selection'],
    },
    {
      icon: Factory,
      number: '04',
      title: 'Order Placement & Production',
      desc: 'Once you approve a supplier and place your order, we monitor production milestones and provide regular updates with documentation.',
      details: ['Purchase order review', 'Production schedule confirmation', 'Weekly progress reports', 'Issue identification and resolution', 'Quality checkpoint coordination'],
    },
    {
      icon: Truck,
      number: '05',
      title: 'Inspection & Shipping',
      desc: 'We arrange pre-shipment inspection, coordinate logistics, and ensure all documentation is complete for smooth customs clearance.',
      details: ['Pre-shipment inspection (PSI)', 'Freight booking assistance', 'Export documentation', 'Container loading supervision', 'Tracking and delivery confirmation'],
    },
    {
      icon: Headphones,
      number: '06',
      title: 'Delivery & Ongoing Support',
      desc: 'After delivery, we gather feedback and support future orders with the same supplier or help you develop additional sourcing channels.',
      details: ['Post-delivery review', 'Supplier performance summary', 'Reorder facilitation', 'New product development support', 'Long-term relationship management'],
    },
  ]

  const timeline = [
    { phase: 'Initial Response', time: 'Within 24 hours' },
    { phase: 'Supplier Shortlist', time: '5-10 business days' },
    { phase: 'Audit & Samples', time: '2-4 weeks (varies by product)' },
    { phase: 'Production', time: 'Per supplier lead time' },
    { phase: 'Inspection & Shipping', time: '1-3 weeks' },
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">How Our Sourcing Process Works</h1>
            <p className="text-xl text-slate-300">
              A clear, structured approach designed to reduce risk and give you visibility at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="grid md:grid-cols-12 gap-8 items-start border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                <div className="md:col-span-1">
                  <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center">
                    <span className="text-xl font-semibold text-teal-600">{step.number}</span>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-teal-600" />
                    <h3 className="text-2xl font-semibold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
                <div className="md:col-span-7">
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-700">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 mb-8 text-center">Typical Project Timeline</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {timeline.map((item, idx) => (
              <Card key={idx}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{item.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{item.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            Actual timelines vary by product complexity, supplier location, and order volume. We provide a project-specific schedule after initial review.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-3xl font-semibold text-slate-900 mb-4">Ready to Start?</h2>
        <p className="text-lg text-slate-600 mb-8">Tell us about your sourcing needs and we will guide you through the next steps.</p>
        <Button asChild size="lg">
          <Link to="/contact">Get a Free Sourcing Quote</Link>
        </Button>
      </section>
    </div>
  )
}

export default HowItWorks
