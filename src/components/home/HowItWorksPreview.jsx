import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Search, Factory, ClipboardCheck, Truck, Package } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Tell Us Your Needs',
    desc: 'Share your product specs, target price, quantity, and timeline. We analyze and prepare a sourcing plan.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Matching',
    desc: 'We search our network and industrial clusters to shortlist 3-5 qualified factories for your review.',
  },
  {
    step: '03',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audit of each shortlisted factory. We verify licenses, production lines, and quality systems.',
  },
  {
    step: '04',
    icon: ClipboardCheck,
    title: 'Sampling & Negotiation',
    desc: 'We coordinate samples, negotiate pricing and terms, and help you select the best supplier.',
  },
  {
    step: '05',
    icon: Package,
    title: 'Production & QC',
    desc: 'We monitor production with weekly updates and conduct quality inspections at key stages.',
  },
  {
    step: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We manage logistics, customs clearance, and ensure your goods arrive on time at your door.',
  },
];

const HowItWorksPreview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="process-section-title" className="section-heading">How It Works</h2>
          <p id="process-section-subtitle" className="section-subheading">
            A proven six-step process that takes you from inquiry to delivery, with full transparency at every stage.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="relative flex flex-col items-center text-center group">
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-brand-200 group-hover:scale-110 transition-transform duration-200">
                  {item.step}
                </div>
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center mt-6 mb-4">
                  <item.icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="text-base font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/how-it-works" className="btn-secondary gap-2">
            Learn More About Our Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPreview;
