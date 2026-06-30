import { useEffect, useRef } from "react";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from "react-router-dom";
import { Package, ArrowRight, CircuitBoard, Drill, Box, Shirt, Sofa, Cog, Pill, Hammer } from "lucide-react";

const categories = [
  {
    icon: CircuitBoard,
    name: "Electronics & Components",
    desc: "PCBs, semiconductors, sensors, displays, connectors, and electronic accessories. We source from manufacturers with ISO and RoHS certifications.",
    items: ["PCB & PCBA Assembly", "Semiconductor Components", "Sensors & Modules", "Displays & Touch Screens", "Cables & Connectors", "Power Supplies"],
  },
  {
    icon: Drill,
    name: "Industrial Equipment & Parts",
    desc: "Machinery components, tools, automation equipment, and manufacturing supplies for industrial applications.",
    items: ["CNC Machined Parts", "Injection Molding", "Die Casting Components", "Industrial Tools", "Automation Equipment", "Hydraulic & Pneumatic Parts"],
  },
  {
    icon: Box,
    name: "Packaging & Materials",
    desc: "Custom packaging solutions, raw materials, specialty films, and sustainable alternatives for various industries.",
    items: ["Custom Boxes & Cartons", "Flexible Packaging", "Labels & Stickers", "Biodegradable Materials", "Industrial Films", "Protective Packaging"],
  },
  {
    icon: Shirt,
    name: "Textiles & Apparel",
    desc: "Fabric, garments, technical textiles, and fashion accessories from verified manufacturers with quality certifications.",
    items: ["Knitted & Woven Fabrics", "Workwear & Uniforms", "Technical Textiles", "Fashion Accessories", "Home Textiles", "Non-woven Fabrics"],
  },
  {
    icon: Sofa,
    name: "Home & Lifestyle Products",
    desc: "Furniture, kitchenware, home decor, and consumer products for retail and wholesale distribution.",
    items: ["Indoor Furniture", "Outdoor & Garden", "Kitchenware & Tableware", "Home Decor", "Storage Solutions", "Lighting Products"],
  },
  {
    icon: Cog,
    name: "Automotive Parts",
    desc: "Vehicle components, accessories, and aftermarket parts sourced from IATF 16949 certified manufacturers.",
    items: ["Engine Components", "Brake Systems", "Electrical Parts", "Interior Accessories", "Body Parts", "Aftermarket Accessories"],
  },
  {
    icon: Pill,
    name: "Medical Supplies & Equipment",
    desc: "Medical devices, disposable supplies, PPE, and healthcare products compliant with international standards.",
    items: ["Medical Disposables", "Diagnostic Equipment", "PPE & Protective Gear", "Hospital Furniture", "Rehabilitation Products", "Lab Supplies"],
  },
  {
    icon: Hammer,
    name: "Building & Construction Materials",
    desc: "Construction materials, hardware, flooring, and fixtures for commercial and residential projects.",
    items: ["Flooring Materials", "Hardware & Fasteners", "Pipes & Fittings", "Sanitary Ware", "Building Chemicals", "Electrical Fixtures"],
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Products We Source
            </h1>
            <p className="text-lg md:text-xl text-navy-200">
              We source across 30+ industry categories. Our network of verified manufacturers covers a wide range of products and specialties.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                    <cat.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-navy-900 mb-2">{cat.name}</h2>
                    <p className="text-gray-500 text-sm mb-4">{cat.desc}</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {cat.items.map((item) => (
                        <span key={item} className="text-xs text-gray-500 flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-navy-300 rounded-full" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-100 shadow-sm text-center">
            <Package className="w-12 h-12 text-navy-300 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              Can't Find Your Product Category?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8">
              We likely have experience sourcing it. Contact us with your product requirements and our team will respond with a tailored sourcing plan.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg px-8 py-4 text-lg transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}