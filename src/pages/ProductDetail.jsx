import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.slug === slug);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:text-gold-hover">
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
    addToCart(product, selectedVariant, quantity);
  };

  const AccordionItem = ({ id, title, children }) => {
    const isOpen = openAccordion === id;
    return (
      <div className="border-b border-border">
        <button
          className="w-full py-5 flex items-center justify-between text-left"
          onClick={() => setOpenAccordion(isOpen ? null : id)}
        >
          <span className="font-serif text-lg">{title}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-warm-gray" />
          ) : (
            <ChevronDown className="w-5 h-5 text-warm-gray" />
          )}
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-40 pb-5' : 'max-h-0'
          }`}
        >
          <p className="text-warm-gray leading-relaxed">{children}</p>
        </div>
      </div>
    );
  };

  return (
    <main className="pt-20">
      <div className="container py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-warm-gray">
            <li><Link to="/" className="hover:text-charcoal">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-charcoal">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Main */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-cream-dark mb-4 overflow-hidden">
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
                  className={`w-20 h-24 bg-cream-dark overflow-hidden border-2 transition-colors ${
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
          <div className="md:sticky md:top-28 h-fit">
            <h1 className="font-serif text-h3 md:text-h2 uppercase tracking-widest">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? 'fill-gold text-gold' : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-warm-gray">
                {product.reviews} reviews
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl text-gold font-medium mt-4">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-warm-gray mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="block text-sm font-medium mb-3">
                Color: <span className="text-warm-gray font-normal capitalize">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm uppercase tracking-wider transition-all ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-charcoal'
                        : 'border-border text-warm-gray hover:border-charcoal'
                    }`}
                  >
                    {variant} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold hover:bg-gold-hover text-charcoal py-4 text-button uppercase tracking-wider transition-all hover:shadow-button"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12">
              <AccordionItem id="description" title="Description">
                {product.description} Crafted with attention to detail, each piece in our collection is made with premium materials and finished with care to ensure lasting beauty.
              </AccordionItem>
              <AccordionItem id="materials" title="Materials & Care">
                All our jewelry is crafted from 18K gold plating over sterling silver or brass. To maintain the beauty of your pieces, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.
              </AccordionItem>
              <AccordionItem id="shipping" title="Shipping & Returns">
                We offer free worldwide shipping on all orders over $100. Orders typically ship within 1-2 business days. We accept returns within 30 days of delivery for unworn items in original packaging.
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-24">
          <h2 className="font-serif text-h3 text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}