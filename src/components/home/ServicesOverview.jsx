import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Ship, Settings2, Image } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const services = [
  {
    title: 'Product Sourcing',
    description: 'We identify and vet top manufacturers in China based on your specific requirements and budget.',
    icon: Search,
    href: '/services#sourcing'
  },
  {
    title: 'Supplier Verification',
    description: 'Avoid scammers. Our team visits factories to verify their legitimacy, licenses, and production capacity.',
    icon: ShieldCheck,
    href: '/services#verification'
  },
  {
    title: 'Quality Control',
    description: 'On-site pre-shipment inspections to ensure products meet your quality standards before leaving China.',
    icon: ClipboardCheck,
    href: '/services#qc'
  },
  {
    title: 'Logistics & Shipping',
    description: 'Consolidation, warehousing, and worldwide shipping coordination (Sea, Air, Rail, Express).',
    icon: Ship,
    href: '/services#logistics'
  },
  {
    title: 'OEM/ODM Support',
    description: 'Complete project management for custom product development, from prototyping to mass production.',
    icon: Settings2,
    href: '/services#oem'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Professional product photography, FBA prep, and direct-to-warehouse shipping for Amazon sellers.',
    icon: Image,
    href: '/services#ecommerce'
  }
]

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-title" className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            End-to-End Sourcing Solutions
          </h2>
          <p id="services-subtitle" className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            From the first supplier search to final delivery at your warehouse, we manage the entire process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <CardHeader className="flex flex-col items-center">
                <div className="p-3 bg-primary/10 rounded-lg mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <Button asChild variant="link" size="sm" className="p-0 h-auto">
                  <Link to={service.href}>Learn more →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
