import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ClipboardCheck, 
  Factory, 
  Truck, 
  Shield, 
  Package, 
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  FileText,
  Users,
  Globe
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

const ServiceCard = ({ icon: Icon, title, description, features }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-surface rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
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
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We conduct thorough verification of potential suppliers to ensure they are legitimate, capable, and reliable. Our verification process protects you from fraud and ensures you work with the right partners.',
      features: [
        'Business license verification',
        'Factory facility inspection',
        'Production capacity assessment',
        'Quality management system review',
        'Financial stability check',
        'Reference verification from existing clients',
        'Certification verification (ISO, CE, FCC, etc.)',
        'Customs registration check',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Our professional QC team ensures your products meet specified quality standards through systematic inspections at key stages of production.',
      features: [
        'Pre-production inspection (PPI)',
        'During production inspection (DPI)',
        'Pre-shipment inspection (PSI)',
        'Loading supervision',
        'AQL-based sampling',
        'Detailed inspection reports with photos',
        'Defect classification and analysis',
        'Corrective action recommendations',
      ],
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'We monitor your production closely to ensure timelines are met and quality standards are maintained throughout the manufacturing process.',
      features: [
        'Regular factory visits',
        'Production progress monitoring',
        'Quality issue resolution',
        'Timeline management',
        'Raw material quality checks',
        'Production scheduling assistance',
        'Daily/weekly progress reports',
        'Issue escalation and resolution',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'We handle all aspects of shipping and logistics coordination, from factory to your designated delivery point.',
      features: [
        'Freight forwarding coordination',
        'Customs clearance documentation',
        'Export/import compliance',
        'Multi-modal transport (air, sea, land)',
        'Cargo insurance coordination',
        'Port handling and clearance',
        'Door-to-door delivery coordination',
        'Shipment tracking',
      ],
    },
    {
      icon: Shield,
      title: 'Sample Management',
      description: 'We streamline the sample request, evaluation, and approval process to help you make informed decisions before committing to bulk orders.',
      features: [
        'Sample request management',
        'Sample quality evaluation',
        'Competitive pricing for samples',
        'Sample shipping coordination',
        'Technical specification review',
        'Sample approval workflow',
        'Mass production verification',
        'Sample bank for repeat orders',
      ],
    },
    {
      icon: Package,
      title: 'Sourcing Consultation',
      description: 'Our expertise helps you navigate the complexities of China sourcing with strategic advice and market insights.',
      features: [
        'Product market research',
        'Supplier identification and matching',
        'Price negotiation',
        'Product development support',
        'Cost optimization strategies',
        'Supply chain optimization',
        'Risk assessment and mitigation',
        'Industry trend analysis',
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our team has 10+ years of experience in China sourcing and manufacturing.',
    },
    {
      icon: Globe,
      title: 'Local Presence',
      description: 'Based in Shenzhen, we have direct access to major manufacturing hubs.',
    },
    {
      icon: FileText,
      title: 'Transparent Process',
      description: 'Clear communication and detailed reporting at every step.',
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'We respond to inquiries within 24 hours and act quickly on your behalf.',
    },
  ];

  return (
    <>
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive China sourcing solutions designed to help your business succeed"
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Complete Sourcing Solutions
            </h2>
            <p className="text-text-secondary text-lg">
              From supplier verification to final delivery, we handle every aspect of your China sourcing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Work With Us
            </h2>
            <p className="text-text-secondary text-lg">
              We're committed to making your China sourcing experience smooth, safe, and successful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How Our Services Work
            </h2>
            <p className="text-text-secondary text-lg">
              A proven process that minimizes risk and maximizes efficiency
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: 'Initial Consultation', desc: 'We discuss your requirements, budget, and timeline' },
                { step: 2, title: 'Supplier Matching', desc: 'We identify and verify suitable suppliers' },
                { step: 3, title: 'Sample Evaluation', desc: 'You review samples and select your supplier' },
                { step: 4, title: 'Production Monitoring', desc: 'We oversee production and conduct quality checks' },
                { step: 5, title: 'Shipping & Delivery', desc: 'We coordinate logistics and ensure smooth delivery' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 bg-surface p-6 rounded-lg border border-border">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Sourcing?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Get in touch with us today for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;