import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Factory, PackageSearch, ShieldCheck, Ship, Box, LineChart, Users, Globe2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      <Helmet>
        <title>China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China</title>
        <meta name="description" content="Professional B2B China sourcing agent helping global buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full opacity-30 bg-cover bg-center"
            data-strk-bg-id="hero-bg-9912a"
            data-strk-bg="[hero-title] [hero-subtitle]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-xl leading-8 text-slate-300">
              We help you find reliable suppliers, verify factories, inspect quality, follow up on production, and coordinate global shipping. Your dedicated team on the ground in China.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-full">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white hover:text-white border-white/20 hover:bg-white/10 text-lg px-8 py-6 rounded-full bg-slate-800/20 backdrop-blur-md">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 pt-10 border-t border-slate-700/50">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">500+</span>
                <span className="text-sm text-slate-400 mt-1">Verified Factories</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">10+</span>
                <span className="text-sm text-slate-400 mt-1">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-sm text-slate-400 mt-1">Quality Control</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">24/7</span>
                <span className="text-sm text-slate-400 mt-1">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-blue-600 border-y border-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 text-white">
              <ShieldCheck className="w-12 h-12 text-blue-200 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Zero Risk Guarantee</h3>
                <p className="text-blue-100 text-sm">We verify before you buy.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Users className="w-12 h-12 text-blue-200 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Local Experts</h3>
                <p className="text-blue-100 text-sm">Native speakers negotiating for you.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <LineChart className="w-12 h-12 text-blue-200 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Cost Optimization</h3>
                <p className="text-blue-100 text-sm">Direct factory prices, no hidden fees.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Core Services</h2>
            <p className="mt-4 text-lg text-slate-600">End-to-end supply chain management tailored to your specific business needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'supplier-sourcing', title: "Supplier Sourcing", icon: PackageSearch, desc: "We identify and evaluate multiple qualified manufacturers to get you the best price and quality." },
              { id: 'factory-audit', title: "Factory Audit", icon: Factory, desc: "On-site visits to verify production capability, certifications, and working conditions." },
              { id: 'quality-control', title: "Quality Control", icon: ShieldCheck, desc: "Pre-shipment inspections and mid-production checks to guarantee product standards." },
              { id: 'shipping-logistics', title: "Shipping & Logistics", icon: Ship, desc: "Optimizing freight forwarding, customs clearance, and delivery to your warehouse." }
            ].map((srv) => (
              <div key={srv.title} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 pr-0 group-hover:scale-110 transition-transform">
                  <srv.icon className="w-6 h-6" />
                </div>
                <h3 id={`service-${srv.id}-title`} className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h3>
                <p id={`service-${srv.id}-desc`} className="text-slate-600 mb-6">{srv.desc}</p>
                <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="problems-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Stop Worring About Supply Chain Headaches</h2>
            <p className="text-lg text-slate-600 mb-8">Sourcing internationally can be complex. We eliminate the friction, risks, and communication barriers.</p>
            
            <ul className="space-y-6">
              {[
                { prob: "Language & Cultural Barriers", sol: "Our bilingual team negotiates effectively and prevents misunderstandings." },
                { prob: "Scams & Fake Suppliers", sol: "We conduct on-site audits to ensure you're dealing with legitimate manufacturers." },
                { prob: "Poor Quality Products", sol: "Strict AQL standards and pre-shipment inspections protect your brand reputation." },
                { prob: "Shipping Delays & Hidden Costs", sol: "We optimize logistics and consolidate shipments to save you time and money." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="min-w-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">{item.prob}</h4>
                    <p className="text-slate-600">{item.sol}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative bg-slate-100 rounded-3xl overflow-hidden aspect-[4/3]">
             <img
                alt="Quality Inspection in Factory"
                className="w-full h-full object-cover"
                data-strk-img-id="problems-img-1a"
                data-strk-img="[problems-title] quality inspection factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
          </div>
        </div>
      </section>

      {/* Sourcing Process Overview */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="process-title" className="text-3xl font-bold tracking-tight sm:text-4xl">A Proven Sourcing Process</h2>
            <p className="mt-4 text-lg text-slate-400">From initial inquiry to final delivery, we manage every step.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-slate-800"></div>
            {[
              { step: "01", title: "Inquiry & Quotation", desc: "Share your product requirements and we evaluate feasibility and expected costs." },
              { step: "02", title: "Sample Evaluation", desc: "We source and consolidate samples for your approval before bulk production." },
              { step: "03", title: "Production & QC", desc: "We monitor manufacturing and perform strict quality inspections." },
              { step: "04", title: "Shipping & Delivery", desc: "We handle logistics, customs, and arrange door-to-door delivery." }
            ].map((item) => (
              <div key={item.step} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-3xl font-bold text-blue-500 mb-6 shrink-0">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild variant="outline" className="text-blue-400 border-blue-500 hover:bg-blue-900 hover:text-white rounded-full px-8">
               <Link to="/how-it-works">View Detailed Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Streamline Your Supply Chain?</h2>
          <p className="text-xl text-blue-100 mb-10">Get a free, no-obligation quote for your sourcing requirements today. Let our experts do the heavy lifting in China.</p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-50 font-bold px-8 py-6 rounded-full text-lg">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

