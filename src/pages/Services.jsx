import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, Users, Shield, Award, Clock, Truck, FileCheck, Headphones } from 'lucide-react'

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const services = [
    {
      icon: Users,
      title: 'Supplier Identification & Sourcing',
      desc: 'We locate manufacturers that match your product specifications, quality standards, and production capacity requirements.',
      details: [
        'Product specification review and clarification',
        'Target price and MOQ analysis',
        'Supplier database and network search',
        'Initial capability screening',
        'Shortlist presentation with comparison',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification & Audits',
      desc: 'On-site verification to confirm legitimacy, production capabilities, and compliance before you commit.',
      details: [
        'Business license and registration checks',
        'Production capacity assessment',
        'Quality management system review',
        'Workforce and equipment evaluation',
        'Detailed audit report with photos',
      ],
    },
    {
      icon: FileCheck,
      title: 'Quality Inspection Services',
      desc: 'Independent inspection at key production stages to catch issues before shipment.',
      details: [
        'Pre-production sample inspection',
        'During-production inspection',
        'Pre-shipment inspection (PSI)',
        'Container loading supervision',
        'Custom inspection criteria available',
      ],
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      desc: 'Regular updates and milestone tracking to keep your order on schedule.',
      details: [
        'Production schedule confirmation',
        'Weekly progress reports',
        'Photo and video documentation',
        'Issue identification and escalation',
        'Timeline risk alerts',
      ],
    },
    {
      icon: Truck,
      title: 'Logistics & Shipping Coordination',
      desc: 'We manage the movement of goods from factory to your destination.',
      details: [
        'Freight booking and rate negotiation',
        'Export documentation preparation',
        'Consolidation and container planning',
        'Customs clearance coordination',
        'Delivery tracking and updates',
      ],
    },
    {
      icon: Headphones,
      title: 'Ongoing Account Management',
      desc: 'Dedicated support for repeat orders and long-term supplier relationships.',
      details: [
        'Single point of contact',
        'Supplier performance tracking',
        'Reorder facilitation',
        'Price and lead time negotiation support',
        'New product development assistance',
      ],
    },
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Sourcing Services for Global Buyers</h1>
            <p className="text-xl text-slate-300">
              Comprehensive support from supplier discovery through delivery. We work on your behalf to reduce risk and improve outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card key={idx} className="overflow-hidden">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 bg-slate-50 p-8 flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-teal-600" />
                    </div>
                    <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                    <p className="text-slate-600">{service.desc}</p>
                  </div>
                  <div className="md:col-span-3 p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">What this includes:</h4>
                    <ul className="space-y-3">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Need a Custom Service Package?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We tailor our services to your specific requirements. Tell us about your project and we will propose the right combination of support.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Request a Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Services
