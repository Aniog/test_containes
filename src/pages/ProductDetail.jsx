import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ChevronLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addItem, toggleDrawer } = useCart();

  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="font-serif text-2xl text-[#1A1514] mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      quantity,
    });
    toggleDrawer(true);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const variants = ['Gold', 'Silver'];

  const accordionSections = [
    { key: 'description', title: 'Description', content: product.details },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-16">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs tracking-[0.1em] uppercase text-[#7A7268] hover:text-[#3D3833] mb-8 transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-square bg-[#F5F0EB] overflow-hidden mb-4">
              <img
                alt={`${product.name} - view ${selectedImage + 1}`}
                data-strk-img-id={`detail-main-${product.id}-${selectedImage}`}
                data-strk-img={`[product-name-${product.id}] gold jewelry premium`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square bg-[#F5F0EB] overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-[#C8A96E]' : 'border-transparent hover:border-[#E5DDD3]'
                  }`}
                >
                  <img
                    alt={`${product.name} thumbnail ${i + 1}`}
                    data-strk-img-id={`detail-thumb-${product.id}-${i}`}
                    data-strk-img={`[product-name-${product.id}] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#C8A96E] mb-2">{product.category}</p>
            <h1
              id={`product-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl tracking-[0.12em] uppercase text-[#1A1514] leading-tight mb-4"
            >
              {product.name}
            </h1>
            <p className="font-serif text-2xl text-[#C8A96E] mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-[#C8A96E] text-[#C8A96E]' : 'text-[#E5DDD3]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#7A7268]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-[#7A7268] leading-relaxed mb-8">
              {product.description}
            </p>

            <hr className="mb-6" />

            {/* Variant */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase text-[#1A1514] mb-3">
                Finish: <span className="text-[#7A7268]">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 text-sm border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-[#C8A96E] bg-[#FAF8F5] text-[#1A1514]'
                        : 'border-[#E5DDD3] text-[#7A7268] hover:border-[#C8A96E]'
                    }`}
                  >
                    {v === 'Gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-4">
                <p className="text-xs tracking-[0.1em] uppercase text-[#1A1514]">Quantity</p>
                <div className="flex items-center border border-[#E5DDD3]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-[#7A7268] hover:text-[#3D3833] transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 h-10 flex items-center justify-center text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-[#7A7268] hover:text-[#3D3833] transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <button onClick={handleAddToCart} className="btn-primary w-full">
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            <hr className="mb-6" />

            {/* Accordions */}
            <div className="space-y-1">
              {accordionSections.map((section) => (
                <div key={section.key} className="border-b border-[#E5DDD3]">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === section.key ? null : section.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-xs tracking-[0.12em] uppercase text-[#1A1514] hover:text-[#C8A96E] transition-colors"
                  >
                    {section.title}
                    {openAccordion === section.key ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {openAccordion === section.key && (
                    <div className="pb-4 text-sm text-[#7A7268] leading-relaxed animate-fade-in">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You may also like */}
        <hr className="my-16 md:my-20" />
        <div className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl italic text-[#1A1514] tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                <div className="aspect-square bg-[#F5F0EB] overflow-hidden mb-4">
                  <img
                    alt={rp.name}
                    data-strk-img-id={`related-${rp.id}`}
                    data-strk-img={`[related-name-${rp.id}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3
                  id={`related-name-${rp.id}`}
                  className="font-serif text-xs tracking-[0.12em] uppercase text-[#1A1514] leading-snug"
                >
                  {rp.name}
                </h3>
                <p className="text-sm text-[#C8A96E] mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
