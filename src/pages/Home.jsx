import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Shield, Ship, Search, Package, ClipboardCheck, Truck, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'Find verified manufacturers and suppliers across China based on your exact product requirements.',
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify business licenses, production capacity, and quality management systems.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your standards.',
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management from factory to your warehouse, including customs clearance.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Share Your Requirements',
      description: 'Tell us what you need: product specs, quantity, budget, and timeline.',
    },
    {
      step: '02',
      title: 'We Source & Verify',
      description: 'We find suitable suppliers, verify their credentials, and negotiate on your behalf.',
    },
    {
      step: '03',
      title: 'Inspect & Approve',
      description: 'We conduct quality inspections and provide detailed reports before shipment.',
    },
    {
      step: '04',
      title: 'Ship & Deliver',
      description: 'We coordinate shipping, handle documentation, and track until delivery.',
    },
  ];

  const problems = [
    'Unreliable suppliers with inconsistent quality',
    'Language barriers and cultural differences',
    'Difficulty verifying factory legitimacy',
    'Hidden costs and pricing surprises',
    'Complex logistics and customs procedures',
    'Time zone challenges and communication delays',
  ];

  const trustPoints = [
    { icon: Users, text: '10+ years of sourcing experience' },
    { icon: Award, text: '500+ successful projects delivered' },
    { icon: Shield, text: '100% transparent pricing' },
    { icon: Clock, text: 'Average 2-3 week sourcing cycle' },
  ];

  const faqs = [
    {
      question: 'What products can you source?',
      answer: 'We source a wide range of products including electronics, textiles, home goods, machinery, and more. If you have a specific product in mind, contact us to discuss your requirements.',
    },
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct comprehensive factory audits including business license verification, on-site visits, production capacity assessment, and quality management system evaluation.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fees depend on the scope of work. We offer transparent pricing with no hidden costs. Contact us for a free quote tailored to your specific needs.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typically 2-3 weeks for supplier identification and verification, plus additional time for production and shipping based on your product requirements.',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            data-strk-img-id="hero-bg-8f2a9c"
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="China sourcing background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-8">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-slate-900">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-3">
                <point.icon className="h-6 w-6 text-slate-900 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">{point.text}</span>
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
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive China sourcing solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A simple, transparent process to source products from China
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-slate-200 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Problems We Solve
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Sourcing from China can be challenging. We eliminate the common pain points so you can focus on growing your business.
              </p>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-red-600 text-xs">✕</span>
                    </div>
                    <span className="ml-3 text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solution</h3>
              <ul className="space-y-4">
                {[
                  'Verified suppliers with proven track records',
                  'Native English speakers as your dedicated agents',
                  'Comprehensive factory audits and certifications',
                  'Transparent pricing with no hidden fees',
                  'End-to-end logistics and customs handling',
                  '24/7 support across all time zones',
                ].map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-600 mt-0.5" />
                    <span className="ml-3 text-slate-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Products We Source
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We source a wide range of products across multiple industries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Electronics',
              'Textiles & Apparel',
              'Home & Garden',
              'Machinery',
              'Auto Parts',
              'Toys & Gifts',
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <Package className="h-8 w-8 text-slate-900 mx-auto mb-3" />
                <span className="text-sm font-medium text-slate-700">{category}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Product Categories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how we've helped businesses like yours succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Electronics Manufacturer',
                client: 'US-based Retailer',
                result: 'Reduced costs by 25% while improving quality',
              },
              {
                title: 'Textile Supplier',
                client: 'European Fashion Brand',
                result: 'Found 3 new suppliers in 2 weeks',
              },
              {
                title: 'Home Goods',
                client: 'Australian E-commerce Store',
                result: 'Streamlined shipping and reduced lead time by 40%',
              },
            ].map((caseStudy, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{caseStudy.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{caseStudy.client}</p>
                <p className="text-slate-700">{caseStudy.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a free, no-obligation sourcing quote today. Our team will respond within 24 hours.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
