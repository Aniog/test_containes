import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ClipboardList, Search, Factory, ShieldCheck, Ship } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    number: '01',
    title: 'Submit Your Request',
    description: 'Share product details, target price, quantity, and quality requirements with our team. The more detail you provide, the better we can match you with the right suppliers.',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Supplier Matching',
    description: 'We source and shortlist reliable factories that match your needs. We conduct initial checks on their capabilities, certifications, and track record.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Verification & Inspection',
    description: 'We verify suppliers, review samples, and arrange inspections before production begins. You get full visibility into factory conditions and product quality.',
    icon: Factory,
  },
  {
    number: '04',
    title: 'Production Follow-Up',
    description: 'We monitor production schedules, conduct quality checks, and keep you updated with progress reports. Issues are addressed before they affect delivery.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle export documentation, manage customs clearance, and track shipment until final delivery to your door.',
    icon: Ship,
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="how-title" className="text-4xl font-bold text-slate-900 sm:text-5xl">
              How It Works
            </h1>
            <p id="how-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              A clear, step-by-step process designed to reduce risk and deliver reliable results for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <div key={number} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-2xl font-bold text-slate-200">{number}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 id="process-detail-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Transparent Process, Real Results
              </h2>
              <p id="process-detail-subtitle" className="mt-4 text-lg text-slate-600">
                Every step is documented and shared with you. You will receive inspection reports, production updates, and shipping tracking information throughout the process.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Dedicated sourcing specialist assigned to your project',
                  'Regular progress updates and transparent reporting',
                  'Direct communication with suppliers when needed',
                  'Risk mitigation at every stage of the process',
                  'Post-delivery support and issue resolution',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm leading-relaxed text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
              >
                Start your sourcing project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <img
                alt="Sourcing process overview"
                className="rounded-2xl shadow-xl"
                data-strk-img-id="process-detail-img"
                data-strk-img="[process-detail-subtitle] [process-detail-title] [section-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="how-cta-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p id="how-cta-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Contact us today for a free consultation and sourcing quote.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
