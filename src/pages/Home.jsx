import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Search, Shield, Ship, ClipboardCheck, Globe, Users, Award } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'Find verified manufacturers and suppliers matching your product requirements, budget, and quality standards.',
    },
    {
      icon: Factory,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify capabilities, certifications, and business legitimacy before you commit.',
    },
    {
      icon: Shield,
      title: 'Quality Inspection',
      description: 'Pre-production, during production, and pre-shipment inspections to ensure products meet your specifications.',
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including consolidation, customs clearance, and delivery to your warehouse.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Share Requirements', description: 'Tell us your product specs, target price, and timeline.' },
    { step: '02', title: 'We Source Suppliers', description: 'We identify and vet suitable factories in China.' },
    { step: '03', title: 'Verify & Inspect', description: 'We audit factories and inspect samples or production runs.' },
    { step: '04', title: 'Ship & Deliver', description: 'We coordinate logistics and handle export documentation.' },
  ];

  const trustPoints = [
    { icon: Globe, title: 'Local Presence', description: 'Based in Guangzhou with teams across major manufacturing hubs.' },
    { icon: Users, title: 'Experienced Team', description: 'Bilingual sourcing specialists with 10+ years in manufacturing.' },
    { icon: Award, title: 'Proven Track Record', description: '500+ successful projects across electronics, textiles, and industrial goods.' },
    { icon: Shield, title: 'Risk Mitigation', description: 'We verify suppliers and inspect goods so you avoid costly mistakes.' },
  ];

  const problems = [
    'Unreliable suppliers with inconsistent quality',
    'Language and cultural barriers',
    'Hidden costs and pricing surprises',
    'Difficulty verifying factory legitimacy',
    'Complex logistics and customs procedures',
    'Time zone challenges slowing communication',
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, 
                follow production, and coordinate shipping from China. One partner for your entire 
                sourcing journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
                >
                  See How It Works
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-slate-500">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  No upfront fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Free initial consultation
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden">
                <img
                  data-strk-img-id="hero-sourcing-office-8f2a9c"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China sourcing agent office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              End-to-End Sourcing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From finding the right factory to delivering goods to your door, we handle every step of the sourcing process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Common Sourcing Challenges We Solve
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Many buyers struggle with the complexities of sourcing from China. We eliminate these pain points so you can focus on growing your business.
              </p>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden">
                <img
                  data-strk-img-id="problems-sourcing-challenges-8f2a9d"
                  data-strk-img="[problems-subtitle] [problems-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Sourcing challenges"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A simple, transparent process designed to get you from inquiry to delivery with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-100 -translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
            >
              Learn more about our process
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Buyers Trust SSourcing China
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine local expertise with international standards to deliver reliable sourcing services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{point.title}</h3>
                <p className="text-slate-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and sourcing quote. Tell us what you need, and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: 'What products can you source?',
                answer: 'We source a wide range of products including electronics, textiles, home goods, industrial equipment, and more. If you have a specific product in mind, contact us and we\'ll let you know if we can help.',
              },
              {
                question: 'How do you verify suppliers?',
                answer: 'We conduct on-site factory audits, check business licenses, review production capabilities, and verify certifications. We also check references and past client feedback when available.',
              },
              {
                question: 'What are your fees?',
                answer: 'We offer transparent pricing based on the scope of work. Initial consultations and basic supplier searches are free. Detailed quotes are provided after understanding your requirements.',
              },
              {
                question: 'How long does the sourcing process take?',
                answer: 'Timeline varies by product complexity. Simple items may take 2-3 weeks, while complex or custom products can take 4-8 weeks. We provide clear timelines during the initial consultation.',
              },
              {
                question: 'Do you handle shipping and customs?',
                answer: 'Yes, we coordinate end-to-end logistics including consolidation, freight forwarding, customs clearance, and delivery to your specified location.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
