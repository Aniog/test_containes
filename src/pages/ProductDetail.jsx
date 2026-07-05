import React, { useState } from 'react';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-4">Product not found</h2>
          <Link to="/shop" className="btn-outline inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => product.related.includes(p.id));

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordions = [
    {
      title: 'Description',
      content: product.description + ' ' + product.details,
    },
    {
      title: 'Materials & Care',
      content: product.materials + ' To maintain the beauty of your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.',
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Orders ship within 1-2 business days. 30-day hassle-free returns. Items must be unworn and in original packaging.',
    },
  ];

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden mb-4 bg-[var(--velmora-bg-alt)]">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[var(--velmora-accent)]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            <h1 className="product-name text-2xl md:text-3xl text-[var(--velmora-text)] mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'fill-[var(--velmora-accent)] text-[var(--velmora-accent)]' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--velmora-text-muted)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif text-[var(--velmora-text)] mb-6">${product.price}</p>

            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-sm tracking-wider uppercase mb-3 block">Color</label>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-wider border transition-colors ${
                      selectedVariant === variant
                        ? 'border-[var(--velmora-accent)] bg-[var(--velmora-accent)] text-white'
                        : 'border-[var(--velmora-border)] text-[var(--velmora-text)] hover:border-[var(--velmora-accent)]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm tracking-wider uppercase mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-[var(--velmora-border)] hover:bg-[var(--velmora-bg-alt)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-[var(--velmora-border)] hover:bg-[var(--velmora-bg-alt)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="w-full btn-primary py-4 text-base"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="mt-6 pt-6 border-t border-[var(--velmora-border)]">
              <div className="grid grid-cols-2 gap-4 text-sm text-[var(--velmora-text-muted)]">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--velmora-accent)]">✓</span> Free Shipping
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--velmora-accent)]">✓</span> 30-Day Returns
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--velmora-accent)]">✓</span> Hypoallergenic
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--velmora-accent)]">✓</span> Gift Ready
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-4">
              {accordions.map((accordion, index) => (
                <div key={index} className="border-b border-[var(--velmora-border)]">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm tracking-wider uppercase">{accordion.title}</span>
                    {openAccordion === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openAccordion === index && (
                    <div className="pb-4 text-sm text-[var(--velmora-text-muted)] leading-relaxed">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-16 border-t border-[var(--velmora-border)]">
          <h2 className="section-title text-center text-[var(--velmora-text)] mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <Link key={product.id} to={`/product/${product.slug}`}>
                <div className="group relative">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-alt)] mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="product-name text-[var(--velmora-text)] mb-1">{product.name}</h3>
                    <p className="text-sm font-medium">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
