import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-brand-charcoal">Product not found</h1>
        <Link to="/shop" className="text-brand-gold text-sm mt-4 inline-block">← Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: Avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently polish with a soft cloth to maintain shine.`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days. 30-day hassle-free returns — items must be unworn and in original packaging.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-brand-muted font-sans">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-brand-ivory overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-e1f2g3`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-name]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-brand-ivory overflow-hidden cursor-pointer border border-transparent hover:border-brand-gold transition-colors">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-h4i5j6`}
                    data-strk-img={`[pdp-${product.id}-name] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-4">
            <h1 id={`pdp-${product.id}-name`} className="font-serif text-2xl md:text-3xl uppercase tracking-product text-brand-charcoal">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-xl md:text-2xl text-brand-charcoal font-sans font-light mt-3">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-warm'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-muted font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p id={`pdp-${product.id}-desc`} className="text-sm text-brand-muted font-sans leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="text-xs uppercase tracking-wider text-brand-muted font-sans font-medium mb-3">
                  Tone
                </p>
                <div className="flex gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 text-xs uppercase tracking-wider font-sans font-medium border transition-colors ${
                        selectedVariant === variant
                          ? 'border-brand-charcoal bg-brand-charcoal text-white'
                          : 'border-brand-warm text-brand-charcoal hover:border-brand-charcoal'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-brand-muted font-sans font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-brand-warm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-brand-ivory transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4 text-brand-charcoal" />
                </button>
                <span className="w-12 h-10 flex items-center justify-center text-sm text-brand-charcoal font-sans border-x border-brand-warm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-brand-ivory transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4 text-brand-charcoal" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-brand-gold text-white py-4 text-sm tracking-wider uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-warm">
              {accordions.map((acc, index) => (
                <div key={index} className="border-b border-brand-warm">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-sans font-medium text-brand-charcoal">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-muted transition-transform ${
                        openAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === index && (
                    <div className="pb-4">
                      <p className="text-sm text-brand-muted font-sans leading-relaxed whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 id="related-title" className="font-serif text-2xl md:text-3xl font-light text-brand-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relProd) => (
              <Link key={relProd.id} to={`/product/${relProd.id}`} className="group">
                <div className="aspect-[3/4] bg-brand-ivory overflow-hidden">
                  <img
                    data-strk-img-id={`related-${relProd.id}-k7l8m9`}
                    data-strk-img={`[related-${relProd.id}-name] [related-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={relProd.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                </div>
                <h3 id={`related-${relProd.id}-name`} className="font-serif text-xs uppercase tracking-product text-brand-charcoal mt-3">
                  {relProd.name}
                </h3>
                <p className="text-sm text-brand-muted mt-1 font-sans">${relProd.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
