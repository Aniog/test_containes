import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, ClipboardCheck, Truck, Package, FileText,
  CheckCircle, ArrowRight, Factory, Users, Award
} from 'lucide-react';

const services = [
  {
    id: 'supplier',
    icon: Search,
    title: 'Supplier Finding',
    description: 'We help you find the right manufacturers in China who match your quality standards, budget, and production requirements.',
    features: [
      'Comprehensive supplier search and matching',
      'Verification of business licenses and certifications',
      'Assessment of production capacity and capabilities',
      'Background checks and credit assessments',
      'Comparison of multiple supplier options',
      'Direct factory communication facilitation'
    ],
    process: 'Our team uses a proven methodology to identify suppliers. We start by understanding your requirements, then search our extensive database and conduct outreach to potential manufacturers. Each supplier undergoes a rigorous vetting process before being presented to you.'
  },
  {
    id: 'verification',
    icon: Shield,
    title: 'Factory Verification',
    description: 'Our on-site factory audits verify that your potential suppliers are legitimate, capable, and meet international standards.',
    features: [
      'On-site factory audits',
      'Business license verification',
      'Production capacity assessment',
      'Quality management system evaluation',
      'Compliance and certification checks',
      'Worker conditions assessment',
      'Detailed audit reports with photos'
    ],
    process: 'Our experienced auditors visit factories in person to verify their existence, assess their capabilities, and ensure they meet your requirements. We provide comprehensive reports with detailed findings and recommendations.'
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional quality control inspections at every stage of production to ensure your products meet specifications.',
    features: [
      'Pre-production inspections',
      'During-production inspections',
      'Pre-shipment inspections',
      'Container loading supervision',
      'AQL-based sampling',
      'Detailed photo and video reports',
      'Defect classification and analysis'
    ],
    process: 'We follow internationally recognized AQL (Acceptable Quality Level) standards. Our inspectors visit factories at key production stages, conduct thorough examinations, and provide detailed reports with actionable insights.'
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular monitoring and progress updates throughout the production process to keep your order on track.',
    features: [
      'Weekly progress updates',
      'On-site production visits',
      'Timeline monitoring',
      'Issue identification and resolution',
      'Sample approval coordination',
      'Production milestone tracking'
    ],
    process: 'We maintain regular contact with the factory and conduct periodic visits to ensure production is progressing according to schedule. Any issues are identified early and resolved promptly to prevent delays.'
  },
  {
    id: 'samples',
    icon: Package,
    title: 'Sample Management',
    description: 'We handle all aspects of sample requests, testing, and approval to ensure your products meet expectations.',
    features: [
      'Sample request coordination',
      'Sample quality assessment',
      'Lab testing coordination',
      'Feedback and revision management',
      'Approval documentation',
      'Bulk production alignment'
    ],
    process: 'We coordinate the entire sample process, from requesting initial samples to managing revisions and final approval. This ensures the bulk production matches your expectations.'
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination from factory to your warehouse, including freight and customs.',
    features: [
      'Freight forwarding',
      'Customs clearance',
      'Documentation handling',
      'Multi-modal shipping options',
      'Cargo tracking',
      'Door-to-door delivery'
    ],
    process: 'We work with reliable shipping partners to coordinate the entire logistics process. From factory pickup to final delivery, we ensure your goods arrive safely and on time.'
  }
];

const comparisonData = [
  { feature: 'Supplier Search', standard: true, premium: true, enterprise: true },
  { feature: 'Factory Verification', standard: '2 factories', premium: '5 factories', enterprise: 'Unlimited' },
  { feature: 'Quality Inspections', standard: '1 inspection', premium: '3 inspections', enterprise: 'Unlimited' },
  { feature: 'Production Follow-up', standard: false, premium: true, enterprise: true },
  { feature: 'Sample Management', standard: true, premium: true, enterprise: true },
  { feature: 'Shipping Coordination', standard: false, premium: true, enterprise: true },
  { feature: 'Dedicated Account Manager', standard: false, premium: true, enterprise: true },
  { feature: 'Response Time', standard: '48 hours', premium: '24 hours', enterprise: 'Same day' },
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Sourcing Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive solutions to streamline your China sourcing operations. 
              From supplier finding to final delivery, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section bg-background">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <p className="text-gray-600 mb-8">{service.process}</p>
                    <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                      Get Quote for This Service <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="border-t border-gray-200 my-20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Service Packages</h2>
          <p className="section-subtitle">
            Choose the package that best fits your sourcing needs
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-primary">
                  <th className="text-left p-4 text-white font-semibold">Feature</th>
                  <th className="text-center p-4 text-white font-semibold">Standard</th>
                  <th className="text-center p-4 text-white font-semibold bg-accent">Premium</th>
                  <th className="text-center p-4 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center">{row.standard === true ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : row.standard}</td>
                    <td className="p-4 text-center bg-red-50">{row.premium === true ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : row.premium}</td>
                    <td className="p-4 text-center">{row.enterprise === true ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-gray-600">Verified Suppliers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary">2000+</p>
              <p className="text-gray-600">QC Inspections</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We offer tailored sourcing solutions to meet your specific requirements. 
            Contact us to discuss your needs.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Get a Custom Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}