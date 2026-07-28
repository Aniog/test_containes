import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import SectionHeader from '../sections/SectionHeader';

const caseStudies = [
  {
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
    }
  },
  {
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
    }
  },
  {
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
    }
  }
];

const CaseStudiesPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Case Studies"
          title="Success Stories"
          subtitle="See how we've helped businesses around the world solve their China sourcing challenges."
          className="mb-12"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card overflow-hidden flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-br from-primary to-secondary p-6 text-white">
                <div className="text-sm text-gray-300 mb-1">{study.location}</div>
                <h3 className="text-xl font-bold">{study.client}</h3>
                <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm mt-2">
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
                      <span key={idx} className="bg-success/10 text-success text-xs font-medium px-2 py-1 rounded">
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
        
        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-primary">
            View All Case Studies
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
