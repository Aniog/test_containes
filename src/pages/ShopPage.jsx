import React from 'react'
import CollectionPage from '../components/collection/CollectionPage'
import { products } from '../data/products'

export default function ShopPage() {
  return <CollectionPage products={products} />
}
