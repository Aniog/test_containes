import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Truck,
  Factory,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Globe,
  Award,
  MessageSquare,
  ChevronDown,
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and vet reliable manufacturers in China that match your product requirements, budget, and quality standards.',
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify business licenses, production capacity, quality systems, and social compliance.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Submit Your Inquiry',
      description: 'Share your product requirements, target price, and quantity. We review within 24 hours.',
    },
    {
      step: '02',
      title: 'Supplier Matching',
      description: 'We source 3-5 qualified suppliers and share their profiles, capabilities, and references.',
    },
    {
      step: '03',
      title: 'Verification & Sampling',
      description: 'We verify factories, negotiate terms, and arrange samples for your approval.',
    },
    {
      step: '04',
      title: 'Production & QC',
      description: 'We monitor production, conduct inspections, and provide detailed reports with photos.',
    },
    {
      step: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, handle documentation, and track your shipment until delivery.',
    },
  ];

  const problems = [
    {
      title: 'Unreliable Suppliers',
      description: 'We verify every factory through on-site audits, business registration checks, and reference validation.',
    },
    {
      title: 'Quality Issues',
      description: 'Our QC team conducts multiple inspection stages with detailed reporting to catch defects before shipment.',
    },
    {
      title: 'Communication Gaps',
      description: 'Native English-speaking project managers bridge the language and cultural gap for clear communication.',
    },
    {
      title: 'Hidden Costs',
      description: 'Transparent pricing with no hidden fees. We provide detailed cost breakdowns upfront.',
    },
    {
      title: 'Shipping Delays',
      description: 'Experienced logistics coordination ensures on-time delivery with proper documentation.',
    },
  ];

  const trustPoints = [
    { icon: Users, stat: '500+', label: 'Clients Served' },
    { icon: Globe, stat: '30+', label: 'Countries' },
    { icon: Award, stat: '98%', label: 'Client Satisfaction' },
    { icon: Star, stat: '4.9/5', label: 'Average Rating' },
  ];

  const caseStudies = [
    {
      title: 'Home Decor Importer from USA',
      category: 'Home & Garden',
      result: 'Reduced sourcing costs by 22% while improving quality consistency',
    },
    {
      title: 'Electronics Retailer from UK',
      category: 'Electronics',
      result: 'Cut supplier lead time from 45 to 28 days with reliable factory partnerships',
    },
    {
      title: 'Fashion Brand from Australia',
      category: 'Apparel & Textiles',
      result: 'Successfully sourced 200+ SKUs with consistent quality across 3 seasons',
    },
  ];

  const faqs = [
    {
      question: 'What is your minimum order quantity (MOQ)?',
      answer: 'MOQ varies by product and supplier. We work with manufacturers offering flexible MOQs, often starting from 500-1000 units. We negotiate the best terms based on your requirements.',
    },
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct comprehensive factory audits including business license verification, production capacity assessment, quality system review, and reference checks with existing clients.',
    },
    {
      question: 'What are your inspection fees?',
      answer: 'Inspection fees depend on product complexity and location. Basic inspections start from $200-300 per visit. We provide transparent pricing before scheduling any inspection.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Initial supplier matching takes 3-5 business days. Sample approval typically takes 2-3 weeks. Production timelines vary by product, usually 30-60 days.',
    },
    {
      question: 'Do you handle shipping and customs?',
      answer: 'Yes, we coordinate end-to-end logistics including freight forwarding, customs documentation, and delivery tracking. We work with reliable partners for sea, air, and express shipping.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2210%22%20height%3D%2210%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2010%200%20L%200%200%200%2010%22%20fill%3D%22none%22%20stroke%3D%22%23e2e8f0%22%20stroke-width%3D%220.5%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23grid)%22/%3E%3C/svg%3E')] opacity-30"></div>
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 mb-6">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Trusted by 500+ international buyers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                China Sourcing Agent for <span className="text-blue-600">Global Buyers</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
                We help overseas businesses find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China. Your trusted partner for hassle-free sourcing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Get a Free Sourcing Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  No upfront fees
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Free factory matching
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  English-speaking team
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%23e2e8f0' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'%3EFactory & QC Visual%3C/text%3E%3C/svg%3E"
                  alt="China factory and quality control"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center space-x-3">
                <div className="bg-blue-100 rounded-full p-3">
                  <Factory className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Verified Factories</p>
                  <p className="text-sm text-slate-600">1000+ audited suppliers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-y border-slate-200">
        <div className="container-custom py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-3">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-bold text-slate-900">{item.stat}</p>
                <p className="text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">End-to-End Sourcing Services</h2>
            <p className="section-subtitle mx-auto">
              From finding the right supplier to delivering products to your doorstep, we handle every step of the sourcing process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle mx-auto">
              A simple, transparent process designed to make your sourcing experience smooth and reliable.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2"></div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 border border-slate-200 relative z-10">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/how-it-works">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Problems We Solve</h2>
            <p className="section-subtitle mx-auto">
              Common challenges international buyers face when sourcing from China, and how we help you overcome them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">!</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
                    <p className="text-slate-600 text-sm">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Products We Source</h2>
            <p className="section-subtitle mx-auto">
              We source a wide range of products across multiple industries. Here are some of our most popular categories.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Electronics',
              'Home & Garden',
              'Apparel & Textiles',
              'Auto Parts',
              'Industrial Equipment',
              'Gifts & Promotional',
              'Toys & Hobbies',
              'Health & Beauty',
              'Sports & Outdoors',
              'Jewelry & Accessories',
              'Packaging Materials',
              'Office Supplies',
            ].map((category, index) => (
              <Link
                key={index}
                to="/products"
                className="group bg-slate-50 rounded-lg p-4 text-center border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <p className="text-sm font-medium text-slate-700 group-hover:text-blue-700">{category}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                View All Categories <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle mx-auto">
              See how we've helped businesses like yours source better, faster, and more reliably from China.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{study.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{study.result}</p>
                <Link to="/case-studies" className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-700">
                  Read full case study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Quick answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-slate-50 rounded-lg border border-slate-200">
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-4 pb-4 text-slate-600 text-sm">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Have more questions?</p>
            <Button asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Sourcing from China?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation and sourcing quote. Our team will review your requirements and provide tailored recommendations within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href="mailto:info@ssourcingchina.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
