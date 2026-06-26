import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, FileCheck, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      duration: '1-2 days',
      desc: 'We discuss your product requirements, target price range, quality standards, and timeline expectations.',
      icon: Users,
      details: ['Product specifications review', 'Quantity and timeline discussion', 'Budget parameters', 'Quality requirements'],
    },
    {
      number: '02',
      title: 'Supplier Identification',
      duration: '1-3 weeks',
      desc: 'We search our supplier database and industry networks to identify candidates that match your criteria.',
      icon: FileCheck,
      details: ['Database search and screening', 'Initial capability assessment', 'Shortlist development', 'Preliminary pricing'],
    },
    {
      number: '03',
      title: 'Factory Verification',
      duration: '1-2 weeks',
      desc: 'On-site visits to verify supplier legitimacy, production capabilities, and quality management systems.',
      icon: FileCheck,
      details: ['Business documentation review', 'Factory tour and assessment', 'Equipment verification', 'Staff interviews'],
    },
    {
      number: '04',
      title: 'Sample Evaluation',
      duration: '2-4 weeks',
      desc: 'Coordinate sample production and testing to confirm supplier ability to meet your specifications.',
      icon: FileCheck,
      details: ['Sample order placement', 'Quality testing coordination', 'Specification adjustments', 'Final supplier selection'],
    },
    {
      number: '05',
      title: 'Production Management',
      duration: '4-12 weeks',
      desc: 'Monitor production progress, conduct inspections, and ensure quality standards are maintained.',
      icon: Clock,
      details: ['Production schedule tracking', 'In-process inspections', 'Quality documentation', 'Issue resolution'],
    },
    {
      number: '06',
      title: 'Logistics & Delivery',
      duration: '2-6 weeks',
      desc: 'Coordinate shipping, customs clearance, and final delivery to your specified destination.',
      icon: Truck,
      details: ['Freight booking', 'Documentation preparation', 'Customs coordination', 'Delivery confirmation'],
    },
  ];

  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">How It Works</h1>
          <p className="text-xl text-[#a0aec0]">A structured, transparent process from inquiry to delivery</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="text-5xl font-semibold text-[#3182ce]">{step.number}</div>
                </div>
                <div className="md:col-span-10">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-6 h-6 text-[#3182ce]" />
                    <h2 className="text-2xl font-semibold">{step.title}</h2>
                    <span className="text-sm text-[#4a5568] ml-auto">{step.duration}</span>
                  </div>
                  <p className="text-[#4a5568] mb-6 max-w-3xl">{step.desc}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#4a5568]">
                        <span className="w-1.5 h-1.5 bg-[#3182ce] rounded-full" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7fafc]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Begin?</h2>
          <p className="text-[#4a5568] mb-6">Start with a consultation to discuss your sourcing requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#3182ce] text-white px-6 py-3 rounded-md font-medium hover:bg-[#2b6cb0]">
            Schedule a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
