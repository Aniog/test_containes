import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-velmora-mist">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-sans text-sm tracking-wider text-velmora-charcoal uppercase">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-velmora-stone" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-stone" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-velmora-graphite leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function RelatedProducts({ currentProduct }) {
  const relatedProducts = products
    .filter((p) => p.id !== currentProduct.id)
    .slice(0, 4);

  return (
    <section className="py-12 bg-velmora-cream">
      <div className="container-main">
        <h2 className="font-serif text-2xl text-velmora-charcoal mb-8">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
            >
              <div className="aspect-[4/5] bg-velmora-ivory overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="product-name text-xs text-velmora-charcoal">
                {product.name}
              </h3>
              <p className="text-sm text-velmora-stone mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0] || 'gold'
  );
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-2xl text-velmora-charcoal mb-4">
          Product Not Found
        </h1>
        <Link to="/shop" className="btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-velmora-ivory py-4">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-velmora-stone">
            <Link to="/" className="hover:text-velmora-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-velmora-charcoal">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square bg-velmora-ivory overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[product.image, product.hoverImage].map((img, index) => (
                  <button
                    key={index}
                    className="aspect-square bg-velmora-ivory overflow-hidden border-2 border-transparent hover:border-velmora-gold transition-colors"
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="md:pt-4">
              <h1 className="font-serif text-2xl md:text-3xl text-velmora-charcoal mb-2">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating
                          ? 'fill-velmora-gold text-velmora-gold'
                          : 'text-velmora-mist'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-velmora-stone">
                  {product.reviews} reviews
                </span>
              </div>

              <p className="text-2xl font-serif text-velmora-charcoal mb-6">
                ${product.price}
              </p>

              <p className="text-velmora-graphite leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Variant Selector */}
              <div className="mb-6">
                <label className="block text-sm text-velmora-stone mb-3">
                  Color: <span className="text-velmora-charcoal capitalize">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 border text-sm tracking-wider uppercase transition-colors ${
                        selectedVariant === variant
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-velmora-cream'
                          : 'border-velmora-mist text-velmora-graphite hover:border-velmora-gold'
                      }`}
                    >
                      {variant} Tone
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm text-velmora-stone mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-velmora-mist">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center hover:text-velmora-gold transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center hover:text-velmora-gold transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary mb-4"
              >
                Add to Cart
              </button>

              {/* Accordions */}
              <div className="mt-8">
                <Accordion
                  title="Description"
                  isOpen={openAccordion === 'description'}
                  onToggle={() =>
                    setOpenAccordion(
                      openAccordion === 'description' ? null : 'description'
                    )
                  }
                >
                  {product.description} Crafted with attention to detail, this piece 
                  embodies the quiet luxury that defines Velmora. Perfect for everyday 
                  wear or special occasions.
                </Accordion>

                <Accordion
                  title="Materials & Care"
                  isOpen={openAccordion === 'materials'}
                  onToggle={() =>
                    setOpenAccordion(
                      openAccordion === 'materials' ? null : 'materials'
                    )
                  }
                >
                  Materials: {product.materials}. {product.care}
                </Accordion>

                <Accordion
                  title="Shipping & Returns"
                  isOpen={openAccordion === 'shipping'}
                  onToggle={() =>
                    setOpenAccordion(
                      openAccordion === 'shipping' ? null : 'shipping'
                    )
                  }
                >
                  Free worldwide shipping on all orders. 30-day returns for unused 
                  items in original packaging. Express shipping available at checkout.
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts currentProduct={product} />
    </div>
  );
}