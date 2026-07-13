import React from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const problems = [
  {
    problem: 'Unreliable Suppliers',
    description: 'Difficulty finding trustworthy manufacturers who deliver on time and meet quality standards.',
    solution: 'We verify every supplier through on-site audits and maintain a database of pre-vetted manufacturers.',
  },
  {
    problem: 'Quality Issues',
    description: 'Products not matching specifications, high defect rates, or inconsistent quality between batches.',
    solution: 'Multi-stage quality inspections from pre-production to pre-shipment ensure consistent quality.',
  },
  {
    problem: 'Communication Barriers',
    description: 'Language differences, time zones, and cultural misunderstandings causing delays and errors.',
    solution: 'Bilingual team acts as your local representative, handling all supplier communications in real-time.',
  },
  {
    problem: 'Hidden Costs',
    description: 'Unexpected fees, price increases after order confirmation, or inflated shipping costs.',
    solution: 'Transparent pricing with detailed breakdowns and no hidden fees. We negotiate the best terms for you.',
  },
  {
    problem: 'Shipping Complications',
    description: 'Complex customs procedures, documentation errors, and unreliable logistics partners.',
    solution: 'We handle all customs clearance, documentation, and coordinate with trusted freight forwarders.',
  },
  {
    problem: 'Lack of Visibility',
    description: 'No clear view of production status, shipment tracking, or quality inspection results.',
    solution: 'Regular updates, photo/video reports, and real-time tracking throughout the entire process.',
  },
];

const ProblemsWeSolve = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-6">
            Common Sourcing Challenges We Solve
          </h2>
          <p className="text-lg text-text-secondary">
            We understand the pain points of sourcing from China. Here's how we address each one.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((item) => (
            <div key={item.problem} className="bg-white rounded-xl p-6 shadow-sm border border-border-light">
              {/* Problem */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">{item.problem}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border-light my-4" />

              {/* Solution */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Our Solution</h4>
                  <p className="text-text-secondary text-sm">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;
