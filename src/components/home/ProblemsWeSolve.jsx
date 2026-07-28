import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const problems = [
  {
    problem: 'Finding reliable suppliers in China is difficult',
    solution: 'We maintain a vetted network of 500+ verified manufacturers across major industries.',
  },
  {
    problem: 'Quality issues discovered only after shipment arrives',
    solution: 'Pre-production, in-line, and pre-shipment inspections catch defects before products leave China.',
  },
  {
    problem: 'Communication barriers with Chinese factories',
    solution: 'Our bilingual team handles all supplier communication, negotiations, and issue resolution.',
  },
  {
    problem: 'Unreliable delivery timelines and production delays',
    solution: 'Production monitoring with weekly updates ensures orders stay on schedule.',
  },
  {
    problem: 'Complex shipping and customs documentation',
    solution: 'End-to-end logistics coordination including customs clearance and door-to-door delivery.',
  },
  {
    problem: 'No visibility into factory capabilities or legitimacy',
    solution: 'On-site factory audits verify certifications, capacity, equipment, and business credentials.',
  },
];

const ProblemsWeSolve = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common sourcing challenges and how we address them for global buyers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">{item.problem}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">{item.solution}</p>
                  </div>
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
