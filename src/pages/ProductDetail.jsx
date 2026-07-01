import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-text-primary mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-accent">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
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
      content: 'Our jewelry is crafted from 18K gold-plated sterling silver, ensuring both beauty and durability. To maintain its luster, avoid contact with water, perfumes, and lotions. Store in a cool, dry place away from direct sunlight.' 
    },
    { 
      id: 'shipping', 
      title: 'Shipping & Returns', 
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.' 
    }
  ];

  return (
    <div className="min-h-screen bg-velmora-bg-primary pt-20">
      <div className="max-w-container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/shop" className="text-sm text-velmora-text-secondary hover:text-velmora-text-primary transition-colors">
            Shop
          </Link>
          <span className="mx-2 text-velmora-text-secondary">/</span>
          <span className="text-sm text-velmora-text-primary capitalize">{product.category}</span>
        </div>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-velmora-bg-secondary overflow-hidden">
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
                  className={`w-20 h-24 bg-velmora-bg-secondary overflow-hidden border-2 transition-colors duration-300 ${
                    selectedImage === index ? 'border-velmora-accent' : 'border-transparent'
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
          <div className="space-y-6">
            {/* Title & Price */}
            <div>
              <h1 className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-velmora-text-primary uppercase mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-velmora-accent text-velmora-accent' : 'text-velmora-border'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-velmora-text-secondary">({product.reviews} reviews)</span>
              </div>
              <p className="text-2xl text-velmora-accent font-medium mt-3">${product.price}</p>
            </div>

            {/* Description */}
            <p className="text-velmora-text-secondary leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div>
              <label className="block text-sm text-velmora-text-secondary mb-3">
                Metal Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm tracking-wider uppercase transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-velmora-accent bg-velmora-accent text-velmora-bg-primary'
                        : 'border-velmora-border text-velmora-text-secondary hover:border-velmora-text-secondary'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm text-velmora-text-secondary mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-velmora-border w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-velmora-text-primary">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-accent text-velmora-bg-primary py-4 text-sm font-medium tracking-wider uppercase hover:bg-velmora-accent-hover transition-all duration-300 hover:scale-[1.01]"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-velmora-border pt-6 space-y-0">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-velmora-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm text-velmora-text-primary tracking-wider uppercase">
                      {item.title}
                    </span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4 text-velmora-text-secondary" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-text-secondary" />
                    )}
                  </button>
                  {openAccordion === item.id && (
                    <p className="pb-4 text-sm text-velmora-text-secondary leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-text-primary text-center mb-8 md:mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}