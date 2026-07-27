import React from 'react';
import { useImageLoader } from '@/hooks/useImageLoader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Quote, CheckCircle2, TrendingUp, ShieldAlert } from 'lucide-react';

const CaseStudies = () => {
  const containerRef = useImageLoader();
  const studies = [
    {
      title: "Sustainable Packaging Overhaul",
      client: "Eco-Friendly Brand, Germany",
      challenge: "Finding reliable factories for biodegradable composite packaging that met EU certifications.",
      solution: "We audited 12 factories in Fujian, negotiated custom molds, and managed 100% lab testing for eco-compliance.",
      results: "35% cost reduction and zero certification failures over 2 years.",
      imgId: "case-packaging"
    },
    {
      title: "Home Fitness Equipment Scaling",
      client: "Fitness Retailer, USA",
      challenge: "Inconsistent quality in dumbbells and benches causing high return rates and customer complaints.",
      solution: "Implemented strict DUPRO (During Production) and pre-shipment inspections with weight-specific testing protocols.",
      results: "Return rate dropped from 12% to less than 0.5% within 6 months.",
      imgId: "case-fitness"
    },
    {
      title: "Smart Home Tech Production",
      client: "Tech Startup, Australia",
      challenge: "Complex PCBA manufacturing and assembly coordination across multiple sub-suppliers.",
      solution: "Project-managed the entire assembly line, acting as the local technical representative to resolve engineering issues in real-time.",
      results: "Reduced prototype-to-production time by 3 months.",
      imgId: "case-tech"
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-primary text-white py-20">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Practical examples of how we solve complex sourcing challenges for our global partners.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="grid gap-16">
            {studies.map((caseStudy, idx) => (
              <div key={idx} className="bg-white border rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row hover:shadow-xl transition-shadow duration-500">
                <div className="lg:w-2/5 relative min-h-[300px]">
                  <img 
                    data-strk-img-id={caseStudy.imgId}
                    data-strk-img={`[study-title-${idx}] China factory business success`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    alt={caseStudy.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-3/5 p-8 lg:p-12 space-y-8">
                  <div>
                    <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-2 block">{caseStudy.client}</span>
                    <h2 id={`study-title-${idx}`} className="text-3xl font-bold text-primary">{caseStudy.title}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-red-500 font-bold">
                        <ShieldAlert size={20} />
                        <h4>The Challenge</h4>
                      </div>
                      <p className="text-slate-600 leading-relaxed italic">"{caseStudy.challenge}"</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-secondary font-bold">
                        <TrendingUp size={20} />
                        <h4>The Result</h4>
                      </div>
                      <p className="text-slate-700 font-bold leading-relaxed">{caseStudy.results}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold flex items-center gap-2 mb-3">
                      <CheckCircle2 size={18} className="text-primary" />
                      Our Strategic Solution
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{caseStudy.solution}</p>
                  </div>

                  <div className="pt-4">
                    <Link to="/contact">
                      <Button className="font-bold">Book a Similar Consultation</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 text-slate-100 opacity-50 transform -scale-x-100 font-serif text-[200px] leading-none pointer-events-none">
          "
        </div>
        <div className="container px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <Quote className="w-16 h-16 text-secondary/30 mx-auto mb-8" />
            <p className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed mb-10 italic">
              "SSourcing China isn't just an agent; they are our office in Shenzhen. Since partnering with them, our supply chain issues have virtually disappeared."
            </p>
            <div>
              <p className="font-bold text-xl text-primary">Marcus Thomsen</p>
              <p className="text-slate-500">Ops Director, Nordic Goods</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
