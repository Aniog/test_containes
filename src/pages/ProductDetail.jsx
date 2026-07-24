import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Heart, Share2 } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = getRelatedProducts(product);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const AccordionItem = ({ id, title, content }) => (
    <div className="border-b border-[#E8E4E0]">
      <button
        onClick={() => setOpenAccordion(openAccordion === id ? null : id)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium">{title}</span>
        {openAccordion === id ? (
          <ChevronUp size={18} strokeWidth={1.5} />
        ) : (
          <ChevronDown size={18} strokeWidth={1.5} />
        )}
      </button>
      <div className={`accordion-content ${openAccordion === id ? 'open' : ''}`}>
        <div className="pb-4 text-[#8B7E74] text-sm leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm">
          <Link to="/" className="text-[#8B7E74] hover:text-[#2D2926]">Home</Link>
          <span className="mx-2 text-[#E8E4E0]">/</span>
          <Link to="/shop" className="text-[#8B7E74] hover:text-[#2D2926]">Shop</Link>
          <span className="mx-2 text-[#E8E4E0]">/</span>
          <span className="text-[#2D2926]">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-[#F5EBE0] overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 border-2 overflow-hidden transition-colors ${
                      selectedImage === index ? 'border-[#C9A962]' : 'border-transparent'
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
            )}
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            <h1 className="product-name text-2xl mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? '#C9A962' : 'none'}
                    stroke={i < Math.floor(product.rating) ? '#C9A962' : '#E8E4E0'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm text-[#8B7E74]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium mb-6">${product.price}</p>

            {/* Short Description */}
            <p className="text-[#8B7E74] mb-6 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm mb-3">
                  Finish: <span className="capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 text-sm uppercase tracking-wider border transition-colors ${
                        selectedVariant === variant
                          ? 'border-[#C9A962] bg-[#C9A962] text-white'
                          : 'border-[#E8E4E0] hover:border-[#C9A962]'
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
              <p className="text-sm mb-3">Quantity</p>
              <div className="flex items-center border border-[#E8E4E0] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#F5EBE0] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[#F5EBE0] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full mb-4"
            >
              Add to Cart
            </button>

            {/* Wishlist & Share */}
            <div className="flex gap-4 mb-8">
              <button className="flex items-center gap-2 text-sm text-[#8B7E74] hover:text-[#C9A962] transition-colors">
                <Heart size={18} strokeWidth={1.5} />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 text-sm text-[#8B7E74] hover:text-[#C9A962] transition-colors">
                <Share2 size={18} strokeWidth={1.5} />
                Share
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-[#E8E4E0]">
              <AccordionItem
                id="description"
                title="Description"
                content={product.description}
              />
              <AccordionItem
                id="materials"
                title="Materials & Care"
                content={`Materials: ${product.materials}\n\n${product.care}`}
              />
              <AccordionItem
                id="shipping"
                title="Shipping & Returns"
                content="Free worldwide shipping on all orders over $50. Standard delivery takes 5-7 business days. Express delivery available for an additional fee.

We offer free returns within 30 days of purchase. Items must be unworn and in original packaging. To initiate a return, please contact our customer service team."
              />
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} showQuickAdd={false} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
