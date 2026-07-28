import React, { useEffect, useRef } from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: 'case-1',
      client: 'EcoTech Innovations (USA)',
      industry: 'Consumer Electronics',
      challenge: 'Client was experiencing a 15% defect rate with their previous supplier for smart home thermostats, leading to negative Amazon reviews and stock shortages.',
      solution: 'We audited 5 alternative factories, selected a certified manufacturer, implemented strict pre-shipment inspections, and re-negotiated the unit price down by 8%.',
      result: 'Defect rate dropped to <0.5%, client saved $45,000 annually on manufacturing costs, and Amazon rating improved from 3.8 to 4.6 stars.',
      imgId: 'cs-img-1',
      imgQuery: '[case-client-case-1] smart home thermostat',
      quote: "SSourcing China essentially saved our business. We were bleeding money on returns before they took over our quality control.",
      author: "Michael T., Operations Director"
    },
    {
      id: 'case-2',
      client: 'Lumina Home (UK)',
      industry: 'Home & Furniture',
      challenge: 'A growing D2C brand needed to consolidate shipments from 4 different furniture and decor suppliers in different provinces to reduce shipping costs.',
      solution: 'We set up a central consolidation warehouse in Shenzhen. We coordinated production schedules across all 4 suppliers, performed QC at the warehouse, and loaded mixed containers (FCL).',
      result: 'Client reduced freight costs by 32% by shifting from multiple LCL shipments to optimized FCL shipments. Transit times became more predictable.',
      imgId: 'cs-img-2',
      imgQuery: '[case-client-case-2] modern home decor furniture',
      quote: "The consolidation service is a game-changer. It's like having our own warehouse and logistics team in China.",
      author: "Sarah L., Founder"
    },
    {
      id: 'case-3',
      client: 'ActiveGear Pro (Australia)',
      industry: 'Apparel & Fitness',
      challenge: 'Client wanted to develop a custom line of resistance bands with unique fabric blends and custom branded packaging, but struggled with language barriers during prototyping.',
      solution: 'Our local team visited the textile factories, translated exact technical specifications, oversaw the creation of 6 prototype iterations, and managed the custom packaging supplier.',
      result: 'Successfully launched 3 new SKUs within 4 months. The custom packaging elevated the perceived brand value, allowing a 20% increase in retail price.',
      imgId: 'cs-img-3',
      imgQuery: '[case-client-case-3] fitness resistance bands apparel',
      quote: "Communication is so easy with them. They understand exactly what we want without the usual back-and-forth headaches.",
      author: "David K., Product Manager"
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Case Studies</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Real examples of how we've helped international buyers overcome sourcing challenges, reduce costs, and improve product quality.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {cases.map((study) => (
              <Card key={study.id} className="overflow-hidden border-slate-200 shadow-md bg-white">
                <div className="flex flex-col lg:flex-row">
                  {/* Image side */}
                  <div className="w-full lg:w-2/5 relative h-64 lg:h-auto bg-slate-100 min-h-[300px]">
                    <img
                      alt={study.client}
                      className="absolute inset-0 w-full h-full object-cover"
                      data-strk-img-id={study.imgId}
                      data-strk-img={study.imgQuery}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 text-sm font-medium rounded-full">
                      {study.industry}
                    </div>
                  </div>
                  
                  {/* Content side */}
                  <CardContent className="w-full lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <h2 id={`case-client-${study.id}`} className="text-3xl font-bold text-slate-900 mb-6">{study.client}</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Challenge</h4>
                        <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Our Solution</h4>
                        <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                      </div>
                      
                      <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                        <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">The Result</h4>
                        <p className="text-slate-900 font-medium leading-relaxed">{study.result}</p>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-100">
                      <div className="flex items-start">
                        <Quote className="w-8 h-8 text-blue-300 mr-4 shrink-0 rotate-180" />
                        <div>
                          <p className="text-slate-600 italic mb-2">"{study.quote}"</p>
                          <p className="text-sm font-bold text-slate-900">— {study.author}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to write your own success story?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Stop letting sourcing headaches hold back your business growth. Let our local experts be your dedicated office in China.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;