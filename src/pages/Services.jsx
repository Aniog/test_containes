import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Factory, 
  ClipboardCheck, 
  Truck, 
  Search, 
  FileCheck, 
  Package, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Supplier Identification & Matching",
      description: "We research and identify suitable manufacturers based on your product specifications, quality requirements, and budget constraints.",
      features: [
        "Market research and supplier discovery",
        "Capability and capacity assessment",
        "Price comparison and negotiation",
        "Multi-quote comparison"
      ]
    },
    {
      icon: Shield,
      title: "Factory Verification & Audit",
      description: "Comprehensive verification to ensure you're working with legitimate, capable, and reliable manufacturers.",
      features: [
        "Business license verification",
        "Production capacity assessment",
        "Quality management system review",
        "On-site factory audits",
        "Certification verification"
      ]
    },
    {
      icon: Factory,
      title: "Production Follow-up & Monitoring",
      description: "Regular monitoring of production progress to ensure timelines are met and quality standards are maintained.",
      features: [
        "Production schedule tracking",
        "Inline quality inspections",
        "Progress reporting",
        "Issue identification and resolution",
        "Timeline management"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Quality Control & Inspection",
      description: "Rigorous inspection protocols at every stage of production to ensure products meet your specifications.",
      features: [
        "Pre-production inspection",
        "During production inspection",
        "Pre-shipment inspection",
        "AQL-based sampling",
        "Detailed inspection reports"
      ]
    },
    {
      icon: FileCheck,
      title: "Sample Management",
      description: "We handle the entire sample process from requesting to evaluating and approving samples.",
      features: [
        "Sample request coordination",
        "Sample quality evaluation",
        "Technical specification review",
        "Approval documentation",
        "Mass production validation"
      ]
    },
    {
      icon: Truck,
      title: "Shipping & Logistics",
      description: "End-to-end logistics coordination including freight forwarding, customs, and delivery.",
      features: [
        "Freight forwarding",
        "Customs clearance",
        "Documentation handling",
        "Multi-modal transport",
        "Door-to-door delivery"
      ]
    },
    {
      icon: Package,
      title: "Product Development Support",
      description: "Assistance with product development, prototyping, and customization from China manufacturers.",
      features: [
        "Prototype development",
        "Technical drawings review",
        "Material sourcing",
        "Manufacturing process optimization",
        "Cost reduction suggestions"
      ]
    },
    {
      icon: BarChart3,
      title: "Sourcing Strategy & Consulting",
      description: "Strategic advice to optimize your China sourcing operations and reduce costs.",
      features: [
        "Sourcing strategy development",
        "Cost analysis and optimization",
        "Supply chain optimization",
        "Risk assessment",
        "Market intelligence"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We discuss your requirements, specifications, and goals to understand your sourcing needs."
    },
    {
      title: "Supplier Research",
      description: "Our team identifies and evaluates potential manufacturers matching your criteria."
    },
    {
      title: "Factory Verification",
      description: "We conduct thorough audits to verify factory legitimacy and capabilities."
    },
    {
      title: "Sample Evaluation",
      description: "We coordinate samples and provide detailed quality assessments."
    },
    {
      title: "Production Monitoring",
      description: "Regular inspections and progress updates throughout production."
    },
    {
      title: "Final Inspection",
      description: "Comprehensive pre-shipment inspection to ensure quality compliance."
    },
    {
      title: "Shipping Coordination",
      description: "We handle all logistics from factory to your designated delivery point."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive China sourcing solutions designed to help you find reliable suppliers, 
              ensure product quality, and streamline the entire import process.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                    <service.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Our Services Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A systematic approach to ensure successful sourcing at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We bring years of experience and a proven track record in China sourcing, 
                helping businesses of all sizes import quality products efficiently.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Verified Suppliers</h4>
                    <p className="text-slate-600">Every supplier we work with is thoroughly vetted and verified.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Quality Assurance</h4>
                    <p className="text-slate-600">Rigorous inspection protocols ensure consistent product quality.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Transparent Pricing</h4>
                    <p className="text-slate-600">No hidden fees. You know exactly what you're paying for.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Dedicated Support</h4>
                    <p className="text-slate-600">Personal account manager to guide you through the entire process.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to Get Started?</h3>
              <p className="text-slate-600 mb-8">
                Contact us today for a free consultation and quote. We'll help you 
                find the right suppliers and ensure quality products at competitive prices.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;