import { ShieldAlert, ThumbsDown, Languages, Clock, Receipt, Truck, FileText } from 'lucide-react';
import { problemsWeSolve } from '@/data/content';

const iconMap = {
  ShieldAlert, ThumbsDown, Languages, Clock, Receipt, Truck,
};

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-ss-text tracking-tight mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-ss-body max-w-2xl mx-auto">
            Common challenges when sourcing from China, and how we help you overcome them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemsWeSolve.map((problem, index) => {
            const Icon = iconMap[problem.icon] || FileText;
            return (
              <div
                key={index}
                className="flex items-start p-6 rounded-xl border border-ss-border bg-white hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-semibold text-ss-text mb-1.5">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-ss-body leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}