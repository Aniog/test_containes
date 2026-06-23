import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Shield, ClipboardCheck, Truck, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Submit Your Inquiry',
      description: 'Tell us what you need. Provide product details, quantity, target price, quality requirements, and your timeline.',
      details: [
        'Product specifications',
        'Target price range',
        'Quality standards',
        'Required certifications',
        'Delivery timeline'
      ]
    },
    {
      number: '02',
      icon: Shield,
      title: 'We Find & Verify Suppliers',
      description: 'We research and vet potential manufacturers, then conduct factory audits to verify capabilities and legitimacy.',
      details: [
        'Supplier shortlisting',
        'Factory verification visits',
        'Capability assessment',
        'Certification checks',
        'Price comparisons'
      ]
    },
    {
      number: '03',
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'We conduct thorough quality inspections at key production stages to ensure your products meet specifications.',
      details: [
        'Pre-shipment inspection',
        'During production checks',
        'AQL sampling',
        'Photo/video reports',
        'Defect documentation'
      ]
    },
    {
      number: '04',
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'We coordinate all logistics from factory to your designated location, handling customs and documentation.',
      details: [
        'Freight coordination',
        'Customs clearance',
        'Documentation handling',
        'Tracking updates',
        'Door-to-door delivery'
      ]
    }
  ];

  const timeline = [
    { stage: 'Inquiry Submission', time: 'Day 1', description: 'You submit your requirements' },
    { stage: 'Supplier Matching', time: 'Days 2-7', description: 'We find and present 3-5 suppliers' },
    { stage: 'Factory Audit', time: 'Days 8-12', description: 'We verify factories and negotiate terms' },
    { stage: 'Sample Approval', time: 'Days 13-25', description: 'Samples are produced and approved' },
    { stage: 'Production', time: 'Days 26-55', description: 'Mass production with QC checks' },
    { stage: 'Inspection & Shipping', time: 'Days 56-65', description: 'Final inspection and freight' },
    { stage: 'Delivery', time: 'Days 66-75', description: 'Products arrive at your location' }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Our proven 4-step process makes sourcing from China simple, transparent, and risk-free.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-slate-900 text-white p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-6xl font-bold text-slate-700 mb-4">{step.number}</div>
                      <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <step.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-slate-300 mt-4">{step.description}</p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">What Happens:</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A typical sourcing project takes 10-12 weeks from inquiry to delivery
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Stage</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Timeline</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Description</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100">
                    <td className="py-4 px-4 font-medium text-slate-900">{item.stage}</td>
                    <td className="py-4 px-4 text-blue-600 font-medium">{item.time}</td>
                    <td className="py-4 px-4 text-slate-600">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Submit your inquiry today and let us handle the rest
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;