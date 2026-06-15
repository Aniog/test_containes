import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
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
EOF && cat > src/pages/CaseStudies.jsx <<EOF
import React from 'react'

const CaseStudies = () => {
  const cases = [
    {
      title: 'E-commerce Brand Expansion',
      challenge: 'Client needed to reduce production costs for their best-selling electronic accessories while maintaining premium quality.',
      outcome: 'Found a Tier-1 factory in Dongguan, reduced unit cost by 22%, and improved packaging durability for international shipping.',
      imgId: 'case-electronics'
    },
    {
      title: 'Global Retailer QC Overhaul',
      challenge: 'A home decor retailer was experiencing a 15% defect rate with their previous supplier.',
      outcome: 'Implemented a strict mid-production and final inspection protocol. Defect rate dropped to less than 1.5% within 3 months.',
      imgId: 'case-decor'
    }
  ]

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Case Studies</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Real stories of how we help our clients succeed in China.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {cases.map((cs, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 w-full">
                <img 
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${'case-' + i + '-title'}] business success sourcing china`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="rounded-3xl shadow-2xl object-cover w-full h-80"
                  alt={cs.title}
                />
              </div>
              <div className="lg:w-1/2">
                <h3 id={`case-${i}-title`} className="text-3xl font-bold text-slate-900 mb-6">{cs.title}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-blue-600 mb-2 uppercase text-xs tracking-widest">The Challenge</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-600 mb-2 uppercase text-xs tracking-widest">The Result</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{cs.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
EOF && cat > src/pages/Contact.jsx <<EOF
import React from 'react'
import InquiryForm from '../components/home/InquiryForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Contact Us</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Get in touch for a direct consultation or a free sourcing project evaluation.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Direct Contact</h2>
            <div className="space-y-8">
              {[
                { title: 'Email', val: 'contact@ssourcingchina.com', icon: Mail },
                { title: 'Phone/WhatsApp', val: '+86 755 8888 8888', icon: Phone },
                { title: 'Office', val: 'R1205, Modern Plaza, Futian District, Shenzhen, China', icon: MapPin },
                { title: 'Business Hours', val: 'Mon - Fri, 9:00 - 18:00 (GMT+8)', icon: Clock }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <item.icon className="h-6 w-6 text-blue-600 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Visit Our Office</h3>
              <p className="text-blue-800/80 text-sm leading-relaxed mb-6">
                We are located in the heart of Shenzhen, the world's electronics capital. Feel free to schedule a visit.
              </p>
              <div className="h-40 bg-slate-200 rounded-lg overflow-hidden grayscale">
                 <img 
                    data-strk-img-id="office-map"
                    data-strk-img="shenzhen city map futian district"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                    alt="Shenzhen Map"
                  />
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 bg-white border border-slate-100 shadow-xl rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send an Inquiry</h2>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
