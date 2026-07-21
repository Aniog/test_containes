import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-16 text-center">
        <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-velmora-outline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({ ...product, selectedVariant, quantity });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const accordions = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `Material: ${product.material}\n\nCare Instructions: To maintain the beauty of your Velmora jewelry, avoid contact with water, perfume, and cosmetics. Store in a cool, dry place when not worn. Clean gently with a soft cloth.`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy. If you\'re not completely satisfied, return your item for a full refund or exchange.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-velmora">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 font-sans text-sm text-[rgb(var(--color-muted))] mb-8">
          <Link to="/" className="hover:text-[rgb(var(--color-foreground))]">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-[rgb(var(--color-foreground))]">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-[rgb(var(--color-foreground))]">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-[rgb(var(--color-surface))] mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? 'border-[rgb(var(--color-accent))]'
                        : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < Math.floor(product.rating)
                        ? 'text-[rgb(var(--color-accent))] fill-current'
                        : 'text-[rgb(var(--color-muted))]'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-[rgb(var(--color-muted))]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl mb-8">${product.price}</p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-8">
                <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Tone</h3>
                <div className="flex gap-3">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-3 font-sans text-sm uppercase tracking-wider border transition-all ${
                        selectedVariant === variant
                          ? 'border-[rgb(var(--color-accent))] bg-[rgb(var(--color-accent))] text-white'
                          : 'border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-accent))]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-accent))] transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="font-sans text-lg w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-accent))] transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-sm uppercase tracking-wider transition-all duration-300 mb-8 ${
                isAdded
                  ? 'bg-green-600 text-white'
                  : 'btn-velmora'
              }`}
            >
              <ShoppingBag size={16} className="inline-block mr-2" />
              {isAdded ? 'Added!' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {accordions.map((accordion, index) => (
                <div key={accordion.title} className="border-b border-[rgb(var(--color-border))]">
                  <button
                    onClick={() => setExpandedAccordion(expandedAccordion === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 font-sans text-sm uppercase tracking-wider"
                  >
                    {accordion.title}
                    <span className={`transform transition-transform ${
                      expandedAccordion === index ? 'rotate-45' : ''
                    }`}>+</span>
                  </button>
                  {expandedAccordion === index && (
                    <div className="pb-4">
                      <p className="font-sans text-sm leading-relaxed text-[rgb(var(--color-foreground))]/80 whitespace-pre-line">
                        {accordion.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">You May Also Like</h2>
              <div className="hairline w-24 mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map(relatedProduct => (
                <div
                  key={relatedProduct.id}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  className="cursor-pointer"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-[rgb(var(--color-surface))] mb-4">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-sm uppercase tracking-wider mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="font-serif text-lg">${relatedProduct.price}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
