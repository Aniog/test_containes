import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Factory, 
  ClipboardCheck, 
  Truck, 
  Search, 
  Users, 
  Package, 
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Building2,
  FileCheck,
  Container,
  Clock,
  Globe,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const heroStats = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '50+', label: 'Countries Served' },
  { value: '10,000+', label: 'Inspections Completed' },
  { value: '98%', label: 'Client Satisfaction' },
];

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    description: 'We verify factory existence, licensing, and production capacity before you commit.',
    href: '/services#verification',
  },
  {
    icon: Factory,
    title: 'Factory Audits',
    description: 'Comprehensive on-site audits covering compliance, capacity, and capability.',
    href: '/services#audits',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections ensure your products meet specifications.',
    href: '/services#inspection',
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    description: 'Regular updates during production to keep your order on track.',
    href: '/services#production',
  },
  {
    icon: Container,
    title: 'Shipping Coordination',
    description: 'We handle freight forwarding, customs, and delivery logistics.',
    href: '/services#shipping',
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description: 'Complete paperwork for smooth import clearance at destination.',
    href: '/services#documentation',
  },
];

const problems = [
  {
    title: 'Language Barriers',
    description: 'Communication gaps lead to misunderstandings, wrong specifications, and production errors.',
    solution: 'Our bilingual team bridges the communication gap between you and Chinese manufacturers.',
  },
  {
    title: 'Quality Uncertainty',
    description: 'Without on-site oversight, product quality can vary significantly from samples.',
    solution: 'We conduct rigorous inspections at every production stage to ensure consistency.',
  },
  {
    title: 'Supplier Risk',
    description: 'How do you know if a factory is legitimate, capable, and reliable?',
    solution: 'We perform thorough verification and ongoing monitoring of all suppliers.',
  },
  {
    title: 'Logistics Complexity',
    description: 'International shipping involves complex procedures, documentation, and potential delays.',
    solution: 'We coordinate the entire logistics chain from factory to your door.',
  },
];

const productCategories = [
  { name: 'Electronics & Components', examples: 'PCBs, sensors, consumer electronics' },
  { name: 'Textiles & Apparel', examples: 'Garments, fabrics, accessories' },
  { name: 'Machinery & Equipment', examples: 'Industrial equipment, tools, parts' },
  { name: 'Home & Garden', examples: 'Furniture, decor, outdoor equipment' },
  { name: 'Packaging & Printing', examples: 'Boxes, labels, promotional materials' },
  { name: 'Sports & Recreation', examples: 'Fitness equipment, outdoor gear' },
];

const processSteps = [
  {
    step: '01',
    title: 'Submit Inquiry',
    description: 'Tell us what you need — product specs, quantity, target price, and timeline.',
  },
  {
    step: '02',
    title: 'Supplier Matching',
    description: 'We identify and pre-vet suitable manufacturers from our verified network.',
  },
  {
    step: '03',
    title: 'Verification',
    description: 'Factory audits, license checks, and capability assessments are conducted.',
  },
  {
    step: '04',
    title: 'Sampling & Negotiation',
    description: 'We facilitate sample requests and help negotiate terms and pricing.',
  },
  {
    step: '05',
    title: 'Production Monitoring',
    description: 'Regular updates and quality checks throughout manufacturing.',
  },
  {
    step: '06',
    title: 'Final Inspection & Shipping',
    description: 'Pre-shipment inspection and coordinated delivery to your location.',
  },
];

const faqs = [
  {
    question: 'What types of products can you help me source?',
    answer: 'We have experience across a wide range of industries including electronics, textiles, machinery, home goods, packaging, and more. If you have a specific product in mind, contact us to discuss your requirements.',
  },
  {
    question: 'How do you verify factories?',
    answer: 'Our verification process includes checking business licenses, visiting factories in person, assessing production capacity, reviewing quality management systems, and checking references from other buyers.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our service fees depend on the scope of work and specific services required. We offer transparent pricing and provide a detailed quote after understanding your project. Contact us for a free consultation.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timeline varies based on product complexity, supplier availability, and your requirements. Typical sourcing takes 2-6 weeks from initial inquiry to production start. We provide estimated timelines for each phase.',
  },
  {
    question: 'Do you handle shipping?',
    answer: 'Yes, we coordinate the entire shipping process including freight forwarding, customs documentation, and delivery. We work with trusted logistics partners to ensure smooth delivery to your destination.',
  },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            data-strk-bg-id="hero-bg-001"
            data-strk-bg="[hero-title] [hero-subtitle]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 id="hero-title" className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="text-lg lg:text-xl text-slate-300 mb-8 max-w-xl">
                Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — 
                all with one trusted partner on the ground in China.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Get a Free Sourcing Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-600 rounded-full opacity-20 blur-3xl" />
                <div className="relative bg-slate-800 rounded-2xl p-6 shadow-2xl">
                  <img
                    alt="Factory inspection in China"
                    data-strk-img-id="hero-factory-001"
                    data-strk-img="[hero-title] [hero-subtitle]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-blue-900 bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 items-center">
            <div className="flex items-center gap-2 text-slate-600">
              <ShieldCheck className="w-6 h-6 text-teal-600" />
              <span className="font-medium">Verified Suppliers Only</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-6 h-6 text-teal-600" />
              <span className="font-medium">48h Response Time</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Globe className="w-6 h-6 text-teal-600" />
              <span className="font-medium">Global Service</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Award className="w-6 h-6 text-teal-600" />
              <span className="font-medium">ISO Quality Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Sourcing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From supplier discovery to final delivery, we handle every step of your China sourcing journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
                <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Challenges We Help You Overcome
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Sourcing from China comes with unique challenges. We have the expertise and local presence 
                to address them effectively.
              </p>
              <div className="space-y-6">
                {problems.map((problem) => (
                  <div key={problem.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{problem.title}</h4>
                      <p className="text-slate-600 text-sm mb-2">{problem.description}</p>
                      <p className="text-slate-700 text-sm font-medium">{problem.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <img
                  alt="Quality inspection in China factory"
                  data-strk-img-id="quality-inspection-001"
                  data-strk-img="[quality-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-lg mb-6"
                />
                <p id="quality-title" className="text-sm text-slate-500 italic">
                  "SSourcing China transformed our supply chain. Their on-ground presence and 
                  quality inspections have been invaluable." 
                  <span className="block mt-2 font-medium text-slate-700 not-italic">
                    — Procurement Director, European Retailer
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We have proven experience across diverse product categories and industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <div
                key={category.name}
                className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <Building2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{category.name}</h3>
                <p className="text-sm text-slate-600">{category.examples}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                View All Product Categories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A clear, transparent process from your first inquiry to product delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-5xl font-bold text-blue-600 opacity-30 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/how-it-works">
                View Full Process
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Streamline Your China Sourcing?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation. Tell us about your product requirements 
            and let us show you how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-700"
              onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Quick answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-slate-50 text-slate-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
