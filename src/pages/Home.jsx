import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Search, FileSignature, Box, Ship } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-sourcing"
          data-strk-bg="[hero-title] [hero-subtitle] factory shipping container port"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-200 mb-8 font-light">
              We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Your hands on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-[#c2182b] hover:bg-[#a01423] text-white w-full sm:w-auto px-8 py-6 text-lg">
                  Get a Free Sourcing Quote
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg font-medium text-slate-800 bg-white border-transparent hover:bg-slate-100">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-slate-100 py-8 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-slate-600 font-medium text-sm md:text-base">
            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#c2182b] w-5 h-5" /> 10+ Years Experience</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#c2182b] w-5 h-5" /> 500+ Verified Factories</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#c2182b] w-5 h-5" /> 100% Quality Focus</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#c2182b] w-5 h-5" /> Fluent English Support</div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Sourcing Services</h2>
            <p id="services-desc" className="text-lg text-slate-600">From initial product search to final delivery, we manage the entire supply chain process to minimize your risk and save you time.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 transition-all hover:shadow-lg group">
              <div className="w-14 h-14 bg-[#c2182b]/10 rounded-lg flex items-center justify-center mb-6 text-[#c2182b] group-hover:bg-[#c2182b] group-hover:text-white transition-colors">
                <Search className="w-7 h-7" />
              </div>
              <h3 id="srv-1-title" className="text-xl font-bold text-slate-900 mb-3">Supplier Sourcing</h3>
              <p className="text-slate-600 mb-4">We find the best manufacturers based on your specifications, budget, and quality requirements.</p>
              <Link to="/services" className="text-[#c2182b] font-medium flex items-center hover:underline">Learn more <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </div>
            {/* Service 2 */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 transition-all hover:shadow-lg group">
              <div className="w-14 h-14 bg-[#c2182b]/10 rounded-lg flex items-center justify-center mb-6 text-[#c2182b] group-hover:bg-[#c2182b] group-hover:text-white transition-colors">
                <FileSignature className="w-7 h-7" />
              </div>
              <h3 id="srv-2-title" className="text-xl font-bold text-slate-900 mb-3">Factory Audits</h3>
              <p className="text-slate-600 mb-4">On-site verification of factory capabilities, certifications, working conditions, and capacity.</p>
              <Link to="/services" className="text-[#c2182b] font-medium flex items-center hover:underline">Learn more <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </div>
            {/* Service 3 */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 transition-all hover:shadow-lg group">
              <div className="w-14 h-14 bg-[#c2182b]/10 rounded-lg flex items-center justify-center mb-6 text-[#c2182b] group-hover:bg-[#c2182b] group-hover:text-white transition-colors">
                <Box className="w-7 h-7" />
              </div>
              <h3 id="srv-3-title" className="text-xl font-bold text-slate-900 mb-3">Quality Control</h3>
              <p className="text-slate-600 mb-4">Pre-shipment inspections (PSI) and during-production (DUPRO) checks to ensure standards are met.</p>
              <Link to="/services" className="text-[#c2182b] font-medium flex items-center hover:underline">Learn more <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </div>
            {/* Service 4 */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 transition-all hover:shadow-lg group">
              <div className="w-14 h-14 bg-[#c2182b]/10 rounded-lg flex items-center justify-center mb-6 text-[#c2182b] group-hover:bg-[#c2182b] group-hover:text-white transition-colors">
                <Ship className="w-7 h-7" />
              </div>
              <h3 id="srv-4-title" className="text-xl font-bold text-slate-900 mb-3">Shipping & Logistics</h3>
              <p className="text-slate-600 mb-4">Consolidation, customs clearance, and competitive freight rates for FCL, LCL, Air, and Express.</p>
              <Link to="/services" className="text-[#c2182b] font-medium flex items-center hover:underline">Learn more <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
                <img 
                    alt="Our team inspecting products"
                    className="rounded-xl shadow-xl w-full h-[500px] object-cover"
                    data-strk-img-id="why-choose-us-img"
                    data-strk-img="[why-title] factory inspection quality control agent"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
                <div>
                    <h2 id="why-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Global Buyers Trust Us</h2>
                    <p className="text-lg text-slate-600">Sourcing from China shouldn't mean taking blind risks. We act as your physical extension in the manufacturing hubs.</p>
                </div>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="mt-1 bg-[#c2182b]/10 p-2 rounded-full h-fit"><CheckCircle2 className="w-6 h-6 text-[#c2182b]" /></div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Transparent Pricing</h4>
                            <p className="text-slate-600">No hidden kickbacks from factories. We charge a clear, straightforward agent fee for our services.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 bg-[#c2182b]/10 p-2 rounded-full h-fit"><CheckCircle2 className="w-6 h-6 text-[#c2182b]" /></div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Strict Quality Standards</h4>
                            <p className="text-slate-600">If it doesn't pass our inspection, it doesn't ship. We catch defects before they leave China.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 bg-[#c2182b]/10 p-2 rounded-full h-fit"><CheckCircle2 className="w-6 h-6 text-[#c2182b]" /></div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Direct Communication</h4>
                            <p className="text-slate-600">Break the language barrier. Your dedicated project manager keeps you updated with photos and reports daily.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#c2182b] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your China Sourcing?</h2>
          <p className="text-xl mb-10 text-red-50">Tell us what products you're looking for, and we'll get back to you with a free feasibility assessment and quote within 24 hours.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#c2182b] hover:bg-slate-100 px-10 py-7 text-lg font-bold">
              Tell Us Your Requirements
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}