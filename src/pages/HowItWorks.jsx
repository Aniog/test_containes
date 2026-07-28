import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  MessageSquare,
  FileText,
  Search,
  ClipboardCheck,
  Package,
  Truck,
  Clock,
  Shield,
  Users,
  Star
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const PageHero = ({ title, subtitle }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-primary py-16 lg:py-24">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg text-white/80">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, title, description, icon: Icon, details, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div className="bg-surface rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-video bg-primary/5 relative overflow-hidden">
          <img
            data-strk-img-id={`step-img-${step}`}
            data-strk-img={`[step-title-${step}]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
            {step}
          </div>
        </div>
        
        <div className="p-6">
          <h3 id={`step-title-${step}`} className="text-xl font-semibold text-text-primary mb-2">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {description}
          </p>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
          >
            {isExpanded ? 'Show less' : 'View details'}
            <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {isExpanded && (
          <div className="px-6 pb-6 pt-0 border-t border-border bg-background/50">
            <ul className="space-y-2 pt-4">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const HowItWorksPage = () => {
  const steps = [
    {
      step: 1,
      title: 'Submit Your Sourcing Request',
      description: 'Tell us what product you need, your target price, quantity requirements, and any specific specifications or certifications.',
      icon: FileText,
      details: [
        'Fill out our inquiry form with product details',
        'Specify quality standards and requirements',
        'Indicate your target price range',
        'Share any existing samples or technical drawings',
        'Let us know your timeline requirements',
      ],
    },
    {
      step: 2,
      title: 'We Research and Identify Suppliers',
      description: 'Our team conducts thorough market research to find verified manufacturers that match your requirements.',
      icon: Search,
      details: [
        'Search our database of 500+ verified suppliers',
        'Verify factory credentials and capabilities',
        'Assess production capacity and lead times',
        'Check certifications and quality systems',
        'Request preliminary quotes from matching suppliers',
      ],
    },
    {
      step: 3,
      title: 'Supplier Evaluation and Selection',
      description: 'We present you with vetted supplier options and help you evaluate and select the best match for your needs.',
      icon: Users,
      details: [
        'Receive detailed supplier profiles',
        'Review factory inspection reports',
        'Compare pricing and terms',
        'Request and evaluate product samples',
        'Negotiate favorable contract terms',
      ],
    },
    {
      step: 4,
      title: 'Sample Approval and Contract',
      description: 'Once you approve a sample, we help finalize the contract and prepare for mass production.',
      icon: ClipboardCheck,
      details: [
        'Request samples from selected supplier',
        'Conduct sample quality evaluation',
        'Negotiate final pricing and payment terms',
        'Draft and review purchase agreement',
        'Arrange sample shipping to you',
      ],
    },
    {
      step: 5,
      title: 'Production Monitoring',
      description: 'We oversee the production process with regular updates and quality checks to ensure everything stays on track.',
      icon: Package,
      details: [
        'Conduct pre-production meeting with factory',
        'Perform pre-production inspection (PPI)',
        'Monitor production progress weekly',
        'Conduct during-production inspection (DPI)',
        'Address any issues promptly',
      ],
    },
    {
      step: 6,
      title: 'Quality Inspection',
      description: 'Our QC team performs comprehensive inspections to ensure your products meet all specified standards.',
      icon: Shield,
      details: [
        'Conduct pre-shipment inspection (PSI)',
        'Verify packaging and labeling',
        'Perform AQL-based sampling',
        'Document inspection results with photos',
        'Approve shipment or request corrections',
      ],
    },
    {
      step: 7,
      title: 'Shipping and Logistics',
      description: 'We coordinate all aspects of shipping, from factory to your designated delivery point.',
      icon: Truck,
      details: [
        'Coordinate freight forwarding',
        'Prepare export documentation',
        'Arrange customs clearance',
        'Track shipment in real-time',
        'Ensure delivery to your door',
      ],
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Skip the research and verification process. We handle supplier discovery, verification, and management for you.',
    },
    {
      icon: Shield,
      title: 'Reduce Risk',
      description: 'Our verification process protects you from fraud and ensures you work with legitimate, capable suppliers.',
    },
    {
      icon: Star,
      title: 'Ensure Quality',
      description: 'Professional QC inspections at key stages ensure your products meet your quality standards.',
    },
    {
      icon: MessageSquare,
      title: 'Better Communication',
      description: 'Our bilingual team bridges the language gap and ensures clear communication throughout.',
    },
  ];

  const timeline = [
    { stage: 'Supplier Identification', time: '1-2 weeks' },
    { stage: 'Sample Evaluation', time: '2-4 weeks' },
    { stage: 'Production', time: '4-12 weeks' },
    { stage: 'Shipping', time: '2-6 weeks' },
  ];

  return (
    <>
      <PageHero 
        title="How It Works" 
        subtitle="Our step-by-step process ensures a smooth, risk-free sourcing experience from start to finish"
      />

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our 7-Step Sourcing Process
            </h2>
            <p className="text-text-secondary text-lg">
              A comprehensive approach designed to minimize risk and maximize success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <StepCard key={step.step} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Typical Timeline
            </h2>
            <p className="text-text-secondary text-lg">
              While timelines vary by product complexity, here's what you can generally expect
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {timeline.map((item, index) => (
                <div key={index} className="bg-background rounded-lg p-6 text-center border border-border">
                  <div className="text-2xl font-bold text-primary mb-2">{item.time}</div>
                  <div className="text-text-secondary text-sm">{item.stage}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-text-muted text-sm mt-4">
              Total typical timeline: 9-24 weeks depending on product and order size
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Our Process Works
            </h2>
            <p className="text-text-secondary text-lg">
              The benefits of working with our proven sourcing process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-surface p-6 rounded-lg border border-border text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Submit your sourcing request today and let us help you find the right supplier
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;