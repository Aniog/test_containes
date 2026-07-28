import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { CheckCircle, Users, Award, Clock } from 'lucide-react'

const Home = () => {
  const services = [
    { title: 'Supplier Identification', desc: 'Find qualified manufacturers matching your requirements' },
    { title: 'Factory Verification', desc: 'On-site audits and background checks on potential suppliers' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process quality control checks' },
    { title: 'Production Monitoring', desc: 'Track production progress and ensure timelines are met' },
    { title: 'Logistics Coordination', desc: 'Manage shipping, customs, and delivery to your location' },
  ]

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory capabilities and legitimacy',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and customs procedures',
  ]

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '98% Satisfaction Rate' },
    { icon: Clock, label: '10+ Years Experience' },
    { icon: CheckCircle, label: '2,000+ Factories Verified' },
  ]

  return (
    <div>
      <section className="bg-[#0F2942] text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            We help overseas companies source products from China with confidence. Supplier verification, quality control, and logistics coordination included.
          </p>
          <Link to="/contact">
            <Button size="lg">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#0F2942] mb-4">Our Services</h2>
          <p className="text-[#475569] max-w-2xl mx-auto">End-to-end support throughout your sourcing journey</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-[#E2E8F0]">
              <h3 className="font-semibold text-[#0F2942] mb-2">{service.title}</h3>
              <p className="text-[#475569] text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services"><Button variant="outline">View All Services</Button></Link>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0F2942] mb-4">Problems We Solve</h2>
            <p className="text-[#475569]">Common challenges our clients face when sourcing from China</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3 text-[#475569]">
                  <CheckCircle className="text-[#0D9488] mt-1 flex-shrink-0" size={20} />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#0F2942] mb-4">Our Track Record</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-[#E2E8F0] text-center">
              <point.icon className="mx-auto text-[#0D9488] mb-3" size={32} />
              <p className="font-semibold text-[#0F2942]">{point.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0F2942] text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-[#94A3B8] mb-8">Get a customized sourcing plan and supplier recommendations within 48 hours.</p>
          <Link to="/contact">
            <Button size="lg" variant="default">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home