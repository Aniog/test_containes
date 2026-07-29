import React from 'react';
import { Badge } from '@/components/ui/badge';

const productCategories = [
  {
    title: 'Electronics & Gadgets',
    items: ['Smart Home Devices', 'Mobile Accessories', 'Audio Equipment', 'Wearables', 'LED Displays'],
    imageQuery: 'high tech electronics manufacturing clean room'
  },
  {
    title: 'Home & Kitchen',
    items: ['Bamboo Kitchenware', 'Small Appliances', 'Home Textile', 'Storage Solutions', 'Cookware'],
    imageQuery: 'modern kitchen interior design bamboo products'
  },
  {
    title: 'Furniture & Decor',
    items: ['Office Furniture', 'Outdoor Sets', 'Lighting Fixtures', 'Wall Decor', 'Upholstered Chairs'],
    imageQuery: 'luxury furniture showroom modern design'
  },
  {
    title: 'Industrial & Tools',
    items: ['CNC Machining Parts', 'Power Tools', 'Solar Panels', 'Pumps & Valves', 'Hardware'],
    imageQuery: 'industrial machinery manufacturing factory'
  },
  {
    title: 'Toys & Baby Products',
    items: ['Educational Toys', 'Wooden Toys', 'Baby Gear', 'Stuffed Animals', 'Outdoor Play'],
    imageQuery: 'safe children toys colorful display'
  },
  {
    title: 'Apparel & Accessories',
    items: ['Activewear', 'Fashion Bags', 'Sunglasses', 'Jewelry', 'Custom Uniforms'],
    imageQuery: 'fashion clothing rack textile factory'
  }
];

const Products = () => {
  return (
    <div className="products-page">
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            From consumer electronics to heavy industrial machinery, our team has the expertise to source almost any physical product you need.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-1/2" />
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {productCategories.map((cat, i) => (
              <div key={i} className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all h-full">
                <div className="aspect-[16/9] overflow-hidden bg-slate-200">
                  <img 
                    data-strk-img-id={`product-cat-img-${i}`}
                    data-strk-img={`[prod-cat-title-${i}] ${cat.imageQuery}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <h2 id={`prod-cat-title-${i}`} className="text-2xl font-bold text-slate-900 mb-6">{cat.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-white border text-slate-700 py-1.5 px-3">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <button className="text-blue-600 font-bold flex items-center group-hover:underline">
                    Inquire for {cat.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Can't Find Your Product?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Even if your category isn't listed, we can likely help. We have access to millions of factories across China through premium databases and our local network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg">
               Ask About My Product
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
