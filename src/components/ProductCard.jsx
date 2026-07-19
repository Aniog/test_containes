import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    
    // Explicit reference IDs for images as per guidelines
    const titleId = `product-${product.id}-title`;
    const descId = `product-${product.id}-desc`;

    return (
        <div className="group relative">
            <Link to={`/product/${product.id}`} className="block overflow-hidden relative aspect-[4/5] bg-velmora-sand">
                <img
                    data-strk-img-id={`prod-img-${product.id}-1`}
                    data-strk-img={`[${titleId}] gold jewelry [${descId}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Secondary image on hover mockup */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                     <img
                        data-strk-img-id={`prod-img-${product.id}-2`}
                        data-strk-img={`[${titleId}] jewelry lifestyle close up [${descId}]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Quick Add Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                    }}
                    className="absolute bottom-0 left-0 w-full bg-velmora-black/90 text-white text-[10px] uppercase tracking-widest py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                    Quick Add
                </button>
            </Link>

            <div className="mt-4 text-center">
                <Link to={`/product/${product.id}`}>
                    <h3 id={titleId} className="text-xs font-serif tracking-widest-extra uppercase mb-1">
                        {product.name}
                    </h3>
                </Link>
                <p id={descId} className="hidden">{product.description}</p>
                <p className="text-sm text-velmora-stone">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
