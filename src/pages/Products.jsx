import { Box, Home as HomeIcon, Smartphone, Shirt, Coffee, PenTool, Activity, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    {
      icon: HomeIcon,
      name: 'Home & Garden',
      items: ['Furniture', 'Kitchenware', 'Home Decor', 'Outdoor Living', 'Pet Supplies']
    },
    {
      icon: Smartphone,
      name: 'Consumer Electronics',
      items: ['Smart Home Devices', 'Audio Equipment', 'Mobile Accessories', 'Wearables', 'Computer Peripherals']
    },
    {
      icon: Shirt,
      name: 'Apparel & Accessories',
      items: ['Activewear', 'Footwear', 'Bags & Luggage', 'Jewelry', 'Eyewear']
    },
    {
      icon: Box,
      name: 'Packaging & Printing',
      items: ['Custom Boxes', 'Eco-friendly Packaging', 'Labels & Tags', 'Shopping Bags', 'Gift Packaging']
    },
    {
      icon: PenTool,
      name: 'Hardware & Tools',
      items: ['Hand Tools', 'Power Tools', 'Hardware Supplies', 'Safety Equipment', 'Garden Tools']
    },
    {
      icon: Activity,
      name: 'Sports & Outdoors',
      items: ['Fitness Equipment', 'Camping Gear', 'Bicycles & Scooters', 'Water Sports', 'Indoor Games']
    },
    {
      icon: Coffee,
      name: 'Gifts & Toys',
      items: ['Educational Toys', 'Corporate Gifts', 'Plush Toys', 'Party Supplies', 'Crafts']
    },
    {
      icon: MoreHorizontal,
      name: 'Other Categories',
      items: ['Beauty & Personal Care', 'Office Supplies', 'Auto Parts', 'Industrial Machinery', 'Medical Supplies']
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 id="products-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Products We Source</h1>
          <p id="products-desc" className="text-xl text-slate-600">
            With our extensive network of verified manufacturers, we can source almost any consumer or commercial product from China.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition duration-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm">
                {category.items.map((item, iIndex) => (
                  <li key={iIndex} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cannot Source Section */}
        <div className="mt-16 bg-white rounded-xl border border-slate-200 p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">What we do NOT source</h3>
            <p className="text-slate-600 mb-4">To maintain our high standards of quality and legality, we strictly do not source the following items:</p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
              <li className="flex items-center"><span className="text-red-500 mr-2">✕</span> Counterfeit / Fake brands</li>
              <li className="flex items-center"><span className="text-red-500 mr-2">✕</span> Illegal substances</li>
              <li className="flex items-center"><span className="text-red-500 mr-2">✕</span> Weapons & Ammunition</li>
              <li className="flex items-center"><span className="text-red-500 mr-2">✕</span> Live animals / plants</li>
            </ul>
          </div>
          <div className="md:w-1/3 text-center md:text-right w-full">
            <p className="text-sm text-slate-500 mb-4">Looking for something specific?</p>
            <Link to="/contact" className="inline-block w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-md font-medium transition text-center">
              Send an Inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;