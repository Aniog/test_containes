import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Star, ChevronDown, ChevronUp, ArrowLeft, Heart } from 'lucide-react';
import { formatPrice, cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-velmora-charcoal/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left group"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold font-sans group-hover:text-velmora-gold transition-colors">
          {title}
        </span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-500 ease-in-out',
          isOpen ? 'max-h-96 pb-8' : 'max-h-0'
        )}
      >
        <div className="text-sm text-velmora-grey leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('gold');
  const product = products.find((p) => p.id === parseInt(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-40 pb-20 px-6 text-center h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif mb-6">Piece Not Found</h1>
        <Link to="/shop" className="text-xs uppercase tracking-widest font-bold border-b border-velmora-charcoal pb-1">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 bg-velmora-alabaster">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumbs */}
        <div className="mb-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-[10px] uppercase tracking-widest font-bold text-velmora-grey hover:text-velmora-charcoal transition-colors group"
          >
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Gallery */}
          <div className="space-y-4">
             <div className="aspect-[3/4] bg-velmora-charcoal/5 overflow-hidden">
                <img
                  data-strk-img-id={`pdp-main-${product.id}`}
                  data-strk-img={`[pdp-title-${product.id}] close up jewelry detail editorial luxury`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="grid grid-cols-4 gap-4">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="aspect-[3/4] bg-velmora-charcoal/5 cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                        data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                        data-strk-img={`[pdp-title-${product.id}] piece viewed from angle ${i}`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="300"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        alt={`${product.name} detail ${i}`}
                        className="w-full h-full object-cover"
                    />
                 </div>
               ))}
             </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-8 border-b border-velmora-charcoal/10 pb-8">
              <div className="flex justify-between items-start mb-4">
                <h1 id={`pdp-title-${product.id}`} className="text-3xl md:text-4xl font-serif uppercase tracking-widest leading-tight pr-12">
                  {product.name}
                </h1>
                <Heart className="w-6 h-6 cursor-pointer text-velmora-grey hover:text-red-400 hover:fill-red-400 transition-all duration-300" />
              </div>
              <div className="flex items-center space-x-6 mb-8">
                <p className="text-xl font-serif text-velmora-gold">{formatPrice(product.price)}</p>
                <div className="flex items-center space-x-2 border-l border-velmora-charcoal/10 pl-6">
                  <div className="flex text-velmora-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-velmora-grey">24 Reviews</span>
                </div>
              </div>
              <p className="text-velmora-grey font-sans text-sm leading-relaxed max-w-lg mb-8">
                {product.description}
              </p>

              {/* Variant Selector */}
              <div className="space-y-4 mb-8">
                <span className="text-[10px] uppercase tracking-widest font-bold">Pick Your Finish</span>
                <div className="flex space-x-4">
                  {['gold', 'silver'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      className={cn(
                        'px-8 py-3 text-[10px] uppercase tracking-widest font-bold border transition-all duration-300',
                        tone === t
                          ? 'bg-velmora-charcoal text-velmora-alabaster border-velmora-charcoal'
                          : 'bg-transparent text-velmora-charcoal border-velmora-charcoal/20 hover:border-velmora-charcoal'
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-4 mb-10">
                <span className="text-[10px] uppercase tracking-widest font-bold">Quantity</span>
                <div className="flex items-center border border-velmora-charcoal/10 w-fit px-4 py-3 space-x-8">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-velmora-gold transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-sans w-6 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="hover:text-velmora-gold transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => onAddToCart(product, quantity)}
                className="w-full bg-velmora-gold text-white py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-velmora-charcoal transition-all duration-500 shadow-xl"
              >
                Add to Bag — {formatPrice(product.price * quantity)}
              </button>
            </div>

            {/* Product Details Accordions */}
            <div className="space-y-2">
              <Accordion title="Description">
                <p>Designed for daily wear, this piece combines structural elegance with delicate craftsmanship. Its warm glow complements any skin tone and adds a touch of understated luxury to your ensemble.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p><strong>Materials:</strong> {product.materials}</p>
                <p className="mt-4"><strong>Care:</strong> To maintain the luster of your jewelry, avoid contact with water, perfume, and chemicals. Store in a dry, cool place when not in use.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free standard shipping on all orders over $75. 30-day returns on unworn pieces. Gift wrapping available at checkout.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <section>
          <div className="flex items-center justify-between mb-16 border-b border-velmora-charcoal/10 pb-8">
            <h2 className="text-3xl font-serif">Complete the Look</h2>
            <Link to="/shop" className="text-xs uppercase tracking-widest font-bold hover:text-velmora-gold transition-colors">
              Explore All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/product/${p.id}`} className="block relative aspect-[3/4] overflow-hidden bg-velmora-charcoal/5 mb-6">
                  <img
                    data-strk-img-id={`pdp-related-${p.id}`}
                    data-strk-img={`[pdp-related-title-${p.id}] gold jewelry luxury editorial`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="text-center">
                  <h3 id={`pdp-related-title-${p.id}`} className="text-[10px] uppercase tracking-widest font-serif font-medium mb-1 group-hover:text-velmora-gold transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs font-sans text-velmora-grey">{formatPrice(p.price)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
