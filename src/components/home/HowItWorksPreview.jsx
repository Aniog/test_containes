import { Link } from 'react-router-dom';
import { FileText, Search, ClipboardCheck, Factory, Ship, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Request',
    description: 'Tell us what you need — product details, quantity, target price, and timeline.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Matching',
    description: 'We identify and vet potential suppliers, then present you with the best options.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Sample & Verification',
    description: 'We arrange samples, verify factory credentials, and confirm quality standards.',
  },
  {
    icon: Factory,
    step: '04',
    title: 'Production & QC',
    description: 'We monitor production progress and conduct quality inspections at key stages.',
  },
  {
    icon: Ship,
    step: '05',
    title: 'Shipping & Delivery',
    description: 'We handle logistics, customs documentation, and coordinate delivery to your door.',
  },
];

export default function HowItWorksPreview() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle mx-auto">
            A clear, step-by-step process from your initial inquiry to final delivery.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-blue-200"></div>
              )}
              <div className="relative z-10 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-bold text-blue-600 mb-2">Step {item.step}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/how-it-works" className="btn-secondary">
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  );
}
