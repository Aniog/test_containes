import React from 'react'
import { CheckCircle2, Search, ShieldCheck, PackageSearch, Truck, Globe, Zap, BarChart } from 'lucide-react'

const Services = () => {
  const serviceCategories = [
    {
      title: 'Supplier Selection & Sourcing',
      icon: Search,
      features: [
        'Detailed manufacturer background check',
        'Direct factory price negotiation',
        'Supplier benchmarking (comparing 3-5 factories)',
        'Reference check from previous buyers'
      ]
    },
    {
      title: 'Factory Audit & Verification',
      icon: ShieldCheck,
      features: [
        'Legal status & business license verification',
        'ISO & certification authenticity check',
        'Production capacity & R&D evaluation',
        'Working conditions & social compliance audit'
      ]
    },
    {
      title: 'Quality Control Inspections',
      icon: PackageSearch,
      features: [
        'Pre-Production Inspection (PPI)',
        'During Production Inspection (DUPRO)',
        'Final Random Inspection (FRI)',
        'Container Loading Supervision (CLS)'
      ]
    },
    {
      title: 'Logistics & Shipping Support',
      icon: Truck,
      features: [
        'Order consolidation from various suppliers',
        'Export documentation & customs clearance',
        'Amazon FBA shipping coordination',
        'Duty and tax evaluation'
      ]
    }
  ]

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Our Sourcing Services</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive suite of tools and services designed to secure your supply chain in China.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {serviceCategories.map((service, i) => (
              <div key={i} className="flex flex-col">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <ul className="space-y-4 flex-grow">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3 shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Global Brands Choose SSourcing China</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { title: 'Full Transparency', desc: 'No hidden commissions. We provide direct factory contact info for every project.', icon: Globe },
              { title: 'Local Presence', desc: 'Based in Shenzhen, we are physically present at factories within hours.', icon: Zap },
              { title: 'Result Driven', desc: 'Success measured by your profit margins and quality consistency.', icon: BarChart }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mb-6 border border-blue-500/30">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
EOF && cat > src/pages/HowItWorks.jsx <<EOF
import React from 'react'
import { ArrowRight, Users, SearchIcon, Truck, Package, MessageSquareText } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      title: 'Step 1: Free Consultation',
      icon: MessageSquareText,
      desc: 'Send us your product requirements, target price, and estimated quantities. We review feasibility and provide initial feedback.'
    },
    {
      title: 'Step 2: Supplier Matching',
      icon: Users,
      desc: 'We scan our network and the wider market to shortlist 3-5 verified suppliers. We collect detailed quotes and factory profiles.'
    },
    {
      title: 'Step 3: Quality Verification',
      icon: SearchIcon,
      desc: 'We arrange samples, conduct virtual or in-person audits, and ensure the supplier meets your technical and compliance standards.'
    },
    {
      title: 'Step 4: Production Oversight',
      icon: Package,
      desc: 'Once you place the order, we monitor production timelines, quality milestones, and handle mid-production inspections.'
    },
    {
      title: 'Step 5: Inspection & Shipping',
      icon: Truck,
      desc: 'A final random inspection (FRI) is performed before shipping. We coordinate booking, document prep, and global logistics.'
    }
  ]

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Our Proven Sourcing Method</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            We follow a systematic process that minimizes risk and maximizes efficiency for every shipment.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 relative">
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block" />
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2" />
                <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center -translate-x-0 md:-translate-x-1/2 z-10 border-4 border-white shadow-lg">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className={`md:w-1/2 pl-24 md:pl-0 ${i % 2 === 0 ? 'md:pr-24 md:text-right text-left pl-24' : 'md:pl-24 text-left'}`}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your First Sourcing Project?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Tell us what you are looking for, and we will find the best factory for you.
            </p>
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition">
              Launch My Inquiry
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
