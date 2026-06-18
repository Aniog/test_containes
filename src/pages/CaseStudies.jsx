import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  Star,
  Quote,
  ArrowUpRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const caseStudies = [
    {
      client: 'TechStart Inc.',
      location: 'United States',
      industry: 'Electronics',
      year: '2024',
      challenge: 'TechStart Inc. needed to source 50,000 custom wireless chargers with strict quality standards and a tight 3-month timeline. They had previously struggled with inconsistent quality from direct supplier relationships.',
      approach: 'We identified 5 verified manufacturers, conducted factory audits, and performed during-production inspections. We negotiated favorable payment terms and coordinated sample approvals.',
      result: 'Saved 35% on costs compared to their previous supplier, achieved zero defects in the first shipment, and delivered 2 weeks ahead of schedule.',
      metrics: [
        { label: 'Cost Savings', value: '35%' },
        { label: 'Quality Pass Rate', value: '99.8%' },
        { label: 'On-Time Delivery', value: '100%' },
      ],
      testimonial: 'SSourcing China transformed our supply chain. The quality control process was thorough, and the communication was excellent throughout. We now have a reliable partner for all our China sourcing needs.',
      rating: 5,
    },
    {
      client: 'Fashion Forward Ltd.',
      location: 'United Kingdom',
      industry: 'Apparel',
      year: '2024',
      challenge: 'Fashion Forward wanted to launch a private label clothing line requiring ethical sourcing and sustainable manufacturing. They needed a factory that could meet SA8000 social compliance standards.',
      approach: 'We conducted a comprehensive factory search focusing on ethical certifications. We found a SA8000-certified facility, negotiated competitive pricing, and implemented a rigorous quality control process.',
      result: 'Found a certified factory, reduced lead time by 2 weeks through efficient coordination, and achieved a 99.5% quality pass rate on first inspection.',
      metrics: [
        { label: 'Lead Time Reduction', value: '2 weeks' },
        { label: 'Quality Pass Rate', value: '99.5%' },
        { label: 'Factories Evaluated', value: '8' },
      ],
      testimonial: 'The attention to detail and ethical sourcing support was outstanding. They understood our requirements for sustainable manufacturing and delivered beyond expectations.',
      rating: 5,
    },
    {
      client: 'HomeGoods Plus',
      location: 'Canada',
      industry: 'Home Furnishings',
      year: '2023',
      challenge: 'HomeGoods Plus needed to source diverse products from multiple categories (furniture, decor, kitchenware) across different suppliers, making quality control and logistics complex.',
      approach: 'We consolidated 12 suppliers into 4 reliable partners, implemented unified quality standards, and coordinated consolidated shipping to reduce freight costs.',
      result: '40% reduction in freight costs through consolidation, improved quality consistency, and simplified communication with a single point of contact.',
      metrics: [
        { label: 'Freight Savings', value: '40%' },
        { label: 'Supplier Reduction', value: '67%' },
        { label: 'Quality Improvement', value: '25%' },
      ],
      testimonial: 'Working with SSourcing China simplified our entire operation. Having one team handle multiple product categories with consistent quality has been game-changing.',
      rating: 5,
    },
    {
      client: 'AutoParts Direct',
      location: 'Germany',
      industry: 'Automotive',
      year: '2024',
      challenge: 'AutoParts Direct required precision-engineered car accessories with specific technical specifications and ISO 9001 certification from their suppliers.',
      approach: 'We performed detailed supplier capability assessments, coordinated technical specification reviews, and implemented incoming inspection protocols.',
      result: 'Found ISO 9001 certified suppliers, reduced defect rate from 8% to 0.5%, and established a reliable long-term supply chain.',
      metrics: [
        { label: 'Defect Reduction', value: '94%' },
        { label: 'Certification Match', value: '100%' },
        { label: 'Time to Market', value: '4 weeks' },
      ],
      testimonial: 'Their technical expertise and understanding of automotive industry standards was impressive. They found exactly what we needed within our specifications.',
      rating: 5,
    },
    {
      client: 'GreenPack Solutions',
      location: 'Australia',
      industry: 'Packaging',
      year: '2023',
      challenge: 'GreenPack needed eco-friendly packaging solutions from China, including biodegradable materials and sustainable manufacturing processes.',
      approach: 'We identified suppliers specializing in eco-friendly materials, verified environmental certifications, and coordinated sample development for their specific requirements.',
      result: 'Successfully sourced certified compostable packaging, reduced packaging costs by 20%, and established a sustainable supply chain.',
      metrics: [
        { label: 'Cost Reduction', value: '20%' },
        { label: 'Eco-Certified', value: 'Yes' },
        { label: 'Products Sourced', value: '15' },
      ],
      testimonial: 'They helped us navigate the complexities of sustainable sourcing from China. The quality of eco-friendly materials exceeded our expectations.',
      rating: 5,
    },
    {
      client: 'SportTech Gear',
      location: 'Netherlands',
      industry: 'Sports Equipment',
      year: '2024',
      challenge: 'SportTech needed high-performance sports equipment with custom branding, requiring precise manufacturing tolerances and quick turnaround for trade show samples.',
      approach: 'We coordinated with factories experienced in sports equipment, prioritized sample production, and implemented accelerated quality checks.',
      result: 'Received production-ready samples in 3 weeks (vs. typical 6 weeks), secured favorable bulk pricing, and launched successfully at the trade show.',
      metrics: [
        { label: 'Sample Time', value: '3 weeks' },
        { label: 'Bulk Savings', value: '28%' },
        { label: 'Trade Show Ready', value: 'Yes' },
      ],
      testimonial: 'The speed and precision of their sample process was incredible. They understood our urgency and delivered exceptional results for our trade show launch.',
      rating: 5,
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E67E22] rounded-full blur-3xl"></div>
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
            Case Studies
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Real results from clients who transformed their China sourcing experience with our help.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let us help you achieve similar results for your China sourcing needs.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4 inline-flex items-center">
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const CaseStudyCard = ({ study, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Client Info */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-[#E67E22] bg-[#E67E22]/10 px-3 py-1 rounded-full">
                {study.industry}
              </span>
              <span className="text-sm text-[#64748B]">{study.year}</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">{study.client}</h3>
            <p className="text-[#64748B] mb-6">{study.location}</p>
            
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {study.metrics.map((metric, mIndex) => (
                <div key={mIndex} className="text-center p-3 bg-[#F8FAFC] rounded-lg">
                  <div className="text-xl font-bold text-[#1E3A5F]">{metric.value}</div>
                  <div className="text-xs text-[#64748B]">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < study.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:w-2/3">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[#1E3A5F] mb-2">The Challenge</h4>
                <p className="text-[#64748B]">{study.challenge}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[#1E3A5F] mb-2">Our Approach</h4>
                <p className="text-[#64748B]">{study.approach}</p>
              </div>

              {expanded && (
                <div>
                  <h4 className="text-lg font-semibold text-[#1E3A5F] mb-2">The Result</h4>
                  <p className="text-[#27AE60] font-medium">{study.result}</p>
                </div>
              )}

              <button
                onClick={() => setExpanded(!expanded)}
                className="text-[#E67E22] font-semibold flex items-center hover:underline"
              >
                {expanded ? 'Show Less' : 'Read More'}
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Testimonial */}
            {expanded && (
              <div className="mt-8 p-6 bg-[#F8FAFC] rounded-xl border-l-4 border-[#E67E22]">
                <Quote className="w-8 h-8 text-[#E67E22] mb-3" />
                <p className="text-[#64748B] italic mb-4">"{study.testimonial}"</p>
                <p className="text-sm font-semibold text-[#1E3A5F]">— {study.client}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;