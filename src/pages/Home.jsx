import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Factory, 
  Shield, 
  Truck, 
  Search, 
  ClipboardCheck, 
  BarChart3, 
  Users,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star
} from 'lucide-react';

const HomePage = () => {
  const [openFaq, setOpenFaq] = React.useState(null);

  const faqs = [
    {
      question: "How do you verify factories in China?",
      answer: "We conduct comprehensive factory audits including business license verification, production capacity assessment, quality management systems review, and on-site inspections. We verify the factory's legal status, production capabilities, worker conditions, and financial stability before recommending any supplier."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We source across a wide range of industries including electronics, machinery, textiles, packaging, consumer goods, automotive parts, and industrial equipment. Our team has expertise in both manufacturing and trading sectors."
    },
    {
      question: "How does quality inspection work?",
      answer: "Our QC team performs inspections at key production stages - during production (DUPONT), pre-shipment (PSI), and container loading supervision. We provide detailed reports with photos, measurements, and compliance verification against your specifications."
    },
    {
      question: "What are your service fees?",
      answer: "Our fee structure depends on the scope of services required. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific sourcing needs."
    },
    {
      question: "Do you handle shipping and logistics?",
      answer: "Yes, we provide end-to-end logistics support including freight forwarding, customs clearance documentation, and coordination with shipping agents. We ensure your goods are delivered safely and on time."
    },
    {
      question: "How long does the sourcing process take?",
      answer: "The timeline varies based on product complexity and supplier availability. Typically, initial supplier identification takes 1-2 weeks, verification takes 1-2 weeks, and sample approval takes 2-4 weeks. We'll provide a detailed timeline during our initial consultation."
    }
  ];

  const services = [
    {
      icon: Search,
      title: "Supplier Identification",
      description: "We find and evaluate reliable manufacturers matching your specific requirements, quality standards, and budget."
    },
    {
      icon: Shield,
      title: "Factory Verification",
      description: "Comprehensive audits to verify legitimacy, production capacity, quality systems, and financial stability of suppliers."
    },
    {
      icon: ClipboardCheck,
      title: "Quality Inspection",
      description: "Professional QC inspections at production, pre-shipment, and loading stages to ensure product quality meets your standards."
    },
    {
      icon: Factory,
      title: "Production Follow-up",
      description: "Regular factory visits and progress monitoring to keep your order on track and address any issues promptly."
    },
    {
      icon: Truck,
      title: "Shipping & Logistics",
      description: "End-to-end logistics coordination including freight, customs clearance, and delivery to your specified location."
    },
    {
      icon: BarChart3,
      title: "Sourcing Strategy",
      description: "Market analysis and procurement strategy to optimize your supply chain and reduce sourcing costs."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We discuss your product specifications, quality requirements, target prices, and delivery timelines."
    },
    {
      step: "02",
      title: "Supplier Search",
      description: "Our team identifies and evaluates potential manufacturers from our verified database and market research."
    },
    {
      step: "03",
      title: "Factory Verification",
      description: "We conduct thorough audits to verify factory capabilities, certifications, and reliability."
    },
    {
      step: "04",
      title: "Sample Evaluation",
      description: "We coordinate sample production and conduct detailed evaluation against your specifications."
    },
    {
      step: "05",
      title: "Production Monitoring",
      description: "Regular factory visits and quality checks ensure production stays on track and meets standards."
    },
    {
      step: "06",
      title: "Shipping & Delivery",
      description: "We coordinate logistics, handle documentation, and ensure smooth delivery to your destination."
    }
  ];

  const products = [
    "Electronics & Components",
    "Machinery & Equipment",
    "Textiles & Garments",
    "Packaging Materials",
    "Consumer Goods",
    "Automotive Parts",
    "Industrial Supplies",
    "Medical Devices"
  ];

  const problems = [
    {
      title: "Language Barriers",
      description: "We bridge communication gaps between you and Chinese suppliers, ensuring clear understanding of requirements."
    },
    {
      title: "Quality Risks",
      description: "Our quality inspections protect you from receiving substandard products and costly returns."
    },
    {
      title: "Supplier Scams",
      description: "Factory verification ensures you work with legitimate, capable manufacturers, not fraudulent entities."
    },
    {
      title: "Shipping Complexities",
      description: "We handle all logistics, customs documentation, and coordination to deliver goods safely."
    },
    {
      title: "Cultural Differences",
      description: "Our local presence helps navigate Chinese business culture and build strong supplier relationships."
    },
    {
      title: "Time Zone Challenges",
      description: "With our team in China, we can act on your behalf during your local business hours."
    }
  ];

  const trustPoints = [
    { number: "500+", label: "Projects Completed" },
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Verified Suppliers" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const caseStudies = [
    {
      client: "European Retailer",
      industry: "Home Goods",
      challenge: "Needed reliable supplier for kitchenware products with consistent quality",
      solution: "Factory verification, quality inspections, and production monitoring",
      result: "30% cost reduction while improving quality standards"
    },
    {
      client: "US Tech Company",
      industry: "Electronics",
      challenge: "Sourcing electronic components from verified manufacturers",
      solution: "Comprehensive supplier audit and ongoing quality control",
      result: "Zero defects in 50,000 units shipped"
    },
    {
      client: "Australian Distributor",
      industry: "Automotive",
      challenge: "Finding certified suppliers for automotive parts",
      solution: "Factory certification verification and pre-shipment inspections",
      result: "Successfully launched 12 new product lines"
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              We help overseas businesses find verified suppliers, ensure product quality, and manage seamless shipping from China. Turn your sourcing challenges into competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors"
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
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{point.number}</div>
                <div className="text-sm text-slate-600">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions to streamline your China sourcing operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A systematic approach to ensure successful sourcing from China
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Wide range of product categories from verified Chinese manufacturers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg text-center hover:bg-blue-50 transition-colors">
                <span className="text-slate-700 font-medium">{product}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
            >
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Common challenges when sourcing from China and how we address them
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="p-6 bg-slate-800 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-slate-400">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from our sourcing partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">{study.industry}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{study.client}</h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-sm font-medium text-slate-500">Challenge:</span>
                    <p className="text-sm text-slate-600">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-500">Solution:</span>
                    <p className="text-sm text-slate-600">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-500">Result:</span>
                    <p className="text-sm text-green-600 font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about our China sourcing services
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
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
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get a free consultation and quote for your sourcing needs. Our team will respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;