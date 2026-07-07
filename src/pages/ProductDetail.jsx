import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, ChevronDown, ShoppingBag, Truck, RotateCcw, Gem } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';

export default function ProductDetail() {
  const { slug } = useParams();
  const { dispatch } = useCart();
  const product = products.find((p) => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Default');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [added, setAdded] = useState(false);

  const related = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="pt-32 text-center min-h-screen bg-velmora-cream">
        <p className="font-serif text-xl text-velmora-brown">Product not found</p>
        <Link to="/shop" className="text-sm text-velmora-gold underline mt-4 inline-block">
          Back to shop
        </Link>
      </div>
    );
  }

  const gallery = product.gallery_urls || [product.image_url];

  const handleAdd = () => {
    dispatch({
      type: 'ADD',
      item: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image_url,
        variant: selectedVariant,
        quantity,
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-24 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-velmora-brown mb-6 md:mb-10">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-espresso">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="md:w-1/2 lg:w-[55%]">
            <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible shrink-0">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 md:w-20 md:h-20 border-2 overflow-hidden shrink-0 transition-colors ${
                      selectedImage === i ? 'border-velmora-gold' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
              {/* Main image */}
              <div className="flex-1 aspect-[4/5] bg-velmora-sand overflow-hidden">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={gallery[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:w-1/2 lg:w-[45%]">
            <p className="text-xs tracking-ultra uppercase text-velmora-gold font-medium mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-velmora-espresso tracking-wider uppercase mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <StarRating rating={product.rating} size={4} />
              <span className="text-xs text-velmora-brown">{product.review_count} reviews</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-2xl text-velmora-espresso">${product.price}</span>
              {product.compare_at_price && (
                <span className="text-base text-velmora-warm line-through">${product.compare_at_price}</span>
              )}
            </div>

            <p className="text-sm text-velmora-brown leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants.length > 0 && (
              <div className="mb-6">
                <p className="text-xs font-medium tracking-wide uppercase text-velmora-brown mb-2">
                  Tone
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 text-xs font-medium tracking-wider uppercase border transition-colors ${
                        selectedVariant === v
                          ? 'border-velmora-espresso bg-velmora-espresso text-white'
                          : 'border-velmora-warm text-velmora-espresso hover:border-velmora-gold'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add */}
            <div className="flex items-stretch gap-3 mb-8">
              <div className="flex items-center border border-velmora-warm/60">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-3 text-velmora-espresso hover:text-velmora-gold"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-medium text-velmora-espresso">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-3 text-velmora-espresso hover:text-velmora-gold"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className={`flex-1 flex items-center justify-center gap-2 text-xs font-medium tracking-widest uppercase py-3.5 transition-colors ${
                  added
                    ? 'bg-velmora-gold text-white'
                    : 'bg-velmora-espresso text-white hover:bg-velmora-brown'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>

            {/* Trust mini */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-[11px] text-velmora-brown">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-velmora-gold" /> Free shipping over $50
              </span>
              <span className="flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-velmora-gold" /> 30-day returns
              </span>
              <span className="flex items-center gap-1.5">
                <Gem className="w-3.5 h-3.5 text-velmora-gold" /> 18K gold plated
              </span>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-warm/40">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                <p className="text-sm text-velmora-brown leading-relaxed">{product.description}</p>
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
              >
                <p className="text-sm text-velmora-brown leading-relaxed">{product.materials}</p>
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
              >
                <p className="text-sm text-velmora-brown leading-relaxed">{product.shipping_info}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-espresso mb-8 md:mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, idx) => (
                <RelatedCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Accordion({ title, isOpen, onToggle, children }) {
  return (
    <div className="border-b border-velmora-warm/40">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-velmora-espresso">{title}</span>
        <ChevronDown className={`w-4 h-4 text-velmora-brown transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-5">{children}</div>
      </motion.div>
    </div>
  );
}

function RelatedCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link to={`/product/${product.slug}`} className="group block">
        <div className="aspect-[3/4] bg-velmora-sand overflow-hidden mb-3">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-espresso mb-1">
          {product.name}
        </h3>
        <span className="text-sm font-medium text-velmora-brown">${product.price}</span>
      </Link>
    </motion.div>
  );
}
