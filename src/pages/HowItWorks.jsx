import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Requirements',
      desc: 'Complete our sourcing inquiry form with product details, specifications, target pricing, and quality requirements.',
      time: 'Day 1'
    },
    {
      number: '02',
      title: 'Requirement Review',
      desc: 'Our sourcing team analyzes your needs and clarifies any questions about specifications or compliance requirements.',
      time: 'Day 1-2'
    },
    {
      number: '03',
      title: 'Supplier Search',
      desc: 'We search our supplier database and industry networks to identify manufacturers matching your criteria.',
      time: 'Day 3-5'
    },
    {
      number: '04',
      title: 'Shortlist Presentation',
      desc: 'You receive a detailed comparison of 3-5 qualified suppliers including capabilities, pricing, and verification status.',
      time: 'Day 6-7'
    },
    {
      number: '05',
      title: 'Sample Evaluation',
      desc: 'Selected suppliers provide samples for your review. We coordinate shipping and provide feedback on sample quality.',
      time: 'Week 2-3'
    },
    {
      number: '06',
      title: 'Order Placement',
      desc: 'Once samples are approved, we assist with purchase order negotiation, contract terms, and payment arrangements.',
      time: 'Week 3-4'
    },
    {
      number: '07',
      title: 'Production Oversight',
      desc: 'We monitor production milestones, conduct inspections at key stages, and provide regular progress updates.',
      time: 'Week 4-8'
    },
    {
      number: '08',
      title: 'Shipping & Delivery',
      desc: 'Final inspection, documentation review, freight booking, and coordination until goods reach your destination.',
      time: 'Week 8-10'
    }
  ];

  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl font-semibold mb-4">How It Works</h1>
          <p className="text-lg text-slate-600">A clear, step-by-step process from initial inquiry to final delivery. Typical timeline: 8-12 weeks depending on product complexity.</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-8 border-b border-slate-200 pb-8 last:border-0">
              <div className="w-16 flex-shrink-0">
                <div className="text-3xl font-semibold text-slate-300">{step.number}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <span className="text-sm text-slate-500 font-mono">{step.time}</span>
                </div>
                <p className="text-slate-600 max-w-2xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Begin?</h2>
          <p className="text-slate-600 mb-8">Start with a free consultation. We'll review your requirements and outline a sourcing plan at no obligation.</p>
          <Link to="/contact"><Button size="lg">Start Your Sourcing Project</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;