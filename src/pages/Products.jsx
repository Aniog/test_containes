import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'DF-Pro Double Folding Machine',
    category: 'Double Folder',
    description: 'Our flagship double folding machine delivers complex profiles in a single handling step. Designed for maximum efficiency in architectural trim and roofing applications.',
    image: 'https://images.unsplash.com/photo-1580983546538-4e8a4aebd7e6?auto=format&fit=crop&q=80&w=800',
    features: ['Bi-directional bending', 'Automated material handling', 'Touchscreen CNC control', 'Hydraulic clamping system']
  },
  {
    id: 2,
    name: 'SMF-X Sheet Metal Folder',
    category: 'Sheet Metal Folding Machine',
    description: 'A versatile sheet metal folding machine perfect for custom fabrication shops. Exceptional bending precision across various materials including steel, aluminum, and copper.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    features: ['High-speed servo drives', 'Dynamic crowning adjustment', 'Energy-efficient operation', 'Ergonomic operator station']
  },
  {
    id: 3,
    name: 'Compact Metal Folder',
    category: 'Metal Folder Machine',
    description: 'The ideal metal folding machine for workshops with limited space. Does not compromise on power, offering robust bending capabilities for standard profiles.',
    image: 'https://images.unsplash.com/photo-1611075677465-b77da31b40ce?auto=format&fit=crop&q=80&w=800',
    features: ['Space-saving footprint', 'Quick-change tooling', 'Low maintenance requirements', 'Cost-effective production']
  }
];

const Products = () => {
  return (
    <div className="bg-brand-light py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-brand-dark sm:text-5xl mb-4">
            Advanced <span className="text-brand-primary">Folding Machinery</span>
          </h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            From heavy-duty sheet metal folders to precision double folding machines, discover the equipment that will transform your fabrication process.
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <div key={product.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full relative">
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-brand-secondary text-white text-sm font-bold uppercase tracking-wider py-1 px-3 rounded shadow-md">
                  {product.category}
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <h2 className="text-3xl font-bold text-brand-dark mb-4">{product.name}</h2>
                <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <h3 className="text-xl font-semibold text-brand-dark mb-4 border-b border-gray-200 pb-2">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-6 w-6 text-brand-secondary flex-shrink-0 mr-2" />
                      <span className="text-brand-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-blue-800 transition-colors">
                  Request Specifications
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional keywords section for SEO implicitly */}
        <div className="mt-32 p-10 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Need a Custom Solution?</h2>
          <p className="text-brand-gray max-w-2xl mx-auto mb-8">
            Whether you need a specialized metal folder, a custom double folder configuration, or a fully automated metal folding machine line, our engineering team is ready to design the perfect system for your facility.
          </p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 border-2 border-brand-primary text-base font-medium rounded-md text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
             Discuss Custom Machinery
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Products;
