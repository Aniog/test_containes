import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, CheckCircle } from "lucide-react";

const categories = [
  {
    name: "Electronics & Components",
    description: "Consumer electronics, industrial components, PCBs, cables, connectors, sensors, and IoT devices. We source from ISO-certified manufacturers across Shenzhen, Dongguan, and Shanghai.",
    examples: ["Smart home devices", "PCB assemblies", "Sensors & modules", "Power supplies", "Cables & connectors"],
  },
  {
    name: "Industrial Equipment & Machinery",
    description: "Manufacturing machinery, industrial tools, automation equipment, spare parts, and maintenance supplies from verified factories across China's industrial hubs.",
    examples: ["CNC machining parts", "Packaging machinery", "Industrial tools", "Hydraulic components", "Automation equipment"],
  },
  {
    name: "Home & Kitchen Products",
    description: "Household goods, kitchenware, home decor, furniture, storage solutions, and cleaning products sourced from manufacturers with strong export experience.",
    examples: ["Kitchen utensils", "Home decor items", "Storage solutions", "Cleaning products", "Furniture"],
  },
  {
    name: "Apparel & Textiles",
    description: "Garments, fabrics, accessories, footwear, and technical textiles from manufacturers across Guangzhou, Zhejiang, and Jiangsu provinces.",
    examples: ["Casual & formal wear", "Sportswear", "Fabrics & textiles", "Accessories", "Footwear"],
  },
  {
    name: "Packaging & Printing",
    description: "Custom packaging boxes, labels, bags, promotional materials, and commercial printing services with strict quality control.",
    examples: ["Custom boxes", "Labels & stickers", "Shopping bags", "Brochures", "Display packaging"],
  },
  {
    name: "Automotive Parts & Accessories",
    description: "Vehicle components, replacement parts, accessories, and tools sourced from manufacturers with IATF 16949 or equivalent certifications.",
    examples: ["Engine parts", "Interior accessories", "Exterior parts", "Diagnostic tools", "Car care products"],
  },
  {
    name: "Medical Supplies & Equipment",
    description: "Medical devices, PPE, diagnostic equipment, lab supplies, and healthcare products from certified manufacturers meeting international standards.",
    examples: ["PPE & protective gear", "Diagnostic devices", "Lab consumables", "Hospital equipment", "First aid supplies"],
  },
  {
    name: "Building & Construction Materials",
    description: "Hardware, piping, fixtures, flooring, lighting, and construction materials for residential and commercial projects.",
    examples: ["Hardware & tools", "Piping & fittings", "Lighting fixtures", "Flooring materials", "Bathroom fixtures"],
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-4">Products We Source</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Sourcing Across Industries</h1>
            <p className="text-lg text-slate-300 mt-4 max-w-2xl">
              We source products across a wide range of categories, connecting you with manufacturers that meet your quality standards and budget requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="card">
                <h2 className="text-xl font-bold text-slate-900 mb-3">{cat.name}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.examples.map((ex) => (
                    <span key={ex} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Don't See Your Product Category?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            We source products across virtually every category. Contact us to discuss your specific product requirements.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}