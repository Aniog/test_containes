import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Factory, ClipboardCheck, Truck, Package, ShieldCheck,
  ChevronDown, CheckCircle, ArrowRight, Users, Globe, Award, Clock
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Research',
    description: 'We identify and vet qualified manufacturers matching your product specifications, budget, and quality requirements.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site audits verify legal business status, production capacity, certifications, and facility conditions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Rigorous pre-shipment inspections ensure products meet your specifications and quality standards.',
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    description: 'Regular updates and monitoring keep your order on track, on time, and within specifications.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We handle logistics, customs documentation, and shipping arrangements to your destination.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Mitigation',
    description: 'Protecting your investment through comprehensive verification and quality control processes.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Submit Inquiry',
    description: 'Tell us about your product requirements, quantities, and target pricing.',
  },
  {
    number: '02',
    title: 'Supplier Matching',
    description: 'We identify 3-5 qualified factories that meet your criteria.',
  },
  {
    number: '03',
    title: 'Factory Verification',
    description: 'On-site audits confirm factory legitimacy and capabilities.',
  },
  {
    number: '04',
    title: 'Sample Approval',
    description: 'Review samples before committing to bulk production.',
  },
  {
    number: '05',
    title: 'Production & QC',
    description: 'We monitor production and conduct quality inspections.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'Coordination of logistics and customs clearance.',
  },
];

const products = [
  { name: 'Electronics & Components', icon: '💻' },
  { name: 'Home Goods & Furniture', icon: '🏠' },
  { name: 'Textiles & Apparel', icon: '👕' },
  { name: 'Machinery & Equipment', icon: '⚙️' },
  { name: 'Packaging Materials', icon: '📦' },
  { name: 'Industrial Parts', icon: '🔩' },
  { name: 'Automotive Parts', icon: '🚗' },
  { name: 'Medical Devices', icon: '🏥' },
];

const trustPoints = [
  { icon: Users, number: '500+', label: 'Clients Served' },
  { icon: Globe, number: '30+', label: 'Countries Covered' },
  { icon: Award, number: '12+', label: 'Years Experience' },
  { icon: Clock, number: '24/7', label: 'Support Available' },
];

const caseStudies = [
  {
    industry: 'Electronics',
    title: 'US Retailer Sources Consumer Electronics',
    description: 'A mid-sized US retailer needed a reliable supplier for a new line of wireless speakers.',
    results: ['40% cost reduction', '12-week delivery', 'Zero quality issues'],
  },
  {
    industry: 'Home Goods',
    title: 'European Importer Expands Product Range',
    description: 'A German home goods importer sought to diversify their supply chain with new furniture suppliers.',
    results: ['5 new suppliers', '30+ products', 'On-time delivery rate 98%'],
  },
  {
    industry: 'Industrial',
    title: 'Canadian Company Secures Machinery Parts',
    description: 'A Canadian manufacturing company needed verified suppliers for industrial machinery components.',
    results: ['Factory audit completed', 'ISO 9001 verified', '40% faster sourcing'],
  },
];

const faqs = [
  {
    question: 'What is the typical timeline for sourcing a new product?',
    answer: 'The timeline varies based on product complexity and availability of suppliers. Typically, supplier identification takes 1-2 weeks, factory verification 1 week, sample production 2-4 weeks, and bulk production 3-8 weeks depending on order size.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our pricing is based on the scope of services required. We offer transparent, project-based pricing with no hidden costs. Contact us for a customized quote based on your specific sourcing needs.',
  },
  {
    question: 'How do you verify factory legitimacy?',
    answer: 'We conduct on-site audits that include verification of business licenses, factory registration, production capacity assessment, quality management systems, and worker conditions. We also verify third-party certifications.',
  },
  {
    question: 'Do you handle shipping and logistics?',
    answer: 'Yes, we coordinate all aspects of shipping including documentation, customs clearance, freight booking, and delivery to your specified location. We work with trusted logistics partners worldwide.',
  },
  {
    question: 'What quality control measures do you implement?',
    answer: 'We offer multiple inspection levels: pre-production, during production, pre-shipment, and container loading inspections. Our QC team follows international standards and provides detailed reports with photos.',
  },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-600 to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            data-strk-bg-id="hero-bg-001"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="container-main relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Trusted by 500+ Global Buyers
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-accent">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, follow production, 
              and coordinate shipping — all managed by our experienced team on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact" className="btn-accent text-lg px-8 py-4">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                How It Works
              </Link>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">No Payment Until Matched</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Verified Suppliers Only</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" fill="#F8FAF9"/>
          </svg>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-background-light">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <point.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{point.number}</div>
                <div className="text-sm text-text-secondary">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background-light">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="heading-2 mt-3 mb-4">End-to-End Sourcing Solutions</h2>
            <p className="text-body">
              From initial supplier research to final delivery, we handle every step of your 
              China sourcing operation with professionalism and attention to detail.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card-base card-hover group">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="heading-3 mb-3">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Work With Us</span>
              <h2 className="heading-2 mt-3 mb-6">Challenges We Solve for You</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 text-lg">✕</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Language & Communication Barriers</h4>
                    <p className="text-text-secondary text-sm">We bridge the gap with fluent bilingual communication and cultural understanding.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 text-lg">✕</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Supplier Verification Risks</h4>
                    <p className="text-text-secondary text-sm">We conduct thorough factory audits to ensure legitimacy and capability.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 text-lg">✕</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Quality Control Concerns</h4>
                    <p className="text-text-secondary text-sm">Our inspectors ensure every shipment meets your specifications.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 text-lg">✕</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Logistics Complexity</h4>
                    <p className="text-text-secondary text-sm">We handle all shipping, customs, and documentation requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
                <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                  <h4 className="font-semibold text-primary mb-4">Our Solutions</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-text-primary text-sm">Bilingual project managers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-text-primary text-sm">On-site factory verification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-text-primary text-sm">Multi-stage quality inspections</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-text-primary text-sm">End-to-end logistics support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-text-primary text-sm">Real-time production updates</span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary rounded-xl p-6 text-white">
                  <p className="text-lg font-medium mb-2">Save up to 40% on sourcing costs</p>
                  <p className="text-white/80 text-sm">Compared to managing sourcing independently</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section-padding bg-background-light">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="heading-2 mt-3 mb-4">How We Source Your Products</h2>
            <p className="text-body">
              A transparent, step-by-step process that keeps you informed at every stage 
              of your China sourcing journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="card-base h-full">
                  <div className="text-5xl font-bold text-primary-100 mb-4">{step.number}</div>
                  <h3 className="heading-3 mb-3">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h2 className="heading-2 mt-3 mb-4">Products We Source</h2>
            <p className="text-body">
              We have established relationships with manufacturers across a wide range of 
              industries and product categories.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.name} className="card-base card-hover text-center py-8 px-4">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h4 className="font-semibold text-text-primary">{product.name}</h4>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-secondary">
              View All Product Categories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding bg-background-dark">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="heading-2 mt-3 mb-4 text-white">Client Case Studies</h2>
            <p className="text-body text-gray-400">
              Real results from real clients who have successfully sourced products through SSourcing China.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white/5 border border-white/10 rounded-card p-6 hover:bg-white/10 transition-colors duration-300">
                <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {study.industry}
                </span>
                <h3 className="text-lg font-semibold text-white mb-3">{study.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result) => (
                    <div key={result} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-white text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn-secondary border-white text-white hover:bg-white/10">
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-background-light">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="heading-2 mt-3 mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your China Sourcing Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your sourcing project. Our team will respond within 24 hours.
          </p>
          <Link to="/contact" className="btn-accent text-lg px-10 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-text-primary pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-text-secondary flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-5 bg-white border-t border-border">
          <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
