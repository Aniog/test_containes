import { FileText, Users, ClipboardList, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Tell us what you need: product specifications, quantities, target price, and timeline. We review your request within 24 hours.',
  },
  {
    icon: Users,
    step: '02',
    title: 'Supplier Matching & Verification',
    description: 'We identify qualified suppliers, verify their credentials, and present you with vetted options and detailed quotations.',
  },
  {
    icon: ClipboardList,
    step: '03',
    title: 'Sampling & Production',
    description: 'We coordinate sample approval, monitor production progress, and conduct quality inspections at key milestones.',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Shipping & Delivery',
    description: 'We arrange freight forwarding, handle customs documentation, and ensure your goods arrive on time and in good condition.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">How Our Sourcing Process Works</h2>
          <p className="section-subtitle mx-auto">
            A clear, transparent process from inquiry to delivery. We keep you informed at every stage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <span className="text-slate-300 text-2xl">&rarr;</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/how-it-works" className="btn-primary">
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  );
}
