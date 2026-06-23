import React from 'react'
import JewelryVisual from './JewelryVisual.jsx'

export default function ProductImage({ product, className = '', mode = 'product' }) {
  return <JewelryVisual label={product.name} description={product.description} className={className} variant={mode === 'worn' ? 'worn' : 'still'} showCaption={false} />
}
