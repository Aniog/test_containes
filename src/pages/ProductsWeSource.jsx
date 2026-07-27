import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';

const ProductsWeSource = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: "electronics",
      title: "Consumer Electronics",
      items: ["Smart Home Devices", "Audio & Wearables", "Mobile Accessories", "Small Appliances"],
    },
    {
      id: "home-garden",
      title: "Home & Garden",
      items: ["Furniture", "Kitchenware", "Outdoor & Patio", "Home Decor"],
    },
    {
      id: "apparel",
      title: "Apparel & Textiles",
      items: ["Activewear", "Fashion Accessories", "Custom Uniforms", "Bags & Luggage"],
    },
    {
      id: "industrial",
      title: "Industrial & Hardware",
      items: ["Building Materials", "Tools & Machinery", "Packaging Supplies", "Electronic Components"],
    },
    {
      id: "toys-hobbies",
      title: "Toys & Hobbies",
      items: ["Educational Toys", "Outdoor Sporting Goods", "Pet Supplies", "Fitness Equipment"],
    },
    {
      id: "health-beauty",
      title: "Health & Beauty",
      items: ["Personal Care Appliances", "Cosmetics Packaging", "Massage Equipment", "Salon Supplies"],
    }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 id="products-title" className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Products We Source
          </h1>
          <p id="products-subtitle" className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Our extensive network covers major supply chain hubs across China, enabling us to source a wide variety of product categories.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden border-slate-200">
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={`cat-img-${category.id}`}
                    data-strk-img={`[cat-title-${category.id}] manufacturing wholesale`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                  />
                </div>
                <CardHeader>
                  <CardTitle id={`cat-title-${category.id}`} className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-slate-600 flex items-center before:content-['•'] before:mr-2 before:text-slate-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Don't see your product?</h2>
          <p className="text-lg text-slate-300 mb-10">We regularly source specialized and custom items. If it's made in China, we can likely find a reliable manufacturer for it.</p>
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link to="/contact">Ask Us About Your Product</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductsWeSource;