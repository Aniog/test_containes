import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award, Globe, Cpu, Shirt, Sofa, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const caseStudies = [
  {
    id: 1,
    industry: 'Electronics',
    icon: Cpu,
    client: 'US Retailer',
    challenge: 'A US-based electronics retailer needed a reliable supplier for 50,000 smart home devices with strict quality requirements and a tight timeline.',
    approach: 'We verified 15 factories, conducted comprehensive sample testing, performed inline inspections during production, and arranged pre-shipment quality checks.',
    results: [
      'Delivered on schedule with 99.2% pass rate',
      'Saved 18% on costs through negotiation',
      'Zero quality complaints in first year',
      'Established long-term partnership',
    ],
    testimonial: 'SSourcing China transformed our supply chain. Their verification process gave us confidence, and their QC team caught issues before they became problems.',
    clientName: 'John Miller',
    clientTitle: 'Procurement Director',
  },
  {
    id: 2,
    industry: 'Furniture',
    icon: Sofa,
    client: 'European Importer',
    challenge: 'A European home goods importer wanted to source modern office furniture from China for the first time, concerned about quality and logistics.',
    approach: 'We provided complete factory verification, production monitoring, consolidated shipping from multiple suppliers, and handled all customs documentation.',
    results: [
      'Successfully imported 3 containers',
      'Zero damage during shipping',
      '15% under budget',
      'Delivered 2 weeks early',
    ],
    testimonial: 'As a first-time importer, I was nervous about sourcing from China. SSourcing China made the process seamless and delivered exceptional results.',
    clientName: 'Sarah Chen',
    clientTitle: 'CEO',
  },
  {
    id: 3,
    industry: 'Textiles',
    icon: Shirt,
    client: 'Fashion Brand',
    challenge: 'A fashion brand needed a manufacturer for custom apparel with sustainable materials, facing challenges with MOQs and quality consistency.',
    approach: 'We sourced certified factories capable of sustainable production, negotiated flexible MOQs, implemented strict QC protocols, and coordinated sample development.',
    results: [
      'Launched product line ahead of schedule',
      'Excellent quality ratings',
      'Established sustainable supply chain',
      'Reduced costs by 12%',
    ],
    testimonial: 'Their expertise in textiles and sustainable sourcing helped us launch our eco-friendly line with confidence. Highly recommend their services.',
    clientName: 'Emma Wilson',
    clientTitle: 'Founder',
  },
  {
    id: 4,
    industry: 'Consumer Goods',
    icon: Package,
    client: 'Australian Distributor',
    challenge: 'An Australian distributor needed to source kitchenware products from multiple factories, requiring quality control and consolidated shipping.',
    approach: 'We identified qualified suppliers, coordinated production schedules, performed inspections at each factory, and arranged consolidated freight forwarding.',
    results: [
      'Sourced from 5 different factories',
      '100% quality pass rate',
      'Consolidated shipping saved 20%',
      'Smooth customs clearance',
    ],
    testimonial: 'Managing multiple suppliers was overwhelming until we partnered with SSourcing China. They handle everything professionally.',
    clientName: 'Michael Brown',
    clientTitle: 'Managing Director',
  },
  {
    id: 5,
    industry: 'Electronics',
    icon: Cpu,
    client: 'Tech Startup',
    challenge: 'A tech startup needed small-batch production of 2,000 units for their first product launch, with limited budget and no manufacturing experience.',
    approach: 'We found a factory willing to handle smaller MOQs, assisted with product design improvements, managed the entire production process, and arranged shipping.',
    results: [
      'Successfully launched first product',
      'Within budget constraints',
      'Quality exceeded expectations',
      'Ready for larger production runs',
    ],
    testimonial: 'They believed in our startup from day one. Their support helped us launch successfully and prepare for growth.',
    clientName: 'David Lee',
    clientTitle: 'CEO',
  },
  {
    id: 6,
    industry: 'Packaging',
    icon: Package,
    client: 'Canadian Brand',
    challenge: 'A Canadian beauty brand needed custom packaging for their products, requiring specific materials and designs from Chinese manufacturers.',
    approach: 'We sourced packaging specialists, coordinated design iterations, ensured material quality, and managed the production and shipping process.',
    results: [
      'Perfect packaging quality',
      'Matched brand specifications',
      'Competitive pricing',
      'On-time delivery',
    ],
    testimonial: 'The packaging exceeded our expectations. SSourcing China understood our brand requirements and delivered perfectly.',
    clientName: 'Jennifer Taylor',
    clientTitle: 'Brand Manager',
  },
];

const industries = ['All', 'Electronics', 'Furniture', 'Textiles', 'Consumer Goods', 'Packaging'];

const stats = [
  { value: '200+', label: 'Clients Served', icon: Users },
  { value: '$50M+', label: 'Goods Procured', icon: TrendingUp },
  { value: '98%', label: 'Client Satisfaction', icon: Award },
  { value: '30+', label: 'Countries', icon: Globe },
];

const CaseStudiesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8A] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Real success stories from businesses we've helped succeed with China sourcing
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-[#F7931E] mx-auto mb-2" />
                <div className="text-3xl font-bold text-[#1E3A5F]">{stat.value}</div>
                <div className="text-sm text-[#64748B]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Sidebar */}
                    <div className="bg-[#1E3A5F] p-8 text-white">
                      <div className="w-14 h-14 bg-[#F7931E] rounded-xl flex items-center justify-center mb-6">
                        <study.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-sm text-[#F7931E] uppercase tracking-wide mb-2">
                        {study.industry}
                      </div>
                      <h3 className="text-xl font-semibold mb-6">
                        {study.client}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs text-white/60 mb-1">Results</p>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="text-sm flex items-start gap-2">
                                <TrendingUp className="w-4 h-4 text-[#F7931E] flex-shrink-0 mt-0.5" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:col-span-2 p-8">
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[#1E3A5F] uppercase tracking-wide mb-2">
                          Challenge
                        </h4>
                        <p className="text-[#64748B]">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[#1E3A5F] uppercase tracking-wide mb-2">
                          Our Approach
                        </h4>
                        <p className="text-[#64748B]">{study.approach}</p>
                      </div>
                      
                      <div className="pt-6 border-t border-[#E2E8F0]">
                        <blockquote className="mb-4">
                          <p className="text-[#1E293B] italic">"{study.testimonial}"</p>
                        </blockquote>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#F8FAFC] rounded-full flex items-center justify-center">
                            <span className="text-[#1E3A5F] font-semibold">
                              {study.clientName.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-[#1E293B]">{study.clientName}</p>
                            <p className="text-sm text-[#64748B]">{study.clientTitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#1E3A5F]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-white/70 mb-8">
            Let us help you find the right suppliers and ensure quality every step of the way.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#F7931E] hover:bg-[#E0850D]">
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;