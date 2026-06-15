import React from 'react';
import Layout from '@/Layout';
import { Link } from 'react-router-dom';
import { Package, Laptop, Home as HomeIcon, Footprints, Baby, Crosshair, Coffee, Car } from 'lucide-react';

const Products = () => {
  const categories = [
    { name: 'Consumer Electronics', icon: <Laptop className="w-12 h-12" />, items: ['Smart Home Devices', 'Audio Equipment', 'Mobile Accessories', 'Computer Peripherals'] },
    { name: 'Home & Kitchen', icon: <HomeIcon className="w-12 h-12" />, items: ['Cookware', 'Storage Solutions', 'Small Appliances', 'Home Textiles'] },
    { name: 'Outdoor & Sports', icon: <Footprints className="w-12 h-12" />, items: ['Camping Gear', 'Fitness Equipment', 'Cycling Parts', 'Fishing Tackle'] },
    { name: 'Baby & Kids', icon: <Baby className="w-12 h-12" />, items: ['Educational Toys', 'Strollers', 'Children Clothing', 'Nursery Furniture'] },
    { name: 'Industrial Parts', icon: <Crosshair className="w-12 h-12" />, items: ['CNC Machining', 'Injection Molding', 'Hardware Tools', 'Electronic Components'] },
    { name: 'Apparel & Shoes', icon: <Coffee className="w-12 h-12" />, items: ['Eco-friendly Fabrics', 'Sportswear', 'Leather Goods', 'Fashion Accessories'] },
    { name: 'Auto Parts', icon: <Car className="w-12 h-12" />, items: ['Car Electronics', 'Maintenance Tools', 'Exterior Accessories', 'Lighting Systems'] },
    { name: 'Health & Beauty', icon: <Package className="w-12 h-12" />, items: ['Skincare Packaging', 'Personal Care Devices', 'Wellness Products', 'Makeup Tools'] },
  ];

  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Products We Source</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We have specialized sourcing teams across various industrial clusters in China, ensuring expert level knowledge for your product category.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all group">
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center text-[#0F4C81] mb-6 shadow-sm group-hover:bg-[#0F4C81] group-hover:text-white transition-all">
                  {cat.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{cat.name}</h2>
                <ul className="space-y-2">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-gray-600 flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-[#D97706] rounded-full mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-[#0F4C81] rounded-3xl text-white overflow-hidden relative">
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold mb-6">Don't see your product category?</h2>
                <p className="text-lg text-gray-300">Our network covers 95% of consumer and industrial goods manufactured in China. Even for niche custom projects, we can find the right manufacturing partner.</p>
              </div>
              <div className="lg:w-1/3 text-center">
                <Link to="/contact" className="inline-block bg-[#D97706] text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-[#B45309] transition-all shadow-xl">
                  Ask About My Product
                </Link>
              </div>
            </div>
            {/* Abstract Background Element */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
