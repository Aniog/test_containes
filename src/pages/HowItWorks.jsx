import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  Building2, 
  FileCheck, 
  Factory, 
  ClipboardCheck, 
  Truck, 
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  TrendingUp
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      step: "Step 1",
      title: "Submit Your Request",
      description: "Fill out our inquiry form with details about your product requirements, including specifications, quantity, target price, and any special requirements.",
      details: [
        "Product specifications and technical drawings",
        "Estimated order quantity",
        "Target price range",
        "Quality standards and certifications required",
        "Timeline and delivery requirements"
      ]
    },
    {
      icon: Search,
      step: "Step 2",
      title: "We Find Suppliers",
      description: "Our team conducts comprehensive market research to identify and evaluate manufacturers that match your specific criteria.",
      details: [
        "Database of verified Chinese manufacturers",
        "Industry-specific supplier networks",
        "Capability and capacity matching",
        "Price comparison across multiple suppliers",
        "Initial supplier shortlisting"
      ]
    },
    {
      icon: Building2,
      step: "Step 3",
      title: "Factory Verification",
      description: "We conduct thorough audits to verify factory legitimacy, capabilities, and reliability before making any recommendations.",
      details: [
        "Business license verification",
        "Production facility inspection",
        "Quality management system assessment",
        "Certification and compliance verification",
        "Financial stability check"
      ]
    },
    {
      icon: FileCheck,
      step: "Step 4",
      title: "Sample Evaluation",
      description: "We coordinate sample production and provide detailed evaluation reports to help you make informed decisions.",
      details: [
        "Sample request coordination",
        "Quality and specification review",
        "Technical assessment",
        "Comparative analysis",
        "Approval recommendation"
      ]
    },
    {
      icon: Factory,
      step: "Step 5",
      title: "Production Follow-up",
      description: "Throughout production, we monitor progress, conduct inline inspections, and address any issues promptly.",
      details: [
        "Production schedule monitoring",
        "Regular progress updates",
        "Inline quality inspections",
        "Issue identification and resolution",
        "Timeline management"
      ]
    },
    {
      icon: ClipboardCheck,
      step: "Step 6",
      title: "Quality Assurance",
      description: "Final pre-shipment inspection ensures products meet all specifications and quality standards before shipping.",
      details: [
        "AQL-based sampling inspection",
        "Specification compliance check",
        "Packaging and labeling verification",
        "Photo and video documentation",
        "Detailed inspection report"
      ]
    },
    {
      icon: Truck,
      step: "Step 7",
      title: "Shipping & Delivery",
      description: "We coordinate the entire logistics process from factory to your designated delivery point.",
      details: [
        "Freight forwarding coordination",
        "Customs clearance handling",
        "Documentation preparation",
        "Multi-modal transport options",
        "Door-to-door delivery tracking"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Reduce risks associated with unknown suppliers and quality issues through our verification and inspection processes."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Save time on supplier research, communication, and logistics coordination with our end-to-end service."
    },
    {
      icon: TrendingUp,
      title: "Cost Efficiency",
      description: "Leverage our industry connections and negotiation expertise to secure competitive pricing."
    },
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description: "Our multi-stage inspection process ensures consistent quality and compliance with your specifications."
    }
  ];

  const timeline = [
    { stage: "Initial Request", duration: "1-2 days", description: "Review and understand requirements" },
    { stage: "Supplier Matching", duration: "1-2 weeks", description: "Research and identify suitable factories" },
    { stage: "Factory Verification", duration: "1 week", description: "Conduct comprehensive audits" },
    { stage: "Sample Phase", duration: "2-4 weeks", description: "Produce and evaluate samples" },
    { stage: "Production", duration: "2-8 weeks", description: "Monitor manufacturing process" },
    { stage: "Inspection & Shipping", duration: "1-2 weeks", description: "Final QC and arrange delivery" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Our proven 7-step process ensures successful China sourcing from supplier 
              identification to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-blue-600 font-semibold">{step.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-slate-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-slate-100 rounded-2xl h-64 flex items-center justify-center">
                    <step.icon className="w-24 h-24 text-slate-300" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              While timelines vary based on product complexity, here's a general overview.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Stage</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Duration</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Description</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-slate-900">{item.stage}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                        {item.duration}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Our Process Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our systematic approach delivers consistent results for businesses sourcing from China.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get in touch with us today and let's discuss how we can help you source 
            quality products from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;