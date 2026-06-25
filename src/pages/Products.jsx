import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const categories = [
  { name: 'Electronics', count: '120+ suppliers', desc: 'Consumer electronics, components, LED lighting, audio equipment, and smart devices.' },
  { name: 'Home & Garden', count: '85+ suppliers', desc: 'Furniture, decor, kitchenware, bedding, and outdoor living products.' },
  { name: 'Textiles & Apparel', count: '60+ suppliers', desc: 'Fabrics, garments, home textiles, bags, and fashion accessories.' },
  { name: 'Automotive', count: '45+ suppliers', desc: 'Auto parts, components, tools, and aftermarket accessories.' },
  { name: 'Toys & Gifts', count: '50+ suppliers', desc: 'Promotional gifts, toys, stationery, and seasonal products.' },
  { name: 'Industrial', count: '70+ suppliers', desc: 'Machinery, tools, hardware, safety equipment, and raw materials.' },
  { name: 'Health & Beauty', count: '40+ suppliers', desc: 'Personal care, cosmetics, supplements, and wellness products.' },
  { name: 'Sports & Outdoors', count: '35+ suppliers', desc: 'Fitness equipment, camping gear, sporting goods, and outdoor accessories.' },
];

const Products = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Products We Source</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">We work across a wide range of product categories. If you do not see your category listed, contact us — we likely have access to suppliers in that sector too.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Card key={cat.name} className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{cat.name}</CardTitle>
                </div>
                <Badge variant="secondary" className="w-fit">{cat.count}</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{cat.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Do not see your product category?</h2>
              <p className="text-slate-600 mb-6">Our network extends beyond the categories listed here. Tell us what you need and we will let you know if we can help — usually within 24 hours.</p>
              <Link to="/contact">
                <Button size="lg">
                  Ask about your product
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '50+', label: 'Product categories' },
                { stat: '500+', label: 'Verified suppliers' },
                { stat: '30+', label: 'Countries served' },
                { stat: '10+', label: 'Years experience' },
              ].map((item) => (
                <div key={item.label} className="bg-white p-4 rounded-lg border border-slate-200 text-center">
                  <p className="text-2xl font-bold text-slate-900">{item.stat}</p>
                  <p className="text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
