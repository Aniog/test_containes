import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductBySlug, products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
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
      content: `This piece is crafted from premium 18K gold-plated materials on a brass base. To maintain its beauty, avoid direct contact with water, perfumes, and lotions. Store in a cool, dry place and gently clean with a soft cloth.`
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: `Free worldwide shipping on all orders. Orders are processed within 1-2 business days. We offer a 30-day return policy for unworn items in original packaging.`
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-warm-gray">
            <li><Link to="/" className="hover:text-charcoal">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-charcoal">Shop</Link></li>
            <li>/</li>
            <li><Link to={`/shop?category=${product.category}`} className="hover:text-charcoal capitalize">{product.category}</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-ivory overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-ivory overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-charcoal' : 'border-transparent'
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
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest text-charcoal">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mt-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < product.rating ? 'fill-gold text-gold' : 'text-divider'} 
                  />
                ))}
              </div>
              <span className="text-sm text-warm-gray">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl text-charcoal mt-4">${product.price}</p>

            <p className="text-warm-gray mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="block text-sm text-warm-gray mb-3">
                Finish: <span className="text-charcoal">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 text-sm tracking-widest border transition-colors ${
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-cream'
                        : 'border-divider text-warm-gray hover:border-charcoal'
                    }`}
                  >
                    {variant.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-8">
              <label className="block text-sm text-warm-gray mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-divider">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gold-light/30 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gold-light/30 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-charcoal text-cream py-4 text-sm tracking-widest hover:bg-charcoal/90 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} />
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-12 border-t border-divider">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-divider">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-sm tracking-widest text-charcoal">{item.title}</span>
                    {openAccordion === item.id ? (
                      <ChevronUp size={18} className="text-warm-gray" />
                    ) : (
                      <ChevronDown size={18} className="text-warm-gray" />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-40 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-warm-gray leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl text-charcoal mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductPage;