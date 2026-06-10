import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import ServiceCard from '@/components/sections/ServiceCard'
import { 
  Search, Shield, FileCheck, Package, Ship, Users, 
  Award, Clock, Globe, MessageCircle 
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Supplier Sourcing",
      description: "We identify and qualify manufacturers that match your exact product specifications, quality standards, and volume requirements.",
      details: [
        "Product specification analysis",
        "Supplier database research",
        "Initial capability screening",
        "Price benchmarking",
        "Shortlist of 3-5 qualified suppliers"
      ]
    },
    {
      icon: Shield,
      title: "Factory Verification & Audits",
      description: "On-site audits to confirm legitimacy, production capacity, quality systems, and compliance with international standards.",
      details: [
        "Business license & legal verification",
        "Production capacity assessment",
        "Quality management system review",
        "Social compliance & labor practices",
        "Detailed audit report with photos"
      ]
    },
    {
      icon: FileCheck,
      title: "Quality Inspection Services",
      description: "Pre-shipment, during-production, and pre-production inspections to ensure products meet your specifications before they leave China.",
      details: [
        "Pre-production inspection",
        "During-production inspection",
        "Pre-shipment inspection (AQL standard)",
        "Container loading supervision",
        "Detailed inspection reports with photos"
      ]
    },
    {
      icon: Package,
      title: "Production Monitoring",
      description: "Regular progress updates, milestone tracking, and proactive issue resolution throughout the manufacturing process.",
      details: [
        "Production schedule tracking",
        "Weekly progress reports",
        "Photo and video documentation",
        "Issue identification and escalation",
        "Sample coordination and approval"
      ]
    },
    {
      icon: Ship,
      title: "Logistics & Shipping Coordination",
      description: "Freight booking, customs documentation, and end-to-end shipping management to your destination port or warehouse.",
      details: [
        "Freight rate negotiation",
        "Booking and documentation",
        "Customs clearance support",
        "Shipment tracking",
        "Delivery coordination"
      ]
    },
    {
      icon: Users,
      title: "Order Management & Support",
      description: "End-to-end coordination including sampling, contract negotiation, payment terms, and delivery tracking.",
      details: [
        "Sample development coordination",
        "Contract and PO review",
        "Payment term negotiation",
        "Communication in English & Chinese",
        "Single point of contact"
      ]
    }
  ]

  const additionalServices = [
    {
      icon: Award,
      title: "Product Development Support",
      description: "Help with product specifications, material sourcing, and prototype development for new product launches."
    },
    {
      icon: Clock,
      title: "Urgent Sourcing Projects",
      description: "Expedited supplier search and verification for time-sensitive projects with compressed timelines."
    },
    {
      icon: Globe,
      title: "Market Research",
      description: "Competitive pricing analysis, supplier landscape reports, and market entry support for new categories."
    },
    {
      icon: MessageCircle,
      title: "Ongoing Supplier Management",
      description: "Retainer-based support for companies with regular sourcing needs and multiple active orders."
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold tracking-wider text-blue-300 mb-3">OUR SERVICES</div>
            <h1 className="text-white mb-6">Professional China Sourcing Services</h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              From supplier identification to delivery at your warehouse, we manage every step of the sourcing process with transparency and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section container">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold tracking-wider text-accent mb-2">CORE SERVICES</div>
          <h2 id="services-core-title" className="section-heading">What We Deliver</h2>
          <p id="services-core-subtitle" className="section-subheading mx-auto">
            Each service can be engaged individually or as part of a complete end-to-end sourcing engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="b2b-card overflow-hidden">
              <div className="h-36 bg-slate-100 relative">
                <img
                  data-strk-img-id={`services-img-${index}`}
                  data-strk-img={`[services-core-subtitle] [services-core-title] factory audit quality inspection production monitoring`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  details={service.details}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="section-heading">Additional Support</h2>
            <p className="section-subheading mx-auto">
              Specialized services for clients with specific needs or ongoing sourcing programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((svc, index) => {
              const Icon = svc.icon
              return (
                <div key={index} className="b2b-card p-6">
                  <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center mb-4 border border-slate-200">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">{svc.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{svc.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">How We Work With Clients</h2>
            <p className="section-subheading mx-auto">
              Flexible engagement models to match your sourcing volume and internal capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="b2b-card p-6">
              <div className="text-sm font-semibold text-accent mb-2">PROJECT-BASED</div>
              <h3 className="font-semibold text-lg mb-3">Single Order Support</h3>
              <p className="text-sm text-slate-600 mb-4">Ideal for one-time or occasional sourcing needs. We handle the full process from supplier search through delivery for a single order or product line.</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Fixed project fee or percentage</li>
                <li>• Clear deliverables and timeline</li>
                <li>• Full documentation package</li>
              </ul>
            </div>

            <div className="b2b-card p-6">
              <div className="text-sm font-semibold text-accent mb-2">RETAINER</div>
              <h3 className="font-semibold text-lg mb-3">Ongoing Sourcing Partner</h3>
              <p className="text-sm text-slate-600 mb-4">For companies with regular sourcing needs. We act as an extension of your team, managing multiple orders and maintaining supplier relationships.</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Monthly retainer + per-order fees</li>
                <li>• Priority response and capacity</li>
                <li>• Supplier relationship management</li>
              </ul>
            </div>

            <div className="b2b-card p-6">
              <div className="text-sm font-semibold text-accent mb-2">A LA CARTE</div>
              <h3 className="font-semibold text-lg mb-3">Specific Service Only</h3>
              <p className="text-sm text-slate-600 mb-4">If you have existing suppliers or only need help with one part of the process, we can provide targeted support such as inspections or audits only.</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Pay only for what you need</li>
                <li>• Flexible scope</li>
                <li>• Can scale up later</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-slate-50 border-t border-slate-200">
        <div className="container text-center">
          <h2 className="section-heading mb-4">Ready to discuss your sourcing needs?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">Tell us about your project and we'll provide a preliminary assessment and proposal within 24 hours.</p>
          <Link to="/contact">
            <Button variant="primary" size="lg">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
