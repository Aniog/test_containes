import React from 'react';
import { AlertTriangle, XCircle, Clock, DollarSign, CheckCircle } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Finding trustworthy manufacturers who deliver on time and meet quality standards is challenging without local knowledge.',
  },
  {
    icon: XCircle,
    title: 'Quality Issues',
    description: 'Product defects, inconsistent quality, and non-compliance with specifications can damage your brand reputation.',
  },
  {
    icon: Clock,
    title: 'Communication Barriers',
    description: 'Language differences, time zones, and cultural gaps make it difficult to manage suppliers effectively.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees, shipping complications, and customs issues can significantly increase your total costs.',
  },
];

const solutions = [
  'Verified supplier network with proven track records',
  'On-site factory audits and quality inspections',
  'Bilingual team handling all communications',
  'Transparent pricing with no hidden fees',
];

export default function ProblemsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Problems */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Problems We Solve for Global Buyers
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Sourcing from China can be complex. We eliminate the risks and challenges so you can focus on growing your business.
            </p>
            
            <div className="space-y-6">
              {problems.map((problem) => (
                <div key={problem.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{problem.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-gray-800 p-8 lg:p-10 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-green-400">
              How We Help
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{solution}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-gray-400 mt-1">Verified Suppliers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-gray-400 mt-1">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">10,000+</div>
                  <div className="text-sm text-gray-400 mt-1">Orders Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">98%</div>
                  <div className="text-sm text-gray-400 mt-1">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
