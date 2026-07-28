import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, DollarSign, Clock } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      id: 'electronics-brand',
      title: 'Scaling an Amazon Electronics Brand',
      client: 'Retail Edge (USA)',
      challenge: 'The client was facing consistent quality issues and late shipments with their previous supplier, leading to negative reviews and lost sales.',
      solution: 'We identified 3 reliable manufacturers, performed deep factory audits, and implemented a strict Final Random Inspection (FRI) protocol.',
      results: [
        { label: 'Defect Rate', value: 'Reduced by 85%', icon: CheckCircle },
        { label: 'Procurement Cost', value: 'Saved 20%', icon: DollarSign },
        { label: 'Production Time', value: 'Shortened by 12 Days', icon: Clock }
      ],
      imgId: 'case-electronics-g1'
    },
    {
      id: 'fashion-startup',
      title: 'Custom Apparel Development for a Boutique',
      client: 'Vogue Hub (Germany)',
      challenge: 'A startup boutique needed custom-designed sustainable textiles but struggled with high MOQs and technical communication.',
      solution: 'Sourced a specialized eco-factory, negotiated lower trial MOQs, and managed the technical pattern development process.',
      results: [
        { label: 'Supply Chain Loss', value: 'Dropped to 0%', icon: TrendingUp },
        { label: 'Time to Market', value: '4 Months Faster', icon: Clock },
        { label: 'Profit Margin', value: 'Increased 15%', icon: DollarSign }
      ],
      imgId: 'case-fashion-h2'
    },
    {
      id: 'industrial-supply',
      title: 'Industrial Tool Consolidation Project',
      client: 'Global Tools (UK)',
      challenge: 'Client was buying from 8 different suppliers, incurring huge logistics costs and complex management overhead.',
      solution: 'Consolidated all 8 suppliers under one logistics hub in Shenzhen, managing quality and shipping for the entire cargo.',
      results: [
        { label: 'Logistics Costs', value: 'Reduced by 40%', icon: TrendingUp },
        { label: 'Admin Overhead', value: 'Cut by 70%', icon: CheckCircle },
        { label: 'Shipping Delay', value: 'Minimally Occurred', icon: Clock }
      ],
      imgId: 'case-industrial-i3'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 id="cases-title" className="mb-6 text-4xl font-bold md:text-5xl">Success Stories</h1>
          <p id="cases-desc" className="mx-auto max-w-2xl text-xl text-muted-foreground">
            See how SSourcing China helps global businesses overcome procurement challenges and achieve measurable growth.
          </p>
        </div>
      </section>

      {/* Case Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {cases.map((cs, idx) => (
              <div key={cs.id} className={`flex flex-col gap-12 lg:flex-row ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-8">
                  <div>
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">{cs.client}</span>
                    <h2 id={`${cs.id}-title`} className="text-3xl font-bold mt-2">{cs.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold border-l-4 border-primary pl-4">The Challenge</h3>
                    <p id={`${cs.id}-challenge`} className="text-muted-foreground leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold border-l-4 border-primary pl-4">Our Solution</h3>
                    <p id={`${cs.id}-solution`} className="text-muted-foreground leading-relaxed">{cs.solution}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                    {cs.results.map((res, i) => (
                      <div key={i} className="p-4 bg-secondary/20 rounded-xl border border-border/50">
                        <res.icon className="h-5 w-5 text-primary mb-2" />
                        <p className="text-xs text-muted-foreground uppercase font-semibold">{res.label}</p>
                        <p className="text-lg font-bold">{res.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl relative aspect-square lg:aspect-auto bg-secondary group">
                   <div 
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      data-strk-bg-id={cs.imgId}
                      data-strk-bg={`[${cs.id}-solution] [${cs.id}-title] [cases-title]`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="800"
                   />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Banner */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-8 text-white italic">
            "They didn't just find us a manufacturer; they built a sustainable supply chain that we can trust. Our business wouldn't be where it is today without their on-the-ground support in China."
          </h2>
          <p className="text-xl font-bold">— CEO of Retail Edge</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Achieve Similar Results?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's discuss how we can optimize your China procurement and solve your current supply chain bottlenecks.
          </p>
          <Link to="/contact">
            <Button size="lg" className="h-14 px-10 text-lg">Book a Free Consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
