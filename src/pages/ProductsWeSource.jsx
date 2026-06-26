import { Link } from 'react-router-dom';
import { Package, Smartphone, Home, Shirt, Car, HeartPulse, MoreHorizontal } from 'lucide-react';

const ProductsWeSource = () => {
  const categories = [
    {
      name: "Consumer Electronics",
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      items: ["Smart Home Devices", "Audio & Headphones", "Wearables", "Mobile Accessories", "PC Peripherals"]
    },
    {
      name: "Home & Garden",
      icon: <Home className="h-8 w-8 text-blue-600" />,
      items: ["Furniture", "Kitchenware", "Home Decor", "Outdoor & Patio", "Lighting Fixtures"]
    },
    {
      name: "Apparel & Accessories",
      icon: <Shirt className="h-8 w-8 text-blue-600" />,
      items: ["Clothing", "Shoes & Footwear", "Bags & Luggage", "Jewelry", "Fashion Accessories"]
    },
    {
      name: "Automotive Parts",
      icon: <Car className="h-8 w-8 text-blue-600" />,
      items: ["Auto Accessories", "Replacement Parts", "Car Care Products", "Motorcycle Parts", "Tools & Equipment"]
    },
    {
      name: "Health & Beauty",
      icon: <HeartPulse className="h-8 w-8 text-blue-600" />,
      items: ["Skincare Packaging", "Beauty Tools", "Personal Care", "Fitness Equipment", "Massage Devices"]
    },
    {
      name: "Other Categories",
      icon: <MoreHorizontal className="h-8 w-8 text-blue-600" />,
      items: ["Pet Supplies", "Toys & Games", "Office Supplies", "Industrial Parts", "Eco-friendly Products"]
    }
  ];

  return (
    <div className="bg-gray-50 py-20 flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Products We Source</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over a decade of experience, we've built a vast network of reliable manufacturers across nearly every product category in China.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Don't see your product category?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            The list above is just a sample. Our sourcing experts can find manufacturers for almost any product you need. Let us know your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-blue-900 bg-white hover:bg-gray-50 transition-colors"
          >
            Tell Us What You Need
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsWeSource;