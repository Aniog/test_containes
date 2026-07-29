import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { id: "electronics", name: "Consumer Electronics", desc: "From audio devices and phone accessories to smart home gadgets and kitchen appliances." },
    { id: "home-kitchen", name: "Home & Kitchen", desc: "Furniture, textiles, cookware, and decorative items for modern living spaces." },
    { id: "fashion", name: "Fashion & Textiles", desc: "Apparel, sportswear, fabrics, and accessories with strict quality control on materials." },
    { id: "industrial", name: "Industrial Components", desc: "Mechanical parts, hardware, tools, and custom manufactured components for B2B." },
    { id: "beauty", name: "Beauty & Wellness", desc: "Cosmetics packaging, salon equipment, and personal care products meeting safety standards." },
    { id: "toys", name: "Toys & Pet Supplies", desc: "Safe, certified products for children and pets, ensuring international compliance." }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-24 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 id="products-hero-title" className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight uppercase tracking-wider">Product Categories We Source</h1>
          <p id="products-hero-subtitle" className="text-xl text-primary-foreground/70 max-w-2xl mx-auto font-light">
            We have specialized sourcing teams for a wide range of industries, ensuring expertise in your specific niche.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((cat) => (
              <Card key={cat.id} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardHeader className="p-0 h-56 relative overflow-hidden group">
                  <img 
                    data-strk-img-id={`cat-img-${cat.id}`}
                    data-strk-img={`[cat-title-${cat.id}] [cat-desc-${cat.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                </CardHeader>
                <CardHeader className="pb-2">
                  <CardTitle id={`cat-title-${cat.id}`} className="text-2xl font-bold font-heading text-primary tracking-tight">{cat.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p id={`cat-desc-${cat.id}`} className="text-muted-foreground leading-relaxed">{cat.desc}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="px-0 text-secondary font-bold text-sm uppercase tracking-widest hover:text-primary transition-colors">
                    <Link to="/contact">Inquire about {cat.name.split(' ')[0]} sourcing</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary">Custom Manufacturing & OEM</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Looking for something unique? We help with custom product development, mold creation, and private label branding (OEM/ODM). Our engineers work with factories to turn your blueprints into reality.
            </p>
            <div className="flex justify-center flex-wrap gap-8 pt-6">
              {[
                "Packaging Design", "Custom Molding", "Prototype Development", "Material Testing"
              ].map((item, idx) => (
                <div key={idx} className="bg-muted px-6 py-3 rounded-full font-bold text-primary/80 border border-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
