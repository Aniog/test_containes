import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProducts } from '../api/products';
import { products as fallbackProducts } from '../lib/data';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Shop = () => {
  const { category } = useParams();
  const [activeSort, setActiveSort] = useState('Newest');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.length > 0 ? data : fallbackProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;
    if (category && category.toLowerCase() !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    return result;
  }, [category, products]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div className="pt-32 pb-20 md:pb-32 px-6 md:px-12 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-20">
           <h1 className="text-4xl md:text-6xl font-serif mb-6 uppercase tracking-widest text-[#C5A059]">
              {category || 'The Collection'}
           </h1>
           <p className="text-neutral-500 font-light max-w-sm text-center">
              Timeless designs, crafted with precision. Discover our curated selection of demi-fine jewelry.
           </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-48 space-y-12 shrink-0">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-neutral-400">Categories</h4>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link 
                      to={cat === 'All' ? '/shop' : `/shop/${cat.toLowerCase()}`}
                      className={cn(
                        "text-xs uppercase tracking-widest hover:text-[#C5A059] transition-colors block py-1",
                        (category === cat.toLowerCase() || (!category && cat === 'All')) ? "text-[#C5A059] font-bold" : "text-neutral-600"
                      )}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-neutral-400">Material</h4>
              <ul className="space-y-4 text-xs uppercase tracking-widest text-neutral-600">
                <li><button className="hover:text-[#C5A059]">18K Gold Plated</button></li>
                <li><button className="hover:text-[#C5A059]">Sterling Silver</button></li>
              </ul>
            </div>
          </aside>

          {/* Controls & Grid */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-10 border-b border-neutral-100 pb-6">
              <button 
                className="flex items-center space-x-2 md:hidden"
                onClick={() => setIsMobileFilterOpen(true)}
              >
                <Filter className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Filter</span>
              </button>

              <div className="hidden md:block text-[10px] uppercase tracking-widest text-neutral-400">
                Showing {filteredProducts.length} Results
              </div>

              <div className="flex items-center space-x-2 cursor-pointer group">
                <span className="text-[10px] uppercase tracking-widest font-bold">Sort By: {activeSort}</span>
                <ChevronDown className="w-3 h-3 transition-transform group-hover:translate-y-0.5" />
              </div>
            </div>

            {/* Grid */}
            {loading ? (
              <div className="h-64 flex items-center justify-center font-serif text-neutral-400">Loading collection...</div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
                 {filteredProducts.map(product => (
                   <div key={product.id} className="col-span-1">
                      <ProductItem product={product} />
                   </div>
                 ))}
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center font-serif text-neutral-400">
                <p>No pieces found in this category.</p>
                <Link to="/shop" className="mt-4 text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">View All Jewelry</Link>
              </div>
            )}
          </div>
        </div>
      </div>

       {/* Mobile Filter Drawer */}
       <div className={cn(
          "fixed inset-0 bg-white z-[100] transition-transform duration-500",
          isMobileFilterOpen ? "translate-x-0" : "translate-x-full"
       )}>
          <div className="p-6 flex justify-between items-center border-b border-neutral-100">
             <h2 className="text-sm font-bold uppercase tracking-widest">Filter & Sort</h2>
             <button onClick={() => setIsMobileFilterOpen(false)}><X className="w-6 h-6" /></button>
          </div>
          <div className="p-10 space-y-10 uppercase tracking-widest text-xs">
             {/* Simple mobile menu */}
             <div className="space-y-4">
               <p className="font-bold text-neutral-400">Category</p>
               {categories.map(c => <p key={c}>{c}</p>)}
             </div>
          </div>
       </div>
    </div>
  );
};

// Internal minimal variant of ProductCard for cleaner looks
const ProductItem = ({ product }) => {
  return (
    <div className="group space-y-4">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-neutral-100">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        {product.hoverImage && (
          <img src={product.hoverImage} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        )}
      </Link>
      <div className="text-center">
        <h3 className="text-xs uppercase tracking-widest font-serif leading-tight">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="mt-1 text-sm font-bold text-neutral-400">${product.price}</p>
      </div>
    </div>
  );
}

export default Shop;
