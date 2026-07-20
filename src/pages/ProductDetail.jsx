import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById, fetchProducts } from '../api/products';
import { useCart } from '../context/CartContext';
import { formatPrice, cn } from '../lib/utils';
import { Star, ChevronDown, ChevronRight, Truck, RefreshCcw, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const p = await fetchProductById(id);
        if (p) {
          setProduct(p);
          setSelectedImage(0);
          const allProducts = await fetchProducts();
          const related = allProducts
            .filter(item => item.id !== id && item.data?.category === p.data?.category)
            .slice(0, 4);
          setRelatedProducts(related);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return (
    <div className="pt-40 h-screen text-center font-serif italic text-velmora-muted">
      Unveiling the piece...
    </div>
  );

  if (!product) return (
    <div className="pt-40 h-screen text-center">
      <p className="font-serif italic text-velmora-muted text-xl mb-4">Piece not found.</p>
      <Link to="/shop" className="text-xs uppercase tracking-exclusive font-sans border-b border-velmora-dark pb-1">
        Back to Shop
      </Link>
    </div>
  );

  const fields = product.data;
  const images = fields.images || ['https://via.placeholder.com/1000x1200'];

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: fields.description || 'A timeless addition to your everyday collection.'
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'Crafted in 18K Gold Plated recycled brass. Hypoallergenic and nickel-free. To maintain luster, avoid contact with water, perfumes, and lotions.'
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Piece must be unworn and in original packaging.'
    }
  ];

  return (
    <div className="pt-24 md:pt-40 pb-24 px-6 md:px-12 bg-velmora-stone">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
          {/* Left: Gallery */}
          <div className="w-full lg:w-[60%] flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar scroll-smooth">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "w-20 md:w-24 aspect-[3/4] bg-velmora-dark/5 shrink-0 overflow-hidden transition-all duration-300",
                    selectedImage === idx ? "ring-1 ring-velmora-gold" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img} alt={`${fields.name} ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Display */}
            <div className="flex-grow aspect-[3/4] bg-velmora-dark/5 overflow-hidden">
               <motion.img
                 key={selectedImage}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.5 }}
                 src={images[selectedImage]}
                 alt={fields.name}
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-[40%] space-y-8">
            <div className="space-y-4">
              <nav className="text-[10px] uppercase tracking-widest text-velmora-muted flex items-center gap-2">
                <Link to="/" className="hover:text-velmora-dark">Home</Link>
                <ChevronRight size={10} />
                <Link to="/shop" className="hover:text-velmora-dark">Shop</Link>
                <ChevronRight size={10} />
                <span className="text-velmora-dark">{fields.name}</span>
              </nav>
              <h1 className="font-serif text-3xl md:text-4xl text-velmora-dark uppercase tracking-widest leading-tight">
                {fields.name}
              </h1>
              <div className="flex items-center justify-between">
                <p className="text-xl font-sans text-velmora-dark font-medium">
                  {formatPrice(fields.price)}
                </p>
                <div className="flex items-center gap-1">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={12} className={cn("fill-velmora-gold text-velmora-gold", i === 4 && "opacity-50")} />
                   ))}
                   <span className="text-[10px] uppercase tracking-widest text-velmora-muted ml-2">(12 Reviews)</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-velmora-dark/5">
              {/* Variant Selector */}
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-widest font-sans font-bold text-velmora-muted">Tone: <span className="text-velmora-dark">{selectedColor}</span></p>
                <div className="flex gap-3">
                  {['Gold', 'Silver'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "px-6 py-2 border text-[11px] uppercase tracking-widest font-sans font-medium transition-all",
                        selectedColor === color
                          ? "bg-velmora-dark text-white border-velmora-dark shadow-md"
                          : "border-velmora-dark/10 text-velmora-muted hover:border-velmora-dark/30"
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & CTA */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-6">
                   <div className="flex items-center border border-velmora-dark/10 px-4 py-3 space-x-6">
                      <button
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className="text-velmora-dark hover:text-velmora-gold transition-colors"
                      >
                        -
                      </button>
                      <span className="text-sm font-sans font-medium w-4 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(q => q + 1)}
                        className="text-velmora-dark hover:text-velmora-gold transition-colors"
                      >
                        +
                      </button>
                   </div>
                   <p className="text-[10px] uppercase tracking-widest text-velmora-muted italic">In Stock, Ships today</p>
                </div>

                <button
                  onClick={() => addToCart({ ...fields, id: product.id }, quantity, selectedColor)}
                  className="w-full bg-velmora-gold text-white py-5 uppercase tracking-exclusive text-[11px] font-sans font-semibold hover:bg-velmora-dark shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  Add to Bag
                </button>
              </div>
            </div>

            {/* Icons Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 text-center">
               <div className="space-y-2 flex flex-col items-center">
                 <Truck size={18} strokeWidth={1} className="text-velmora-gold" />
                 <span className="text-[9px] uppercase tracking-widest text-velmora-muted leading-tight">Free Express <br/>Shipping</span>
               </div>
               <div className="space-y-2 flex flex-col items-center">
                 <RefreshCcw size={18} strokeWidth={1} className="text-velmora-gold" />
                 <span className="text-[9px] uppercase tracking-widest text-velmora-muted leading-tight">30-Day Hassle <br/>Free Returns</span>
               </div>
               <div className="space-y-2 flex flex-col items-center">
                 <ShieldCheck size={18} strokeWidth={1} className="text-velmora-gold" />
                 <span className="text-[9px] uppercase tracking-widest text-velmora-muted leading-tight">2-Year Piece <br/>Warranty</span>
               </div>
            </div>

            {/* Accordions */}
            <div className="pt-10 space-y-4">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-velmora-dark/5">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full py-4 flex justify-between items-center text-left group"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-velmora-dark group-hover:text-velmora-gold transition-colors">
                      {acc.title}
                    </span>
                    <ChevronDown
                      size={16}
                      className={cn("text-velmora-muted transition-transform duration-300", openAccordion === acc.id && "rotate-180")}
                    />
                  </button>
                  <AnimatePresence>
                    {openAccordion === acc.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm text-velmora-muted font-serif leading-relaxed italic">
                          {acc.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 pt-20 border-t border-velmora-dark/5">
            <h2 className="font-serif text-3xl text-velmora-dark mb-12 italic">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
