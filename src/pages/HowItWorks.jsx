import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare, Users, Factory, CheckCircle, Truck, Handshake,
  ArrowRight, Send, Clock, Globe, ShieldCheck, DollarSign,
} from 'lucide-react';
import { siteData } from '@/data/content';

const iconMap = {
  MessageSquare, Users, Factory, CheckCircle, Truck, Handshake,
};

const HowItWorks = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-blue py-20 md:py-24">
        <div className="container-custom text-center">
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            A clear, step-by-step process designed to make sourcing from China 
            simple, transparent, and risk-free.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {siteData.process.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isLast = index === siteData.process.length - 1;
              return (
                <div key={step.step} className="relative">
                  <div className="flex gap-6 md:gap-10">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className="flex-shrink-0 w-14 h-14 bg-accent-orange rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                        {step.step}
                      </div>
                      {!isLast && (
                        <div className="w-0.5 bg-gray-200 flex-grow mt-2" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-12 md:pb-16">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-primary-blue" />
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed max-w-lg">{step.description}</p>
                      {index === 0 && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <p className="text-blue-800 text-sm">
                            <strong>Tip:</strong> The more details you provide, the better we can match you 
                            with the right suppliers. Include product specs, target price, quantity, and timeline.
                          </p>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                          <p className="text-amber-800 text-sm">
                            <strong>Note:</strong> Sample costs are typically deducted from your first production order. 
                            We coordinate multiple rounds if needed.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why This Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Our Process Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: 'Time Efficient', desc: 'We handle the time-consuming work of finding and vetting suppliers so you can focus on your business.' },
              { icon: ShieldCheck, title: 'Risk Reduction', desc: 'Multiple verification and inspection stages minimize the risk of quality issues and supplier problems.' },
              { icon: Globe, title: 'Local Expertise', desc: 'Our on-the-ground team understands Chinese business culture, language, and manufacturing practices.' },
              { icon: DollarSign, title: 'Cost Savings', desc: 'Our supplier network and negotiation skills typically save clients 10-25% on sourcing costs.' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Typical Project Timeline</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Timelines vary by product complexity and order size. Here is a general guide.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { phase: 'Supplier Research & Shortlisting', time: '5-10 business days' },
                { phase: 'Sample Production & Approval', time: '2-3 weeks' },
                { phase: 'Price Negotiation & Contract', time: '3-5 business days' },
                { phase: 'Production', time: '15-45 days (varies by product)' },
                { phase: 'Quality Inspection', time: '2-3 business days' },
                { phase: 'Shipping (Sea Freight)', time: '20-35 days' },
                { phase: 'Shipping (Air Freight)', time: '5-10 days' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="text-gray-900 font-medium">{item.phase}</span>
                  <span className="text-primary-blue font-semibold text-sm">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-blue">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Share your requirements and we will provide a detailed plan and quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent-orange text-white font-bold rounded-lg hover:bg-accent-orange-hover transition-colors text-lg"
          >
            <Send className="w-5 h-5 mr-2" />
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
