import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Shield, 
  ClipboardCheck, 
  Factory, 
  Truck, 
  BarChart3,
  Package,
  FileCheck,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: "Supplier Identification & Screening",
      description: "We find and evaluate manufacturers that match your specific requirements in terms of production capacity, quality standards, certifications, and pricing.",
      features: [
        "Comprehensive supplier database access",
        "Custom supplier matching based on your criteria",
        "Initial supplier screening and shortlisting",
        "Capability and capacity assessment"
      ]
    },
    {
      icon: Shield,
      title: "Factory Verification & Audit",
      description: "Our thorough verification process ensures you work with legitimate, capable, and financially stable manufacturers.",
      features: [
        "Business license verification",
        "Production facility inspection",
        "Quality management system assessment",
        "Financial stability check",
        "Worker conditions evaluation",
        "Certification verification (ISO, CE, etc.)"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Quality Inspection Services",
      description: "Professional quality control at every stage of production to ensure your products meet specifications.",
      inspectionTypes: [
        {
          name: "During Production Inspection (DUPONT)",
          description: "Early detection of quality issues when 20-30% of production is complete"
        },
        {
          name: "Pre-Shipment Inspection (PSI)",
          description: "Final quality verification before goods are shipped"
        },
        {
          name: "Container Loading Supervision",
          description: "Ensure correct quantities and proper loading to prevent damage"
        }
      ],
      features: [
        "Detailed inspection reports with photos",
        "Measurements and specifications verification",
        "Functionality testing",
        "Packaging and labeling checks",
        "Compliance verification"
      ]
    },
    {
      icon: Factory,
      title: "Production Follow-up & Monitoring",
      description: "Regular factory visits and progress tracking to keep your order on schedule and address issues promptly.",
      features: [
        "Production progress tracking",
        "Regular factory visits",
        "Timeline management",
        "Issue identification and resolution",
        "Production schedule optimization"
      ]
    },
    {
      icon: Truck,
      title: "Shipping & Logistics",
      description: "End-to-end logistics coordination from factory to your designated location.",
      features: [
        "Freight forwarding services",
        "Customs clearance documentation",
        "Multi-modal transport (sea, air, land)",
        "Insurance coordination",
        "Door-to-door delivery options"
      ]
    },
    {
      icon: BarChart3,
      title: "Sourcing Strategy & Consulting",
      description: "Expert guidance to optimize your supply chain and reduce sourcing costs.",
      features: [
        "Market analysis and research",
        "Cost optimization strategies",
        "Supply chain design",
        "Risk assessment and mitigation",
        "Supplier relationship management"
      ]
    }
  ];

  const whyChooseUs = [
    "Local presence in China with English-speaking team",
    "Transparent pricing with no hidden fees",
    "Proven track record with 500+ successful projects",
    "Comprehensive quality assurance at every stage",
    "Strong supplier relationships across industries",
    "Dedicated account manager for each client"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Comprehensive China sourcing solutions designed to protect your interests and ensure successful partnerships with verified suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${index !== 0 ? 'pt-16 border-t border-slate-200' : ''}`}>
                <div>
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6">
                    {service.description}
                  </p>
                  {service.inspectionTypes && (
                    <div className="space-y-4 mb-6">
                      {service.inspectionTypes.map((type, idx) => (
                        <div key={idx} className="bg-slate-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-slate-900 mb-1">{type.name}</h4>
                          <p className="text-sm text-slate-600">{type.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 lg:p-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Choose SSourcing China?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We combine local expertise with international standards to deliver reliable sourcing solutions that protect your business interests.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Our Service Packages</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-1">Basic Sourcing</h4>
                  <p className="text-sm text-slate-600">Supplier identification and initial screening</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-slate-900 mb-1">Standard Package</h4>
                  <p className="text-sm text-slate-600">Supplier verification + quality inspections + shipping support</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-1">Premium Package</h4>
                  <p className="text-sm text-slate-600">Full-service sourcing with ongoing production monitoring</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full mt-6 px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need Custom Sourcing Solutions?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact us to discuss your specific requirements. We'll tailor a solution that fits your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-colors"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;