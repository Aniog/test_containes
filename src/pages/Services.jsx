import { Link } from 'react-router-dom'
import { Users, Shield, CheckCircle, Clock, Award, Truck, FileCheck, Search } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification & Matching',
      desc: 'We identify and shortlist qualified manufacturers based on your product specifications, quality requirements, and budget parameters.',
      details: ['Product specification analysis', 'Supplier database search', 'Initial capability screening', 'Detailed supplier profiles with pricing']
    },
    {
      icon: Shield,
      title: 'Factory Verification & Audits',
      desc: 'On-site verification of supplier legitimacy, production capacity, quality systems, and financial stability.',
      details: ['Business license verification', 'Production capacity assessment', 'Quality management review', 'Financial due diligence']
    },
    {
      icon: CheckCircle,
      title: 'Quality Control & Inspection',
      desc: 'Comprehensive inspection services at various production stages to ensure products meet your specifications.',
      details: ['Pre-production inspection', 'During-production monitoring', 'Pre-shipment inspection (AQL)', 'Container loading supervision']
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      desc: 'Ongoing oversight of production schedules, milestone tracking, and proactive issue resolution.',
      details: ['Production timeline tracking', 'Weekly progress reports', 'Issue identification & escalation', 'Sample coordination']
    },
    {
      icon: Award,
      title: 'Compliance & Testing Support',
      desc: 'Assistance with product testing, certification requirements, and regulatory compliance documentation.',
      details: ['Testing lab coordination', 'Certification guidance', 'Compliance documentation', 'Regulatory requirement analysis']
    },
    {
      icon: Truck,
      title: 'Logistics Coordination',
      desc: 'Support with freight forwarding, customs documentation, and shipping arrangement coordination.',
      details: ['Freight forwarder introduction', 'Documentation assistance', 'Shipping schedule coordination', 'Customs clearance guidance']
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-semibold text-[#0F2942] mb-4">Our Services</h1>
        <p className="text-xl text-[#64748B]">End-to-end support for sourcing from China, from supplier discovery through delivery.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {services.map((service, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl p-8">
            <service.icon className="w-10 h-10 text-[#3A8A7B] mb-4" />
            <h3 className="text-2xl font-semibold text-[#0F2942] mb-3">{service.title}</h3>
            <p className="text-[#64748B] mb-6">{service.desc}</p>
            <ul className="space-y-2">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#1E293B]">
                  <CheckCircle className="w-4 h-4 text-[#3A8A7B] mt-0.5 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#F8FAFC] rounded-xl p-10 text-center">
        <h2 className="text-2xl font-semibold text-[#0F2942] mb-3">Need a customized service package?</h2>
        <p className="text-[#64748B] mb-6">We tailor our services based on your specific requirements and sourcing volume.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#3A8A7B] text-white font-medium rounded-lg hover:bg-[#2F6F63]">
          Discuss Your Project
        </Link>
      </div>
    </div>
  )
}