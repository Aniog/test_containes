import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

const TRANSPARENT_PX = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold underline">Back to Shop</Link>
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
      content: 'Free worldwide shipping on all orders. Standard delivery 5-7 business days. Express delivery 2-3 business days. 30-day hassle-free returns — items must be unworn with tags attached.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-muted-fg">
          <Link to="/" className="hover:text-gold transition-colors no-underline text-muted-fg">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors no-underline text-muted-fg">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.imgId}`}
                data-strk-img={`[pdp-${product.id}-title] [pdp-${product.id}-desc]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                src={TRANSPARENT_PX}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-muted overflow-hidden cursor-pointer border border-transparent hover:border-gold transition-colors">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-${Math.random().toString(36).slice(2, 8)}`}
                    data-strk-img={`[pdp-${product.id}-title] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={TRANSPARENT_PX}
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="py-4">
            <h1
              id={`pdp-${product.id}-title`}
              className="font-serif text-2xl md:text-3xl text-charcoal font-light uppercase tracking-product"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-fg">({product.reviewCount} reviews)</span>
            </div>

            <p className="mt-4 text-2xl font-serif text-charcoal">${product.price}</p>

            <p
              id={`pdp-${product.id}-desc`}
              className="mt-6 text-sm text-muted-fg leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-widest text-charcoal mb-3">
                Tone: <span className="text-muted-fg capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-medium uppercase tracking-widest border rounded-sm transition-all duration-200 cursor-pointer ${
                      selectedVariant === v
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-border bg-transparent text-charcoal hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-widest text-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-sm text-charcoal hover:border-gold transition-colors bg-transparent cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-base font-medium text-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-sm text-charcoal hover:border-gold transition-colors bg-transparent cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-gold text-white text-sm font-medium uppercase tracking-widest py-4 hover:bg-gold-light transition-colors duration-300 border-none cursor-pointer rounded-sm"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer"
                  >
                    <span className="text-sm font-medium text-charcoal">{acc.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-fg transition-transform duration-200 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 text-sm text-muted-fg leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24 border-t border-border pt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} showQuickAdd={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
