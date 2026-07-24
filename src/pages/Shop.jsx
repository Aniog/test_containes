import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';
import ProductCard from '../components/product/ProductCard';
import { ChevronDown, Filter } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [sort, setSort] = useState('Newest');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let query = client.from('JewelryProduct').select('*');
        
        if (category !== 'All') {
          // Normalize to match DB enum casing
          const normalizedCat = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
          query = query.eq('category', normalizedCat);
        }

        const { data: response, error } = await query;
        if (error) throw error;
        
        let list = (response?.data?.list ?? []).map(p => ({ ...p.data, id: p.id }));
        
        if (sort === 'Price: Low to High') list.sort((a, b) => a.price - b.price);
        if (sort === 'Price: High to Low') list.sort((a, b) => b.price - a.price);

        setProducts(list);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, sort]);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-velmora-cream min-h-screen">
      <div className="mb-16">
        <h1 className="font-serif text-5xl md:text-6xl tracking-wide mb-8">Shop All</h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-y border-velmora-charcoal/5 py-8">
          <div className="flex flex-wrap gap-4 md:gap-8">
            {['All', 'Earrings', 'Necklaces', 'Huggies'].map(cat => (
              <button 
                key={cat}
                onClick={() => setCategory(cat)}
                className={`font-sans text-xs uppercase tracking-widest-lg transition-all duration-300 ${category === cat ? 'text-velmora-gold border-b border-velmora-gold pb-1' : 'opacity-40 hover:opacity-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 opacity-60">
              <Filter className="w-4 h-4" />
              <span className="font-sans text-xs uppercase tracking-widest-lg">Filter</span>
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest-lg">
                Sort: {sort}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 bg-white shadow-xl p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                {['Newest', 'Price: Low to High', 'Price: High to Low'].map(s => (
                  <button 
                    key={s}
                    onClick={() => setSort(s)}
                    className="block w-full text-left font-sans text-xs uppercase tracking-widest-lg py-2 hover:text-velmora-gold transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {loading ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="aspect-[3/4] bg-velmora-stone/50 animate-pulse" />
          ))
        ) : products.length === 0 ? (
          <p className="col-span-full text-center py-20 font-sans opacity-40 uppercase tracking-widest-lg">No products found</p>
        ) : (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
