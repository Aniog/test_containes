import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Fill out our inquiry form with your product requirements, specifications, target budget, and timeline. The more detail you provide, the faster we can deliver qualified supplier options.',
    items: [
      'Product description and specifications',
      'Target price range and quantity',
      'Quality standards and certifications needed',
      'Preferred timeline and delivery destination',
    ],
  },
  {
    number: '02',
    title: 'Requirements Analysis',
    description: 'Our team reviews your requirements and clarifies any open questions. We assess feasibility, identify potential challenges, and define the sourcing strategy.',
    items: [
      'Feasibility and risk assessment',
      'Category expertise assignment',
      'Sourcing strategy development',
      'Timeline and cost estimate',
    ],
  },
  {
    number: '03',
    title: 'Supplier Research & Shortlisting',
    description: 'We tap into our network of vetted manufacturers and conduct targeted research to identify the best-fit suppliers for your project.',
    items: [
      'Multi-channel supplier search',
      'Initial capability screening',
      'Price quotation collection',
      'Shortlist of 3-5 qualified suppliers',
    ],
  },
  {
    number: '04',
    title: 'Factory Audit & Verification',
    description: 'We visit and audit the shortlisted factories in person. You receive detailed reports with photos and video evidence of their operations.',
    items: [
      'On-site factory visit',
      'Production capacity verification',
      'Quality system assessment',
      'Detailed audit report with media',
    ],
  },
  {
    number: '05',
    title: 'Sample Development & Evaluation',
    description: 'We coordinate sample production from your chosen supplier, evaluate the samples against your specifications, and provide our recommendations.',
    items: [
      'Sample request and follow-up',
      'Quality and specification check',
      'Comparison across suppliers',
      'Sample approval recommendation',
    ],
  },
  {
    number: '06',
    title: 'Order Management & Quality Control',
    description: 'Once you place the order, we manage the production process, conduct inspections, and keep you informed every step of the way.',
    items: [
      'Purchase order management',
      'In-process production inspection',
      'Pre-shipment quality inspection',
      'Regular progress reports',
    ],
  },
  {
    number: '07',
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics to get your goods from the factory to your destination safely and on time.',
    items: [
      'Freight booking and consolidation',
      'Export documentation and customs',
      'Insurance arrangements',
      'Real-time shipment tracking',
    ],
  },
  {
    number: '08',
    title: 'Post-Delivery Support',
    description: 'Our relationship does not end at delivery. We provide post-shipment support and are available for your future sourcing needs.',
    items: [
      'Post-delivery quality follow-up',
      'Supplier relationship management',
      'Ongoing sourcing support',
      'Continuous improvement recommendations',
    ],
  },
];

export default function HowItWorks() {
  const bannerRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current) ImageHelper.loadImages(strkImgConfig, bannerRef.current);
  }, []);

  return (
    <div>
      {/* Banner */}
      <section ref={bannerRef} className="relative bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="how-it-works-banner-bg"
          data-strk-bg="[hiw-subtitle] [hiw-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p id="hiw-subtitle" className="text-brand-400 font-semibold text-sm mb-3">Our Process</p>
          <h1 id="hiw-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            A transparent, structured process designed to minimize risk and maximize results 
            when sourcing from China.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 md:gap-10">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-14 h-14 bg-brand-600 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-slate-200 mt-2" />
                  )}
                </div>
                <div className="flex-1 bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                  <div className="md:hidden text-brand-600 font-bold text-sm mb-2">Step {step.number}</div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">{step.title}</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Start Your Sourcing Journey Today
          </h2>
          <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">
            Submit your requirements and we will guide you through every step of the process.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg px-8 py-4 text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}