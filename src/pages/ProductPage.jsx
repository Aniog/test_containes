import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import ProductCard from '../components/product/ProductCard';

function ProductPage() {
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
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-accent hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const AccordionItem = ({ id, title, children }) => {
    const isOpen = openAccordion === id;
    return (
      <div className="border-b border-border">
        <button
          className="w-full flex items-center justify-between py-4 text-left"
          onClick={() => setOpenAccordion(isOpen ? null : id)}
        >
          <span className="font-medium text-primary">{title}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-secondary" />
          ) : (
            <ChevronDown className="w-5 h-5 text-secondary" />
          )}
        </button>
        <div 
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-40 pb-4' : 'max-h-0'
          }`}
        >
          <p className="text-secondary text-sm leading-relaxed">{children}</p>
        </div>
      </div>
    );
  };

  return (
    <main className="pt-24 lg:pt-32 pb-16">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-secondary">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
            <li>/</li>
            <li><Link to={`/shop?category=${product.category}`} className="hover:text-primary transition-colors capitalize">{product.category}</Link></li>
            <li>/</li>
            <li className="text-primary">{product.name}</li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="animate-fade-in">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-card-bg mb-4 overflow-hidden">
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
                  className={`w-20 h-24 bg-card-bg overflow-hidden transition-all duration-300 ${
                    selectedImage === index ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
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
          <div className="lg:pl-8 animate-fade-in delay-100">
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-primary">
              {product.name}
            </h1>
            
            {/* Price & Rating */}
            <div className="flex items-center gap-4 mt-4">
              <span className="text-2xl font-medium text-primary">${product.price}</span>
              <div className="flex items-center gap-1 text-accent">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm text-secondary">{product.rating}</span>
                <span className="text-sm text-secondary">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-secondary leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="block text-sm font-medium text-primary mb-3">
                Finish: <span className="font-normal text-secondary">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-primary bg-primary text-text-light'
                        : 'border-border text-primary hover:border-primary'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="block text-sm font-medium text-primary mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-border/30 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 border-x border-border">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-border/30 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="primary"
              size="full"
              onClick={handleAddToCart}
              className="mt-8"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>

            {/* Accordions */}
            <div className="mt-12">
              <AccordionItem id="description" title="Description">
                {product.description}
                <br /><br />
                Each piece is crafted with attention to detail and quality, ensuring you receive jewelry that you'll treasure for years to come.
              </AccordionItem>
              
              <AccordionItem id="materials" title="Materials & Care">
                Material: {product.material}
                <br /><br />
                To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.
              </AccordionItem>
              
              <AccordionItem id="shipping" title="Shipping & Returns">
                Free worldwide shipping on all orders.
                <br />
                30-day returns for unworn items in original packaging.
                <br /><br />
                Express shipping available at checkout.
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="font-serif text-2xl md:text-3xl text-primary mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductPage;