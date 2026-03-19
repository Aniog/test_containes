import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Store, User, ShoppingBag } from 'lucide-react'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    {
      path: '/store',
      label: 'Store',
      icon: Store,
      description: 'Browse our products'
    },
    {
      path: '/user',
      label: 'User Info',
      icon: User,
      description: 'Manage your profile'
    }
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <ShoppingBag className="text-blue-600" size={28} />
            <span>MyStore</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path || 
                             (location.pathname === '/' && item.path === '/store')
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation