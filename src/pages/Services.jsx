import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import ServiceCard from '@/components/sections/ServiceCard'
import { Search, ShieldCheck, ClipboardCheck, Factory, Truck, FileText, Users, Award } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Supplier Sourcing",
      description: "We identify and qualify manufacturers that match your product specifications, quality standards, and volume requirements.",
      details: "We maintain a database of over 500 audited factories across electronics, consumer goods, industrial equipment, textiles, and more. For each project, we conduct targeted searches based on your technical requirements, target price, and production volume. We present 3-5 pre-screened options with preliminary pricing, lead times, and capability summaries."
    },
    {
      icon: ShieldCheck,
      title: "Factory Verification",
      description: "On-site audits to confirm legitimacy, production capacity, quality systems, and compliance with international standards.",
      details: "Our verification includes: business license and legal status review, facility inspection covering production lines and equipment, quality management system evaluation, incoming material and finished goods inspection processes, workforce assessment, and reference checks with existing clients. We provide a written audit report with photographs and findings."
    },
    {
      icon: ClipboardCheck,
      title: "Quality Inspection",
      description: "Pre-shipment, in-process, and pre-production inspections to ensure products meet your specifications before payment and shipment.",
      details: "We follow ANSI/ASQ Z1.4 (AQL) sampling standards and can adapt to your specific acceptance criteria. Inspections include: visual and dimensional checks, functional testing, packaging and labeling verification, and documentation review. You receive a detailed report with photos, measurements, and pass/fail status within 24 hours of inspection."
    },
    {
      icon: Factory,
      title: "Production Monitoring",
      description: "Regular updates and oversight during manufacturing to track progress, identify issues early, and maintain schedule adherence.",
      details: "We establish production milestones at order confirmation and conduct scheduled check-ins. Monitoring includes: raw material arrival verification, production start confirmation, mid-production progress reports with photos, and pre-shipment readiness assessment. We flag potential delays early and work with the factory to address issues."
    },
    {
      icon: Truck,
      title: "Shipping Coordination",
      description: "End-to-end logistics support including freight booking, documentation, customs clearance guidance, and delivery tracking.",
      details: "We coordinate with established freight forwarders for sea, air, and express shipments. Services include: freight quote comparison, booking and scheduling, commercial invoice and packing list review, bill of lading verification, and shipment tracking until delivery. We support FOB, CIF, and DDP terms."
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Assistance with export documentation, compliance certificates, and record-keeping for your sourcing projects.",
      details: "We help ensure required documents are complete and accurate. This includes reviewing commercial documents, coordinating certificates of origin, and advising on common compliance requirements for your destination market. We do not provide legal advice but can connect you with specialists when needed."
    },
  ]

  const additionalCapabilities = [
    { icon: Users, title: "Multilingual Communication", text: "Our team communicates fluently in English and Mandarin. We bridge language and cultural gaps that often cause misunderstandings between buyers and factories." },
    { icon: Award, title: "Compliance Guidance", text: "We help identify common regulatory requirements for products entering the US, EU, Australia, and other markets. We coordinate with third-party testing labs when certifications are required." },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="uppercase tracking-[2px] text-xs text-slate-400 mb-3">WHAT WE OFFER</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Services</h1>
          <p className="max-w-2xl text-lg text-slate-300">We provide end-to-end support for buyers sourcing from China, from initial supplier identification through delivery.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>

      <div className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">Additional Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalCapabilities.map((cap, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                  <cap.icon className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-medium mb-1">{cap.title}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{cap.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold tracking-tight mb-3">Ready to discuss your sourcing project?</h2>
        <p className="text-slate-600 mb-6">We provide project-based quotations tailored to your requirements.</p>
        <Button asChild size="lg">
          <Link to="/contact">Get a Free Sourcing Quote</Link>
        </Button>
      </div>

      <Footer />
    </div>
  )
}

export default Services