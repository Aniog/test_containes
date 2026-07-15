import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addItem, openCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-[#C9A962] underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    openCart();
  };

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'This piece is crafted from 18K gold-plated sterling silver, providing the luxurious look of solid gold at an accessible price point. Our gold plating is 2-3x thicker than industry standard, ensuring lasting brilliance.\n\nTo keep your jewelry looking its best: avoid contact with water, perfumes, and lotions. Store in a cool, dry place when not wearing. Clean gently with a soft polishing cloth.'
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders.\n\nOrders are processed within 1-2 business days and typically arrive within 5-10 business days (international) or 2-5 business days (US).\n\nWe offer a 30-day return policy for unworn items in original packaging. Contact our team to initiate a return.'
    }
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-[#8B8178]">
          <Link to="/" className="hover:text-[#C9A962] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#C9A962] transition-colors">Shop</Link>
          <span>/</span>
          <span className="capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-[#1A1A1A]">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-[#F5F0E8] rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-[#C9A962]'
                      : 'border-transparent hover:border-[#B8956C]/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Product Name */}
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-[#1A1A1A] mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-2xl text-[#1A1A1A] mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < Math.floor(product.rating)
                        ? 'fill-[#C9A962] text-[#C9A962]'
                        : 'fill-[#F5F0E8] text-[#B8956C]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#8B8178]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-[#8B8178] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm uppercase tracking-wider text-[#1A1A1A] mb-3">
                Finish: <span className="normal-case font-normal">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${
                      selectedVariant === variant
                        ? 'bg-[#1A1A1A] text-white'
                        : 'border border-[#B8956C] text-[#1A1A1A] hover:border-[#1A1A1A]'
                    }`}
                  >
                    {variant === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm uppercase tracking-wider text-[#1A1A1A] mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-[#B8956C]/30 rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-[#C9A962] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 text-center min-w-[48px]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-[#C9A962] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="primary"
              size="full"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-[#B8956C]/20">
              <div className="flex items-center gap-2 text-xs text-[#8B8178]">
                <Check size={14} className="text-[#C9A962]" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#8B8178]">
                <Check size={14} className="text-[#C9A962]" />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-2xl">
          {accordionItems.map((item) => (
            <div key={item.id} className="border-b border-[#B8956C]/20">
              <button
                onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="text-sm uppercase tracking-wider text-[#1A1A1A]">
                  {item.title}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#8B8178] transition-transform duration-300 ${
                    openAccordion === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === item.id ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-sm text-[#8B8178] leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-[#F5F0E8]">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-center text-[#1A1A1A] mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showQuickAdd={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
