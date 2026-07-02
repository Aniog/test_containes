import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { useCartStore } from '../lib/cart';
import { cn } from '../lib/utils';

// Sample Product Data (Expanded for Shop page)
const products = [
  {
    id: '1',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    image: 'https://images.unsplash.com/photo-1599643478524-fb66f45209f9?q=80&w=600&auto=format&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold',
    image: 'https://images.unsplash.com/photo-1591209627710-d2427565a41f?q=80&w=600&auto=format&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Silver Drop Huggies',
    price: 45,
    category: 'huggies',
    material: 'silver',
    image: 'https://images.unsplash.com/photo-1588444650733-d0767b0c2a27?q=80&w=600&auto=format&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '7',
    name: 'Minimalist Chain',
    price: 58,
    category: 'necklaces',
    material: 'silver',
    image: 'https://images.unsplash.com/photo-1599643477874-c5a8a0b06b98?q=80&w=600&auto=format&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '8',
    name: 'Pearl Drop Earrings',
    price: 72,
    category: 'earrings',
    material: 'gold',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=600&auto=format&fit=crop',
  }
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const addItem = useCartStore((state) => state.addItem);
  const [sort, setSort] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categoryFilter = searchParams.get('category');
  const materialFilter = searchParams.get('material');

  const toggleFilter = (type, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (newParams.get(type) === value) {
      newParams.delete(type);
    } else {
      newParams.set(type, value);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = useMemo(() => {
    let result = products;
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    if (materialFilter) {
      result = result.filter(p => p.material === materialFilter);
    }

    if (sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [categoryFilter, materialFilter, sort]);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">All Jewelry</h1>
            <p className="text-muted-foreground max-w-xl">
              Discover our complete collection of demi-fine jewelry. Crafted with care for the modern woman.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 border rounded hover:bg-muted transition-colors"
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-muted transition-colors uppercase tracking-widest text-sm">
                Sort: {sort === 'featured' ? 'Featured' : sort === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-background border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                <button 
                  onClick={() => setSort('featured')}
                  className="w-full text-left px-4 py-3 hover:bg-muted transition-colors text-sm uppercase tracking-widest"
                >
                  Featured
                </button>
                <button 
                  onClick={() => setSort('price-low')}
                  className="w-full text-left px-4 py-3 hover:bg-muted transition-colors text-sm uppercase tracking-widest"
                >
                  Price: Low to High
                </button>
                <button 
                  onClick={() => setSort('price-high')}
                  className="w-full text-left px-4 py-3 hover:bg-muted transition-colors text-sm uppercase tracking-widest"
                >
                  Price: High to Low
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className={cn(
            "w-full md:w-64 flex-shrink-0 transition-all",
            showFilters ? "block" : "hidden md:block"
          )}>
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="font-serif text-xl mb-4 tracking-widest uppercase">Category</h3>
                <ul className="space-y-3">
                  {['earrings', 'necklaces', 'huggies', 'sets'].map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => toggleFilter('category', cat)}
                        className={cn(
                          "flex items-center gap-3 text-sm tracking-wide capitalize hover:text-primary transition-colors",
                          categoryFilter === cat ? "text-primary font-medium" : "text-muted-foreground"
                        )}
                      >
                        <div className={cn(
                          "w-4 h-4 border rounded-sm flex items-center justify-center transition-colors",
                          categoryFilter === cat ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground"
                        )}>
                          {categoryFilter === cat && <Check className="w-3 h-3" />}
                        </div>
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full h-px bg-border" />
              
              <div>
                <h3 className="font-serif text-xl mb-4 tracking-widest uppercase">Material</h3>
                <ul className="space-y-3">
                  {['gold', 'silver'].map(mat => (
                    <li key={mat}>
                      <button 
                        onClick={() => toggleFilter('material', mat)}
                        className={cn(
                          "flex items-center gap-3 text-sm tracking-wide capitalize hover:text-primary transition-colors",
                          materialFilter === mat ? "text-primary font-medium" : "text-muted-foreground"
                        )}
                      >
                         <div className={cn(
                          "w-4 h-4 border rounded-sm flex items-center justify-center transition-colors",
                          materialFilter === mat ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground"
                        )}>
                          {materialFilter === mat && <Check className="w-3 h-3" />}
                        </div>
                        {mat === 'gold' ? '18k Gold Plated' : 'Sterling Silver'}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative flex flex-col group cursor-pointer">
                  <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out md:group-hover:opacity-0"
                    />
                    <img 
                      src={product.imageHover} 
                      alt={`${product.name} on model`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out md:group-hover:opacity-100 scale-105 md:group-hover:scale-100 transition-transform hidden md:block"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(product, product.material, 1);
                        }}
                        className="w-full py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </Link>
                  <div className="flex flex-col gap-1 items-center text-center">
                    <Link to={`/product/${product.id}`} className="font-serif text-lg tracking-wider hover:text-primary transition-colors">
                      {product.name}
                    </Link>
                    <span className="text-muted-foreground font-medium">${product.price}</span>
                  </div>
                </div>
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center text-muted-foreground">
                <p>No products found matching your filters.</p>
                <button 
                  onClick={() => setSearchParams(new URLSearchParams())}
                  className="mt-4 underline hover:text-primary"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}