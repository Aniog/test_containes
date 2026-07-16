import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import {
  Menu, X, User, LogOut, Settings, BookOpen,
  Calendar, Users, ChevronDown, Shield
} from 'lucide-react'

export default function Navbar() {
  const { user, memberProfile, isAdmin, isMember, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
    setUserMenuOpen(false)
  }

  const navLinks = [
    { to: '/', label: '首页' },
    { to: '/events', label: '活动' },
    { to: '/alumni', label: '校友录' },
    { to: '/membership', label: '会员' },
    { to: '/about', label: '关于我们' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="bg-cuhk-purple shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 bg-cuhk-gold rounded-full flex items-center justify-center">
              <span className="text-cuhk-purple font-bold text-sm">中大</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-sm leading-tight">香港中文大学</div>
              <div className="text-cuhk-gold text-xs leading-tight">内地生校友会</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                >
                  <div className="w-7 h-7 bg-cuhk-gold rounded-full flex items-center justify-center">
                    <span className="text-cuhk-purple font-bold text-xs">
                      {(user.name || user.email || '?')[0].toUpperCase()}
                    </span>
                  </div>
                  <span className="hidden sm:block max-w-24 truncate">
                    {user.name || user.email}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900 truncate">{user.name || '用户'}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      {isMember && (
                        <span className="inline-block mt-1 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                          正式会员
                        </span>
                      )}
                      {isAdmin && (
                        <span className="inline-block mt-1 ml-1 bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">
                          管理员
                        </span>
                      )}
                    </div>
                    <Link
                      to="/dashboard"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <User className="w-4 h-4" /> 我的主页
                    </Link>
                    <Link
                      to="/profile"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Settings className="w-4 h-4" /> 个人设置
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-purple-700 hover:bg-purple-50"
                      >
                        <Shield className="w-4 h-4" /> 管理后台
                      </Link>
                    )}
                    <hr className="my-1" />
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4" /> 退出登录
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="text-white/80 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  登录
                </Link>
                <Link
                  to="/register"
                  className="bg-cuhk-gold hover:bg-cuhk-gold-dark text-white text-sm px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  注册
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-white/20 mt-2 pt-2">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium mb-1 transition-colors ${
                  isActive(link.to)
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Close dropdown on outside click */}
      {userMenuOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
      )}
    </nav>
  )
}
