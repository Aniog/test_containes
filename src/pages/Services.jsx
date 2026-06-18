import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Factory, 
  FileCheck, 
  Package, 
  Truck, 
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Globe,
  TrendingUp
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: "Supplier Identification & Search",
      description: "We find the right suppliers for your specific needs using our extensive network and market expertise.",
      features: [
        "Comprehensive supplier search based on your requirements",
        "Detailed supplier capability assessment",
        "Price negotiation and comparison",
        "Multiple supplier options for your evaluation"
      ]
    },
    {
      icon: Factory,
      title: "Factory Verification & Audit",
      description: "We verify factory legitimacy, capabilities, and compliance to protect you from scams and ensure quality.",
      features: [
        "Business license verification",
        "Production capacity assessment",
        "Quality management system review",
        "On-site factory audits",
        "Worker conditions evaluation",
        "Financial stability check"
      ]
    },
    {
      icon: FileCheck,
      title: "Quality Inspection",
      description: "Professional quality control inspections at every stage of production to ensure your standards are met.",
      features: [
        "Pre-production inspection (material verification)",
        "During production (inline) inspection",
        "Pre-shipment inspection",
        "Detailed inspection reports with photos",
        "Compliance verification against specifications"
      ]
    },
    {
      icon: Package,
      title: "Production Follow-up",
      description: "We monitor your production progress and quality to keep your project on track.",
      features: [
        "Regular production progress updates",
        "Quality monitoring and issue resolution",
        "Timeline management",
        "Production milestone tracking",
        "Coordination with factory"
      ]
    },
    {
      icon: Truck,
      title: "Shipping & Logistics",
      description: "End-to-end logistics support from factory to your designated delivery location.",
      features: [
        "Freight forwarding coordination",
        "Customs clearance documentation",
        "Multi-modal shipping options (air, sea, land)",
        "Package tracking and updates",
        "Delivery to your warehouse"
      ]
    },
    {
      icon: Shield,
      title: "Sample Management",
      description: "We manage the sample process to ensure products meet your specifications before production.",
      features: [
        "Sample request coordination",
        "Sample quality evaluation",
        "Technical specification review",
        "Sample approval process",
        "Mass production verification"
      ]
    }
  ];

  const benefits = [
    {
      title: "Risk Mitigation",
      description: "Reduce risks associated with sourcing from an unfamiliar market through our verification and QC processes."
    },
    {
      title: "Time Savings",
      description: "Save time on supplier research, communication, and travel by letting us handle the details."
    },
    {
      title: "Cost Efficiency",
      description: "Leverage our relationships with suppliers and shipping partners to get competitive pricing."
    },
    {
      title: "Quality Assurance",
      description: "Ensure consistent product quality through systematic inspection at key production stages."
    },
    {
      title: "Language Support",
      description: "Overcome language barriers with our bilingual team handling all communications."
    },
    {
      title: "Local Expertise",
      description: "Benefit from our deep knowledge of Chinese business practices and manufacturing standards."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              Our Sourcing Services
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Comprehensive end-to-end sourcing solutions to help you find reliable suppliers, verify factories, ensure quality, and coordinate shipping from China.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-slate-100 rounded-xl p-8 h-full min-h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <service.icon className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                      <p className="text-slate-500">Service visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Work With Us
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Partner with us to streamline your China sourcing operations and minimize risks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need Help with Your Sourcing?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Contact us today to discuss your sourcing needs and get a customized quote.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;