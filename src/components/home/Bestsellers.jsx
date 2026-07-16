import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const bestsellers = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    rating: 4.8,
    reviews: 124,
    description: 'A striking crystal-accented ear cuff that wraps the ear in luminous elegance.',
    variants: [
      { id: 'vivid-aura-gold', label: 'Gold', tone: 'gold' },
      { id: 'vivid-aura-silver', label: 'Silver', tone: 'silver' },
    ],
    titleId: 'prod-vivid-aura-title',
    descId: 'prod-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    rating: 4.9,
    reviews: 89,
    description: 'A breathtaking floral-inspired necklace featuring multicolor crystal petals.',
    variants: [
      { id: 'flora-gold', label: 'Gold', tone: 'gold' },
      { id: 'flora-silver', label: 'Silver', tone: 'silver' },
    ],
    titleId: 'prod-flora-title',
    descId: 'prod-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    rating: 4.7,
    reviews: 201,
    description: 'Chunky domed huggie earrings with a sculptural silhouette.',
    variants: [
      { id: 'huggies-gold', label: 'Gold', tone: 'gold' },
      { id: 'huggies-silver', label: 'Silver', tone: 'silver' },
    ],
    titleId: 'prod-huggies-title',
    descId: 'prod-huggies-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    rating: 4.6,
    reviews: 67,
    description: 'Textured gold filigree drop earrings with a vintage-inspired lacework pattern.',
    variants: [
      { id: 'amber-gold', label: 'Gold', tone: 'gold' },
      { id: 'amber-silver', label: 'Silver', tone: 'silver' },
    ],
    titleId: 'prod-amber-title',
    descId: 'prod-amber-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    rating: 5.0,
    reviews: 43,
    description: 'A beautifully gift-boxed earring and necklace set.',
    variants: [
      { id: 'heirloom-gold', label: 'Gold', tone: 'gold' },
      { id: 'heirloom-silver', label: 'Silver', tone: 'silver' },
    ],
    titleId: 'prod-heirloom-title',
    descId: 'prod-heirloom-desc',
  },
];

function BestsellerCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const defaultVariant = product.variants[0];

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, defaultVariant.id, product.price, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image with hover swap using two layered imgs */}
      <div className="relative aspect-[3/4] bg-sand overflow-hidden">
        <img
          alt={product.name}
          data-strk-img-id={`bestseller-${product.id}-thumb`}
          data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-heading]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          alt={product.name}
          data-strk-img-id={`bestseller-${product.id}-hover`}
          data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-heading]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quick add to cart on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-cream/95 backdrop-blur-sm text-charcoal font-sans text-xs uppercase tracking-wider py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-white transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="product-name text-xs md:text-sm text-charcoal"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="sr-only"
        >
          {product.description.substring(0, 80)}
        </p>
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-clay text-clay'}`}
            />
          ))}
          <span className="text-[10px] font-sans text-stone ml-1">
            ({product.reviews})
          </span>
        </div>
        <p className="mt-1.5 text-sm font-sans font-medium text-charcoal">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="text-center mb-14 md:mb-18">
        <h2
          id="bestsellers-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal font-light tracking-wide"
        >
          Bestsellers
        </h2>
        <p className="mt-3 text-sm font-sans text-stone max-w-md mx-auto">
          The styles our customers love most — elevated essentials for your
          everyday jewelry wardrobe.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
        {bestsellers.map((product, i) => (
          <BestsellerCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
