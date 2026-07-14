import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Minus, Plus, ShoppingBag, Heart, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../../data/products';
import { useCart } from '../../context/CartContext';
import StarRating from '../shared/StarRating';
import ProductCard from '../product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.shortDescription
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `Our ${product.name} is crafted with premium 18K gold vermeil over sterling silver. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a cool, dry place when not wearing. Clean gently with a soft jewelry cloth.`
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: `Free worldwide shipping on all orders. Standard delivery: 5-7 business days. Express delivery: 2-3 business days. We offer a 30-day return policy for unworn items in original packaging.`
    }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container py-4">
        <Link 
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-[#57534E] hover:text-[#1C1917] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-[#F5F3EF] rounded-lg overflow-hidden">
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
                  className={`w-20 h-24 rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === index 
                      ? 'border-[#C4A962]' 
                      : 'border-transparent hover:border-[#E7E5E4]'
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

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-[#1C1917] text-white text-xs font-medium tracking-[0.1em] uppercase rounded mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1 
              className="font-serif text-2xl md:text-3xl tracking-[0.1em] text-[#1C1917] mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.rating} />
              <span className="text-sm text-[#57534E]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-[#1C1917] mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-[#57534E] leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="text-sm font-medium text-[#1C1917] mb-3 block">
                  Finish: {selectedVariant}
                </label>
                <div className="flex gap-3">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 rounded text-sm font-medium tracking-wide transition-colors ${
                        selectedVariant === variant
                          ? 'bg-[#1C1917] text-white'
                          : 'bg-white border border-[#E7E5E4] text-[#1C1917] hover:border-[#1C1917]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-sm font-medium text-[#1C1917] mb-3 block">
                Quantity
              </label>
              <div className="inline-flex items-center border border-[#E7E5E4] rounded">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 text-[#57534E] hover:text-[#1C1917] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 text-[#57534E] hover:text-[#1C1917] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded flex items-center justify-center gap-2 text-sm font-medium tracking-[0.1em] uppercase transition-all ${
                addedToCart
                  ? 'bg-[#22C55E] text-white'
                  : 'bg-[#C4A962] text-white hover:bg-[#D4BC7D]'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              {addedToCart ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            {/* Wishlist */}
            <button className="w-full mt-3 py-3 border border-[#E7E5E4] rounded flex items-center justify-center gap-2 text-sm font-medium text-[#57534E] hover:border-[#1C1917] hover:text-[#1C1917] transition-colors">
              <Heart className="w-4 h-4" />
              Add to Wishlist
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#E7E5E4]">
              {accordions.map(accordion => (
                <div key={accordion.id} className="border-b border-[#E7E5E4]">
                  <button
                    onClick={() => setOpenAccordion(
                      openAccordion === accordion.id ? null : accordion.id
                    )}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm font-medium text-[#1C1917]">
                      {accordion.title}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-[#57534E] transition-transform ${
                        openAccordion === accordion.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === accordion.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-[#57534E] leading-relaxed">
                      {accordion.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-[#F5F3EF] py-16 md:py-20">
          <div className="container">
            <h2 className="font-serif text-2xl md:text-3xl text-center text-[#1C1917] mb-12">
              You May Also Love
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} showSecondImage={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
