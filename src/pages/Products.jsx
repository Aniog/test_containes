import React, { useState, useEffect } from 'react';
import { client } from '../config.jsx';
import { Search, Info, Package } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Double Folding Machine', 'Sheet Metal Folder', 'Metal Folding Machine'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data: response, error } = await client
          .from('MachineProduct')
          .select('*');
        
        if (error) throw error;
        setProducts(response?.data?.list || []);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.data.category === activeCategory);

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Industrial Machinery</h1>
            <p className="text-slate-500 max-w-2xl text-lg">
              Explore our range of high-precision folding machines and folders designed for the most demanding sheet metal fabrication.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-amber-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse bg-white rounded-xl h-[450px]" />
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-xl transition-all group">
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    alt={product.data.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-strk-img-id={`product-img-${product.id}`}
                    data-strk-img={`[product-title-${product.id}] [product-cat-${product.id}] machine industrial`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E"
                  />
                  <div className="absolute top-4 left-4">
                    <span id={`product-cat-${product.id}`} className="bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-sm">
                      {product.data.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 id={`product-title-${product.id}`} className="text-xl font-bold text-slate-900 mb-3">{product.data.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                    {product.data.description}
                  </p>
                  
                  {product.data.specifications && (
                    <div className="mt-auto space-y-2">
                      <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs uppercase tracking-wider mb-2">
                        <Package className="w-4 h-4 text-amber-600" />
                        Key Features
                      </div>
                      <ul className="text-xs text-slate-500 space-y-1">
                        {product.data.specifications.slice(0, 3).map((spec, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-600 mt-1">•</span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button className="mt-8 w-full bg-slate-900 text-white py-3 rounded-md font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center gap-2">
                    <Search className="w-4 h-4" /> Technical Sheet
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-slate-200">
            <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">No machines found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
