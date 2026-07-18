import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductAccordion from '@/components/product/ProductAccordion';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant(0);
    setQuantity(1);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-4xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const variant = product.variants[selectedVariant];

  const handleAddToCart = () => {
    addToCart(product, variant, quantity);
  };

  return (
    <div ref={containerRef} className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-[#6B6560] mb-8">
          <Link to="/" className="hover:text-[#B8860B] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#B8860B] transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1A1A1A]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-[#E8E2DA] rounded-sm overflow-hidden mb-4">
              <img
                alt={product.name}
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[${product.id}-desc] [${product.id}-title] [product-detail-title]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-[#E8E2DA] rounded-sm overflow-hidden transition-all duration-300 ${
                    selectedImage === index ? 'ring-2 ring-[#B8860B]' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${index + 1}`}
                    data-strk-img-id={`product-${product.id}-thumb-${index}`}
                    data-strk-img={`[${product.id}-detail] [${product.id}-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 id={`${product.id}-title`} className="product-name text-3xl md:text-4xl mb-2">
              {product.name}
            </h1>
            <p id={`${product.id}-desc`} className="text-[#6B6560] font-light mb-4">
              {product.description}
            </p>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#D4A853] text-[#D4A853]'
                        : 'text-[#E8E2DA]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6560]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="serif-heading text-3xl mb-8">${variant.price}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-sm uppercase tracking-wider mb-3 block">Color</label>
              <div className="flex gap-3">
                {product.variants.map((v, index) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                      selectedVariant === index
                        ? 'bg-[#B8860B] text-white'
                        : 'border border-[#E8E2DA] text-[#1A1A1A] hover:border-[#B8860B]'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm uppercase tracking-wider mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-[#E8E2DA] hover:border-[#B8860B] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-[#E8E2DA] hover:border-[#B8860B] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            <p className="text-xs text-[#6B6560] text-center">
              Free shipping on orders over $75
            </p>

            {/* Accordions */}
            <div className="mt-12">
              <ProductAccordion product={product} />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <RelatedProducts currentProductId={product.id} category={product.category} />
        </div>
      </div>
    </div>
  );
}
