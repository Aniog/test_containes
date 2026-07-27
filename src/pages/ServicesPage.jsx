import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Search, Shield, ClipboardCheck, Factory, Ship, FileText, Package, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers in China based on your product requirements, budget, and quality standards. Our team searches through verified supplier databases, attends trade shows, and leverages our local network to find the best match for your needs.',
    features: ['Product-specific supplier matching', 'Multiple supplier options with comparisons', 'Initial communication and quotation collection', 'Supplier capability assessment'],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'We conduct thorough on-site audits to verify that suppliers are legitimate manufacturers with the capacity and quality systems to fulfill your orders. This helps you avoid trading companies posing as factories and unreliable suppliers.',
    features: ['Business license verification', 'Production facility inspection', 'Quality management system review', 'Production capacity assessment', 'Detailed audit report with photos'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our quality inspectors check your products at critical stages to ensure they meet your specifications before they leave the factory. We catch issues early when they are easier and cheaper to fix.',
    features: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection', 'Container loading supervision', 'Detailed inspection reports with photos and measurements'],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'We keep a close eye on your production progress with regular factory visits and status updates. This ensures your order stays on schedule and any issues are addressed immediately.',
    features: ['Regular factory visits', 'Production progress reports', 'Timeline tracking and alerts', 'Issue resolution coordination', 'Real-time communication'],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We handle the entire logistics process from the factory door to your destination, including customs documentation, freight booking, and delivery coordination.',
    features: ['Freight forwarding (sea and air)', 'Customs documentation preparation', 'Cargo consolidation', 'Delivery tracking', 'Destination port coordination'],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description: 'We arrange samples from suppliers, inspect them against your requirements, and coordinate revisions until you are satisfied with the quality before committing to mass production.',
    features: ['Sample request coordination', 'Sample quality evaluation', 'Revision management', 'Sample shipping to your address', 'Final sample approval before production'],
  },
  {
    icon: Package,
    title: 'Order Consolidation',
    description: 'If you source from multiple suppliers, we can consolidate your orders into a single shipment, saving you on shipping costs and simplifying your logistics.',
    features: ['Multi-supplier order management', 'Quality check before consolidation', 'Custom packaging and labeling', 'Single shipment coordination', 'Cost optimization'],
  },
]

export function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-6">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              End-to-End China Sourcing Services
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              From finding the right supplier to delivering products to your door, we provide comprehensive sourcing support tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Every business is different. Tell us your specific requirements and we will create a tailored sourcing plan for you.
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
