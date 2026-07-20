import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../components/CartContext';
import { Filter, ChevronDown } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-muted">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        />
        <img 
          src={product.images[1]} 
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 left-0 right-0 flex justify-center">
             <button 
                onClick={(e) => { e.preventDefault(); addToCart(product); }}
                className="w-[90%] py-3 bg-white/90 backdrop-blur-sm text-foreground uppercase tracking-widest text-xs hover:bg-white transition-colors"
                aria-label={`Add ${product?.name} to cart`}
              >
                Quick Add
              </button>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <h3 className="font-serif text-lg tracking-wide"><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
        <p className="text-muted-foreground mt-1">${product.price}</p>
      </div>
    </div>
  );
};

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  
  // Create a robust URL updating function for filters
  const toggleCategory = (cat) => {
    if (categoryParam === cat) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (categoryParam && categoryParam !== 'Collections') {
        result = result.filter(p => p.category === categoryParam);
    }

    switch (sort) {
        case 'price-asc':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            result.sort((a, b) => b.price - a.price);
            break;
        default:
            // 'featured' - leave as is or apply specific logic
            break;
    }

    return result;
  }, [categoryParam, sort]);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div className="pt-24 pb-20">
      <div className="bg-muted py-12 mb-12 text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-widest mb-4">
            {categoryParam && categoryParam !== 'Collections' ? categoryParam : 'All Fine Jewelry'}
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
            Discover our collection of demi-fine pieces, designed to be worn and treasured every day.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        
        {/* Mobile Filter Toggle & Sort Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
             <button 
                className="md:hidden flex items-center gap-2 text-sm uppercase tracking-widest"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
             >
                 <Filter className="w-4 h-4" /> Filters
             </button>
             
             <div className="hidden md:block text-sm text-muted-foreground">
                 {filteredProducts.length} Products
             </div>

             <div className="flex items-center gap-2">
                 <span className="text-sm uppercase tracking-widest text-muted-foreground">Sort By</span>
                 <div className="relative">
                     <select 
                        className="appearance-none bg-transparent pr-8 py-1 text-sm uppercase tracking-widest outline-none cursor-pointer"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                     >
                         <option value="featured">Featured</option>
                         <option value="price-asc">Price: Low to High</option>
                         <option value="price-desc">Price: High to Low</option>
                     </select>
                     <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                 </div>
             </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
            
            {/* Filter Sidebar */}
            <div className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
                <div className="mb-8">
                    <h3 className="font-serif text-xl mb-4 pb-2 border-b border-border">Category</h3>
                    <ul className="space-y-3">
                        {categories.map(cat => (
                            <li key={cat}>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        className="w-4 h-4 rounded-none border-foreground text-primary focus:ring-primary cursor-pointer accent-primary"
                                        checked={categoryParam === cat}
                                        onChange={() => toggleCategory(cat)}
                                    />
                                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                        {cat}
                                    </span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-serif text-xl mb-4 pb-2 border-b border-border">Material</h3>
                    <ul className="space-y-3">
                        <li>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 rounded-none accent-primary cursor-pointer" checked onChange={() => {}} />
                                <span className="text-sm text-foreground">18k Gold Plated</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground">No products found matching your criteria.</p>
                        <button 
                            className="mt-4 text-primary uppercase tracking-widest text-sm hover:underline"
                            onClick={() => setSearchParams({})}
                        >
                            Clear Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
