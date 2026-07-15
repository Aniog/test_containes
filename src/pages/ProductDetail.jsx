import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-warm-400">Product not found.</p>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-cream-300 overflow-hidden mb-4">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-${product.id}-${activeImage}`}
                data-strk-img={`[pdp-title-${product.id}] velmora gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 bg-cream-300 overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-warm-900' : 'border-transparent hover:border-cream-500'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-title-${product.id}] velmora gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
              {product.category}
            </p>
            <h1
              id={`pdp-title-${product.id}`}
              className="product-title text-2xl md:text-3xl mb-4"
            >
              {product.name}
            </h1>
            <p className="font-serif text-2xl text-warm-900 mb-4">${product.price}</p>

            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-cream-500'
                  }`}
                />
              ))}
              <span className="text-xs text-warm-400 ml-1">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-warm-500 leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[10px] tracking-widest uppercase text-warm-400 mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.value}
                    onClick={() => v.inStock && setSelectedVariant(v.value)}
                    disabled={!v.inStock}
                    className={`px-6 py-2.5 text-xs tracking-wider border transition-all ${
                      selectedVariant === v.value
                        ? 'border-warm-900 bg-warm-900 text-cream'
                        : v.inStock
                        ? 'border-cream-500 text-warm-900 hover:border-warm-900'
                        : 'border-cream-300 text-warm-300 cursor-not-allowed line-through'
                    }`}
                  >
                    {v.label}
                    {!v.inStock && ' — Sold Out'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[10px] tracking-widest uppercase text-warm-400 mb-3">Quantity</p>
              <div className="flex items-center border border-cream-500 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-warm-400 hover:text-warm-900 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-warm-400 hover:text-warm-900 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-8">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="border-t border-cream-500">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-cream-500">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-widest uppercase text-warm-900 font-medium"
                  >
                    {acc.title}
                    <ChevronDown
                      className={`w-4 h-4 text-warm-400 transition-transform duration-300 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-warm-500 leading-relaxed">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-cream-500">
            <p className="text-center text-[10px] tracking-[0.3em] uppercase text-warm-400 mb-3">
              Complete the Look
            </p>
            <h2 className="section-title text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.slug}`} className="group">
                  <div className="aspect-[3/4] bg-cream-300 overflow-hidden mb-4">
                    <img
                      alt={rp.name}
                      data-strk-img-id={`related-${rp.id}`}
                      data-strk-img={`[related-name-${rp.id}] velmora gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p id={`related-name-${rp.id}`} className="product-title text-[11px] mb-1">{rp.name}</p>
                  <p className="text-sm font-medium text-warm-900">${rp.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}