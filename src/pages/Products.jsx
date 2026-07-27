import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Home, Shirt, Wrench, Car, Package, 
  Baby, Dumbbell, Heart, Building2 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Products = () => {
  const categories = [
    {
      icon: Cpu,
      title: 'Electronics & Components',
      items: [
        'Consumer electronics and accessories',
        'Power supplies, adapters, and chargers',
        'Cables, connectors, and wiring harnesses',
        'PCB assembly and electronic modules',
        'Smart home and IoT devices',
        'Audio equipment and headphones',
        'LED lighting and drivers',
        'Test equipment and tools',
      ],
    },
    {
      icon: Home,
      title: 'Home & Garden',
      items: [
        'Furniture and home furnishings',
        'Kitchenware, cookware, and tableware',
        'Garden tools, decor, and furniture',
        'Storage, organization, and shelving',
        'Lighting fixtures and lamps',
        'Home textiles and bedding',
        'Bathroom accessories and hardware',
        'Seasonal and holiday decorations',
      ],
    },
    {
      icon: Shirt,
      title: 'Apparel, Textiles & Accessories',
      items: [
        'Private label clothing and apparel',
        'Workwear, uniforms, and safety clothing',
        'Bags, backpacks, and luggage',
        'Footwear and components',
        'Home textiles and linens',
        'Promotional and branded merchandise',
        'Hats, gloves, and accessories',
        'Fabric and textile sourcing',
      ],
    },
    {
      icon: Wrench,
      title: 'Industrial Equipment & MRO',
      items: [
        'Machined metal and plastic components',
        'Fasteners, hardware, and fittings',
        'Packaging machinery and consumables',
        'Safety equipment and PPE',
        'Hand tools and power tools',
        'Maintenance, repair, and operations supplies',
        'Material handling equipment',
        'Welding and fabrication supplies',
      ],
    },
    {
      icon: Car,
      title: 'Automotive & Mobility',
      items: [
        'Aftermarket automotive parts',
        'Vehicle accessories and interior trim',
        'EV charging components and accessories',
        'Bicycle and e-bike parts',
        'Motorcycle accessories',
        'Tires, wheels, and related products',
        'Packaging and consumables for auto',
        'Diagnostic and service equipment',
      ],
    },
    {
      icon: Package,
      title: 'Packaging & Materials',
      items: [
        'Custom packaging design and production',
        'Corrugated boxes and cartons',
        'Plastic packaging and containers',
        'Labels, tags, and printing',
        'Protective packaging and foam',
        'Retail display and point-of-sale',
        'Sustainable and eco-friendly options',
        'Export packaging compliance',
      ],
    },
    {
      icon: Baby,
      title: 'Consumer Goods',
      items: [
        'Toys, games, and recreational products',
        'Pet products and accessories',
        'Sports and outdoor equipment',
        'Beauty, personal care, and wellness',
        'Kitchen and household gadgets',
        'Office and school supplies',
        'Party supplies and seasonal goods',
        'Gifts and novelty items',
      ],
    },
    {
      icon: Dumbbell,
      title: 'Sports, Outdoor & Leisure',
      items: [
        'Fitness equipment and accessories',
        'Camping and outdoor gear',
        'Water sports and marine products',
        'Team sports equipment',
        'Hunting and fishing gear',
        'Bicycle and cycling accessories',
        'Playground and recreational equipment',
        'Travel accessories and luggage',
      ],
    },
    {
      icon: Heart,
      title: 'Health, Beauty & Personal Care',
      items: [
        'Personal care appliances',
        'Cosmetic packaging and components',
        'Wellness and fitness accessories',
        'Medical and first aid supplies',
        'Oral care and hygiene products',
        'Home healthcare equipment',
        'Spa and salon equipment',
        'Dietary supplement packaging',
      ],
    },
    {
      icon: Building2,
      title: 'Construction & Building Materials',
      items: [
        'Hardware and building supplies',
        'Electrical and plumbing components',
        'Tools and hand equipment',
        'Safety and site equipment',
        'Decorative building materials',
        'Fasteners and structural components',
        'Insulation and weatherproofing',
        'Flooring and wall materials',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-16">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-sky-600 mb-2">Products</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Products we source</h1>
            <p className="text-lg text-slate-600">We work across a wide range of categories. If your product is not listed below, we can still help you find qualified suppliers.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
                  <cat.icon className="w-4.5 h-4.5 text-slate-700" />
                </div>
                <h3 className="font-semibold text-slate-900">{cat.title}</h3>
              </div>
              <ul className="grid grid-cols-1 gap-y-1 text-sm text-slate-600">
                {cat.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Do not see your product category?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">We regularly source specialized and custom products. Submit your requirements and we will assess feasibility and provide a preliminary plan.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-white text-slate-900 rounded-md hover:bg-slate-100">Get a Free Sourcing Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
