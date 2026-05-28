import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, User, LogOut, Settings, ChevronDown } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useToast } from '@/contexts/ToastContext'

export default function Navbar() {
  const { user, memberProfile, isAdmin, signOut } = useAuth()
  const { addToast } = useToast()
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const handleSignOut = async () => {
    await signOut()
    addToast('已成功登出', 'success')
    navigate('/')
    setUserMenuOpen(false)
  }

  const isApprovedMember = memberProfile?.data?.status === 'approved' && memberProfile?.data?.fee_paid

  const navLinks = [
    { to: '/', label: '首页' },
    { to: '/events', label: '活动' },
    { to: '/about', label: '关于我们' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#4B2D8F] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">中大</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[#4B2D8F] font-bold text-sm leading-tight">香港中文大学</p>
              <p className="text-gray-500 text-xs leading-tight">内地生校友会</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-[#4B2D8F]'
                    : 'text-gray-600 hover:text-[#4B2D8F]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-[#4B2D8F] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">
                      {(user.name || user.email || '?')[0].toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm text-[#1A1A2E] font-medium max-w-[120px] truncate">
                    {user.name || user.email}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs text-gray-500">已登录</p>
                      <p className="text-sm font-medium text-[#1A1A2E] truncate">{user.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      我的档案
                    </Link>
                    {isApprovedMember && (
                      <Link
                        to="/events/create"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        发布活动
                      </Link>
                    )}
                    {isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#4B2D8F] hover:bg-purple-50 transition-colors font-medium"
                      >
                        <Settings className="w-4 h-4" />
                        管理后台
                      </Link>
                    )}
                    <div className="border-t border-gray-100 mt-1">
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        退出登录
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-600 hover:text-[#4B2D8F] px-4 py-2 transition-colors"
                >
                  登录
                </Link>
                <Link
                  to="/register"
                  className="text-sm font-medium bg-[#4B2D8F] hover:bg-[#3a2270] text-white px-5 py-2 rounded-lg transition-colors"
                >
                  申请入会
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? 'bg-purple-50 text-[#4B2D8F]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100">
            {user ? (
              <>
                <Link to="/profile" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">我的档案</Link>
                {isAdmin && <Link to="/admin" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm text-[#4B2D8F] font-medium hover:bg-purple-50">管理后台</Link>}
                <button onClick={handleSignOut} className="block w-full text-left px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50">退出登录</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">登录</Link>
                <Link to="/register" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm bg-[#4B2D8F] text-white text-center mt-1">申请入会</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
