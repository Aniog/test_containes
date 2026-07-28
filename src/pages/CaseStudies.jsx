import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Globe,
  Star,
  FileText
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

const CaseStudyCard = ({ study, onClick }) => {
  return (
    <div 
      className="bg-surface rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-video bg-primary/5 relative overflow-hidden">
        <img
          data-strk-img-id={`case-study-${study.id}`}
          data-strk-img={`[case-title-${study.id}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={study.company}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
            {study.industry}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 id={`case-title-${study.id}`} className="text-xl font-semibold text-text-primary mb-2">
          {study.company}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {study.challenge}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-success font-medium text-sm">{study.result}</span>
          </div>
          <ArrowRight className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  );
};

const CaseStudyModal = ({ study, isOpen, onClose }) => {
  if (!isOpen || !study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-surface rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-primary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="aspect-video bg-primary/5">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <span className="text-primary/40 font-semibold text-lg">{study.company}</span>
          </div>
        </div>
        
        <div className="p-6 lg:p-8">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
            {study.industry}
          </span>
          <h2 id={`case-title-modal-${study.id}`} className="text-2xl font-bold text-text-primary mb-4">
            {study.company}
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-text-primary mb-2">The Challenge</h3>
              <p className="text-text-secondary text-sm">{study.challenge}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-text-primary mb-2">Our Solution</h3>
              <p className="text-text-secondary text-sm">{study.solution}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-text-primary mb-2">Results</h3>
              <div className="grid grid-cols-2 gap-4">
                {study.results.map((result, index) => (
                  <div key={index} className="bg-background rounded-lg p-4">
                    <div className="text-success font-bold text-lg mb-1">{result.value}</div>
                    <div className="text-text-muted text-xs">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-text-primary mb-2">Client Testimonial</h3>
              <blockquote className="bg-background rounded-lg p-4 border-l-4 border-primary">
                <p className="text-text-secondary text-sm italic">"{study.testimonial}"</p>
                <cite className="text-text-muted text-xs mt-2 block">- {study.testimonialAuthor}</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudiesPage = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);

  const caseStudies = [
    {
      id: 'techstart',
      company: 'TechStart Inc.',
      industry: 'Electronics',
      challenge: 'A US-based startup needed to find a reliable manufacturer for smart home devices. They had limited experience with China sourcing and were concerned about quality control and IP protection.',
      solution: 'We conducted a comprehensive supplier search, verified factory credentials, and connected them with a certified manufacturer with experience producing similar products. We implemented a strict QC process including pre-production, during-production, and pre-shipment inspections.',
      results: [
        { value: '50,000 units', label: 'First Order' },
        { value: '99.2%', label: 'Quality Pass Rate' },
        { value: '35%', label: 'Cost Savings' },
        { value: '12 weeks', label: 'Lead Time' },
      ],
      result: '99.2% quality pass rate',
      testimonial: 'SSourcing China made the entire process seamless. Their QC team caught several issues before shipment that would have been costly to fix. Highly recommended for any tech company looking to source from China.',
      testimonialAuthor: 'Michael Chen, CEO of TechStart Inc.',
    },
    {
      id: 'fashion-forward',
      company: 'Fashion Forward',
      industry: 'Apparel',
      challenge: 'A European fashion brand needed to source sustainable textile products with fair trade certification. They struggled to find suppliers meeting their strict ethical and quality standards.',
      solution: 'We identified and vetted several factories with relevant certifications (GOTS, Fair Trade). We arranged factory visits and sample evaluations, ultimately matching them with a manufacturer specializing in sustainable production.',
      results: [
        { value: '100,000 units', label: 'Annual Volume' },
        { value: '25%', label: 'Cost Reduction' },
        { value: 'GOTS Certified', label: 'Factory' },
        { value: '4', label: 'New Products' },
      ],
      result: '25% cost reduction',
      testimonial: 'Finding a supplier that met our sustainability standards seemed impossible until we worked with SSourcing China. They understood our requirements and found the perfect manufacturing partner.',
      testimonialAuthor: 'Sarah Williams, Procurement Director',
    },
    {
      id: 'buildright',
      company: 'BuildRight Co.',
      industry: 'Construction',
      challenge: 'A construction company needed custom hardware components at competitive prices. Previous attempts to source directly from China resulted in quality issues and communication problems.',
      solution: 'We verified multiple suppliers, conducted sample evaluations, and negotiated favorable terms. Our on-ground team performed regular quality inspections during production to ensure consistency.',
      results: [
        { value: '30%', label: 'Cost Reduction' },
        { value: '200,000+', label: 'Units Delivered' },
        { value: '0', label: 'Quality Issues' },
        { value: '15%', label: 'Lead Time Reduction' },
      ],
      result: '30% cost reduction',
      testimonial: 'The level of communication and transparency we received was outstanding. They handled everything professionally and the quality has been consistently excellent.',
      testimonialAuthor: 'David Liu, Operations Manager',
    },
    {
      id: 'healthylife',
      company: 'HealthyLife Products',
      industry: 'Consumer Goods',
      challenge: 'A health and wellness brand wanted to expand their product line with new items but had no experience with product development or manufacturing in China.',
      solution: 'We provided end-to-end support from concept to delivery. This included market research, product development assistance, supplier selection, and full production management.',
      results: [
        { value: '12', label: 'New Products' },
        { value: '6 months', label: 'Time to Market' },
        { value: '40%', label: 'Below Budget' },
        { value: '98%', label: 'Satisfaction Rate' },
      ],
      result: '40% below budget',
      testimonial: 'They took our product ideas and made them a reality. Their expertise in product development saved us months of trial and error. A true partner in our growth.',
      testimonialAuthor: 'Jennifer Park, Founder',
    },
    {
      id: 'sport-pro',
      company: 'SportPro Athletics',
      industry: 'Sports Equipment',
      challenge: 'A sports equipment distributor needed to source high-quality fitness products with custom branding. They needed a supplier who could handle both manufacturing and packaging.',
      solution: 'We found a manufacturer with in-house packaging capabilities, conducted thorough quality checks at every stage, and coordinated custom packaging production.',
      results: [
        { value: '500,000 units', label: 'First Year' },
        { value: '100%', label: 'On-Time Delivery' },
        { value: 'Custom Packaging', label: 'Included' },
        { value: '20%', label: 'Margin Increase' },
      ],
      result: '100% on-time delivery',
      testimonial: 'The attention to detail on packaging and branding was impressive. Our products stand out on the shelf thanks to the quality work done by SSourcing China.',
      testimonialAuthor: 'Robert Martinez, CEO',
    },
    {
      id: 'eco-kids',
      company: 'EcoKids Toys',
      industry: 'Toys & Games',
      challenge: "A toy company needed to source eco-friendly wooden toys meeting strict safety standards (ASTM, EN71). They needed a manufacturer experienced with children's products.",
      solution: 'We identified certified manufacturers with experience in wooden toy production. We implemented rigorous safety inspections and helped navigate the complex certification requirements.',
      results: [
        { value: 'ASTM & EN71', label: 'Certified' },
        { value: '50,000 units', label: 'Initial Order' },
        { value: '100%', label: 'Pass Rate' },
        { value: '3', label: 'New Lines' },
      ],
      result: '100% safety pass rate',
      testimonial: 'Safety is our top priority for kids products. SSourcing China understood this and ensured every item met the strictest standards. They are now our permanent sourcing partner.',
      testimonialAuthor: 'Amanda Lee, Product Manager',
    },
  ];

  const stats = [
    { value: '50+', label: 'Case Studies', icon: FileText },
    { value: '$50M+', label: 'Sourcing Volume', icon: Globe },
    { value: '98%', label: 'Client Retention', icon: Users },
    { value: '15+', label: 'Industries Served', icon: Award },
  ];

  return (
    <>
      <PageHero 
        title="Case Studies" 
        subtitle="Real success stories from businesses we've helped with China sourcing"
      />

      {/* Stats */}
      <section className="py-12 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Success Stories
            </h2>
            <p className="text-text-secondary text-lg">
              Explore how we've helped businesses across various industries achieve their sourcing goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard 
                key={study.id} 
                study={study} 
                onClick={() => setSelectedStudy(study)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-text-secondary text-lg">
              Feedback from businesses we've partnered with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(0, 3).map((study, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-text-secondary text-sm mb-4">"{study.testimonial}"</p>
                <div className="border-t border-border pt-4">
                  <div className="font-medium text-text-primary">{study.company}</div>
                  <div className="text-text-muted text-sm">{study.industry}</div>
                </div>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let us help you find the right suppliers and make your China sourcing a success
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      <CaseStudyModal 
        study={selectedStudy} 
        isOpen={!!selectedStudy} 
        onClose={() => setSelectedStudy(null)} 
      />
    </>
  );
};

export default CaseStudiesPage;