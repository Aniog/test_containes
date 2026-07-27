import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Factory, 
  ClipboardCheck, 
  Truck,
  Star,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });

  const faqs = [
    {
      question: "How do you verify factories in China?",
      answer: "We conduct comprehensive factory audits including business license verification, production capacity assessment, quality management systems review, and on-site inspections. We verify the factory's legal status, production capabilities, certifications, and track record with other buyers."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We source across multiple industries including electronics, machinery, textiles, packaging, consumer goods, automotive parts, and industrial equipment. Our team has expertise in various product categories and can adapt to your specific sourcing needs."
    },
    {
      question: "How does your quality control process work?",
      answer: "Our QC process includes pre-production inspections, during-production inspections, and pre-shipment inspections. We follow AQL (Acceptable Quality Level) standards and provide detailed inspection reports with photos and recommendations."
    },
    {
      question: "What are your service fees?",
      answer: "Our fees vary based on the scope of services required. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific sourcing needs."
    },
    {
      question: "How long does the sourcing process take?",
      answer: "The timeline varies depending on product complexity and supplier availability. Typically, initial supplier identification takes 1-2 weeks, factory verification 1 week, and sample evaluation 2-4 weeks. We provide detailed timelines for each project."
    },
    {
      question: "Do you handle shipping and logistics?",
      answer: "Yes, we coordinate the entire shipping process including freight forwarding, customs clearance documentation, and delivery to your specified location. We work with reliable logistics partners to ensure safe and timely delivery."
    }
  ];

  const services = [
    {
      icon: Shield,
      title: "Supplier Verification",
      description: "We verify factory legitimacy, business licenses, production capacity, and certifications to ensure you work with trustworthy suppliers."
    },
    {
      icon: Factory,
      title: "Factory Sourcing",
      description: "We identify and evaluate suitable manufacturers based on your product specifications, quality requirements, and budget."
    },
    {
      icon: ClipboardCheck,
      title: "Quality Inspection",
      description: "Our QC team performs rigorous inspections at every production stage to ensure products meet your standards and specifications."
    },
    {
      icon: Truck,
      title: "Shipping & Logistics",
      description: "We coordinate end-to-end shipping, handle customs documentation, and ensure smooth delivery to your destination."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Submit Your Request",
      description: "Tell us about your product requirements, quantity, target price, and any specific criteria."
    },
    {
      step: "02",
      title: "We Find Suppliers",
      description: "Our team researches and identifies verified manufacturers matching your specifications."
    },
    {
      step: "03",
      title: "Factory Verification",
      description: "We conduct thorough audits to verify factory capabilities, certifications, and reliability."
    },
    {
      step: "04",
      title: "Sample Evaluation",
      description: "We arrange samples, conduct evaluations, and provide detailed feedback on quality."
    },
    {
      step: "05",
      title: "Production Follow-up",
      description: "We monitor production progress, conduct inline inspections, and address any issues promptly."
    },
    {
      step: "06",
      title: "Quality Assurance",
      description: "Final inspection before shipment ensures products meet all specifications and standards."
    },
    {
      step: "07",
      title: "Shipping & Delivery",
      description: "We coordinate logistics, handle documentation, and ensure timely delivery to your door."
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
      description: "Our rigorous inspection protocols protect you from receiving substandard products."
    },
    {
      title: "Supplier Scams",
      description: "Thorough factory verification ensures you work with legitimate, reliable manufacturers."
    },
    {
      title: "Shipping Complexities",
      description: "We handle all logistics, customs, and documentation to simplify international shipping."
    }
  ];

  const trustPoints = [
    { number: "500+", label: "Projects Completed" },
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Industries Served" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const caseStudies = [
    {
      company: "European Retail Brand",
      industry: "Consumer Goods",
      challenge: "Needed to source home organization products from China with strict quality requirements.",
      solution: "We identified 5 verified factories, conducted thorough quality audits, and established QC protocols.",
      result: "Successfully imported 50,000 units with 99.2% quality pass rate."
    },
    {
      company: "US Technology Startup",
      industry: "Electronics",
      challenge: "Required custom electronic components with specific technical specifications.",
      solution: "Matched with a specialized manufacturer, arranged prototype development, and implemented inline QC.",
      result: "Product launched on time with zero quality issues in first production run."
    }
  ];

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We help overseas businesses find reliable suppliers, verify factories, 
              inspect quality, and coordinate seamless shipping. Your trusted partner 
              for successful China sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors duration-200"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points Bar */}
      <section className="bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{point.number}</div>
                <div className="text-sm text-slate-600">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions to ensure your China sourcing is successful, 
              safe, and cost-effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sourcing from China comes with challenges. We help you overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{problem.title}</h3>
                <p className="text-slate-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven 7-step process to ensure successful sourcing from China.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-50 rounded-xl p-6 h-full">
                  <div className="text-4xl font-bold text-blue-100 mb-4">{step.step}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We have expertise sourcing a wide range of products from China.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="bg-slate-800 rounded-lg p-4 text-center hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <span className="font-medium">{product}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300"
            >
              View All Product Categories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we've helped businesses succeed with China sourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
                <div className="text-sm text-blue-600 font-semibold mb-2">{study.industry}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{study.company}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-700 mb-1">Challenge:</h4>
                  <p className="text-slate-600">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-700 mb-1">Solution:</h4>
                  <p className="text-slate-600">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1">Result:</h4>
                  <p className="text-green-600 font-semibold">{study.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Get answers to common questions about our sourcing services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => handleFaqToggle(index)}
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Get Your Free Sourcing Quote
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Tell us about your sourcing needs and we'll provide a comprehensive 
                quote within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-900">No Obligation</h4>
                    <p className="text-slate-600">Get a detailed quote with no commitment required.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Fast Response</h4>
                    <p className="text-slate-600">We respond to all inquiries within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Tailored Solutions</h4>
                    <p className="text-slate-600">Customized sourcing strategy based on your needs.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-slate-900 mb-4">Contact Information</h4>
                <div className="space-y-3 text-slate-600">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <span>info@ssourcingchina.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-blue-600" />
                    <span>+86 123 4567 8900</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                    <span>Shenzhen, China</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Company Ltd"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
                      Product Category *
                    </label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., Electronics"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 10,000 units"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe your sourcing requirements, specifications, timeline, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;