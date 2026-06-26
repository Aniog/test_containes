import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { CheckCircle, Users, Award, Clock } from 'lucide-react'

const Home = () => {
  const services = [
    { title: 'Supplier Sourcing', desc: 'Identify and connect with qualified suppliers matching your requirements.' },
    { title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy, capacity, and compliance.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure product standards.' },
    { title: 'Production Monitoring', desc: 'Regular updates and oversight throughout the manufacturing process.' },
    { title: 'Shipping Coordination', desc: 'Logistics management from factory to your destination port.' }
  ]

  const process = [
    { step: '01', title: 'Requirement Analysis', desc: 'We discuss your product specifications, target price, and timeline.' },
    { step: '02', title: 'Supplier Identification', desc: 'We shortlist 3-5 qualified suppliers based on your criteria.' },
    { step: '03', title: 'Verification & Sampling', desc: 'Factory audits and sample evaluation before production.' },
    { step: '04', title: 'Production & QC', desc: 'Ongoing monitoring with quality checkpoints at key stages.' },
    { step: '05', title: 'Shipping & Delivery', desc: 'Documentation, booking, and coordination until arrival.' }
  ]

  const products = [
    'Consumer Electronics', 'Home & Kitchen', 'Textiles & Apparel',
    'Industrial Components', 'Packaging Materials', 'Furniture & Fixtures'
  ]

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capacity',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and documentation requirements'
  ]

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '98% On-Time Delivery' },
    { icon: CheckCircle, label: '2,000+ Factories Audited' },
    { icon: Clock, label: '12+ Years Experience' }
  ]

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing time by 40% while maintaining quality standards across 12 product categories.' },
    { client: 'US Hardware Distributor', result: 'Identified 3 new suppliers resulting in 22% cost reduction on key product lines.' },
    { client: 'Australian Importer', result: 'Zero quality claims over 18 months through systematic inspection protocols.' }
  ]

  const faqs = [
    { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits covering business licenses, production capacity, quality systems, and compliance documentation.' },
    { q: 'What is your inspection process?', a: 'We perform pre-production, in-process, and pre-shipment inspections using AQL standards with detailed photo and video reports.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlist is typically delivered within 5-7 business days. Full verification and sampling takes 3-4 weeks.' },
    { q: 'Do you charge for initial consultations?', a: 'Initial consultations are complimentary. We provide a detailed proposal outlining scope and fees before any paid engagement.' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0F172A] text-white pt-20 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-[#94A3B8] mb-8">
              Professional sourcing support from supplier identification through delivery. 
              Clear communication, documented processes, and consistent results.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="accent">Get a Free Sourcing Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="border-b border-[#E2E8F0] py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4">
                <point.icon className="w-8 h-8 text-[#1E40AF]" />
                <span className="font-medium text-[#334155]">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Services</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              End-to-end sourcing support tailored to your requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card">
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-[#64748B]">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="secondary">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Sourcing Process</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              A structured approach that keeps you informed at every stage.
            </p>
          </div>
          <div className="space-y-6">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start border-l-4 border-[#1E40AF] pl-6">
                <div className="text-3xl font-bold text-[#1E40AF] w-16">{item.step}</div>
                <div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-[#64748B]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/how-it-works">
              <Button variant="secondary">Learn More About Our Process</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Products We Source</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Experience across diverse product categories and industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div key={index} className="card text-center">
                <p className="font-medium">{product}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products">
              <Button variant="secondary">View Full Product Categories</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Problems We Solve</h2>
              <p className="text-[#64748B] mb-8">
                Common challenges in China sourcing that we address through systematic processes.
              </p>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-[#059669] mt-1 flex-shrink-0" />
                  <p className="text-[#334155]">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Case Studies</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Results from recent client engagements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <p className="font-semibold mb-4 text-[#1E40AF]">{study.client}</p>
                <p className="text-[#64748B]">{study.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies">
              <Button variant="secondary">View All Case Studies</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#E2E8F0] pb-6">
                <h3 className="text-lg mb-2">{faq.q}</h3>
                <p className="text-[#64748B]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#0F172A] text-white">
        <div className="container text-center">
          <h2 className="text-4xl mb-4 text-white">Ready to Start Your Sourcing Project?</h2>
          <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
            Contact us for a complimentary consultation and detailed proposal.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="accent">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home