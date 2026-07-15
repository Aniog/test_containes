import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product not found</h1>
          <Link to="/shop" className="text-gold hover:text-gold-dark text-sm uppercase tracking-widest">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const accordionItems = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.material}. Store in the provided pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.` },
    { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Arrives in 5–7 business days. 30-day hassle-free returns — no questions asked.' },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-stone">
          <Link to="/" className="hover:text-charcoal transition-colors no-underline text-stone">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors no-underline text-stone">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-ivory overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.imgId}`}
                data-strk-img={`[pdp-${product.descId}] [pdp-${product.titleId}] gold jewelry close-up`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-ivory overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb1-${product.imgId}`}
                  data-strk-img={`[pdp-${product.titleId}] gold jewelry detail`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail 1`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
              <div className="aspect-square bg-ivory overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb2-${product.imgId2}`}
                  data-strk-img={`[pdp-${product.titleId}] jewelry worn on model`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail 2`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
              <div className="aspect-square bg-ivory overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb3-${product.id}-u4v5w6`}
                  data-strk-img={`[pdp-${product.titleId}] jewelry packaging gift box`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail 3`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1
              id={`pdp-${product.titleId}`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-charcoal mb-3"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-border'}`}
                    style={i < Math.floor(product.rating) ? { fill: '#B8860B' } : {}}
                  />
                ))}
              </div>
              <span className="text-sm text-stone">({product.reviewCount} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-charcoal mb-6">${product.price}</p>

            <p id={`pdp-${product.descId}`} className="text-stone leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-sm capitalize rounded-full border transition-all ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-border text-stone hover:border-gold hover:text-gold bg-transparent'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal bg-transparent border-none transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium text-charcoal border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal bg-transparent border-none transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-white py-4 uppercase tracking-widest text-sm font-medium hover:bg-gold-dark transition-colors border-none rounded-none mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-border">
              {accordionItems.map(item => (
                <div key={item.key} className="border-b border-border">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none"
                  >
                    <span className="text-sm uppercase tracking-widest text-charcoal font-medium">{item.title}</span>
                    <ChevronDown className={`w-4 h-4 text-stone transition-transform duration-300 ${openAccordion === item.key ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === item.key ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                    <p className="text-sm text-stone leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24 border-t border-border pt-12">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(related => (
              <Link
                key={related.id}
                to={`/product/${related.id}`}
                className="group block no-underline"
              >
                <div className="aspect-[3/4] bg-ivory overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${related.imgId}`}
                    data-strk-img={`[related-${related.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  id={`related-${related.titleId}`}
                  className="font-serif text-xs uppercase tracking-product text-charcoal mb-1"
                >
                  {related.name}
                </h3>
                <p className="text-sm font-medium text-charcoal">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
