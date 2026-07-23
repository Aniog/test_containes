import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import products from '@/data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [expandedSection, setExpandedSection] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedColor('Gold');
    setQuantity(1);
    setAddedToCart(false);
    setExpandedSection('description');
  }, [slug]);

  useEffect(() => {
    if (!product) return;
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [product, selectedColor]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline-gold text-xs">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const currentImg = product.images.find((img) => img.color.toLowerCase() === selectedColor.toLowerCase());
  const currentImgId = currentImg ? currentImg.imgId : product.images[0].imgId;
  const relatedProducts = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedColor, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const accordionSections = [
    { key: 'description', title: 'Description', content: product.details },
    { key: 'materials', title: 'Materials & Care', content: product.materialsCare },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shippingReturns },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Image gallery */}
          <div>
            <div className="aspect-square bg-ivory-alt overflow-hidden mb-3">
              <img
                alt={product.name}
                data-strk-img-id={`detail-main-${currentImgId}`}
                data-strk-img={`[detail-name-${product.id}] [detail-cat-${product.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((img) => (
                <button
                  key={img.imgId}
                  onClick={() => setSelectedColor(img.color)}
                  className={`w-16 h-16 border-2 transition-colors ${
                    selectedColor.toLowerCase() === img.color.toLowerCase()
                      ? 'border-gold'
                      : 'border-transparent hover:border-ivory-alt'
                  }`}
                >
                  <img
                    alt={`${product.name} ${img.color}`}
                    data-strk-img-id={`detail-thumb-${img.imgId}`}
                    data-strk-img={`[detail-name-${product.id}] ${img.color}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Hidden text for image queries */}
            <span id={`detail-name-${product.id}`} className="hidden">{product.name}</span>
            <span id={`detail-cat-${product.id}`} className="hidden">{product.category} {product.subcategory} jewelry</span>

            <p className="text-xs uppercase tracking-[0.2em] text-gold font-medium mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.08em] leading-tight text-[#1A1A1A] mb-3">
              {product.name}
            </h1>
            <p className="text-2xl font-light text-[#1A1A1A] mb-3">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-ivory-alt'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-[#6B6560]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-[#6B6560] leading-relaxed mb-8 font-light">
              {product.description}
            </p>

            {/* Color selector */}
            <div className="mb-5">
              <p className="text-xs uppercase tracking-[0.12em] font-medium mb-2.5">
                Tone: <span className="text-gold">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-5 py-2 text-xs uppercase tracking-[0.12em] border transition-all duration-300 ${
                      selectedColor === color
                        ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
                        : 'border-ivory-alt hover:border-[#1A1A1A] text-[#6B6560]'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.12em] font-medium mb-2.5">Quantity</p>
              <div className="flex items-center border border-ivory-alt w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:text-gold transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:text-gold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-gold w-full flex items-center justify-center gap-2 mb-8">
              {addedToCart ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Bag
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  Add to Bag — ${(product.price * quantity).toFixed(2)}
                </>
              )}
            </button>

            {/* Accordions */}
            <div className="border-t border-ivory-alt">
              {accordionSections.map((section) => (
                <div key={section.key} className="border-b border-ivory-alt">
                  <button
                    onClick={() =>
                      setExpandedSection(expandedSection === section.key ? '' : section.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-xs uppercase tracking-[0.15em] font-medium hover:text-gold transition-colors"
                  >
                    {section.title}
                    {expandedSection === section.key ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedSection === section.key ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-[#6B6560] leading-relaxed font-light">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-2 text-[#1A1A1A] tracking-wide">
              You May Also Like
            </h2>
            <p className="text-sm text-[#6B6560] text-center mb-10 font-light">
              Handpicked for your style
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
