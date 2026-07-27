import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, FileText, Search, ClipboardCheck, Package, Ship, CheckCircle, MessageSquare, DollarSign } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Tell us what you need — product details, quantity, target price, quality standards, and timeline. The more details you provide, the more accurate our sourcing plan will be.',
    details: [
      'Product specifications and drawings',
      'Target quantity and budget range',
      'Quality standards and certifications needed',
      'Preferred timeline and delivery date',
    ],
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Sourcing & Verification',
    description: 'We search our network and databases to find qualified suppliers, then verify their credentials through on-site audits and document checks.',
    details: [
      'Identify 3-5 qualified suppliers',
      'Verify business licenses and certifications',
      'Conduct on-site factory audits',
      'Assess production capacity and quality systems',
    ],
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Quotation Comparison & Sampling',
    description: 'We collect quotations from verified suppliers, compare them on price, quality, and capability, then arrange samples for your review.',
    details: [
      'Collect and compare supplier quotations',
      'Provide detailed comparison report',
      'Arrange samples from top candidates',
      'Evaluate samples against your requirements',
    ],
  },
  {
    icon: MessageSquare,
    step: '04',
    title: 'Supplier Selection & Order Placement',
    description: 'Based on your feedback, we help you select the best supplier and negotiate terms. We then place the order and confirm all specifications.',
    details: [
      'Negotiate pricing and payment terms',
      'Draft and review purchase agreements',
      'Confirm all product specifications',
      'Place order with selected supplier',
    ],
  },
  {
    icon: Package,
    step: '05',
    title: 'Production Monitoring & Quality Control',
    description: 'We monitor production progress with regular factory visits and conduct quality inspections at key stages to ensure everything meets your standards.',
    details: [
      'Regular production progress updates',
      'Pre-production material inspection',
      'During-production quality checks',
      'Pre-shipment final inspection',
    ],
  },
  {
    icon: Ship,
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We handle all logistics — from booking freight to preparing customs documents — and coordinate delivery to your destination.',
    details: [
      'Freight booking (sea or air)',
      'Customs documentation preparation',
      'Cargo consolidation if needed',
      'Delivery tracking and coordination',
    ],
  },
]

export function HowItWorksPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-6">Our Process</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              How Our Sourcing Process Works
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              A transparent, step-by-step process designed to minimize risk, ensure quality, and deliver value at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 lg:gap-8">
                <div className="hidden sm:flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-slate-200 mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="sm:hidden h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Step {step.step}</span>
                      <h2 className="text-xl lg:text-2xl font-bold text-slate-900">{step.title}</h2>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-slate-200 text-center">
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-blue-700 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">Transparent Pricing</h3>
                <p className="text-sm text-slate-600">Clear quotes with no hidden fees at any stage.</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 text-center">
              <CardContent className="p-6">
                <MessageSquare className="h-8 w-8 text-blue-700 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">Regular Updates</h3>
                <p className="text-sm text-slate-600">Stay informed with progress reports at every step.</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 text-center">
              <CardContent className="p-6">
                <ClipboardCheck className="h-8 w-8 text-blue-700 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">Quality First</h3>
                <p className="text-sm text-slate-600">Inspections at every critical production stage.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Submit your product requirements and we will get back to you within 24 hours with a free sourcing plan.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
            <Link to="/contact">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
