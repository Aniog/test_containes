import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Factory, 
  Shield, 
  Truck, 
  Search, 
  FileCheck, 
  Package, 
  Globe,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How do you verify factories in China?",
      answer: "We conduct comprehensive factory audits including business license verification, production capacity assessment, quality management systems review, and on-site inspections. We verify the factory's legal status, production capabilities, worker conditions, and financial stability."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We source across a wide range of industries including electronics, machinery, textiles, packaging, furniture, automotive parts, medical devices, and consumer goods. Our team has expertise in both manufacturing and quality control across these sectors."
    },
    {
      question: "How does quality inspection work?",
      answer: "Our QC team performs inspections at key production stages: pre-production (material verification), during production (inline inspection), and pre-shipment (final inspection). We provide detailed reports with photos, measurements, and compliance verification against your specifications."
    },
    {
      question: "What are your fees?",
      answer: "Our fee structure depends on the services you need. We offer flexible engagement models including project-based fees, retainer arrangements, and commission-based sourcing. Contact us for a customized quote based on your specific requirements."
    },
    {
      question: "How long does the sourcing process take?",
      answer: "Timeline varies based on product complexity and search scope. Typically, supplier identification takes 1-2 weeks, verification takes 1 week, and sample evaluation takes 2-4 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you handle shipping and logistics?",
      answer: "Yes, we coordinate the entire shipping process including freight forwarding, customs clearance documentation, and delivery to your specified location. We work with reliable logistics partners to ensure safe and timely delivery."
    }
  ];

  const services = [
    {
      icon: Search,
      title: "Supplier Identification",
      description: "We find and evaluate reliable suppliers matching your specific requirements, quality standards, and budget."
    },
    {
      icon: Factory,
      title: "Factory Verification",
      description: "Comprehensive audits to verify legitimacy, production capacity, quality systems, and compliance standards."
    },
    {
      icon: FileCheck,
      title: "Quality Inspection",
      description: "Professional QC inspections at pre-production, inline, and pre-shipment stages to ensure quality standards."
    },
    {
      icon: Package,
      title: "Production Follow-up",
      description: "Regular monitoring of production progress, quality checks, and timeline management throughout manufacturing."
    },
    {
      icon: Truck,
      title: "Shipping Coordination",
      description: "End-to-end logistics support including freight, customs documentation, and delivery coordination."
    },
    {
      icon: Shield,
      title: "Sample Management",
      description: "Sample request, evaluation, and approval process management to ensure products meet your specifications."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Requirements Analysis",
      description: "We discuss your product specifications, quality requirements, target prices, and volume needs."
    },
    {
      step: 2,
      title: "Supplier Search",
      description: "We identify and evaluate potential suppliers from our network and conduct market research."
    },
    {
      step: 3,
      title: "Factory Verification",
      description: "We conduct on-site audits to verify factory legitimacy, capabilities, and quality systems."
    },
    {
      step: 4,
      title: "Sample Evaluation",
      description: "We coordinate sample production and provide detailed evaluation reports."
    },
    {
      step: 5,
      title: "Production Monitoring",
      description: "We oversee production with regular quality checks and progress updates."
    },
    {
      step: 6,
      title: "Shipping & Delivery",
      description: "We coordinate logistics and ensure smooth customs clearance and delivery."
    }
  ];

  const products = [
    "Electronics & Components",
    "Machinery & Equipment",
    "Textiles & Garments",
    "Packaging Materials",
    "Furniture & Home Goods",
    "Automotive Parts",
    "Medical Devices",
    "Consumer Electronics",
    "Industrial Supplies",
    "Promotional Products"
  ];

  const problems = [
    {
      title: "Language Barriers",
      description: "Communication challenges with suppliers due to language differences, leading to misunderstandings and errors."
    },
    {
      title: "Quality Issues",
      description: "Receiving products that don't match specifications or have inconsistent quality across orders."
    },
    {
      title: "Supplier Scams",
      description: "Risk of dealing with fraudulent suppliers who take payments without delivering products."
    },
    {
      title: "Hidden Costs",
      description: "Unexpected fees for tooling, molds, shipping, and other expenses not disclosed initially."
    },
    {
      title: "Production Delays",
      description: "Missed deadlines and delayed shipments affecting your business operations and customer commitments."
    },
    {
      title: "IP Theft Risk",
      description: "Potential intellectual property theft when sharing designs with unverified manufacturers."
    }
  ];

  const trustPoints = [
    { icon: Clock, value: "10+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
    { icon: Star, value: "4.9/5", label: "Client Rating" }
  ];

  const caseStudies = [
    {
      client: "European Retailer",
      industry: "Home Goods",
      challenge: "Needed to source kitchenware products from China with strict quality requirements and tight timeline.",
      solution: "We identified 5 verified factories, conducted thorough quality audits, and performed pre-shipment inspections. We also coordinated shipping to ensure on-time delivery.",
      result: "Successfully imported 50,000 units with zero quality issues. Client saved 25% compared to their previous supplier."
    },
    {
      client: "US Tech Company",
      industry: "Electronics",
      challenge: "Required a reliable manufacturer for electronic components with specific technical specifications.",
      solution: "We conducted detailed factory verification, including technical capability assessment. We also implemented a rigorous QC process with inline inspections.",
      result: "Found a manufacturer meeting all technical requirements. Quality defect rate reduced from 8% to under 1%."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping from China.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <point.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{point.value}</div>
                <div className="text-sm text-slate-600 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Sourcing Services
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive sourcing solutions to help you navigate the complexities of manufacturing in China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Problems We Solve
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Common challenges when sourcing from China, and how we help you overcome them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
                <p className="text-slate-600 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Our proven 6-step process ensures a smooth sourcing experience from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl border border-slate-200 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="ml-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Products We Source
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              We have expertise across a wide range of industries and product categories.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-slate-800 p-4 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-slate-200">{product}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
            >
              View all product categories
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Case Studies
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from our clients who have successfully sourced from China with our help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 p-6 border-b border-slate-200">
                  <div className="text-sm text-blue-600 font-medium mb-1">{study.industry}</div>
                  <h3 className="text-xl font-semibold text-slate-900">{study.client}</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Challenge</h4>
                    <p className="text-slate-600 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Solution</h4>
                    <p className="text-slate-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-700 mb-2">Result</h4>
                    <p className="text-slate-600 text-sm">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              View all case studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Start Sourcing from China?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Get a free sourcing quote tailored to your specific requirements. Our team will respond within 24 hours.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;