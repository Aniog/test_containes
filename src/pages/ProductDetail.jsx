import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--color-taupe-light)]">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-serif text-lg text-[var(--color-charcoal)]">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[var(--color-taupe)]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[var(--color-taupe)]" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-[var(--color-charcoal-light)] text-sm leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

function RelatedProducts({ currentProduct }) {
  const relatedProducts = products
    .filter(p => p.id !== currentProduct.id)
    .slice(0, 4);

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container">
        <h2 className="font-serif text-3xl text-[var(--color-charcoal)] mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-[var(--color-cream-dark)] mb-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="product-title text-xs">{product.name}</h3>
              <p className="text-sm mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      <div className="section text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-[var(--color-gold)] hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <main className="pt-8 pb-20">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[var(--color-taupe)]">
            <li><Link to="/" className="hover:text-[var(--color-gold)]">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-[var(--color-gold)]">Shop</Link></li>
            <li>/</li>
            <li className="text-[var(--color-charcoal)]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[4/5] bg-[var(--color-cream-dark)] mb-4 overflow-hidden">
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
                  className={`w-20 h-24 bg-[var(--color-cream-dark)] overflow-hidden transition-all ${
                    selectedImage === index
                      ? 'ring-2 ring-[var(--color-gold)]'
                      : 'opacity-60 hover:opacity-100'
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
          <div className="lg:pl-10">
            <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[var(--color-gold)] text-[var(--color-gold)]'
                        : 'text-[var(--color-taupe-light)]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-taupe)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium mt-4 text-[var(--color-charcoal)]">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-[var(--color-charcoal-light)] mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="text-sm text-[var(--color-taupe)] block mb-3">
                Metal Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 text-sm uppercase tracking-wider border transition-all ${
                      selectedVariant === variant
                        ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-cream)]'
                        : 'border-[var(--color-taupe-light)] text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="text-sm text-[var(--color-taupe)] block mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-[var(--color-taupe-light)] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-[var(--color-gold)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-[var(--color-gold)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full mt-8 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                {product.description}
                <br /><br />
                Each piece is crafted with attention to detail and quality, ensuring you receive jewelry that you'll treasure for years to come.
              </Accordion>

              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                This piece is crafted from 18K gold-plated brass, ensuring a luxurious look with lasting durability. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.
              </Accordion>

              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Simply contact our customer service team to initiate a return.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts currentProduct={product} />
      </div>
    </main>
  );
}