import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronRight } from 'lucide-react';
import { seedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const [selectedVariant, setSelectedVariant] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [openAccordion, setOpenAccordion] = useState('description');

    useEffect(() => {
        const found = seedProducts.find(p => p.id === id);
        if (found) {
            setProduct(found);
            setSelectedVariant(found.variants[0]);
            setActiveImage(0);
            setQuantity(1);
            window.scrollTo(0, 0);
        }
    }, [id]);

    if (!product) return <div className="pt-32 text-center h-screen">Loading...</div>;

    const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedVariant);
    };

    return (
        <div className="bg-background pb-24 border-t border-border/50">
            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 md:px-8 max-w-7xl pt-8 pb-4">
                <nav className="text-xs tracking-widest uppercase text-velmora-charcoal/50 flex items-center space-x-2">
                    <Link to="/" className="hover:text-velmora-charcoal">Home</Link>
                    <span>/</span>
                    <Link to={`/collections/${product.category}`} className="hover:text-velmora-charcoal">{product.category}</Link>
                    <span>/</span>
                    <span className="text-velmora-charcoal truncate">{product.name}</span>
                </nav>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl pb-16 border-b border-border/50">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
                    {/* Image Gallery */}
                    <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
                        {/* Thumbnails */}
                        <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:w-20 lg:w-24 shrink-0 hide-scrollbar">
                            {product.images.map((img, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`relative aspect-[3/4] w-20 md:w-full shrink-0 border transition-colors ${activeImage === idx ? 'border-velmora-charcoal' : 'border-transparent hover:border-border/80'}`}
                                >
                                    <img src={img} alt={`Thumbnail ${idx}`} className="absolute inset-0 w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                        {/* Main Image */}
                        <div className="relative flex-grow aspect-[3/4] md:aspect-auto md:min-h-[600px] bg-velmora-stone border border-border/30">
                            <img 
                                src={product.images[activeImage]} 
                                alt={product.name}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full md:w-1/2 pt-4 lg:pl-8 flex flex-col">
                        <div className="mb-6 border-b border-border/50 pb-6">
                            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.1em] text-velmora-charcoal mb-4">
                                {product.name}
                            </h1>
                            <div className="flex items-center space-x-4 mb-4">
                                <span className="text-xl text-velmora-charcoal">${product.price.toFixed(2)}</span>
                                <div className="flex items-center space-x-2 text-velmora-gold">
                                    <div className="flex">
                                        {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" className={s > Math.floor(product.rating) ? 'opacity-30' : ''}/>)}
                                    </div>
                                    <span className="text-xs text-velmora-charcoal/60 uppercase tracking-widest leading-none mt-1">({product.reviews})</span>
                                </div>
                            </div>
                            <p className="text-velmora-charcoal/70 leading-relaxed font-light">
                                {product.description}
                            </p>
                        </div>

                        {/* Variants */}
                        <div className="mb-8">
                            <p className="text-xs uppercase tracking-widest text-velmora-charcoal/70 mb-3">Metal: <span className="font-medium text-velmora-charcoal">{selectedVariant}</span></p>
                            <div className="flex space-x-3">
                                {product.variants.map(variant => (
                                    <button 
                                        key={variant}
                                        onClick={() => setSelectedVariant(variant)}
                                        className={`px-6 py-2 border text-sm capitalize transition-colors ${
                                            selectedVariant === variant 
                                            ? 'border-velmora-charcoal bg-velmora-charcoal text-white' 
                                            : 'border-border text-velmora-charcoal hover:border-velmora-charcoal/50'
                                        }`}
                                    >
                                        {variant}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Add to Cart Area */}
                        <div className="flex gap-4 mb-10">
                            {/* Quantity */}
                            <div className="flex items-center border border-velmora-charcoal/30 h-12">
                                <button 
                                    className="px-4 h-full text-velmora-charcoal hover:bg-velmora-stone transition-colors disabled:opacity-50"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    disabled={quantity <= 1}
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                                <button 
                                    className="px-4 h-full text-velmora-charcoal hover:bg-velmora-stone transition-colors"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                            {/* Add Button */}
                            <button 
                                onClick={handleAddToCart}
                                className="flex-grow bg-velmora-charcoal text-white uppercase tracking-widest text-sm hover:bg-velmora-charcoal/90 transition-colors h-12"
                            >
                                Add to Cart — ${(product.price * quantity).toFixed(2)}
                            </button>
                        </div>

                        {/* Accordions */}
                        <div className="border-t border-border/50 divide-y divide-border/50">
                            {[
                                { id: 'description', title: 'Details', content: `Material: ${product.material}. Our pieces are designed for daily wear. Nickel-free and hypoallergenic.` },
                                { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns are accepted within 30 days of receipt in unworn condition.' },
                                { id: 'care', title: 'Jewelry Care', content: 'To prolong the life of your gold vermeil jewelry, avoid contact with water, perfumes, and lotions. Store in the provided pouch.' }
                            ].map(acc => (
                                <div key={acc.id} className="py-4">
                                    <button 
                                        className="w-full flex justify-between items-center text-sm uppercase tracking-widest text-velmora-charcoal"
                                        onClick={() => setOpenAccordion(openAccordion === acc.id ? '' : acc.id)}
                                    >
                                        <span>{acc.title}</span>
                                        <Plus size={16} className={`transition-transform duration-300 ${openAccordion === acc.id ? 'rotate-45' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openAccordion === acc.id ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-velmora-charcoal/70 text-sm leading-relaxed">{acc.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="container mx-auto px-4 md:px-8 max-w-7xl pt-16">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="font-serif text-3xl text-velmora-charcoal">You May Also Like</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {relatedProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;