import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/ui/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
          <Link to="/shop" className="text-gold hover:underline mt-4 inline-block">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const accordionItems = [
    { id: 'description', title: 'Description', content: product.description },
    { 
      id: 'materials', 
      title: 'Materials & Care', 
      content: `This piece is crafted from premium ${product.material}. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.` 
    },
    { 
      id: 'shipping', 
      title: 'Shipping & Returns', 
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.' 
    }
  ];

  return (
    <main className="min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-stone-500">
            <li><Link to="/" className="hover:text-charcoal">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-charcoal">Shop</Link></li>
            <li>/</li>
            <li><Link to={`/shop?category=${product.category}`} className="hover:text-charcoal capitalize">{product.category}</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-stone-100 overflow-hidden">
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
                  className={`w-20 h-24 bg-stone-100 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
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
            <h1 className="font-serif text-2xl md:text-h3 uppercase tracking-widest text-charcoal">
              {product.name}
            </h1>
            
            {/* Price & Rating */}
            <div className="flex items-center gap-4 mt-3">
              <span className="text-xl text-charcoal">${product.price}</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < product.rating ? 'fill-gold text-gold' : 'text-stone-300'}
                  />
                ))}
                <span className="text-xs text-stone-500 ml-1">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-stone-600 font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <span className="font-sans text-sm text-stone-600">Finish: <span className="text-charcoal capitalize">{selectedVariant}</span></span>
              <div className="flex gap-3 mt-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-sm uppercase tracking-wider border transition-all ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-charcoal'
                        : 'border-stone-300 text-stone-600 hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="font-sans text-sm text-stone-600">Quantity</span>
              <div className="flex items-center border border-stone-300 mt-3 w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-stone-100 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 text-charcoal">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-stone-100 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              variant="primary" 
              size="full" 
              className="mt-8 text-xs uppercase tracking-widest"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>

            {/* Accordions */}
            <div className="mt-12 border-t border-stone-200">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-stone-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-sm uppercase tracking-wider text-charcoal">
                      {item.title}
                    </span>
                    {openAccordion === item.id ? (
                      <ChevronUp size={18} className="text-stone-500" />
                    ) : (
                      <ChevronDown size={18} className="text-stone-500" />
                    )}
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-4 text-stone-600 font-sans text-sm leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="font-serif text-2xl text-charcoal mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}