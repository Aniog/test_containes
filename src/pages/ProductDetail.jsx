import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Check, ArrowLeft } from 'lucide-react';
import ProductGallery from '../components/product/ProductGallery';
import ProductAccordion from '../components/product/ProductAccordion';
import ProductCard from '../components/product/ProductCard';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = getRelatedProducts(product?.id, 4);
  const { addToCart, isLoading } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  const handleAddToCart = async () => {
    if (!product) return;
    
    await addToCart(product, quantity, selectedVariant);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[#3D3833] mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const accordionItems = [
    {
      title: 'Description',
      content: product.description
    },
    {
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare Instructions: ${product.care}`
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery takes 5-7 business days.\n\n30-day hassle-free returns. Items must be unworn and in original packaging. Contact us for return authorization.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-24 pb-16">
      <div className="container-wide">
        {/* Back Link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-[#9A8E82] hover:text-[#3D3833] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Product Info */}
          <div className="lg:pl-8">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-[#C9A66B] text-white text-xs font-sans font-medium tracking-wide mb-4">
                {product.badge}
              </span>
            )}

            {/* Product Name */}
            <h1 className="product-name text-2xl md:text-3xl text-[#3D3833] mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-[#C9A66B] fill-[#C9A66B]'
                        : 'text-[#E8E2D9]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#9A8E82]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-[#3D3833] mb-6">
              ${product.price}
            </p>

            {/* Short Description */}
            <p className="text-[#9A8E82] leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm font-sans font-medium text-[#3D3833] mb-3">
                  Finish: <span className="font-normal text-[#9A8E82]">{selectedVariant}</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 text-sm font-sans border transition-all ${
                        selectedVariant === variant
                          ? 'border-[#3D3833] bg-[#3D3833] text-white'
                          : 'border-[#E8E2D9] text-[#3D3833] hover:border-[#3D3833]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-sans font-medium text-[#3D3833] mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border border-[#E8E2D9]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-[#9A8E82] hover:text-[#3D3833] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm font-medium text-[#3D3833]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-[#9A8E82] hover:text-[#3D3833] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isLoading}
              className={`w-full py-5 text-sm font-sans font-medium tracking-wide transition-all flex items-center justify-center gap-2 mb-4 ${
                isAdded
                  ? 'bg-[#2A7D4F] text-white'
                  : 'bg-[#C9A66B] text-white hover:bg-[#A68B5B]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-5 h-5" />
                  Added to Bag
                </>
              ) : isLoading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Add to Bag'
              )}
            </button>

            {/* Product Details */}
            <div className="py-6 border-t border-[#E8E2D9]">
              <ProductAccordion items={accordionItems} />
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-[#E8E2D9] text-xs text-[#9A8E82]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B]" />
                Free Worldwide Shipping
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B]" />
                30-Day Returns
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B]" />
                Hypoallergenic
              </span>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E8E2D9]">
            <h2 className="font-serif text-2xl md:text-3xl text-[#3D3833] text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
