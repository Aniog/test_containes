import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Factory, 
  ShieldCheck, 
  PackageCheck, 
  Ship, 
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  FileText,
  Truck,
  ClipboardCheck
} from 'lucide-react';

const HowItWorks = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Share Your Requirements',
      description: 'Tell us about your product, quantity, budget, and quality expectations. We\'ll ask the right questions to understand your needs and help you define clear specifications.',
      details: [
        'Product specifications and requirements',
        'Estimated order quantities',
        'Budget and timeline expectations',
        'Quality standards and certifications needed',
        'Shipping and delivery requirements',
      ],
      icon: FileText,
    },
    {
      step: '02',
      title: 'We Source & Verify Suppliers',
      description: 'Our team finds suitable suppliers, verifies their credentials, and conducts factory audits to ensure reliability and capability.',
      details: [
        'Supplier database search and matching',
        'Business license and credential verification',
        'Factory capability assessment',
        'On-site factory audits',
        'Reference checks and due diligence',
      ],
      icon: Search,
    },
    {
      step: '03',
      title: 'Samples & Negotiation',
      description: 'We coordinate sample production, facilitate quality checks, and negotiate pricing and terms on your behalf.',
      details: [
        'Sample request coordination',
        'Sample quality evaluation',
        'Price and term negotiation',
        'Contract and agreement finalization',
        'Payment terms setup',
      ],
      icon: Users,
    },
    {
      step: '04',
      title: 'Production & Quality Control',
      description: 'We monitor production, conduct inspections at key stages, and ensure your products meet specifications.',
      details: [
        'Production timeline management',
        'Pre-production inspections',
        'During-production inspections',
        'Pre-shipment inspections',
        'Detailed inspection reports',
      ],
      icon: ShieldCheck,
    },
    {
      step: '05',
      title: 'Shipping & Delivery',
      description: 'We handle logistics, documentation, and customs clearance to get your products delivered safely and on time.',
      details: [
        'Freight forwarding arrangement',
        'Customs documentation preparation',
        'Insurance coordination',
        'Port handling and loading supervision',
        'Final delivery tracking',
      ],
      icon: Ship,
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Focus on your business while we handle the complexities of China sourcing. We manage supplier communication, inspections, and logistics.',
    },
    {
      icon: ShieldCheck,
      title: 'Reduce Risk',
      description: 'Our verification and QC processes minimize the risk of fraud, quality issues, and delivery delays.',
    },
    {
      icon: Factory,
      title: 'Better Prices',
      description: 'Our local presence and negotiation expertise help you get competitive pricing from reliable suppliers.',
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Benefit from our team\'s deep understanding of Chinese business culture, regulations, and supplier landscape.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              A simple, transparent process designed to make sourcing from China easy, reliable, and cost-effective.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Your Sourcing Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our 5-Step Sourcing Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial requirements to final delivery, we guide you through every step of the sourcing journey.
            </p>
          </div>
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <step.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600 text-lg mb-6">{step.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Partnering with SSourcing China gives you a competitive advantage in your sourcing strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Example */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-xl text-slate-600">
              Here's what you can expect for a standard sourcing project.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div>
                  <h3 className="font-semibold text-slate-900">Supplier Identification</h3>
                  <p className="text-slate-600 text-sm">Finding and vetting potential suppliers</p>
                </div>
                <span className="text-blue-600 font-semibold">1-2 weeks</span>
              </div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div>
                  <h3 className="font-semibold text-slate-900">Sample Production & Approval</h3>
                  <p className="text-slate-600 text-sm">Sample making, shipping, and evaluation</p>
                </div>
                <span className="text-blue-600 font-semibold">2-4 weeks</span>
              </div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div>
                  <h3 className="font-semibold text-slate-900">Production & QC</h3>
                  <p className="text-slate-600 text-sm">Mass production with quality inspections</p>
                </div>
                <span className="text-blue-600 font-semibold">4-8 weeks</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">Shipping & Delivery</h3>
                  <p className="text-slate-600 text-sm">Logistics, customs, and final delivery</p>
                </div>
                <span className="text-blue-600 font-semibold">2-4 weeks</span>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> Timelines vary based on product complexity, order quantity, and shipping destination. We provide detailed timelines during the initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and let us help you source better from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
