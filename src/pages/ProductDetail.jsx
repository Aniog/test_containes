import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../api/products';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Plus, Minus, ChevronRight, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between group"
      >
        <span className="text-xs uppercase tracking-widest font-semibold group-hover:text-velmora-gold transition-colors">{title}</span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm text-gray-500 leading-relaxed font-light">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.image);
  const [activeVariant, setActiveVariant] = useState('Gold');

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="serif italic text-2xl">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} x ${product.name} added to bag`);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-gray-400 mb-12">
        <Link to="/" className="hover:text-velmora-dark">Home</Link>
        <ChevronRight size={10} />
        <Link to="/shop" className="hover:text-velmora-dark">Shop</Link>
        <ChevronRight size={10} />
        <span className="text-gray-800 font-semibold">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 mb-32">
        {/* Gallery */}
        <div className="flex-grow lg:flex lg:space-x-4">
          {/* Thumbnails */}
          <div className="hidden lg:flex flex-col space-y-4 w-20">
            {[product.image, product.hoverImage].map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImage(img)}
                className={`aspect-[3/4] overflow-hidden bg-velmora-warm border transition-colors ${activeImage === img ? 'border-velmora-gold' : 'border-transparent'}`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-grow aspect-[3/4] bg-velmora-warm overflow-hidden">
            <motion.img 
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={activeImage} 
              alt={product.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          {/* Mobile Thumbnails */}
          <div className="flex lg:hidden mt-4 space-x-4 overflow-x-auto no-scrollbar pb-2">
            {[product.image, product.hoverImage].map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImage(img)}
                className={`aspect-[3/4] w-20 flex-shrink-0 overflow-hidden bg-velmora-warm border ${activeImage === img ? 'border-velmora-gold' : 'border-transparent'}`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:w-[450px] space-y-10">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase">{product.name}</h1>
            <div className="flex items-center justify-between">
              <span className="text-2xl text-velmora-gold font-serif italic tracking-wide">${product.price}</span>
              <div className="flex items-center space-x-1 text-velmora-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-[10px] text-gray-400 uppercase tracking-widest ml-2">(12 REVIEWS)</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed font-light">{product.description}</p>

          {/* Variant Selector */}
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest font-semibold">Tones</p>
            <div className="flex space-x-4">
              {['Gold', 'Silver'].map(tone => (
                <button
                  key={tone}
                  onClick={() => setActiveVariant(tone)}
                  className={`px-8 py-3 text-[10px] uppercase tracking-widest border transition-all duration-300 ${activeVariant === tone ? 'bg-velmora-dark text-white border-velmora-dark' : 'bg-transparent text-gray-400 border-gray-200 hover:border-velmora-dark hover:text-velmora-dark'}`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center space-x-6 border border-gray-200 px-6 py-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-velmora-gold transition-colors"><Minus size={16} /></button>
                <span className="text-sm font-semibold w-6 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="hover:text-velmora-gold transition-colors"><Plus size={16} /></button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-grow py-4 bg-velmora-dark text-white uppercase text-xs tracking-[0.3em] font-semibold hover:bg-velmora-gold transition-all duration-300 shadow-lg"
              >
                Add to Bag
              </button>
            </div>
          </div>

          {/* Details Accordions */}
          <div className="pt-10">
            <Accordion title="Description">
              <p>{product.description} Perfect for both gifting and self-purchase. This piece represents the Velmora ethos of quiet luxury.</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>Crafted with {product.materials}. Avoid contact with water, perfumes, and lotions. Store in your Velmora pouch when not in use.</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>{product.shipping} {product.returns}</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="space-y-16 pt-24 border-t border-gray-100">
        <h2 className="text-3xl font-serif italic text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="group text-center">
              <div className="aspect-[3/4] overflow-hidden bg-velmora-warm relative mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-800">{item.name}</h3>
              <p className="text-sm font-light text-velmora-gold font-serif italic tracking-wider mt-2">${item.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
