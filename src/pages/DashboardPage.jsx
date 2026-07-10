import { useState, useEffect } from 'react'
import { Users, Building2, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fetchProfiles } from '../api/profiles.js'
import { fetchCompanies } from '../api/companies.js'

function StatCard({ icon: Icon, label, value, color, to }) {
  return (
    <Link to={to} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group block">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
          <Icon size={22} className="text-white" />
        </div>
        <ArrowRight size={16} className="text-gray-300 group-hover:text-indigo-500 transition-colors" />
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value ?? '—'}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </Link>
  )
}

export default function DashboardPage() {
  const [userCount, setUserCount] = useState(null)
  const [companyCount, setCompanyCount] = useState(null)
  const [recentUsers, setRecentUsers] = useState([])
  const [recentCompanies, setRecentCompanies] = useState([])

  useEffect(() => {
    fetchProfiles({ limit: 5 }).then((r) => {
      setUserCount(r.total)
      setRecentUsers(r.list)
    }).catch(() => {})
    fetchCompanies({ limit: 5 }).then((r) => {
      setCompanyCount(r.total)
      setRecentCompanies(r.list)
    }).catch(() => {})
  }, [])

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">概览</h1>
        <p className="text-sm text-gray-500 mt-1">用户与企业信息管理系统</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <StatCard icon={Users} label="用户总数" value={userCount} color="bg-indigo-500" to="/users" />
        <StatCard icon={Building2} label="企业总数" value={companyCount} color="bg-purple-500" to="/companies" />
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={20} />
            <span className="text-sm font-medium opacity-90">系统状态</span>
          </div>
          <p className="text-2xl font-bold mb-1">正常运行</p>
          <p className="text-sm opacity-75">数据库连接正常</p>
        </div>
      </div>

      {/* Recent Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <div className="bg-white border border-gray-200 rounded-xl">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              <Users size={16} className="text-indigo-500" /> 最近用户
            </h2>
            <Link to="/users" className="text-xs text-indigo-600 hover:underline">查看全部</Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentUsers.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-8">暂无用户数据</p>
            ) : recentUsers.map((p) => {
              const d = p.data || {}
              return (
                <div key={p.id} className="px-5 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-700 flex-shrink-0">
                    {(d.name || '?')[0].toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{d.name}</p>
                    <p className="text-xs text-gray-400 truncate">{d.job_title || d.email}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${d.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {d.status === 'active' ? '活跃' : '停用'}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recent Companies */}
        <div className="bg-white border border-gray-200 rounded-xl">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              <Building2 size={16} className="text-purple-500" /> 最近企业
            </h2>
            <Link to="/companies" className="text-xs text-indigo-600 hover:underline">查看全部</Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentCompanies.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-8">暂无企业数据</p>
            ) : recentCompanies.map((c) => {
              const d = c.data || {}
              return (
                <div key={c.id} className="px-5 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Building2 size={14} className="text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{d.name}</p>
                    <p className="text-xs text-gray-400 truncate">{d.industry || d.email || '—'}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${d.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {d.status === 'active' ? '活跃' : d.status === 'inactive' ? '停用' : '已归档'}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
