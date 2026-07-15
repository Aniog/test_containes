import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const AccordionItem = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-velmora-sand">
    <button 
      className="w-full py-5 flex items-center justify-between text-left"
      onClick={onToggle}
    >
      <span className="font-serif text-lg tracking-wide">{title}</span>
      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-5' : 'max-h-0'}`}>
      <p className="text-velmora-taupe text-sm leading-relaxed">{children}</p>
    </div>
  </div>
);

const ProductPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-secondary inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const accordionContent = {
    description: product.description,
    materials: `This piece is crafted from premium 18K gold-plated materials on a sterling silver base. Our gold plating is applied in a thick layer to ensure lasting shine and durability. All pieces are nickel-free and hypoallergenic, making them perfect for sensitive skin.`,
    shipping: `Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout for 2-3 business day delivery. All orders are carefully packaged in our signature velvet pouch.`
  };

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-velmora-taupe">
            <li><Link to="/" className="hover:text-velmora-charcoal">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-charcoal">Shop</Link></li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.shortName}</li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-velmora-sand/20 mb-4 overflow-hidden">
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
                  className={`w-20 h-24 bg-velmora-sand/20 overflow-hidden transition-all ${
                    selectedImage === index ? 'ring-2 ring-velmora-gold' : ''
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
            {/* Title & Price */}
            <h1 className="font-serif text-3xl md:text-4xl tracking-wide">{product.name}</h1>
            <p className="mt-4 text-2xl text-velmora-gold font-medium">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < product.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-taupe">({product.reviews} reviews)</span>
            </div>

            {/* Description */}
            <p className="mt-6 text-velmora-taupe leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.15em] mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border transition-all ${
                      selectedVariant === variant
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-sand text-velmora-taupe hover:border-velmora-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-8">
              <div className="flex gap-4">
                {/* Quantity */}
                <div className="flex items-center border border-velmora-sand">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-velmora-sand/30 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-velmora-sand/30 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button 
                  onClick={() => addToCart(product, selectedVariant, quantity)}
                  className="flex-1 btn-accent"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-12">
              <AccordionItem 
                title="Description" 
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                {accordionContent.description}
              </AccordionItem>
              <AccordionItem 
                title="Materials & Care" 
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                {accordionContent.materials}
              </AccordionItem>
              <AccordionItem 
                title="Shipping & Returns" 
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                {accordionContent.shipping}
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link 
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] bg-velmora-sand/20 overflow-hidden">
                  <img 
                    src={relatedProduct.images[0]} 
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-sm tracking-[0.15em]">
                    {relatedProduct.shortName}
                  </h3>
                  <p className="mt-1 text-velmora-gold font-medium">${relatedProduct.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;