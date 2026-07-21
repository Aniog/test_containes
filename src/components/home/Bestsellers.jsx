import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const fields = product.data || product;

  return (
    <motion.div 
      ref={containerRef}
      className="group relative flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-[#E5E2DA]">
        <img 
          src={isHovered && fields.hover_image_url ? fields.hover_image_url : fields.image_url} 
          alt={fields.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick Add Overlay */}
        <div className={
          `absolute inset-x-0 bottom-0 p-4 transition-all duration-300 transform 
          ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`
        }>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-[#1C1C1C] text-white py-3 text-[10px] uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-[#A68A56] transition-colors"
          >
            <ShoppingBag size={14} />
            <span>Add to Bag</span>
          </button>
        </div>
      </Link>

      <div className="mt-4 flex flex-col items-center text-center">
        <h3 className="text-sm font-serif uppercase tracking-[0.2em] mb-1">{fields.name}</h3>
        <p className="text-sm font-sans text-[#555555]">${fields.price}</p>
      </div>
    </motion.div>
  );
};

const Bestsellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestsellers = async () => {
      const { data: response, error } = await client
        .from('Products')
        .select('*')
        .eq('is_bestseller', true)
        .limit(5);

      if (!error && response?.data?.list) {
        setProducts(response.data.list);
      }
      setLoading(false);
    };

    fetchBestsellers();
  }, []);

  if (loading) return null;

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Bestsellers</h2>
          <div className="w-12 h-px bg-[#A68A56]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link 
            to="/shop" 
            className="text-xs uppercase tracking-[0.3em] font-sans border-b border-[#A68A56] pb-1 hover:text-[#A68A56] transition-colors"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
