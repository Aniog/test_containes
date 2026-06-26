import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { 
  MessageCircle, Search, FileCheck, Factory, Truck, 
  CheckCircle, Clock, Users 
} from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Initial Discussion',
      duration: '1-3 days',
      description: 'We discuss your product requirements, target specifications, quantity, timeline, and budget. This helps us understand what success looks like for your project.',
      activities: [
        'Product specifications and requirements review',
        'Quantity, timeline, and budget discussion',
        'Quality standards and certification needs',
        'Target market and compliance considerations',
      ],
    },
    {
      number: '02',
      icon: Search,
      title: 'Supplier Identification',
      duration: '5-10 business days',
      description: 'We search our network and conduct initial screening to identify suppliers that match your criteria. We present a shortlist with relevant details for your review.',
      activities: [
        'Database and network search for matching manufacturers',
        'Initial capability and capacity screening',
        'Preliminary pricing and lead time assessment',
        'Shortlist presentation with comparison summary',
      ],
    },
    {
      number: '03',
      icon: FileCheck,
      title: 'Verification & Sampling',
      duration: '2-4 weeks',
      description: 'We verify shortlisted factories through on-site visits or detailed remote assessment. We coordinate sample production and delivery for your evaluation.',
      activities: [
        'Factory audit and verification',
        'Sample order coordination and tracking',
        'Sample quality review and feedback',
        'Supplier selection and negotiation support',
      ],
    },
    {
      number: '04',
      icon: Factory,
      title: 'Production Coordination',
      duration: 'Varies by product',
      description: 'Once production begins, we monitor progress, verify materials, and conduct inspections at key stages. We keep you informed and address issues as they arise.',
      activities: [
        'Production schedule confirmation and tracking',
        'Material and component verification',
        'In-process quality checks',
        'Regular progress reporting with photos',
      ],
    },
    {
      number: '05',
      icon: Truck,
      title: 'Quality Inspection',
      duration: '3-7 business days',
      description: 'Before shipment, we conduct a pre-shipment inspection to verify that finished goods meet your specifications. We provide a detailed report with findings and recommendations.',
      activities: [
        'Pre-shipment inspection per agreed AQL',
        'Quantity verification and packaging check',
        'Detailed inspection report with photos',
        'Approval or rework coordination if needed',
      ],
    },
    {
      number: '06',
      icon: Truck,
      title: 'Shipping & Delivery',
      duration: 'Varies by destination',
      description: 'We coordinate freight booking, prepare export documentation, and track your shipment from factory to destination. We support customs clearance as needed.',
      activities: [
        'Freight forwarder booking and coordination',
        'Commercial invoice and packing list preparation',
        'Bill of lading and certificate coordination',
        'Shipment tracking and delivery confirmation',
      ],
    },
  ]

  const whatYouReceive = [
    {
      icon: CheckCircle,
      title: 'Clear Documentation',
      description: 'Written reports at each stage including supplier profiles, inspection findings, and progress updates.',
    },
    {
      icon: Clock,
      title: 'Timeline Visibility',
      description: 'Realistic schedules with milestone dates. We flag delays early so you can plan accordingly.',
    },
    {
      icon: Users,
      title: 'Single Point of Contact',
      description: 'One dedicated coordinator who knows your project and handles communication with all parties.',
    },
    {
      icon: FileCheck,
      title: 'Issue Resolution',
      description: 'When problems arise, we identify options and recommend practical next steps based on your priorities.',
    },
  ]

  const engagementOptions = [
    {
      title: 'Full Project Support',
      description: 'We manage the entire process from supplier search through delivery. You receive regular updates and approve key decisions.',
    },
    {
      title: 'Verification Only',
      description: 'You have identified suppliers. We verify factories, coordinate samples, and provide assessment reports.',
    },
    {
      title: 'QC & Inspection',
      description: 'Production is underway. We conduct inspections at agreed stages and report findings with recommendations.',
    },
    {
      title: 'Logistics Coordination',
      description: 'Goods are ready. We handle freight booking, documentation, and track delivery to your warehouse.',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0A2540] text-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-[36px] font-semibold mb-4">How It Works</h1>
            <p className="text-lg text-[#94A3B8]">
              A structured process that keeps you informed and reduces sourcing risk. 
              We adapt our involvement based on your needs and existing supplier relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-6 md:gap-8">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 md:block">
                    <div className="text-[#2563EB] text-2xl font-semibold">{step.number}</div>
                    <div className="md:mt-2">
                      <step.icon className="w-8 h-8 text-[#0A2540]" />
                    </div>
                  </div>
                  <div className="mt-2 md:mt-4">
                    <div className="text-sm text-[#64748B]">{step.duration}</div>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl font-semibold text-[#0A2540] mb-2">{step.title}</h3>
                  <p className="text-[#475569] mb-4">{step.description}</p>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
                    {step.activities.map((activity, i) => (
                      <div key={i} className="text-sm text-[#475569] flex items-start gap-2 py-0.5">
                        <CheckCircle className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-16 md:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-[#0A2540] mb-3">What You Receive</h2>
            <p className="text-[#475569]">Consistent communication and documentation throughout the project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatYouReceive.map((item, index) => (
              <div key={index} className="p-6 border border-[#E2E8F0] rounded-xl">
                <item.icon className="w-6 h-6 text-[#2563EB] mb-4" />
                <h3 className="font-semibold text-[#0A2540] mb-2">{item.title}</h3>
                <p className="text-sm text-[#475569]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-[#0A2540] mb-3">Flexible Engagement</h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              We can support your project at any stage. Choose the level of involvement that fits your situation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {engagementOptions.map((option, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#0A2540] mb-2">{option.title}</h3>
                  <p className="text-sm text-[#475569]">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Note */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-semibold text-[#0A2540] mb-3">Timeline Considerations</h2>
            <p className="text-sm text-[#475569] mb-4">
              Actual timelines depend on product complexity, supplier location, and production schedule. 
              We provide realistic estimates after initial discussion and adjust as the project progresses.
            </p>
            <p className="text-sm text-[#475569]">
              Sample production, shipping, and customs clearance are common variables that affect total lead time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-[#0A2540] mb-3">Ready to begin?</h2>
          <p className="text-[#475569] mb-6">Start with a discussion about your sourcing needs.</p>
          <Button asChild size="lg">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
