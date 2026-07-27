import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Search, Shield, ClipboardCheck, Factory, Ship, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers in China based on your product requirements, budget, and quality standards.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality management systems, and working conditions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress reports to keep you informed and catch issues before they become costly.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including customs clearance, freight forwarding, and delivery tracking.',
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            End-to-end sourcing support from supplier discovery to delivery at your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
