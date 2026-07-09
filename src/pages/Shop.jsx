import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from "sonner";
import { Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const { category: urlCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(urlCategory || 'all');
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  useEffect(() => {
    setActiveCategory(urlCategory || 'all');
  }, [urlCategory]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        let query = client.from('Products').select('*');
        
        if (activeCategory !== 'all') {
          query = query.ilike('category', activeCategory);
        }

        const { data: response } = await query;
        
        if (response?.data?.list) {
          let sortedList = [...response.data.list];
          if (sortBy === 'price-low') {
            sortedList.sort((a, b) => a.data.price - b.data.price);
          } else if (sortBy === 'price-high') {
            sortedList.sort((a, b) => b.data.price - a.data.price);
          }
          setProducts(sortedList);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [activeCategory, sortBy]);

  return (
    <div className="pt-24 pb-20 px-6 lg:px-20 min-h-screen">
      <header className="py-12 text-center space-y-4">
        <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-widest">
          {activeCategory === 'all' ? 'The Collection' : activeCategory}
        </h1>
        <p className="font-serif italic text-muted-foreground opacity-80">
          Curated pieces for every mood and occasion.
        </p>
      </header>

      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center border-y border-border py-4 mb-12 gap-6">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat.toLowerCase())}
              className={`text-[10px] uppercase tracking-[0.2em] font-sans pb-1 transition-all border-b ${
                activeCategory === cat.toLowerCase() 
                  ? 'border-accent text-accent' 
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground font-sans">
            <span className="hidden sm:inline">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-foreground font-bold cursor-pointer"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans">
            {products.length} Products
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {isLoading ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="animate-pulse space-y-4">
              <div className="aspect-[3/4] bg-muted" />
              <div className="space-y-2">
                <div className="h-4 bg-muted w-2/3" />
                <div className="h-3 bg-muted w-1/4" />
              </div>
            </div>
          ))
        ) : products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="group space-y-4">
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.data?.image_url}
                  alt={product.data?.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-strk-img={`[shop-product-name-${product.id}] [shop-product-cat-${product.id}] shadow`}
                  data-strk-img-id={`shop-product-img-${product.id}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                    toast.success(`${product.data?.name} added to cart`);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 text-[#1A1A1A] py-3 text-[10px] uppercase tracking-widest font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-white"
                >
                  Quick Add
                </button>
              </Link>
              <div className="space-y-1">
                <p 
                  id={`shop-product-cat-${product.id}`}
                  className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans"
                >
                  {product.data?.category}
                </p>
                <h3 
                  id={`shop-product-name-${product.id}`}
                  className="font-serif text-lg tracking-wide uppercase leading-tight"
                >
                  <Link to={`/product/${product.id}`}>{product.data?.name}</Link>
                </h3>
                <p className="font-sans text-sm">${product.data?.price}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center space-y-4">
            <p className="font-serif text-2xl">No products found in this category.</p>
            <Button 
              variant="outline"
              onClick={() => setActiveCategory('all')}
              className="uppercase tracking-widest text-xs"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
