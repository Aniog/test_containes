import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, FileCheck, Package, Truck, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      duration: '1-2 days',
      icon: Users,
      description: 'We discuss your product requirements, target pricing, quality standards, and project timeline.',
      activities: [
        'Product specifications review',
        'Volume and timeline requirements',
        'Quality and compliance needs',
        'Budget parameters',
      ],
    },
    {
      number: '02',
      title: 'Supplier Identification',
      duration: '2-3 weeks',
      icon: FileCheck,
      description: 'Our team searches our supplier database and network to identify candidates matching your criteria.',
      activities: [
        'Database and market research',
        'Initial capability screening',
        'Preliminary pricing analysis',
        'Shortlist development',
      ],
    },
    {
      number: '03',
      title: 'Factory Verification',
      duration: '1-2 weeks',
      icon: Award,
      description: 'On-site audits verify supplier legitimacy, production capacity, and operational standards.',
      activities: [
        'Business documentation review',
        'Facility inspection',
        'Equipment and capacity assessment',
        'Reference verification',
      ],
    },
    {
      number: '04',
      title: 'Sample Evaluation',
      duration: '2-4 weeks',
      icon: Package,
      description: 'Samples are obtained, evaluated against specifications, and refined as needed.',
      activities: [
        'Sample ordering and tracking',
        'Specification compliance testing',
        'Quality assessment',
        'Feedback and iteration',
      ],
    },
    {
      number: '05',
      title: 'Order Management',
      duration: '4-12 weeks',
      icon: Clock,
      description: 'We oversee production, conduct quality inspections, and coordinate logistics.',
      activities: [
        'Production schedule monitoring',
        'Quality control inspections',
        'Issue resolution',
        'Documentation preparation',
      ],
    },
    {
      number: '06',
      title: 'Delivery & Support',
      duration: '1-4 weeks',
      icon: Truck,
      description: 'Goods are shipped with complete documentation. We provide follow-up support as needed.',
      activities: [
        'Freight coordination',
        'Export documentation',
        'Shipping updates',
        'Post-delivery support',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">How It Works</h1>
          <p className="text-xl text-slate-300">
            A structured, transparent process designed to minimize risk and deliver consistent results.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="grid md:grid-cols-12 gap-8 items-start border-b border-gray-200 pb-12 last:border-0 last:pb-0">
              <div className="md:col-span-3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="text-slate-700" size={24} />
                  </div>
                  <div className="text-3xl font-semibold text-slate-300">{step.number}</div>
                </div>
                <div className="text-sm text-slate-500">{step.duration}</div>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-600 mb-4">{step.description}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {step.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Begin?</h2>
          <p className="text-slate-600 mb-8">
            Contact us to discuss your sourcing requirements and receive a customized project proposal.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;