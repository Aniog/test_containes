import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, Star, Building2, Package, Truck } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Electronics Retailer Reduces Costs by 35%',
    company: 'TechWorld Imports (Germany)',
    industry: 'Consumer Electronics',
    challenge: 'A German electronics retailer was sourcing speakers from multiple suppliers at inconsistent quality and high costs. They needed a single reliable partner.',
    solution: 'We identified a verified factory in Shenzhen specializing in audio equipment, implemented strict QC protocols, and consolidated their supply chain.',
    results: [
      '35% reduction in product costs',
      '99.2% quality pass rate',
      'Single point of contact for all electronics',
      'Monthly shipments of 5,000+ units'
    ],
    testimonial: {
      quote: "SSourcing China transformed our supply chain. Their factory verification saved us from a potential €50K loss, and the quality inspections have been consistently thorough.",
      author: "Klaus Weber",
      role: "Procurement Director"
    },
    category: 'Electronics'
  },
  {
    id: 2,
    title: 'Fashion Brand Launches Successfully in 3 Months',
    company: 'Nordic Style (Sweden)',
    industry: 'Apparel & Textiles',
    challenge: 'A Swedish fashion startup wanted to launch a clothing line but had no experience with China manufacturing and limited budget for samples.',
    solution: 'We found a flexible MOQ factory, managed sample iterations, and provided comprehensive quality control throughout production.',
    results: [
      'First order: 2,000 garments delivered',
      '3 months from inquiry to delivery',
      'Zero quality issues on first shipment',
      'Ongoing monthly orders'
    ],
    testimonial: {
      quote: "The communication and transparency throughout the process was exceptional. We always knew exactly where our order stood, which was crucial for our tight launch timeline.",
      author: "Anna Lindberg",
      role: "Founder & CEO"
    },
    category: 'Textiles'
  },
  {
    id: 3,
    title: 'Hardware Distributor Streamlines Supply Chain',
    company: 'BuildRight Distributors (Australia)',
    industry: 'Industrial Hardware',
    challenge: 'An Australian hardware distributor struggled with inconsistent quality and delayed shipments from multiple Chinese suppliers.',
    solution: 'We consolidated their supplier base to two verified factories, implemented production monitoring, and coordinated integrated logistics.',
    results: [
      '40% improvement in on-time delivery',
      'Standardized quality across product lines',
      'Consolidated shipping reduced costs by 20%',
      'Single tracking dashboard for all orders'
    ],
    testimonial: {
      quote: "The production follow-up reports gave us visibility we never had before. Issues are caught early now, not when containers arrive.",
      author: "James Mitchell",
      role: "Operations Manager"
    },
    category: 'Industrial'
  },
  {
    id: 4,
    title: 'Outdoor Brand Scales Production 5x',
    company: 'Adventure Gear Co. (USA)',
    industry: 'Sports & Outdoor',
    challenge: 'A growing US outdoor brand needed to scale production of camping equipment rapidly without compromising quality or increasing risk.',
    solution: 'We vetted additional factories to expand capacity, implemented multi-stage QC, and coordinated consolidated shipping from multiple suppliers.',
    results: [
      'Production capacity increased 5x',
      'Maintained 98% quality pass rate',
      'Shipping costs reduced by 25%',
      '20+ container shipments annually'
    ],
    testimonial: {
      quote: "They scaled us up without scaling our problems. Every order has been solid, and our customers have noticed the consistency.",
      author: "David Chen",
      role: "Supply Chain Director"
    },
    category: 'Outdoor'
  },
  {
    id: 5,
    title: 'Furniture Retailer Achieves 40% Margin Improvement',
    company: 'Urban Living (UK)',
    industry: 'Home & Furniture',
    challenge: 'A UK furniture retailer sourced products inconsistently, facing quality issues and pricing volatility from unverified suppliers.',
    solution: 'We established a verified supplier network, negotiated better terms, implemented pre-shipment inspections, and streamlined logistics.',
    results: [
      '40% improvement in profit margins',
      'Factory-direct pricing achieved',
      'Quality complaints reduced by 90%',
      'Orders fulfilled on schedule consistently'
    ],
    testimonial: {
      quote: "The ROI was immediate. Within six months, our margins improved significantly while quality actually got better. That's rare.",
      author: "Robert Hughes",
      role: "Managing Director"
    },
    category: 'Furniture'
  },
  {
    id: 6,
    title: 'Cosmetic Brand Launches 50+ SKU Line',
    company: 'Glow Beauty (Canada)',
    industry: 'Beauty & Personal Care',
    challenge: 'A Canadian beauty brand needed to launch an extensive product line with strict compliance requirements across multiple categories.',
    solution: 'We identified compliant factories, coordinated samples across suppliers, managed regulatory documentation, and arranged temperature-controlled shipping.',
    results: [
      'Successful launch of 50+ products',
      'All products met compliance standards',
      'Temperature-controlled logistics managed',
      'Ongoing quarterly reorders'
    ],
    testimonial: {
      quote: "Beauty products have so many compliance issues. They navigated all of it and delivered perfect products. We couldn't have done this alone.",
      author: "Michelle Park",
      role: "Product Director"
    },
    category: 'Beauty'
  }
];

const industries = ['All Industries', 'Electronics', 'Textiles', 'Industrial', 'Outdoor', 'Furniture', 'Beauty'];

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = React.useState('All Industries');

  const filteredStudies = activeFilter === 'All Industries' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry.includes(activeFilter));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Success Stories from Our Clients
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Discover how companies around the world have transformed their China sourcing operations with SSourcing China.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#1E3A5F]">500+</div>
              <div className="text-sm text-[#64748B]">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E3A5F]">50+</div>
              <div className="text-sm text-[#64748B]">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E3A5F]">98%</div>
              <div className="text-sm text-[#64748B]">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E3A5F]">15+</div>
              <div className="text-sm text-[#64748B]">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === industry
                    ? 'bg-[#1E3A5F] text-white'
                    : 'bg-white text-[#64748B] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div 
                key={study.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E2E8F0] hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="p-8 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#1E3A5F]/10 text-[#1E3A5F] text-xs font-medium rounded-full">
                      {study.category}
                    </span>
                    <span className="px-3 py-1 bg-[#F1F5F9] text-[#64748B] text-xs font-medium rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-2">{study.title}</h3>
                  <p className="text-[#64748B]">{study.company}</p>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="md:col-span-1">
                      <h4 className="text-sm font-semibold text-[#1E293B] mb-2">The Challenge</h4>
                      <p className="text-sm text-[#64748B]">{study.challenge}</p>
                    </div>
                    <div className="md:col-span-1">
                      <h4 className="text-sm font-semibold text-[#1E293B] mb-2">Our Solution</h4>
                      <p className="text-sm text-[#64748B]">{study.solution}</p>
                    </div>
                    <div className="md:col-span-1">
                      <h4 className="text-sm font-semibold text-[#1E293B] mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#64748B]">
                            <CheckCircle className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-[#F8FAFC] rounded-lg p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
                      ))}
                    </div>
                    <p className="text-sm text-[#64748B] italic mb-4">"{study.testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1E3A5F] rounded-full flex items-center justify-center text-white font-bold">
                        {study.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1E293B]">{study.testimonial.author}</div>
                        <div className="text-xs text-[#64748B]">{study.testimonial.role}, {study.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#2C5282]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of companies who trust SSourcing China for their supply chain needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A227] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#B8922A] transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+862012345678"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
