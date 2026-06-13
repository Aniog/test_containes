import { SectionHeading } from '@/components/ui/SectionHeading';
import { XCircle, CheckCircle } from 'lucide-react';

const problems = [
  {
    problem: 'Unreliable suppliers who disappear after receiving payment',
    solution: 'We verify every supplier with on-site visits, background checks, and reference verification before you commit.',
  },
  {
    problem: 'Products arriving with defects or not matching specifications',
    solution: 'Multi-stage quality inspections at production, mid-line, and pre-shipment to catch issues early.',
  },
  {
    problem: 'Communication barriers with Chinese manufacturers',
    solution: 'Our bilingual team handles all supplier communication in Mandarin, removing language obstacles.',
  },
  {
    problem: 'Hidden costs and unexpected delays in production',
    solution: 'Transparent pricing breakdowns and regular production updates keep you informed throughout.',
  },
  {
    problem: 'Difficulty navigating Chinese shipping and customs',
    solution: 'We handle all logistics documentation, customs clearance, and freight arrangements end-to-end.',
  },
  {
    problem: 'No way to verify if a factory is legitimate or capable',
    solution: 'Detailed factory audit reports with photos, certifications, capacity data, and compliance records.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <SectionHeading
          badge="Why Choose Us"
          title="Problems We Solve"
          description="Sourcing from China comes with real challenges. We address each one with proven processes built over a decade of experience."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-3">{item.problem}</p>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-500 leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
