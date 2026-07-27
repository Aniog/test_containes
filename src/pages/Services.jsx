import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ClipboardCheck, Factory, Truck, FileCheck, Package,
  Shield, Users, CheckCircle, ArrowRight, Clock, DollarSign,
  Globe, Building2, FileText, BarChart3
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    id: 'verification',
    icon: Search,
    title: 'Supplier Verification',
    subtitle: 'Know who you are working with',
    description: 'Before you commit to any order, we conduct thorough verification of potential suppliers. Our verification process protects you from scams, ghost factories, and unreliable partners.',
    features: [
      'Business license verification',
      'Factory实地考察 (on-site visits)',
      'Production capacity assessment',
      'Financial credibility check',
      'Reference verification from existing clients',
      'Export license confirmation',
    ],
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Ensuring products meet your standards',
    description: 'Quality issues discovered after shipment arrive are costly and damaging to your business. Our professional QC inspections catch problems early, at the source.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During-production inspection (DPI)',
      'Initial production inspection (IPI)',
      'Product specification verification',
      'Packaging and labeling checks',
      'Detailed inspection reports with photos',
    ],
    iconBg: 'bg-green-100',
    iconColor: 'text-green-700',
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production Follow-up',
    subtitle: 'Keeping your orders on track',
    description: 'Communication gaps between buyers and factories can cause delays and quality issues. We monitor your production closely and keep you informed at every stage.',
    features: [
      'Regular production progress updates',
      'Sample approval coordination',
      'Material quality monitoring',
      'Production schedule management',
      'Issue escalation and resolution',
      'Documentation management',
    ],
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    subtitle: 'Seamless delivery to your door',
    description: 'International shipping involves complex logistics, customs procedures, and documentation. We coordinate the entire process to ensure smooth, timely delivery.',
    features: [
      'Factory pickup coordination',
      'Export customs clearance',
      'Sea freight and air freight options',
      'Import customs clearance',
      'Last-mile delivery coordination',
      'Shipment tracking and updates',
    ],
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-700',
  },
];

const additionalServices = [
  {
    icon: FileText,
    title: 'Product Development',
    description: 'From concept to production, we help develop new products with Chinese manufacturers.',
  },
  {
    icon: DollarSign,
    title: 'Price Negotiation',
    description: 'Leverage our local knowledge to negotiate competitive pricing with suppliers.',
  },
  {
    icon: Shield,
    title: 'Contract Review',
    description: 'We review and help draft contracts that protect your interests.',
  },
  {
    icon: BarChart3,
    title: 'Market Research',
    description: 'Get insights on product costs, market trends, and supplier landscapes.',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional China Sourcing Services
            </h1>
            <p className="text-xl text-slate-300">
              Comprehensive support for every stage of your China sourcing journey—from finding suppliers to delivering products at your door.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${service.iconBg} rounded-2xl mb-6`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{service.title}</h2>
                  <p className="text-lg text-slate-500 mb-4">{service.subtitle}</p>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 ${service.iconColor} flex-shrink-0 mt-0.5`} />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-slate-100 rounded-2xl aspect-video flex items-center justify-center ${
                    index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                >
                  <div
                    className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center"
                    data-strk-bg-id={`service-bg-${service.id}`}
                    data-strk-bg={`[${service.title}] [${service.subtitle}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  >
                    <service.icon className="w-24 h-24 text-slate-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-slate-600">
              Beyond our core offerings, we provide additional support to ensure your China sourcing experience is successful.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-slate-600">
              We combine local expertise with professional standards to deliver exceptional sourcing results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Local Presence',
                description: 'Our team is based in Shenzhen—right in the heart of China\'s manufacturing hub.',
              },
              {
                icon: Users,
                title: 'Bilingual Team',
                description: 'Fluent in English and Mandarin, we bridge communication gaps with suppliers.',
              },
              {
                icon: Shield,
                title: 'Risk Mitigation',
                description: 'Our verification and inspection services protect you from costly mistakes.',
              },
              {
                icon: Clock,
                title: 'Time Savings',
                description: 'Let us handle supplier research, communication, and logistics coordination.',
              },
              {
                icon: DollarSign,
                title: 'Cost Efficiency',
                description: 'Our local knowledge helps negotiate better terms and pricing.',
              },
              {
                icon: Building2,
                title: 'Factory Network',
                description: 'Access to a curated network of verified, reliable manufacturers.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4">
                  <item.icon className="w-7 h-7 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us about your sourcing needs and we'll create a customized plan for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
