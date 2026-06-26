import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Shield, Truck, Zap, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Layout from '@/Layout';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const fullSteps = [
    {
      title: 'Submit Inquiry',
      desc: 'Fill out our inquiry form with your product specifications, target price, and quantity. The more details you provide, the faster we can find the right match.',
      icon: Globe
    },
    {
      title: 'Supplier Matching',
      desc: 'Our sourcing team filters our internal database of 5,000+ verified factories and negotiates prices to find the top 3 best-value options for you.',
      icon: Search
    },
    {
      title: 'Sample Processing',
      desc: 'We collect and inspect samples from chosen suppliers. We can consolidate multiple samples into one box and ship it to you to save costs.',
      icon: Package
    },
    {
      title: 'Contract & Production',
      desc: 'Once you approve a sample, we secure the manufacturing contract and manage the production timeline, providing weekly status updates.',
      icon: Factory
    },
    {
      title: 'Quality Inspection',
      desc: 'Before final payment, our QC team performs a rigorous on-site inspection based on AQL standards, catchment defects before they ship.',
      icon: Shield
    },
    {
      title: 'Shipping & Delivery',
      desc: 'We arrange the most efficient freight method, handle Chinese export customs, and ensure your goods arrive safely at your door.',
      icon: Truck
    }
  ];

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="bg-primary py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Sourcing Process</h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              We provide a transparent, risk-free path from finding a supplier in China to receiving quality-assured products at your warehouse.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {fullSteps.map((step, idx) => (
                <div key={idx} className="relative p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:border-accent hover:bg-white hover:shadow-2xl transition-all group">
                  <div className="absolute -top-6 left-10 w-12 h-12 bg-accent text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-white">
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mt-4 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 lg:flex items-center gap-16">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <img 
                  data-strk-img-id="qc-process-img"
                  data-strk-img="quality control inspector inspection checklist AQL"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality Inspection"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-extrabold text-primary mb-6">Built-in Risk Mitigation</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Shield className="h-6 w-6 text-accent shrink-0" />
                    <p className="text-gray-600"><strong>Anti-Fraud Protection:</strong> We only work with factories that have been verified with business licenses and tax registrations.</p>
                  </div>
                  <div className="flex gap-4">
                    <Star className="h-6 w-6 text-accent shrink-0" />
                    <p className="text-gray-600"><strong>AQL Standards:</strong> We use standard ISO procedures for inspections, ensuring consistency and accuracy.</p>
                  </div>
                  <div className="flex gap-4">
                    <Zap className="h-6 w-6 text-accent shrink-0" />
                    <p className="text-gray-600"><strong>Real-time Updates:</strong> Get photos and videos directly from the factory floor during production and inspection.</p>
                  </div>
                </div>
                <NavLink to="/contact" className="mt-10 inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all">
                  Start your first project <ArrowRight className="h-5 w-5" />
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HowItWorks;

// Helper icons needed by the fullSteps
const Search = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const Package = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>
);
const Factory = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
);
