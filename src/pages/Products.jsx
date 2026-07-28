import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Laptop, Home, ShoppingBag, Hammer, Car, Watch, Coffee, Zap } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      id: 'electronics',
      title: 'Consumer Electronics',
      icon: Laptop,
      items: ['Smart Home Devices', 'Mobile Accessories', 'Audio Equipment', 'Wearable Tech', 'PC Components'],
      imgId: 'prod-electronics-a1'
    },
    {
      id: 'home',
      title: 'Home & Kitchen',
      icon: Home,
      items: ['Kitchenware', 'Small Appliances', 'Home Decor', 'Garden Tools', 'Smart Lighting'],
      imgId: 'prod-home-b2'
    },
    {
      id: 'fashion',
      title: 'Fashion & Textiles',
      icon: ShoppingBag,
      items: ['Apparel & Sportswear', 'Footwear', 'Handbags', 'Home Textiles', 'Bags & Luggage'],
      imgId: 'prod-fashion-c3'
    },
    {
      id: 'industrial',
      title: 'Industrial & Tools',
      icon: Hammer,
      items: ['Power Tools', 'Safety Equipment', 'Hardware', 'Industrial Machinery', 'Building Materials'],
      imgId: 'prod-industrial-d4'
    },
    {
      id: 'automotive',
      title: 'Automotive Parts',
      icon: Car,
      items: ['Car Electronics', 'Maintenance Tools', 'Interior Accessories', 'Replacement Parts', 'EV Charging'],
      imgId: 'prod-auto-e5'
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle & Gifts',
      icon: Watch,
      items: ['Toys & Games', 'Office Supplies', 'Fitness Equipment', 'Outdoor Gear', 'Promotional Items'],
      imgId: 'prod-lifestyle-f6'
    },
    {
      id: 'beauty',
      title: 'Health & Beauty',
      icon: Zap,
      items: ['Beauty Devices', 'Personal Care', 'Packaging', 'Exercise Equipment', 'Wellness Products'],
      imgId: 'prod-beauty-g7'
    },
    {
      id: 'fmcg',
      title: 'Packaging & FMCG',
      icon: Coffee,
      items: ['Eco-friendly Packaging', 'Cosmetic Containers', 'Food Storage', 'Retail Displays', 'Disposables'],
      imgId: 'prod-pkg-h8'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 id="products-header-title" className="mb-6 text-4xl font-bold md:text-5xl text-white">Products We Source</h1>
            <p id="products-header-desc" className="text-xl text-blue-100">
              While we can source almost any legal product from China, we have deep expertise and established supplier networks in these key categories.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <div key={cat.id} className="flex flex-col rounded-2xl border bg-card overflow-hidden hover:shadow-xl transition-all group">
                <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                   <div 
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                      data-strk-bg-id={cat.imgId}
                      data-strk-bg={`[cat-title-${cat.id}] [products-header-title]`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="500"
                   />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <cat.icon className="h-6 h-6" />
                  </div>
                  <h2 id={`cat-title-${cat.id}`} className="mb-4 text-xl font-bold">{cat.title}</h2>
                  <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Notice */}
      <section className="bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-background p-8 rounded-2xl border flex flex-col md:flex-row items-center gap-8 shadow-sm">
             <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <Search className="h-10 w-10" />
             </div>
             <div>
                <h2 className="text-2xl font-bold mb-4">Don't See Your Product Category?</h2>
                <p className="text-muted-foreground mb-4">
                  China's manufacturing landscape is vast. If you have a specific product in mind that isn't listed here, our sourcing experts can likely find it. We specialize in custom manufacturing and complex sourcing projects.
                </p>
                <Link to="/contact">
                  <Button variant="outline">Consult a Sourcing Expert</Button>
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Private Labeling Feature */}
      <section className="py-24">
        <div className="container mx-auto px-4">
           <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 id="pl-title" className="text-3xl font-bold mb-6">Build Your Own Brand</h2>
                <p id="pl-desc" className="text-lg text-muted-foreground mb-8">
                   We help you move beyond generic products. Whether it's adding a simple logo or developing a completely custom design, we coordinate with manufacturers to bring your private label brand to life.
                </p>
                <div className="space-y-4">
                   {[
                     'Custom packaging design and sourcing',
                     'Logo placement and branding strategies',
                     'Instruction manual translation and design',
                     'Product modification and development (OEM/ODM)'
                   ].map((item, i) => (
                     <div key={i} className="flex gap-3 items-start">
                        <Zap className="h-5 w-5 text-primary mt-1 shrink-0" />
                        <span className="font-medium">{item}</span>
                     </div>
                   ))}
                </div>
              </div>
              <div className="aspec-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                  <img
                    data-strk-img-id="private-label-g82"
                    data-strk-img="[pl-desc] [pl-title] [products-header-title]"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Private Labeling and Branding"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
              </div>
           </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Source Your Next Product?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Tell us what you're looking for, and we'll provide a pre-selection of reliable manufacturers within 48 hours.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="h-14 px-10 text-lg">Send Sourcing Inquiry</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
