import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Globe, Award } from 'lucide-react';

const caseStudies = [
  {
    id: 'techstart-smart-home',
    company: 'TechStart Inc.',
    location: 'United States',
    industry: 'Electronics',
    year: '2023',
    product: 'Smart Home Controllers',
    challenge: 'TechStart Inc., a US-based smart home startup, needed to find a reliable manufacturer for 10,000 smart home controllers. Their previous supplier in China had delivered substandard products with a 15% defect rate, causing significant customer complaints and returns.',
    approach: 'We conducted a comprehensive supplier search, focusing on factories with experience in smart home electronics and IoT devices. After verifying 8 potential suppliers, we narrowed it down to 3 top candidates. We arranged factory visits, negotiated favorable terms, and implemented a rigorous QC protocol.',
    result: 'The final order was delivered with only a 0.2% defect rate - far below the industry average. TechStart has since placed 4 additional orders and established a 2-year exclusive supply agreement with the verified factory.',
    metrics: [
      { label: 'Defect Rate', value: '0.2%', icon: TrendingUp },
      { label: 'Cost Savings', value: '18%', icon: TrendingUp },
      { label: 'On-Time Delivery', value: '100%', icon: CheckCircle },
    ],
    testimonial: {
      quote: 'SSourcing China transformed our supply chain. The quality difference is night and day. We went from dreading each shipment to having complete confidence in our products.',
      author: 'Michael Chen',
      role: 'CEO, TechStart Inc.',
    },
  },
  {
    id: 'greenhome-solar',
    company: 'GreenHome EU',
    location: 'Germany',
    industry: 'Home & Garden',
    year: '2023',
    product: 'Solar Garden Lights',
    challenge: 'GreenHome EU, a European retailer, was struggling with inconsistent quality from their current Chinese supplier. They needed a trusted partner who could deliver consistent, eco-friendly products that met European standards.',
    approach: 'We focused on finding factories with established sustainability practices and European market experience. We verified 5 factories, conducted detailed capability assessments, and arranged for samples that met their specific requirements.',
    result: 'GreenHome EU now sources exclusively through us. Their customer satisfaction scores have improved by 40%, and they have reduced product returns by 60%. They have expanded their product line from 3 to 15 items.',
    metrics: [
      { label: 'Customer Satisfaction', value: '+40%', icon: TrendingUp },
      { label: 'Return Rate', value: '-60%', icon: TrendingUp },
      { label: 'Product Line', value: '15 items', icon: CheckCircle },
    ],
    testimonial: {
      quote: 'The attention to detail and quality control is outstanding. They truly understand the European market requirements and help us navigate the complexities of importing from China.',
      author: 'Hans Mueller',
      role: 'Procurement Director, GreenHome EU',
    },
  },
  {
    id: 'fitwear-sports',
    company: 'FitWear Australia',
    location: 'Australia',
    industry: 'Textiles',
    year: '2022',
    product: 'Sports Apparel',
    challenge: 'FitWear Australia needed to source high-quality athletic wear with sustainable materials at competitive prices. As a mid-sized brand, they lacked the leverage to negotiate directly with major factories.',
    approach: 'We identified factories specializing in sustainable textiles with GOTS certification. We leveraged our relationships to secure favorable minimum order quantities and pricing. We also implemented during-production inspections to ensure quality.',
    result: 'FitWear reduced their product costs by 23% while actually improving quality. They have since grown from a local brand to serving customers across Australia and New Zealand.',
    metrics: [
      { label: 'Cost Reduction', value: '23%', icon: TrendingUp },
      { label: 'Quality Score', value: '98%', icon: CheckCircle },
      { label: 'Market Reach', value: 'ANZ', icon: Globe },
    ],
    testimonial: {
      quote: 'We went from struggling to compete on price to actually being the affordable premium option. The savings allowed us to invest in marketing and grow our brand significantly.',
      author: 'Sarah Williams',
      role: 'Founder, FitWear Australia',
    },
  },
  {
    id: 'medtech-supplies',
    company: 'MedTech Supplies',
    location: 'United Kingdom',
    industry: 'Medical',
    year: '2023',
    product: 'Medical Equipment',
    challenge: 'A UK healthcare company needed to source medical-grade equipment that met strict UK and EU regulatory requirements. Finding a factory with proper certifications was proving difficult.',
    approach: 'We focused exclusively on factories with ISO 13485 certification and experience producing medical devices. We coordinated closely with their regulatory team to ensure all documentation was in order.',
    result: 'Successfully sourced a certified manufacturer and navigated complex regulatory requirements. All products passed UKCA marking requirements on the first attempt.',
    metrics: [
      { label: 'First-Pass Compliance', value: '100%', icon: CheckCircle },
      { label: 'Time to Market', value: '4 months', icon: TrendingUp },
      { label: 'Regulatory Issues', value: '0', icon: CheckCircle },
    ],
    testimonial: {
      quote: 'Their expertise in medical device regulations saved us months of delays. They understood exactly what documentation we needed and ensured everything was in order.',
      author: 'Dr. James Patterson',
      role: 'Medical Director, MedTech Supplies',
    },
  },
  {
    id: 'petjoy-products',
    company: 'PetJoy Products',
    location: 'Canada',
    industry: 'Pet Supplies',
    year: '2022',
    product: 'Pet Toys & Accessories',
    challenge: 'A Canadian pet products retailer wanted to expand their private label line but was concerned about safety and quality after hearing horror stories about pet product recalls.',
    approach: 'We prioritized factories with established safety protocols and testing procedures. We implemented a multi-stage inspection process including material testing and safety certifications.',
    result: 'All products passed rigorous safety testing. The private label line has become their best-selling category with a 4.8-star customer rating.',
    metrics: [
      { label: 'Safety Compliance', value: '100%', icon: CheckCircle },
      { label: 'Customer Rating', value: '4.8/5', icon: TrendingUp },
      { label: 'Sales Growth', value: '150%', icon: TrendingUp },
    ],
    testimonial: {
      quote: 'Safety was our top concern, and they delivered beyond expectations. Our customers trust our products, and that trust has driven massive growth.',
      author: 'Jennifer Adams',
      role: 'CEO, PetJoy Products',
    },
  },
  {
    id: 'ecofood-packaging',
    company: 'EcoFood Packaging',
    location: 'Netherlands',
    industry: 'Packaging',
    year: '2023',
    product: 'Sustainable Food Packaging',
    challenge: 'A Dutch sustainable packaging company needed to find manufacturers who could produce eco-friendly food packaging at scale while maintaining competitive pricing.',
    approach: 'We identified factories specializing in sustainable packaging materials with food-safety certifications. We coordinated sample development and conducted factory audits.',
    result: 'Successfully launched a new product line that meets both sustainability goals and commercial requirements. The client has since expanded to 8 different products.',
    metrics: [
      { label: 'Product Launch', value: '8 items', icon: CheckCircle },
      { label: 'Cost vs. EU Suppliers', value: '-35%', icon: TrendingUp },
      { label: 'Sustainability', value: '100%', icon: Award },
    ],
    testimonial: {
      quote: 'They helped us find manufacturers we never would have found on our own. The cost savings combined with their quality control made all the difference.',
      author: 'Emma van Berg',
      role: 'Sustainability Director, EcoFood Packaging',
    },
  },
];

const CaseStudiesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#2D5A8A] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-lg text-[#CBD5E1] mb-8">
              Real results from real clients who trusted us with their China sourcing. See how we've helped businesses worldwide achieve their goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
            >
              Start Your Success Story
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1E3A5F] mb-2">500+</div>
              <div className="text-sm text-[#64748B]">Verified Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1E3A5F] mb-2">1000+</div>
              <div className="text-sm text-[#64748B]">Orders Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1E3A5F] mb-2">50+</div>
              <div className="text-sm text-[#64748B]">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1E3A5F] mb-2">98%</div>
              <div className="text-sm text-[#64748B]">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#1E3A5F]/10 text-[#1E3A5F] text-xs font-medium rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm text-[#64748B]">{study.location}</span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1E293B] mb-4">
                    {study.company}
                  </h2>
                  
                  <div className="mb-6">
                    <div className="text-sm text-[#94A3B8] mb-1">Product</div>
                    <div className="text-lg font-medium text-[#1E293B]">{study.product}</div>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm text-[#94A3B8] mb-2">The Challenge</div>
                    <p className="text-[#64748B]">{study.challenge}</p>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm text-[#94A3B8] mb-2">Our Approach</div>
                    <p className="text-[#64748B]">{study.approach}</p>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm text-[#94A3B8] mb-2">The Result</div>
                    <p className="text-[#10B981] font-medium">{study.result}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-[#F8FAFC] rounded-lg p-4 text-center">
                        <metric.icon className="w-5 h-5 text-[#1E3A5F] mx-auto mb-2" />
                        <div className="text-xl font-bold text-[#1E3A5F]">{metric.value}</div>
                        <div className="text-xs text-[#64748B]">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-[#F8FAFC] rounded-xl p-6 border-l-4 border-[#F97316]">
                    <p className="text-[#64748B] italic mb-4">"{study.testimonial.quote}"</p>
                    <div>
                      <div className="font-medium text-[#1E293B]">{study.testimonial.author}</div>
                      <div className="text-sm text-[#64748B]">{study.testimonial.role}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:sticky lg:top-24">
                  <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-lg font-semibold text-[#1E293B] mb-6">Project Summary</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="text-[#64748B]">Industry</span>
                        <span className="font-medium text-[#1E293B]">{study.industry}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="text-[#64748B]">Location</span>
                        <span className="font-medium text-[#1E293B]">{study.location}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="text-[#64748B]">Product</span>
                        <span className="font-medium text-[#1E293B]">{study.product}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="text-[#64748B]">Year</span>
                        <span className="font-medium text-[#1E293B]">{study.year}</span>
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
      <section className="py-20 bg-[#1E3A5F]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-[#94A3B8] mb-8">
            Join hundreds of satisfied clients who have transformed their China sourcing experience.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
          >
            Get Started Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;