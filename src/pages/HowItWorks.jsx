import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { 
  FileText, Search, Users, Package, ClipboardCheck, 
  Truck, CheckCircle, ArrowRight, Clock, MessageSquare,
  Phone, Mail, MessageCircle
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    num: '01',
    title: 'Submit Your Inquiry',
    desc: 'Fill out our inquiry form with details about what you need: product type, quantity, specifications, budget range, and timeline.',
    details: [
      'Product description and specifications',
      'Target quantity and price range',
      'Required delivery timeline',
      'Quality standards and requirements',
      'Any existing supplier relationships',
    ],
    image: 'business meeting inquiry discussion'
  },
  {
    num: '02',
    title: 'Supplier Matching',
    desc: 'Based on your requirements, we identify and pre-screen 3-5 suitable factories. We verify each supplier before presenting them to you.',
    details: [
      'Factory verification visits',
      'Production capacity assessment',
      'Quality systems evaluation',
      'Business license confirmation',
      'Detailed supplier comparison reports',
    ],
    image: 'factory manufacturing facility'
  },
  {
    num: '03',
    title: 'Sample Review',
    desc: 'You receive samples from shortlisted suppliers. We help coordinate shipping and provide feedback on sample quality.',
    details: [
      'Sample coordination and shipping',
      'Quality assessment reports',
      'Price negotiation support',
      'Supplier comparison analysis',
      'Recommendation based on your priorities',
    ],
    image: 'product samples quality inspection'
  },
  {
    num: '04',
    title: 'Production & Quality Control',
    desc: 'Once you select a supplier, we monitor production closely. Our inspectors conduct quality checks at key stages.',
    details: [
      'Production schedule monitoring',
      'Regular factory visit reports',
      'Pre-production inspection',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
    ],
    image: 'manufacturing production monitoring'
  },
  {
    num: '05',
    title: 'Shipping & Delivery',
    desc: 'We coordinate all logistics, from factory pickup to final delivery at your doorstep. We handle documentation and customs.',
    details: [
      'Freight forwarding coordination',
      'Customs documentation preparation',
      'Container loading supervision',
      'Shipment tracking',
      'Delivery confirmation',
    ],
    image: 'container shipping logistics freight'
  },
]

const timeline = [
  { stage: 'Inquiry to Supplier List', duration: '3-7 days', desc: 'Initial supplier identification and verification' },
  { stage: 'Sample Phase', duration: '2-4 weeks', desc: 'Sample shipping, review, and supplier selection' },
  { stage: 'Production', duration: '2-8 weeks', desc: 'Depending on complexity and order quantity' },
  { stage: 'Shipping', duration: '2-6 weeks', desc: 'Sea freight typically 4-6 weeks, air 1-2 weeks' },
]

const contactMethods = [
  { icon: Mail, title: 'Email Us', desc: 'info@ssourcingchina.com', action: 'mailto:info@ssourcingchina.com' },
  { icon: MessageCircle, title: 'WeChat', desc: 'SSourcing_China', action: '#' },
  { icon: Phone, title: 'WhatsApp', desc: '+86 150 1234 5678', action: 'https://wa.me/8615012345678' },
]

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-4">How It Works</span>
            <h1 className="heading-xl mb-6">A Simple, Transparent Sourcing Process</h1>
            <p className="text-lead text-slate-300 mb-8">
              Our streamlined process takes you from initial inquiry to delivered products. At every step, you'll know exactly what's happening and what to expect next.
            </p>
            <Link to="/contact" className="btn-primary bg-cyan-600 text-white hover:bg-cyan-700">
              Start Your Inquiry
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? '' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-cyan-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                      {step.num}
                    </div>
                    <h2 className="heading-md">{step.title}</h2>
                  </div>
                  <p className="text-slate-600 mb-6">{step.desc}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-64 lg:h-80 rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div 
                    className="absolute inset-0"
                    data-strk-bg-id={`howitworks-bg-${i}`}
                    data-strk-bg={`[howitworks-title-${i}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                  <span id={`howitworks-title-${i}`} className="hidden">{step.image}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge mb-4">Timeline</span>
            <h2 className="heading-lg mb-4">What to Expect: Typical Timelines</h2>
            <p className="section-subtitle">
              While every project is different, here's a general guide to what you can expect at each stage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, i) => (
              <div key={i} className="card text-center">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.stage}</h3>
                <div className="text-lg font-bold text-cyan-600 mb-2">{item.duration}</div>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> Timelines are estimates and can vary based on product complexity, quantity, supplier availability, and shipping method. We provide detailed timelines during the inquiry process.
            </p>
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">Stay Informed</span>
              <h2 className="heading-lg mb-4">Clear Communication Throughout</h2>
              <p className="text-slate-600 mb-6">
                You'll never be left wondering what's happening with your order. We provide regular updates and are always available to answer your questions.
              </p>
              <ul className="space-y-4">
                {[
                  'Weekly production progress reports',
                  'Photo updates from factory visits',
                  'Inspection reports with findings',
                  'Real-time shipping tracking',
                  'Direct communication via your preferred channel',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, i) => (
                  <a
                    key={i}
                    href={method.action}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{method.title}</div>
                      <div className="text-sm text-slate-600">{method.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Start Your Sourcing Journey?</h2>
          <p className="text-lead text-cyan-100 mb-8 max-w-2xl mx-auto">
            Submit your inquiry today and receive a customized sourcing plan within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-cyan-700 hover:bg-cyan-50">
              Submit Your Inquiry
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/services" className="btn-outline border-white/30 text-white hover:bg-white/10">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks