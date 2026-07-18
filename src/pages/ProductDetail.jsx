import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center px-6">
        <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-sm font-sans text-gold underline">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: Store in the included pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5-7 business days. Express delivery 2-3 business days. 30-day returns — unworn items in original packaging.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="px-6 md:px-12 lg:px-20 py-4">
        <nav className="flex items-center gap-2 text-xs font-sans text-warm-gray">
          <Link to="/" className="hover:text-charcoal transition-colors no-underline text-warm-gray">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors no-underline text-warm-gray">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-taupe/20 overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-f1g2h3`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-taupe/20 overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb1-${product.id}-i4j5k6`}
                  data-strk-img={`[pdp-${product.id}-title] gold jewelry detail`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
              <div className="aspect-square bg-taupe/20 overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb2-${product.id}-l7m8n9`}
                  data-strk-img={`[pdp-${product.id}-title] jewelry on model`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} on model`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
              <div className="aspect-square bg-taupe/20 overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb3-${product.id}-o0p1q2`}
                  data-strk-img={`[pdp-${product.id}-title] jewelry packaging luxury`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} packaging`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="md:pt-4">
            <h1
              id={`pdp-${product.id}-title`}
              className="font-serif text-2xl md:text-3xl text-charcoal uppercase tracking-product mb-3"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-taupe'}`}
                  />
                ))}
              </div>
              <span className="text-xs font-sans text-warm-gray">({product.reviewCount} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-charcoal mb-6">${product.price}</p>

            <p
              id={`pdp-${product.id}-desc`}
              className="font-sans text-sm text-warm-gray leading-relaxed mb-8"
            >
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs font-sans font-medium text-charcoal uppercase tracking-wide-sm mb-3">Tone</p>
                <div className="flex gap-3">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 text-xs font-sans font-medium uppercase tracking-wide-sm border transition-colors ${
                        selectedVariant === v
                          ? 'border-charcoal bg-charcoal text-white'
                          : 'border-taupe bg-transparent text-charcoal hover:border-charcoal'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-sans font-medium text-charcoal uppercase tracking-wide-sm mb-3">Quantity</p>
              <div className="flex items-center border border-taupe w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-charcoal hover:bg-taupe/30 transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-sans font-medium text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-charcoal hover:bg-taupe/30 transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full py-4 bg-gold text-white text-sm font-sans font-medium tracking-product uppercase border-none hover:bg-gold-dark transition-colors mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-taupe">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-taupe">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none text-left"
                  >
                    <span className="text-sm font-sans font-medium text-charcoal">{acc.title}</span>
                    <ChevronDown className={`w-4 h-4 text-warm-gray transition-transform ${openAccordion === acc.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4">
                      <p className="text-sm font-sans text-warm-gray leading-relaxed whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 border-t border-taupe">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
