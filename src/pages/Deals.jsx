import React from 'react'
import DealsList from '../components/deals/DealsList'

const Deals = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Game Deals & Discounts</h1>
          <p className="text-gray-600">Find the best deals across Steam, Epic, Nintendo Switch, PlayStation, and Xbox</p>
        </div>
        <DealsList />
      </div>
    </div>
  )
}

export default Deals