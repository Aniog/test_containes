import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  MessageSquare, Search, FlaskConical, Factory,
  ClipboardCheck, Truck, ArrowRight, CheckCircle
} from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, specifications, target price, quantity, and timeline. The more detail you provide, the faster we can find the right match.',
    details: ['Product specifications & drawings', 'Target FOB/CIF price', 'Order quantity & MOQ flexibility', 'Required certifications', 'Delivery timeline'],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our verified supplier database and conducts market research to identify 3-5 qualified factories that match your criteria.',
    details: ['Database & market research', 'Initial supplier screening', 'Capability assessment', 'Price & MOQ comparison', 'Shortlist presentation'],
  },
  {
    num: '03',
    icon: FlaskConical,
    title: 'Samples & Negotiation',
    desc: 'We arrange product samples from shortlisted suppliers, coordinate revisions, and negotiate the best pricing and payment terms on your behalf.',
    details: ['Sample ordering & tracking', 'Quality evaluation', 'Design revisions', 'Price negotiation', 'Contract terms finalization'],
  },
  {
    num: '04',
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'Once you approve the order, we monitor production progress with regular factory visits, photo updates, and timeline tracking.',
    details: ['Production kickoff meeting', 'Weekly progress reports', 'Photo & video updates', 'Timeline adherence checks', 'Issue escalation & resolution'],
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Before shipment, our QC team conducts thorough inspections following AQL standards to ensure your goods meet specifications.',
    details: ['Pre-shipment inspection', 'AQL sampling', 'Defect classification', 'Detailed inspection report', 'Pass/fail recommendation'],
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight booking, customs documentation, and logistics to deliver your goods safely to your warehouse or port.',
    details: ['Freight booking (sea/air/rail)', 'Export documentation', 'Customs clearance support', 'Shipment tracking', 'Delivery confirmation'],
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our structured 6-step process ensures transparency, quality, and on-time delivery for every sourcing project.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-6">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-brand-border mt-3" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-brand-blue">STEP {step.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                  <p className="text-brand-muted leading-relaxed mb-4">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                        <span className="text-sm text-brand-dark">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden h-64">
              <img
                data-strk-img-id="hiw-factory-visit-e4f5g6"
                data-strk-img="[hiw-img1-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Factory visit"
                className="w-full h-full object-cover"
              />
              <span id="hiw-img1-title" className="hidden">China factory audit visit inspection</span>
            </div>
            <div className="rounded-xl overflow-hidden h-64">
              <img
                data-strk-img-id="hiw-quality-check-h7i8j9"
                data-strk-img="[hiw-img2-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality inspection"
                className="w-full h-full object-cover"
              />
              <span id="hiw-img2-title" className="hidden">Product quality control inspection warehouse</span>
            </div>
            <div className="rounded-xl overflow-hidden h-64">
              <img
                data-strk-img-id="hiw-shipping-k1l2m3"
                data-strk-img="[hiw-img3-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Container shipping"
                className="w-full h-full object-cover"
              />
              <span id="hiw-img3-title" className="hidden">Container shipping port logistics cargo</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Your Sourcing Project Today
          </h2>
          <p className="text-gray-300 mb-8">
            Submit your requirements and receive a detailed sourcing proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
