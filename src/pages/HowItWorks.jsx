import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Shield,
  FileText,
  Truck,
  MessageCircle
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      number: 1,
      title: 'Submit Your Inquiry',
      description: 'Tell us what you need. Provide product details, quantity, target price, quality requirements, and your timeline.',
      details: [
        'Product specifications',
        'Target price range',
        'Quality standards',
        'Required certifications',
        'Order quantity',
        'Delivery timeline',
      ],
      icon: FileText,
    },
    {
      number: 2,
      title: 'We Find & Verify Suppliers',
      description: 'Our team identifies 3-5 qualified suppliers matching your requirements and conducts thorough verification.',
      details: [
        'Supplier identification',
        'Business license check',
        'Factory capability assessment',
        'Certification verification',
        'Price comparison',
        'Recommendation report',
      ],
      icon: Shield,
    },
    {
      number: 3,
      title: 'You Select a Supplier',
      description: 'Review our detailed supplier reports and select the best match for your needs.',
      details: [
        'Detailed supplier profiles',
        'Factory photos and videos',
        'Price breakdowns',
        'Production capacity info',
        'Certification copies',
        'Reference checks',
      ],
      icon: Users,
    },
    {
      number: 4,
      title: 'We Negotiate Terms',
      description: 'We negotiate the best pricing, payment terms, and production conditions on your behalf.',
      details: [
        'Price negotiation',
        'Payment term setup',
        'Quality specifications',
        'Lead time agreement',
        'Contract drafting',
        'MOQ clarification',
      ],
      icon: MessageCircle,
    },
    {
      number: 5,
      title: 'Production & Monitoring',
      description: 'We monitor production with regular updates, inspections, and sample approvals.',
      details: [
        'Production progress tracking',
        'Quality inspections',
        'Sample approval',
        'Issue resolution',
        'Timeline management',
        'Photo/video updates',
      ],
      icon: Clock,
    },
    {
      number: 6,
      title: 'Shipping & Delivery',
      description: 'We handle logistics, customs clearance, and ensure safe delivery to your location.',
      details: [
        'Freight booking',
        'Customs documentation',
        'Container loading supervision',
        'Shipment tracking',
        'Insurance coordination',
        'Delivery confirmation',
      ],
      icon: Truck,
    },
  ];

  const timeline = [
    { phase: 'Week 1', activity: 'Inquiry submission & supplier matching' },
    { phase: 'Week 2', activity: 'Supplier selection & negotiation' },
    { phase: 'Week 3-4', activity: 'Sample production & approval' },
    { phase: 'Week 5-8', activity: 'Mass production with QC checks' },
    { phase: 'Week 9-10', activity: 'Final inspection & shipping' },
    { phase: 'Week 11-12', activity: 'Delivery & feedback' },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#E67E22] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Our proven 6-step process ensures smooth, reliable sourcing from China. Here's what to expect.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-[#E67E22] rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                        {step.number}
                      </div>
                      <div className="ml-4">
                        <step.icon className="w-8 h-8 text-[#1E3A5F] mb-1" />
                        <h3 className="text-xl font-bold text-[#1E3A5F]">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-[#64748B] mb-6">{step.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, dIndex) => (
                        <div key={dIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#27AE60] mr-2 flex-shrink-0" />
                          <span className="text-sm text-[#64748B]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-32 h-32 bg-[#1E3A5F]/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-16 h-16 text-[#1E3A5F]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-lg text-[#64748B]">
              A standard sourcing project takes 8-12 weeks from inquiry to delivery.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E2E8F0] hidden md:block"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-16 h-16 bg-[#1E3A5F] rounded-full flex items-center justify-center text-white font-bold text-sm z-10 hidden md:flex">
                    {item.phase}
                  </div>
                  <div className="ml-4 md:ml-8 bg-[#F8FAFC] rounded-lg p-4 flex-1 border border-gray-100">
                    <div className="md:hidden text-sm font-bold text-[#1E3A5F] mb-1">{item.phase}</div>
                    <p className="text-[#64748B]">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Submit your inquiry today and let us help you find the perfect supplier.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4 inline-flex items-center">
            Submit Your Inquiry
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;