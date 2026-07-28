import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Filter, MapPin, TrendingUp, Award, Users } from 'lucide-react';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';
import InquiryForm from '../components/sections/InquiryForm';

const caseStudies = [
  {
    id: 1,
    client: "HomeStyle Furniture",
    location: "United Kingdom",
    industry: "Furniture Retail",
    challenge: "Needed to source high-quality wooden furniture at competitive prices while ensuring consistent quality across batches.",
    solution: "Verified 3 factories in Guangdong province, implemented strict QC protocols, and established a dedicated production line.",
    results: ["35% cost reduction", "99.2% quality pass rate", "Monthly shipments of 500+ units"],
    testimonial: {
      text: "SSourcing China transformed our supply chain. The quality consistency we now have would have been impossible to achieve on our own.",
      author: "James Wilson",
      role: "Purchasing Director"
    },
    image: "furniture"
  },
  {
    id: 2,
    client: "TechGear Electronics",
    location: "Germany",
    industry: "Consumer Electronics",
    challenge: "Required certified electronic components from reliable manufacturers with proper documentation for EU market compliance.",
    solution: "Identified certified factories, arranged product testing, and established quality documentation procedures.",
    results: ["CE certification obtained", "12 verified suppliers", "Zero compliance issues in 2 years"],
    testimonial: {
      text: "Their attention to compliance details saved us from potential legal issues. Professional service from start to finish.",
      author: "Maria Schmidt",
      role: "Operations Manager"
    },
    image: "electronics"
  },
  {
    id: 3,
    client: "EcoPack Solutions",
    location: "Australia",
    industry: "Sustainable Packaging",
    challenge: "Sourcing eco-friendly packaging materials that met strict environmental standards at volume.",
    solution: "Found certified green manufacturers, arranged material testing, and coordinated sustainable shipping methods.",
    results: ["100% certified materials", "40% lower costs vs local", "Reduced carbon footprint by 60%"],
    testimonial: {
      text: "Finding truly sustainable suppliers seemed impossible until we worked with SSourcing China. They exceeded our expectations.",
      author: "Sarah Chen",
      role: "CEO"
    },
    image: "packaging"
  },
  {
    id: 4,
    client: "MediCare Supplies",
    location: "United States",
    industry: "Healthcare Products",
    challenge: "Required FDA-registered manufacturers for medical device components with strict quality requirements.",
    solution: "Identified and verified FDA-registered factories, implemented GMP compliance protocols, and arranged third-party testing.",
    results: ["FDA registration secured", "GMP compliant factories", "50% cost savings"],
    testimonial: {
      text: "Navigating FDA requirements seemed daunting, but their expertise made it manageable. We've now established a reliable supply chain.",
      author: "Dr. Robert Brown",
      role: "Quality Director"
    },
    image: "medical"
  },
  {
    id: 5,
    client: "OutdoorPro Gear",
    location: "Canada",
    industry: "Outdoor Equipment",
    challenge: "Needed high-performance outdoor gear manufactured to withstand extreme conditions while meeting safety standards.",
    solution: "Verified factories with outdoor equipment experience, arranged testing for extreme conditions, and implemented rigorous QC.",
    results: ["UL/ETL certifications obtained", "Zero product recalls", "3x faster time-to-market"],
    testimonial: {
      text: "Their understanding of our industry requirements was impressive. The product quality has exceeded our expectations.",
      author: "Michael Torres",
      role: "Product Development Lead"
    },
    image: "outdoor"
  },
  {
    id: 6,
    client: "Fashion Forward",
    location: "France",
    industry: "Fashion & Apparel",
    challenge: "Required high-quality garment production with attention to design details and ethical manufacturing practices.",
    solution: "Identified factories with ethical certifications, coordinated sample development, and established quality control for textiles.",
    results: ["OEKO-TEX certified products", "Ethical manufacturing verified", "20% faster production cycles"],
    testimonial: {
      text: "They understood our brand's need for quality and ethics. Our partnership has elevated our supply chain significantly.",
      author: "Claire Dubois",
      role: "Head of Production"
    },
    image: "apparel"
  }
];

const industries = ["All Industries", "Furniture Retail", "Consumer Electronics", "Sustainable Packaging", "Healthcare Products", "Outdoor Equipment", "Fashion & Apparel"];

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");

  const filteredStudies = selectedIndustry === "All Industries"
    ? caseStudies
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <div>
      <Hero
        title="Case Studies"
        subtitle="Real stories from real clients. See how we've helped businesses worldwide overcome China sourcing challenges."
        ctaText="Start Your Project"
        secondaryCta="View Services"
        secondaryLink="/services"
        showTrust={false}
      />
      
      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">30+</div>
              <div className="text-gray-300 text-sm">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-gray-300 text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">$50M+</div>
              <div className="text-gray-300 text-sm">Value Procured</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Filter & Case Studies */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
            <Filter size={20} className="text-text-muted flex-shrink-0" />
            <div className="flex gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedIndustry === industry
                      ? 'bg-accent text-white'
                      : 'bg-white text-text-secondary hover:bg-bg-alt'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
          
          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div key={study.id} className="card overflow-hidden flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-br from-primary to-secondary p-6 text-white">
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                    <MapPin size={14} />
                    {study.location}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                  <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm">
                    {study.industry}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary text-sm mb-1">Challenge</h4>
                    <p className="text-text-secondary text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary text-sm mb-1">Our Solution</h4>
                    <p className="text-text-secondary text-sm">{study.solution}</p>
                  </div>
                  
                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary text-sm mb-2">Key Results</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.results.map((result, idx) => (
                        <span key={idx} className="bg-success/10 text-success text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                          <TrendingUp size={12} />
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-text-secondary text-sm italic mb-2">"{study.testimonial.text}"</p>
                    <p className="text-text-muted text-xs">
                      {study.testimonial.author}, {study.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses who trust us with their China sourcing needs. Let's discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start Your Project
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/how-it-works" className="bg-white/10 text-white hover:bg-white/20 px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <InquiryForm />
    </div>
  );
};

export default CaseStudies;
