import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sofa, Laptop, Shirt, Hammer, Baby, Bike, Package } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      title: "Furniture & Home Decor",
      desc: "Office chairs, sofas, kitchen cabinetry, lighting, and home textiles.",
      icon: <Sofa size={32} />,
      items: ["Office Furniture", "Modern Lighting", "Curtains & Rugs", "Kitchenware"]
    },
    {
      title: "Electronics & Tech",
      desc: "Consumer electronics, computer peripherals, and smart home devices.",
      icon: <Laptop size={32} />,
      items: ["Phone Accessories", "Smart Watches", "Audio Equipment", "LED Displays"]
    },
    {
      title: "Apparel & Textiles",
      desc: "Garments, fabrics, footwear, and fashion accessories.",
      icon: <Shirt size={32} />,
      items: ["Activewear", "Promotional T-shirts", "Bags & Luggage", "Footwear"]
    },
    {
      title: "Tools & Hardware",
      desc: "Power tools, hand tools, construction materials, and gardening equipment.",
      icon: <Hammer size={32} />,
      items: ["Power Tool Sets", "Door Hardware", "Tiles & Flooring", "Sanitary Ware"]
    },
    {
      title: "Baby & Toys",
      desc: "Plush toys, educational games, baby gear, and nursery furniture.",
      icon: <Baby size={32} />,
      items: ["Wooden Toys", "Baby Strollers", "Educational Sets", "Stuffed Animals"]
    },
    {
      title: "Sports & Outdoors",
      desc: "Camping gear, fitness equipment, bicycles, and outdoor accessories.",
      icon: <Bike size={32} />,
      items: ["Gym Equipment", "Camping Tents", "Electric Bikes", "Yoga Mats"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-[#002D62] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">Products We Source</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our deep supplier network covers almost every industry in China.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all group">
                <CardHeader className="bg-white p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-[#FF6B00] mb-6 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                    {cat.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#002D62]">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#002D62] mb-12">Don't see your category?</h2>
          <div className="max-w-4xl mx-auto bg-gray-50 p-10 rounded-3xl border-2 border-dashed border-gray-200">
             <div className="flex items-center justify-center gap-4 mb-6 text-[#FF6B00]">
                <Package size={48} />
             </div>
             <p className="text-xl text-gray-600 mb-8">
               We have experience in hundreds of niche industries. From industrial chemicals to automotive parts, our sourcing team can help you find exactly what you're looking for.
             </p>
             <button 
               onClick={() => window.location.href='/contact'}
               className="bg-[#002D62] text-white hover:bg-slate-800 px-10 py-4 rounded-xl font-bold text-lg transition-all"
             >
               Ask Us About Your Product
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
