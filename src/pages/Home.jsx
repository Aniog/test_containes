import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import Reels from '@/components/home/Reels';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <TrustBar />
      <Bestsellers />
      <CategoryTiles />
      <Reels />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </motion.div>
  );
};

export default Home;

cat <<'EOF' > /workspace/my-app/src/pages/Shop.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/shop/ProductCard';
import { PRODUCTS } from '@/config';

const Shop = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'All';

  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('Featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, sortBy]);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low'];

  const filteredProducts = PRODUCTS
    .filter(p => category === 'All' || p.category === category)
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      return 0;
    });

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Shop the Collection</h1>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{filteredProducts.length} Pieces</p>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-12 py-4 border-y border-black/5">
          <div className="flex items-center space-x-8">
            <button 
              className="md:hidden flex items-center space-x-2 text-xs uppercase tracking-widest"
              onClick={() => setIsMobileFilterOpen(true)}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <div className="hidden md:flex items-center space-x-8">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`text-xs uppercase tracking-widest transition-colors ${category === c ? 'text-primary font-bold' : 'text-muted-foreground hover:text-primary'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-2 text-xs uppercase tracking-widest">
              <span>Sort: {sortBy}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 top-full pt-4 hidden group-hover:block z-20">
              <div className="bg-white border border-black/5 shadow-xl p-4 w-48 space-y-3">
                {sortOptions.map(option => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className={`block w-full text-left text-[10px] uppercase tracking-widest hover:text-accent transition-colors ${sortBy === option ? 'text-accent' : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Filters */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="fixed bottom-0 left-0 w-full bg-white z-[110] rounded-t-3xl p-8"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-serif tracking-widest uppercase">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)}><X className="w-6 h-6" /></button>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-semibold mb-4">Category</h3>
                  <div className="flex flex-wrap gap-3">
                    {categories.map(c => (
                      <button
                        key={c}
                        onClick={() => { setCategory(c); setIsMobileFilterOpen(false); }}
                        className={`px-4 py-2 text-[10px] uppercase tracking-widest rounded-full border transition-colors ${category === c ? 'bg-primary text-white border-primary' : 'border-black/10'}`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;

cat <<'EOF' > /workspace/my-app/src/pages/ProductDetail.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';
import { PRODUCTS, CURRENCY } from '@/config';

const Accordion = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-black/5">
    <button
      onClick={onClick}
      className="w-full py-6 flex justify-between items-center text-xs uppercase tracking-[0.2em] font-medium"
    >
      <span>{title}</span>
      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="pb-8 text-sm text-muted-foreground leading-relaxed font-light">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === parseInt(id));
    if (found) {
      setProduct(found);
      window.scrollTo(0, 0);
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  if (!product) return <div className="pt-40 text-center font-serif">Product not found</div>;

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary">{product.category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Gallery */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
            <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 md:w-24 aspect-[3/4] bg-muted flex-shrink-0 border transition-colors ${activeImage === i ? 'border-primary' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="order-1 md:order-2 flex-grow aspect-[3/4] bg-muted overflow-hidden relative group">
              <img
                data-strk-img-id={`p-detail-${product.id}`}
                data-strk-img={`[p-detail-desc] [p-detail-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h1 id="p-detail-name" className="text-3xl md:text-4xl font-serif tracking-[0.1em] mb-4 uppercase">{product.name}</h1>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-serif text-accent">{CURRENCY}{product.price}</p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground ml-2">(12 Reviews)</span>
                </div>
              </div>
            </div>

            <p id="p-detail-desc" className="text-muted-foreground font-light leading-relaxed">
              {product.description}
            </p>

            {/* Variant */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-semibold">Finish: {variant}</span>
              <div className="flex space-x-3">
                {['Gold', 'Silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-8 py-3 text-[10px] uppercase tracking-widest border transition-colors ${variant === v ? 'bg-primary text-white border-primary shadow-lg' : 'border-black/10 hover:border-black/30'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Cart */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-black/10 rounded-full px-4 py-2">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-1"><Minus className="w-4 h-4" /></button>
                  <span className="w-12 text-center text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="p-1"><Plus className="w-4 h-4" /></button>
                </div>
              </div>
              <button
                onClick={() => addToCart({ ...product, price: product.price })}
                className="w-full bg-primary text-white py-5 uppercase tracking-widest text-xs font-semibold hover:bg-black/90 transition-all active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="pt-8">
              <Accordion 
                title="Description" 
                isOpen={openAccordion === 'description'} 
                onClick={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                Our {product.name} is a testament to quiet luxury. Carefully crafted with 18K gold plating over recycled sterling silver, this piece is designed for longevity and daily wear. High-polish finish with hand-set crystal highlights.
              </Accordion>
              <Accordion 
                title="Materials & Care" 
                isOpen={openAccordion === 'materials'} 
                onClick={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
              >
                Materials: 18K Gold Vermeil or Sterling Silver. Lead and Nickel free. Hypoallergenic. To maintain the shine, avoid contact with perfumes, lotions, and water. Wipe with a soft cloth after wear.
              </Accordion>
              <Accordion 
                title="Shipping & Returns" 
                isOpen={openAccordion === 'shipping'} 
                onClick={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
              >
                Free worldwide shipping on all orders over $100. Delivered in our signature FSC-certified jewelry box. 30-day returns accepted for unworn items in original packaging.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="pt-24 border-t border-black/5">
          <h2 className="text-2xl font-serif text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
