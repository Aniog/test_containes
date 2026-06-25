import React from 'react';
import { PRODUCTS } from '@/data/products';

/**
 * Hidden image registry — exposes every per-product image id to the
 * strk-img build plugin so each page gets pre-cached editorial imagery.
 * Covers product card thumbnails and product detail page galleries.
 *
 * Renders nothing visible.
 */
export default function ProductImageRegistry() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0">
      {PRODUCTS.map((product) => {
        const cardPrimaryQ = `${product.category} ${product.name} luxury gold jewelry editorial photography warm light`;
        const cardHoverQ = `${product.name} ${product.category} worn on model close up neck ear warm light editorial`;
        const pdp1 = `gold ${product.category} luxury fine jewelry studio close up editorial warm light demi fine`;
        const pdp2 = `woman wearing gold ${product.category} model editorial lifestyle warm light jewelry`;
        const pdp3 = `macro gold jewelry detail texture sparkle close up ${product.category} elegant`;
        const pdp4 = `gold jewelry flat lay editorial styling cream neutral background ${product.category} aesthetic`;
        return (
          <React.Fragment key={product.id}>
            {/* Product card images */}
            <img alt="" data-strk-img-id={`pc-${product.id}-primary-9k2x`} data-strk-img={cardPrimaryQ} data-strk-img-ratio="4x3" data-strk-img-width="900" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <img alt="" data-strk-img-id={`pc-${product.id}-hover-7m4q`} data-strk-img={cardHoverQ} data-strk-img-ratio="4x3" data-strk-img-width="900" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            {/* PDP gallery main shots */}
            <img alt="" data-strk-img-id={`pdp-${product.id}-shot-1`} data-strk-img={pdp1} data-strk-img-ratio="4x5" data-strk-img-width="1100" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <img alt="" data-strk-img-id={`pdp-${product.id}-shot-2`} data-strk-img={pdp2} data-strk-img-ratio="4x5" data-strk-img-width="1100" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <img alt="" data-strk-img-id={`pdp-${product.id}-shot-3`} data-strk-img={pdp3} data-strk-img-ratio="4x5" data-strk-img-width="1100" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <img alt="" data-strk-img-id={`pdp-${product.id}-shot-4`} data-strk-img={pdp4} data-strk-img-ratio="4x5" data-strk-img-width="1100" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            {/* PDP gallery thumbnails */}
            <img alt="" data-strk-img-id={`pdp-${product.id}-shot-1-thumb`} data-strk-img={pdp1} data-strk-img-ratio="1x1" data-strk-img-width="220" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <img alt="" data-strk-img-id={`pdp-${product.id}-shot-2-thumb`} data-strk-img={pdp2} data-strk-img-ratio="1x1" data-strk-img-width="220" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <img alt="" data-strk-img-id={`pdp-${product.id}-shot-3-thumb`} data-strk-img={pdp3} data-strk-img-ratio="1x1" data-strk-img-width="220" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <img alt="" data-strk-img-id={`pdp-${product.id}-shot-4-thumb`} data-strk-img={pdp4} data-strk-img-ratio="1x1" data-strk-img-width="220" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
          </React.Fragment>
        );
      })}
    </div>
  );
}
