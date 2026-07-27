import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Factory, Search, FileCheck, PackageCheck, Anchor, CircleDollarSign } from 'lucide-react'

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const services = [
    {
      id: 'supplier-finding',
      title: 'Supplier Search & Verification',
      description: 'We find the most suitable factories for your product, negotiate prices, and conduct thorough background checks.',
      icon: Search,
      details: [
        'Identify 3-5 qualified manufacturers',
        'Verify business licenses and export capabilities',
        'Physical factory audits (optional)',
        'Price and MOQ negotiation'
      ]
    },
    {
      id: 'sample-prototyping',
      title: 'Sample Development',
      description: 'We help you develop and finalize product samples before committing to a large bulk order.',
      icon: Factory,
      details: [
        'Communicate specifications to the factory',
        'Consolidate samples from multiple suppliers',
        'Conduct basic quality checks on samples',
        'Forward samples to your country'
      ]
    },
    {
      id: 'order-followup',
      title: 'Production Follow-up',
      description: 'We act as your local project manager, ensuring production stays on schedule and issues are resolved quickly.',
      icon: FileCheck,
      details: [
        'Draft clear purchase contracts in Chinese',
        'Monitor production milestones',
        'Solve communication gaps or technical issues',
        'Provide regular photo/video updates'
      ]
    },
    {
      id: 'quality-control',
      title: 'Quality Inspection',
      description: 'A dedicated team checks your goods based on your exact standards before the final payment is made.',
      icon: PackageCheck,
      details: [
        'Pre-Shipment Inspection (PSI)',
        'During Production Inspection (DUPRO)',
        'Defect sorting and rework negotiation',
        'Detailed inspection reports with photos'
      ]
    },
    {
      id: 'shipping-logistics',
      title: 'Shipping & Logistics',
      description: 'We arrange the most cost-effective and reliable shipping method from China to your final destination.',
      icon: Anchor,
      details: [
        'Sea freight (FCL/LCL) and Air freight',
        'Amazon FBA prep and shipping',
        'Export customs clearance in China',
        'Warehouse consolidation'
      ]
    },
    {
      id: 'payment-handling',
      title: 'Secure Payments',
      description: 'Protect your funds by paying through us. We release payments to factories only when milestones are met.',
      icon: CircleDollarSign,
      details: [
        'Currency conversion (USD to RMB)',
        'Escrow-like payment structure',
        'Pay multiple suppliers with one transfer',
        'Avoid high bank fees for small transfers'
      ]
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p id="services-page-subtitle" className="text-xl text-slate-300">
            A complete end-to-end sourcing solution tailored to your business needs. 
            Pick the services you need, or let us handle everything from A to Z.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle id={`svc-title-${service.id}`} className="text-xl">{service.title}</CardTitle>
                  <CardDescription id={`svc-desc-${service.id}`} className="text-base mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-blue-500 font-bold mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Model Section */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 id="pricing-title" className="text-3xl font-bold mb-4">Transparent Pricing Models</h2>
            <p className="text-lg text-slate-600">We offer flexible pricing structures depending on your order volume and specific needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-xl p-8 bg-slate-50">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Commission Based</h3>
              <p className="text-slate-600 mb-6">Ideal for most buyers. We charge a flat percentage based on the total order value. No hidden fees.</p>
              <div className="text-4xl font-bold text-blue-600 mb-6">5% - 10% <span className="text-lg text-slate-500 font-normal">of order value</span></div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2"><FileCheck className="w-5 h-5 text-blue-500" /> Includes full A-Z service</li>
                <li className="flex items-center gap-2"><FileCheck className="w-5 h-5 text-blue-500" /> Free supplier sourcing</li>
                <li className="flex items-center gap-2"><FileCheck className="w-5 h-5 text-blue-500" /> Standard quality inspection included</li>
              </ul>
            </div>
            
            <div className="border rounded-xl p-8 bg-slate-50">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Service by Service</h3>
              <p className="text-slate-600 mb-6">Ideal for experienced buyers who only need specific help, like a one-time factory audit or quality inspection.</p>
              <div className="text-4xl font-bold text-blue-600 mb-6">Fixed <span className="text-lg text-slate-500 font-normal">rates per task</span></div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2"><FileCheck className="w-5 h-5 text-blue-500" /> Factory Audit: from $199</li>
                <li className="flex items-center gap-2"><FileCheck className="w-5 h-5 text-blue-500" /> Quality Inspection: from $149</li>
                <li className="flex items-center gap-2"><FileCheck className="w-5 h-5 text-blue-500" /> Sample Consolidation: from $49</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded CTA */}
      <section className="py-20 bg-blue-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Contact us for a free consultation. Tell us about your project, and we'll recommend the best approach.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6" asChild>
            <Link to="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}