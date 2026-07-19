import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-white mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-gold hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordionItems = [
    { id: 'description', title: 'Description', content: product.description },
    { 
      id: 'materials', 
      title: 'Materials & Care', 
      content: `This piece is crafted from premium 18K gold plating over sterling silver. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.` 
    },
    { 
      id: 'shipping', 
      title: 'Shipping & Returns', 
      content: `Free worldwide shipping on all orders. Orders are processed within 1-2 business days. We offer a 30-day return policy for unworn items in original packaging.` 
    }
  ];

  return (
    <div className="min-h-screen bg-velmora-black pt-20 md:pt-24">
      <div className="max-w-content mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-velmora-muted">
            <li><Link to="/" className="hover:text-velmora-gold">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-gold">Shop</Link></li>
            <li>/</li>
            <li className="text-velmora-white">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-velmora-soft">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-velmora-soft border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
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
          <div className="md:sticky md:top-24 h-fit">
            <h1 className="font-serif text-2xl md:text-3xl text-velmora-white uppercase tracking-wider">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl text-velmora-gold font-medium mt-4">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-velmora-muted mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="block text-sm text-velmora-muted mb-3">
                Color: <span className="text-velmora-white">{selectedVariant}</span>
              </label>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 border text-sm transition-colors ${
                      selectedVariant === variant
                        ? 'border-velmora-gold text-velmora-gold'
                        : 'border-velmora-border text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="block text-sm text-velmora-muted mb-3">Quantity</label>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-muted hover:text-velmora-white transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-velmora-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-muted hover:text-velmora-white transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              variant="primary" 
              size="full" 
              className="mt-8"
              onClick={() => addToCart(product, selectedVariant, quantity)}
            >
              Add to Cart
            </Button>

            {/* Accordions */}
            <div className="mt-12 border-t border-velmora-border">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-velmora-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-velmora-white">{item.title}</span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-5 h-5 text-velmora-muted" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-velmora-muted" />
                    )}
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-4 text-velmora-muted leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-white mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-[3/4] bg-velmora-soft overflow-hidden mb-3">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs uppercase tracking-[0.15em] text-velmora-white">
                  {item.name}
                </h3>
                <p className="text-velmora-gold mt-1">${item.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}