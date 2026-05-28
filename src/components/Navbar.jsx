import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, User, LogOut, Shield, ChevronDown } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { Badge } from '@/components/ui/Badge'
import { toast } from '@/components/ui/Toast'

export default function Navbar() {
  const { user, memberProfile, isAdmin, isApprovedMember, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = async () => {
    await logout()
    toast.success('已退出登录')
    navigate('/')
    setDropdownOpen(false)
  }

  const profileData = memberProfile?.data
  const memberStatus = profileData?.status

  const navLinks = [
    { to: '/', label: '首页' },
    { to: '/events', label: '活动' },
    ...(isApprovedMember ? [{ to: '/events/create', label: '发布活动' }] : []),
    ...(isAdmin ? [{ to: '/admin', label: '管理后台' }] : []),
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center font-bold text-blue-900 text-sm">
              中大
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-base leading-tight">香港中文大学</div>
              <div className="text-xs text-blue-200 leading-tight">内地生校友会</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to) ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* User Area */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                    <User size={16} className="text-blue-900" />
                  </div>
                  <span className="text-sm text-blue-100">{profileData?.real_name || user.email?.split('@')[0]}</span>
                  {memberStatus && (
                    <Badge status={memberStatus} className="text-xs" />
                  )}
                  <ChevronDown size={14} className="text-blue-300" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-50">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-sm font-medium text-slate-900">{profileData?.real_name || '未设置姓名'}</p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                    </div>
                    <Link to="/profile" onClick={() => setDropdownOpen(false)} className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                      <User size={15} /> 我的资料
                    </Link>
                    {isAdmin && (
                      <Link to="/admin" onClick={() => setDropdownOpen(false)} className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                        <Shield size={15} /> 管理后台
                      </Link>
                    )}
                    <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      <LogOut size={15} /> 退出登录
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="px-4 py-2 text-sm text-blue-100 hover:text-white hover:bg-blue-800 rounded-lg transition-colors">
                  登录
                </Link>
                <Link to="/register" className="px-4 py-2 text-sm bg-amber-400 text-blue-900 font-semibold rounded-lg hover:bg-amber-300 transition-colors">
                  注册
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-blue-800">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 border-t border-blue-700 px-4 py-3 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                isActive(link.to) ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-blue-700">
            {user ? (
              <>
                <Link to="/profile" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-blue-100 hover:bg-blue-700 rounded-lg">
                  我的资料
                </Link>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-300 hover:bg-blue-700 rounded-lg">
                  退出登录
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-blue-100 hover:bg-blue-700 rounded-lg">登录</Link>
                <Link to="/register" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-amber-300 font-semibold hover:bg-blue-700 rounded-lg">注册</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
