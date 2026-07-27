import { useEffect, useRef } from 'react'
import {
  Search, ShieldCheck, ClipboardCheck, Eye, Truck,
  ArrowRight, Boxes, FileCheck, Globe, BarChart3
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '../shared/SectionHeader'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Verification',
    description: 'We identify and vet reliable suppliers across China\'s manufacturing hubs. Every supplier is verified through on-site factory visits, license checks, and reference validation.',
    highlights: ['Factory audits', 'Business license verification', 'Production capability assessment'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our QC team conducts pre-production, in-line, and pre-shipment inspections to catch defects early and ensure your products meet specifications.',
    highlights: ['Pre-production sampling', 'In-line inspections', 'Pre-shipment checks'],
  },
  {
    icon: Eye,
    title: 'Production Follow-up',
    description: 'We monitor your orders on the factory floor from start to finish, tracking timelines, quality milestones, and addressing issues before they become costly delays.',
    highlights: ['Timeline tracking', 'Quality milestone reports', 'Issue resolution'],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'From factory gate to your warehouse door, we coordinate ocean freight, air freight, customs clearance, and last-mile delivery at competitive rates.',
    highlights: ['Ocean & air freight', 'Customs clearance', 'Door-to-door delivery'],
  },
  {
    icon: FileCheck,
    title: 'Customs & Compliance',
    description: 'We handle documentation, certifications, labeling requirements, and regulatory compliance to ensure your goods clear customs smoothly in your destination country.',
    highlights: ['Import/export documentation', 'Product certifications', 'Labeling compliance'],
  },
  {
    icon: Boxes,
    title: 'OEM & Private Label',
    description: 'Want to launch your own brand? We manage OEM manufacturing, custom packaging design, logo printing, and private label production from concept to delivery.',
    highlights: ['Custom manufacturing', 'Packaging design', 'Brand protection'],
  },
]

export default function ServicesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="container-wide mx-auto">
        <SectionHeader
          tag="Our Services"
          title="End-to-End Sourcing Solutions"
          subtitle="From finding the right supplier to delivering products to your door, we manage every step of the China sourcing process."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="card-base card-hover group"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-500 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="heading-card mb-3 text-lg">{service.title}</h3>
                <p className="text-body text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-steel-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
