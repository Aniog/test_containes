import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  Search, 
  Factory, 
  FileCheck, 
  Package, 
  Truck,
  Clock,
  Shield,
  Users,
  TrendingUp
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: "Initial Consultation",
      description: "We start by understanding your specific requirements, including product specifications, quality standards, target prices, volume needs, and timeline.",
      details: [
        "Product specifications review",
        "Quality requirements discussion",
        "Target price and volume",
        "Timeline and delivery requirements"
      ]
    },
    {
      number: 2,
      icon: Search,
      title: "Supplier Identification",
      description: "Based on your requirements, we conduct a comprehensive search to identify potential suppliers from our extensive network and through market research.",
      details: [
        "Supplier database search",
        "Market research and analysis",
        "Capability matching",
        "Initial supplier shortlisting"
      ]
    },
    {
      number: 3,
      icon: Factory,
      title: "Factory Verification",
      description: "We conduct thorough on-site audits to verify factory legitimacy, production capabilities, quality systems, and compliance standards.",
      details: [
        "Business license verification",
        "Production capacity assessment",
        "Quality management audit",
        "Facility inspection"
      ]
    },
    {
      number: 4,
      icon: FileCheck,
      title: "Sample Evaluation",
      description: "We coordinate sample production and provide detailed evaluation reports to ensure products meet your specifications before mass production.",
      details: [
        "Sample request coordination",
        "Quality and specification review",
        "Technical assessment",
        "Sample approval report"
      ]
    },
    {
      number: 5,
      icon: Package,
      title: "Production Monitoring",
      description: "Throughout the production process, we provide regular updates, conduct quality inspections, and address any issues that arise.",
      details: [
        "Production progress tracking",
        "Inline quality inspections",
        "Issue resolution",
        "Timeline management"
      ]
    },
    {
      number: 6,
      icon: Truck,
      title: "Shipping & Delivery",
      description: "We coordinate the entire shipping process, from factory pickup to final delivery, including customs documentation and logistics.",
      details: [
        "Freight coordination",
        "Customs documentation",
        "Shipment tracking",
        "Final delivery arrangement"
      ]
    }
  ];

  const timeline = [
    { stage: "Requirements Analysis", duration: "1-2 days" },
    { stage: "Supplier Search", duration: "1-2 weeks" },
    { stage: "Factory Verification", duration: "1 week" },
    { stage: "Sample Evaluation", duration: "2-4 weeks" },
    { stage: "Production", duration: "2-8 weeks" },
    { stage: "Shipping", duration: "1-4 weeks" }
  ];

  const trustIndicators = [
    { icon: Clock, value: "24h", label: "Response Time" },
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
    { icon: Shield, value: "100%", label: "Factory Verified" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              How It Works
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Our proven 6-step process ensures a smooth, transparent, and reliable sourcing experience from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="lg:w-1/3">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {step.number}
                    </div>
                    <div className="ml-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center lg:hidden">
                        <step.icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h2>
                  <p className="text-slate-600">{step.description}</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">What's Included</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{detail}</span>
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

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Typical Timeline
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              While timelines vary based on product complexity, here's what to expect.
            </p>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-6 gap-4">
                {timeline.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="text-xs text-slate-500 mb-1">Stage {index + 1}</div>
                      <div className="text-sm font-medium text-slate-900 mb-2">{item.stage}</div>
                      <div className="text-xs text-blue-600 font-medium">{item.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <indicator.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{indicator.value}</div>
                <div className="text-sm text-slate-600 mt-1">{indicator.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Get in touch with us today to discuss your requirements and start the sourcing process.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;