import React from 'react'
import StoreGrid from '../components/store/StoreGrid'

const Store = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Game Store</h1>
          <p className="text-gray-600">Purchase digital games and keys for all major platforms</p>
        </div>
        <StoreGrid />
      </div>
    </div>
  )
}

export default Store