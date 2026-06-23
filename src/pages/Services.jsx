import { Shield, Eye, Factory, Truck, CheckCircle, FileText, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'verification',
      icon: Shield,
      title: 'Supplier Verification',
      description: 'Protect your business from supplier scams and fraud with our comprehensive factory verification service.',
      features: [
        'On-site factory visits and audits',
        'Business license verification',
        'Production capacity assessment',
        'Financial stability checks',
        'Customer references verification',
        'Equipment and workforce inspection'
      ],
      whyItMatters: 'China has thousands of suppliers, and not all are legitimate. Our verification ensures you work with real, capable factories.'
    },
    {
      id: 'quality',
      icon: Eye,
      title: 'Quality Control Inspection',
      description: 'Professional quality inspections at any stage of production to ensure your products meet specifications.',
      features: [
        'Pre-shipment inspections (PSI)',
        'During-production inspections (DPI)',
        'Initial production inspections (IPI)',
        'Loading supervision',
        'Product specification compliance',
        'Packaging and labeling checks'
      ],
      whyItMatters: 'Quality issues discovered after shipping are expensive to fix. Our inspections catch problems early.'
    },
    {
      id: 'production',
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular monitoring and updates throughout the production process to keep your order on track.',
      features: [
        'Weekly production progress reports',
        'Factory visit schedules',
        'Quality issue resolution',
        'Timeline management',
        'Production bottleneck identification',
        'Communication between you and factory'
      ],
      whyItMatters: 'Production delays can derail your entire supply chain. We keep fingers on the pulse.'
    },
    {
      id: 'shipping',
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end shipping coordination from factory to your doorstep.',
      features: [
        'Freight forwarding services',
        'Customs clearance assistance',
        'Documentation preparation',
        'Multi-modal shipping (air, sea, land)',
        'Cargo insurance coordination',
        'Door-to-door delivery options'
      ],
      whyItMatters: 'Shipping from China involves complex logistics. We navigate the complexities for you.'
    }
  ];

  const process = [
    { step: '1', title: 'Book Inspection', description: 'Schedule your inspection at least 3 days in advance' },
    { step: '2', title: 'We Visit Factory', description: 'Our inspector visits the factory on scheduled date' },
    { step: '3', title: 'Detailed Report', description: 'Receive comprehensive report within 24 hours' },
    { step: '4', title: 'Make Decision', description: 'Use our findings to make informed decisions' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Sourcing Services
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Comprehensive solutions to help you source from China with confidence. 
            From supplier verification to final delivery.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="font-semibold text-blue-900 mb-2">Why It Matters</h3>
                  <p className="text-gray-700">{service.whyItMatters}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* QC Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our QC Inspections Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A simple 4-step process to ensure your products meet quality standards</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Clock className="w-10 h-10 text-blue-900 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Reports delivered within 24 hours of inspection. Quick responses to your inquiries.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <FileText className="w-10 h-10 text-blue-900 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Detailed Reports</h3>
              <p className="text-gray-600">Comprehensive inspection reports with photos, findings, and recommendations.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Users className="w-10 h-10 text-blue-900 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced inspectors with industry-specific expertise and local knowledge.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;