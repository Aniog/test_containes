import React from 'react';
import PageHeader from '@/components/common/PageHeader.jsx';
import InquiryForm from '@/components/common/InquiryForm.jsx';

const productCategories = [
  {
    title: 'Electronics & Gadgets',
    items: ['Bluetooth Headphones', 'Smart Watches', 'Phone Accessories', 'Consumer Gadgets', 'PC Peripherals'],
    imageId: 'prod-electronics'
  },
  {
    title: 'Home & Kitchen',
    items: ['Kitchen Appliances', 'Dinnerware', 'Home Textiles', 'Smart Home Devices', 'Storage Solutions'],
    imageId: 'prod-home'
  },
  {
    title: 'Fashion & Accessories',
    items: ['Outerwear', 'Activewear', 'Handbags', 'Footwear', 'Jewelry'],
    imageId: 'prod-fashion'
  },
  {
    title: 'Industrial & Tools',
    items: ['Power Tools', 'Safety Equipment', 'Hardware', 'Pumps & Valves', 'CNC Parts'],
    imageId: 'prod-industrial'
  },
  {
    title: 'Toys & Kids',
    items: ['Educational Toys', 'Baby Products', 'Stuffed Animals', 'Outdoor Sets', 'Outdoor Games'],
    imageId: 'prod-toys'
  },
  {
    title: 'Beauty & Personal Care',
    items: ['Skincare Tools', 'Cosmetic Packaging', 'Haircare Appliances', 'Grooming Sets', 'Massage Tools'],
    imageId: 'prod-beauty'
  }
];

const Products = () => {
  return (
    <div>
      <PageHeader 
        title="Products We Source" 
        subtitle="With thousands of factories in our network, we can source almost any product you need."
        imageId="products-header"
        searchTerms="China warehouse products electronics home goods wholesale"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden flex flex-col h-full">
                <div className="h-48 bg-gray-200">
                  <img 
                    data-strk-img-id={cat.imageId}
                    data-strk-img={`${cat.title} manufacturing China product manufacturing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-4">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item, iIndex) => (
                      <li key={iIndex} className="text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
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

      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Can't Find Your Category?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our network covers over 95% of the manufacturing sectors in China. Tell us what you are looking for and we will provide a feasibility report within 48 hours.
          </p>
          <div className="text-left">
            <InquiryForm title="Ask About Your Product" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
