import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, FileSignature, Box, Ship, ArrowRight, ShieldCheck, Truck, Factory } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 id="services-header" className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-slate-300">
            End-to-end supply chain management. We handle the complexities in China so you can focus on growing your brand.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 space-y-24">
          
          {/* Sourcing */}
          <div className="flex flex-col md:flex-row gap-12 text-slate-800">
            <div className="flex-1 order-2 md:order-1">
                <img 
                    alt="Supplier meeting and product samples"
                    className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                    data-strk-img-id="srv-img-sourcing"
                    data-strk-img="[srv-detail-1] manufacturer negotiation sourcing"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
            </div>
            <div className="flex-1 space-y-6 order-1 md:order-2 flex flex-col justify-center">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-[#c2182b]">
                <Search className="w-8 h-8" />
              </div>
              <h2 id="srv-detail-1" className="text-3xl font-bold">1. Supplier Search & Selection</h2>
              <p className="text-lg text-slate-600">
                Finding a supplier on Alibaba is easy; finding the right one is hard. We leverage our network and local databases to identify manufacturers that aren't primarily targeting international markets but offer superior pricing and capabilities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" /> <span>Identify direct manufacturers, excluding trading companies</span></li>
                <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" /> <span>Initial price negotiation & term discussions</span></li>
                <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" /> <span>Sample consolidation and forwarding</span></li>
              </ul>
            </div>
          </div>

          {/* Verification */}
          <div className="flex flex-col md:flex-row gap-12 text-slate-800">
             <div className="flex-1 space-y-6 flex flex-col justify-center">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-[#c2182b]">
                <Factory className="w-8 h-8" />
              </div>
              <h2 id="srv-detail-2" className="text-3xl font-bold">2. Factory Audits & Verification</h2>
              <p className="text-lg text-slate-600">
                Never wire money to a supplier without verifying their existence. Our team conducts physical audits to ensure the factory is legitimate, has the claimed capacity, and meets basic compliance standards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" /> <span>Business license and certificate checks</span></li>
                <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" /> <span>On-site facility and production line review</span></li>
                <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" /> <span>Comprehensive photographic audit report</span></li>
              </ul>
            </div>
            <div className="flex-1">
                <img 
                    alt="Inspector reviewing factory equipment"
                    className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                    data-strk-img-id="srv-img-audit"
                    data-strk-img="[srv-detail-2] factory audit inspection compliance china"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
            </div>
          </div>

          {/* Quality Control */}
          <div className="flex flex-col md:flex-row gap-12 text-slate-800">
            <div className="flex-1 order-2 md:order-1">
                <img 
                    alt="Quality inspector measuring product"
                    className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                    data-strk-img-id="srv-img-qc"
                    data-strk-img="[srv-detail-3] product quality control inspector"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
            </div>
            <div className="flex-1 space-y-6 order-1 md:order-2 flex flex-col justify-center">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-[#c2182b]">
                <Box className="w-8 h-8" />
              </div>
              <h2 id="srv-detail-3" className="text-3xl font-bold">3. Production Follow-up & QC</h2>
              <p className="text-lg text-slate-600">
                It's significantly cheaper to fix a problem while the goods are still in China. We monitor the production timeline and perform rigorous inspections based on AQL standards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" /> <span>During Production (DUPRO) Inspections</span></li>
                <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" /> <span>Pre-Shipment Inspections (PSI) before balance payment</span></li>
                <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" /> <span>Defect rework negotiation and supervision</span></li>
              </ul>
            </div>
          </div>

          {/* Logistics */}
          <div className="flex flex-col md:flex-row gap-12 text-slate-800">
             <div className="flex-1 space-y-6 flex flex-col justify-center">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-[#c2182b]">
                <Ship className="w-8 h-8" />
              </div>
              <h2 id="srv-detail-4" className="text-3xl font-bold">4. Shipping & Logistics</h2>
              <p className="text-lg text-slate-600">
                We handle the complex export procedures and coordinate with our freight partners to get your goods to your warehouse or FBA center securely and cost-effectively.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" /> <span>Goods consolidation from multiple suppliers</span></li>
                <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" /> <span>Customs clearance and export documentation</span></li>
                <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" /> <span>Sea (FCL/LCL), Air, and Rail freight booking</span></li>
              </ul>
            </div>
             <div className="flex-1">
                <img 
                    alt="Cargo containers at port"
                    className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                    data-strk-img-id="srv-img-ship"
                    data-strk-img="[srv-detail-4] cargo shipping port logistics"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
            </div>
          </div>

        </div>
      </section>

      {/* Pricing / Call to Action */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
          <div className="container mx-auto px-4 text-center max-w-4xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Transparent Commission Structure</h2>
              <p className="text-lg text-slate-600 mb-10">
                  We generally work on a standard commission basis between <span className="font-bold text-slate-900">3% to 8%</span> depending on the order volume and product complexity. Unlike trading companies, you pay the factory directly for the goods, and pay us separately for the service. Total transparency.
              </p>
              <Link to="/contact">
                  <Button size="lg" className="bg-[#c2182b] hover:bg-[#a01423] text-white px-8">Discuss Your Project <ArrowRight className="ml-2 w-5 h-5"/></Button>
              </Link>
          </div>
      </section>

    </div>
  );
}