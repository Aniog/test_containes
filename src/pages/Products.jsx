import React from 'react';
import { useImageLoader } from '@/hooks/useImageLoader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Smartphone, Home, Cpu, Shirt, Box } from 'lucide-react';

const Products = () => {
  const containerRef = useImageLoader();
  const categories = [
    {
      title: "Consumer Electronics",
      icon: Smartphone,
      desc: "Smartphones, tablets, wearable tech, and smart home devices from Shenzhen's leading hubs.",
      items: ["Mobile Accessories", "Bluetooth Devices", "Smart Home Kits", "Computer Peripherals"],
      imgId: "prod-cat-electronics"
    },
    {
      title: "Home & Garden",
      icon: Home,
      desc: "Furniture, kitchenware, decor, and outdoor living products from Ningbo and Foshan clusters.",
      items: ["Modern Furniture", "Kitchen Gadgets", "Garden Tools", "Home Textiles"],
      imgId: "prod-cat-home"
    },
    {
      title: "Industrial Components",
      icon: Cpu,
      desc: "Machinery, electronic components, sensors, and hardware for industrial applications.",
      items: ["PCBA & Electronics", "Sheet Metal Parts", "CNC Machining", "Industrial Sensors"],
      imgId: "prod-cat-industrial"
    },
    {
      title: "Apparel & Textiles",
      icon: Shirt,
      desc: "High-quality garments, sportwear, and specialty fabrics from Zhejiang and Fujian provinces.",
      items: ["Activewear", "Custom Uniforms", "Sustainable Fabrics", "Fashion Accessories"],
      imgId: "prod-cat-apparel"
    },
    {
      title: "Packaging & Printing",
      icon: Box,
      desc: "Eco-friendly packaging, custom gift boxes, and commercial printing solutions.",
      items: ["Bio-degradable Bags", "Rigid Gift Boxes", "Label Printing", "Shipping Cartons"],
      imgId: "prod-cat-packaging"
    },
    {
      title: "General Merchandise",
      icon: Package,
      desc: "Toys, gifts, office supplies, and household essentials from the world's market: Yiwu.",
      items: ["Educational Toys", "Stationery Sets", "Pet Supplies", "Cleaning Tools"],
      imgId: "prod-cat-general"
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-primary text-white py-20">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Expertise Across Industries</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From consumer electronics to industrial machinery, we have deep connections in China's specialized manufacturing hubs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <Card key={idx} className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.imgId}-title] China manufacturing production`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt={cat.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md text-primary">
                    <cat.icon size={24} />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 id={`${cat.imgId}-title`} className="text-2xl font-bold mb-4">{cat.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed line-clamp-2">{cat.desc}</p>
                  <div className="space-y-2">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Link to="/contact" className="w-full">
                    <Button variant="outline" className="w-full font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                      Inquire About {cat.title}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="bg-primary rounded-[2rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Don't see your industry?</h2>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                Our sourcing network covers over 90% of China's manufacturing sectors. If you're looking for something specific or highly technical, we can still help.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-10">
                    Submit Custom Request
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold h-14 px-10">
                    Our Sourcing Method
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
