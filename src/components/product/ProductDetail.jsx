import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart, openCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    // Fetch product data - in real app, this would be an API call
    const products = [
      {
        id: 1,
        name: 'VIVID AURA JEWELS',
        description: 'Gold ear cuff with crystal accent, delicately handcrafted for a subtle sparkle that catches the light with every movement. Perfect for adding a touch of everyday luxury.',
        price: 42,
        images: [
          'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=800&q=80',
          'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
          'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=800&q=80',
        ],
        category: 'Earrings',
        material: '18K Gold Plated',
        rating: 4.8,
        reviews: 124,
        variants: ['gold', 'silver'],
        inStock: true,
        related: [2, 3, 4],
      },
      {
        id: 2,
        name: 'MAJESTIC FLORA NECTAR',
        description: 'Multicolor floral crystal necklace, a statement piece that brings botanical elegance to your everyday style. Features hand-set crystals in a delicate gold setting.',
        price: 68,
        images: [
          'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
          'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=800&q=80',
          'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
        ],
        category: 'Necklaces',
        material: '18K Gold Plated',
        rating: 4.9,
        reviews: 89,
        variants: ['gold'],
        inStock: true,
        related: [1, 3, 5],
      },
      {
        id: 3,
        name: 'GOLDEN SPHERE HUGGIES',
        description: 'Chunky gold dome huggie earrings, the perfect everyday luxury with a modern, substantial feel. Comfortable for all-day wear with a secure closure.',
        price: 38,
        images: [
          'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=800&q=80',
          'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
          'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=800&q=80',
        ],
        category: 'Huggies',
        material: '18K Gold Plated',
        rating: 4.7,
        reviews: 156,
        variants: ['gold', 'silver'],
        inStock: true,
        related: [1, 2, 4],
      },
      {
        id: 4,
        name: 'AMBER LACE EARRINGS',
        description: 'Textured gold filigree drop earrings, intricate detailing that showcases masterful craftsmanship in every curve. Lightweight and elegant for day-to-night wear.',
        price: 54,
        images: [
          'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
          'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=800&q=80',
          'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
        ],
        category: 'Earrings',
        material: '18K Gold Plated',
        rating: 4.6,
        reviews: 97,
        variants: ['gold'],
        inStock: true,
        related: [1, 3, 5],
      },
      {
        id: 5,
        name: 'ROYAL HEIRLOOM SET',
        description: 'Gift-boxed earring + necklace set, the ultimate gifting experience with our signature velvet packaging. Includes matching pieces for a complete look.',
        price: 95,
        images: [
          'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=800&q=80',
          'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
          'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=800&q=80',
        ],
        category: 'Sets',
        material: '18K Gold Plated',
        rating: 5.0,
        reviews: 68,
        variants: ['gold'],
        inStock: true,
        related: [2, 3, 4],
      },
    ];

    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    setSelectedVariant(foundProduct?.variants[0] || 'gold');
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedVariant);
      openCart();
    }
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <ChevronRight size={16} />
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <ChevronRight size={16} />
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-square overflow-hidden bg-velmora-warm mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h1
              className="text-2xl sm:text-3xl font-medium tracking-wider uppercase mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < Math.floor(product.rating)
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="uppercase-label block mb-3">Tone</label>
                <div className="flex space-x-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 border text-sm tracking-wider uppercase transition-colors ${
                        selectedVariant === variant
                          ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                          : 'bg-white text-velmora-charcoal border-velmora-border hover:border-velmora-charcoal'
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
              <label className="uppercase-label block mb-3">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-velmora-border hover:border-velmora-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-velmora-border hover:border-velmora-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary py-4 text-base mb-8"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="space-y-4 border-t border-velmora-border pt-6">
              {/* Description Accordion */}
              <div>
                <button
                  onClick={() => toggleAccordion('description')}
                  className="flex items-center justify-between w-full py-3 text-left"
                >
                  <span className="uppercase-label">Description</span>
                  <span className="text-velmora-gold">
                    {activeAccordion === 'description' ? '−' : '+'}
                  </span>
                </button>
                <div className={`accordion-content ${activeAccordion === 'description' ? 'open' : ''}`}>
                  <p className="pb-4 text-gray-600 leading-relaxed">
                    {product.description} Each piece is carefully crafted with attention to detail,
                    using premium materials that are hypoallergenic and nickel-free.
                  </p>
                </div>
              </div>

              {/* Materials & Care Accordion */}
              <div className="border-t border-velmora-border">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="flex items-center justify-between w-full py-3 text-left"
                >
                  <span className="uppercase-label">Materials & Care</span>
                  <span className="text-velmora-gold">
                    {activeAccordion === 'materials' ? '−' : '+'}
                  </span>
                </button>
                <div className={`accordion-content ${activeAccordion === 'materials' ? 'open' : ''}`}>
                  <div className="pb-4 text-gray-600 leading-relaxed">
                    <p className="mb-2"><strong>Materials:</strong> {product.material}, hypoallergenic base metal, nickel-free</p>
                    <p className="mb-2"><strong>Care:</strong> Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft jewelry cloth.</p>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns Accordion */}
              <div className="border-t border-velmora-border">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="flex items-center justify-between w-full py-3 text-left"
                >
                  <span className="uppercase-label">Shipping & Returns</span>
                  <span className="text-velmora-gold">
                    {activeAccordion === 'shipping' ? '−' : '+'}
                  </span>
                </button>
                <div className={`accordion-content ${activeAccordion === 'shipping' ? 'open' : ''}`}>
                  <div className="pb-4 text-gray-600 leading-relaxed">
                    <p className="mb-2"><strong>Shipping:</strong> Free worldwide shipping on all orders. Delivery within 5-7 business days.</p>
                    <p><strong>Returns:</strong> 30-day return policy. Items must be unworn and in original packaging.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-velmora-border">
          <h2
            className="text-2xl font-light text-center mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* This would show related products based on product.related */}
            {[2, 3, 4].map((relatedId) => {
              const relatedProduct = [
                {
                  id: 2,
                  name: 'MAJESTIC FLORA NECTAR',
                  price: 68,
                  image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
                },
                {
                  id: 3,
                  name: 'GOLDEN SPHERE HUGGIES',
                  price: 38,
                  image: 'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=600&q=80',
                },
                {
                  id: 4,
                  name: 'AMBER LACE EARRINGS',
                  price: 54,
                  image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
                },
              ].find(p => p.id === relatedId);

              if (!relatedProduct) return null;

              return (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="product-card group block"
                >
                  <div className="relative overflow-hidden mb-4 bg-velmora-warm aspect-square">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-medium tracking-wider uppercase mb-2 text-center">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-base font-medium text-center">${relatedProduct.price}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
