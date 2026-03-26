import React from 'react'
import BlogList from '../components/blog/BlogList'

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gaming Blog & News</h1>
          <p className="text-gray-600">Stay updated with the latest gaming news, reviews, and guides</p>
        </div>
        <BlogList />
      </div>
    </div>
  )
}

export default Blog