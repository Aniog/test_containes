import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const categories = [
    {
      title: 'Electronics & Components',
      items: ['Consumer electronics', 'Electronic components', 'Cables and connectors', 'Power supplies', 'LED lighting', 'Audio equipment'],
    },
    {
      title: 'Home & Kitchen',
      items: ['Kitchen appliances', 'Cookware and bakeware', 'Home textiles', 'Furniture hardware', 'Storage solutions', 'Cleaning products'],
    },
    {
      title: 'Apparel & Textiles',
      items: ['Clothing and garments', 'Fabric and textiles', 'Footwear', 'Bags and accessories', 'Workwear and uniforms', 'Home textiles'],
    },
    {
      title: 'Industrial Equipment',
      items: ['Machinery parts', 'Tools and hardware', 'Safety equipment', 'Material handling', 'Packaging machinery', 'Industrial supplies'],
    },
    {
      title: 'Consumer Goods',
      items: ['Household products', 'Personal care items', 'Toys and games', 'Sports equipment', 'Pet products', 'Seasonal goods'],
    },
    {
      title: 'Automotive Parts',
      items: ['Aftermarket accessories', 'Replacement parts', 'Interior components', 'Electrical systems', 'Body and trim', 'Maintenance supplies'],
    },
    {
      title: 'Packaging & Materials',
      items: ['Custom packaging', 'Shipping supplies', 'Retail display', 'Protective packaging', 'Labels and tags', 'Raw materials'],
    },
    {
      title: 'Hardware & Tools',
      items: ['Hand tools', 'Power tools', 'Fasteners and fittings', 'Building materials', 'Plumbing supplies', 'Electrical hardware'],
    },
  ];

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Products We Source</h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl">
            We source across a wide range of product categories. Our experience spans both standard consumer goods and specialized industrial items.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <CardTitle className="mb-4">{cat.title}</CardTitle>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#475569]">
                    {cat.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex gap-2">
                        <span className="text-[#C5A46E]">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Don't See Your Product?</h2>
          <p className="text-[#475569] mb-6">
            We work with buyers across many categories. If your product is not listed, contact us to discuss feasibility.
          </p>
          <Button asChild variant="primary">
            <Link to="/contact">Discuss Your Requirements</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
