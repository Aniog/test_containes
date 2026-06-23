import React from 'react';
import { 
  Laptop, 
  Armchair, 
  Shirt, 
  Car, 
  Utensils, 
  Boxes, 
  HeartPulse, 
  Wrench,
  ChevronRight,
  Search,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    { name: "Consumer Electronics", icon: Laptop, query: "china electronics factory production line", items: ["Smart Home Devices", "Audio Equipment", "Mobile Accessories", "Wearables"] },
    { name: "Furniture & Decor", icon: Armchair, query: "modern furniture manufacturing china", items: ["Office Furniture", "Hospitality Furniture", "Home Decor", "Outdoor Sets"] },
    { name: "Apparel & Textiles", icon: Shirt, query: "textile mill apparel production", items: ["Sports Wear", "Uniforms", "Eco-friendly Fabrics", "Home Textiles"] },
    { name: "Industrial & Auto", icon: Car, query: "car parts manufacturing china", items: ["Auto Spare Parts", "Industrial Machinery", "Hardware Tools", "Mold Manufacturing"] },
    { name: "Kitchen & Home", icon: Utensils, query: "kitchen appliances manufacturing", items: ["Small Appliances", "Stainless Steelware", "Ceramic Sets", "Kitchen Gadgets"] },
    { name: "Medical & Health", icon: HeartPulse, query: "medical supplies manufacturing factory", items: ["PPE Gear", "Rehabilitation Equipment", "Wellness Products", "Dental Supplies"] },
    { name: "Packaging Materials", icon: Boxes, query: "professional packaging manufacturing", items: ["Sustainable Packaging", "Luxury Gift Boxes", "Biodegradable Bags", "Cardboard Displays"] },
    { name: "Tools & Hardware", icon: Wrench, query: "hardware tools factory china", items: ["Power Tools", "Hand Tools", "Fasteners", "Garden Equipment"] }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[#1a3d66] py-24 text-white relative">
        <div 
          className="absolute inset-0 opacity-20 brightness-[0.5] z-0"
          data-strk-bg-id="products-hero-bg"
          data-strk-bg="massive china container terminal evening"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Products We Source</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            From consumer goods to industrial machinery, our team specializes in finding the right manufacturing partner for your specific industry.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-[#1a3d66] mb-6">Expertise Across All Major Industries</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            We don't just find suppliers; we find experts. Our team is divided into industry-specific categories to ensure that the agent handling your project understands the technical specifications and quality standards of your product.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
              <div key={cat.name} className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="h-48 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
                    data-strk-bg-id={`cat-detail-bg-${index}`}
                    data-strk-bg={cat.query}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="600"
                  />
                  <div className="absolute inset-0 bg-black/30 z-10" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/30">
                      <cat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#1a3d66] mb-6 group-hover:text-[#ff6b00] transition-colors">{cat.name}</h3>
                  <ul className="space-y-3 mb-8 flex-grow text-sm">
                    {cat.items.map(item => (
                      <li key={item} className="text-slate-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-slate-50">
                    <Link to="/contact" className="text-[#ff6b00] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                      Source these products <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Manufacturing */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Custom OEM & ODM Manufacturing</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Need a completely new product or a modification of an existing design? Our engineering team helps manage complex technical requirements, prototyping, and tooling development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#ff6b00]" />
                  <span className="font-semibold text-sm">Tooling & Mold Development Management</span>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#ff6b00]" />
                  <span className="font-semibold text-sm">Prototyping & Functional Testing</span>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#ff6b00]" />
                  <span className="font-semibold text-sm">IP Portection & Contract Manufacturing</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative p-12 bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/10 rounded-bl-full" />
                <h4 className="text-[#1a3d66] text-2xl font-extrabold mb-6 flex items-center gap-3 italic">
                  <Search className="w-6 h-6 text-[#ff6b00]" />
                  Don't see your product?
                </h4>
                <p className="text-slate-600 mb-8 leading-relaxed italic">
                  This list is just a fraction of what we can source. China's manufacturing ecosystem is vast. If it's made in China, we can find the right factory for it.
                </p>
                <Link to="/contact" className="block w-full text-center py-4 bg-[#ff6b00] hover:bg-[#e65a00] text-white rounded-xl font-bold transition-all shadow-lg">
                  Submit a Sourcing Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge Bar */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">We Ensure Compliance With</p>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
            <div className="font-black text-2xl tracking-tighter italic">CE</div>
            <div className="font-black text-2xl tracking-tighter italic">UL</div>
            <div className="font-black text-2xl tracking-tighter italic">RoHS</div>
            <div className="font-black text-2xl tracking-tighter italic">FDA</div>
            <div className="font-black text-2xl tracking-tighter italic">ASTM</div>
            <div className="font-black text-2xl tracking-tighter italic">ISO</div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal icon for bullet points
const CheckCircle2 = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default Products;
