import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  const product = products.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    setSelectedVariant(0);
    setQuantity(1);
    setActiveImage(0);
    setOpenAccordion('description');
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-xl">Product not found</p>
          <Link to="/shop" className="btn-subtle mt-4">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => product.relatedIds?.includes(p.id));

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant].name, quantity);
    toast.success(`${product.name} added to your bag`);
  };

  const accordionItems = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={containerRef} className="pt-20 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-${product.imageId}-${activeImage}`}
                data-strk-img={`[pdp-product-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="w-full h-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 bg-velmora-sand overflow-hidden border transition-colors ${
                    activeImage === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-line'
                  }`}
                >
                  <img
                    alt={`${product.name} ${i + 1}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-product-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div>
              {product.tags.includes('new') && (
                <span className="inline-block text-[10px] tracking-widest uppercase bg-velmora-gold text-white px-2.5 py-1 mb-3 font-medium">
                  New
                </span>
              )}
              <h1 id="pdp-product-name" className="font-serif text-2xl md:text-3xl tracking-wider uppercase leading-snug">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-velmora-gold text-velmora-gold'
                          : 'fill-velmora-line text-velmora-line'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-velmora-muted">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              <p className="text-2xl font-medium mt-5">${product.price}</p>
              <p className="mt-4 text-sm text-velmora-muted leading-relaxed">
                {product.description}
              </p>

              {/* Variant selector */}
              <div className="mt-6">
                <p className="text-xs tracking-wider uppercase text-velmora-muted font-medium mb-2">
                  Finish
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant, i) => (
                    <button
                      key={variant.name}
                      onClick={() => setSelectedVariant(i)}
                      className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-all ${
                        selectedVariant === i
                          ? 'border-velmora-deep text-velmora-deep'
                          : 'border-velmora-line text-velmora-muted hover:border-velmora-deep'
                      }`}
                    >
                      <span
                        className="inline-block w-2.5 h-2.5 rounded-full mr-2 align-middle"
                        style={{ backgroundColor: variant.hex }}
                      />
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <p className="text-xs tracking-wider uppercase text-velmora-muted font-medium">
                    Quantity
                  </p>
                  <div className="flex items-center border border-velmora-line">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-9 h-9 flex items-center justify-center hover:bg-velmora-surface transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-10 text-center text-sm">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-9 h-9 flex items-center justify-center hover:bg-velmora-surface transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button onClick={handleAddToCart} className="btn-primary w-full">
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-line">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-velmora-line">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.key ? '' : item.key)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-wider uppercase font-medium"
                  >
                    {item.label}
                    <span className={`transition-transform ${openAccordion === item.key ? 'rotate-45' : ''}`}>
                      <Plus className="w-3 h-3" />
                    </span>
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-5 text-sm text-velmora-muted leading-relaxed whitespace-pre-line animate-fade-in">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <hr className="hairline-divider mb-14" />
            <h3 className="section-title text-center mb-10">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] bg-velmora-sand overflow-hidden">
                    <img
                      alt={p.name}
                      data-strk-img-id={`related-${p.imageId}`}
                      data-strk-img={`[related-name-${p.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-3">
                    <p id={`related-name-${p.id}`} className="product-name text-velmora-deep">{p.name}</p>
                    <p className="text-sm text-velmora-muted mt-0.5">${p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
