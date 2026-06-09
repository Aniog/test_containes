import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import InquiryForm from '@/components/home/InquiryForm'
const services = [
  {
    id: 'sourcing',
    title: 'Product Sourcing',
    description: 'We find the best-matched suppliers for your products. We don’t just use Alibaba; we use our local network, trade shows, and wholesale markets.',
    features: ['Custom supplier search', 'Price negotiation', 'Sampling coordination', 'Bilingual communication']
  },
  {
    id: 'verification',
    title: 'Supplier Verification & Audit',
    description: 'Ensure you are dealing with a real factory, not a middleman or a scammer. We perform detailed audits on-site.',
    features: ['Business license check', 'Production capacity audit', 'Quality management system check', 'Social compliance audit']
  },
  {
    id: 'qc',
    title: 'Quality Inspection',
    description: 'We act as your eyes in the factory. We inspect your goods before they leave the factory to ensure they meet your standards.',
    features: ['Pre-Shipment Inspection (PSI)', 'During Production Inspection (DPI)', 'Container Loading Supervision (CLS)', 'Defect sorting']
  },
  {
    id: 'logistics',
    title: 'Logistics & Shipping',
    description: 'Simplify your shipping. We consolidate orders from different suppliers and find the best shipping routes.',
    features: ['FBA shipping specialists', 'Sea/Air/Rail freight', 'Export documentation', 'Local warehousing']
  }
]
export default function Services() {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Our Sourcing Services</h1>
        <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">Comprehensive solutions for global businesses sourcing from China.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} id={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-slate-800 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  data-strk-img-id={`service-img-${service.id}`}
                  data-strk-img={`${service.title} professional China factory inspection logistics manager`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <InquiryForm />
    </div>
  )
}
EOF && cat > src/pages/Contact.jsx <<EOF
import React from 'react'
import InquiryForm from '@/components/home/InquiryForm'
import { Mail, Phone, MapPin } from 'lucide-react'
export default function Contact() {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Contact Us</h1>
        <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">Get in touch with our sourcing experts for a free consultation.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          <div className="p-8 bg-secondary rounded-2xl flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-600 text-sm">General: info@ssourcingchina.com</p>
            <p className="text-slate-600 text-sm">Sales: sales@ssourcingchina.com</p>
          </div>
          <div className="p-8 bg-secondary rounded-2xl flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
            <p className="text-slate-600 text-sm">International: +86 123 4567 8901</p>
            <p className="text-slate-600 text-sm">WeChat: SSourcingChina_Official</p>
          </div>
          <div className="p-8 bg-secondary rounded-2xl flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Visit Our Office</h3>
            <p className="text-slate-600 text-sm text-center">Level 15, Global Trade Center,<br />Guangzhou, Guangdong, China</p>
          </div>
        </div>
      </div>
      <InquiryForm />
    </div>
  )
}
