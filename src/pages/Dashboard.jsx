import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Calendar, BookOpen, CreditCard, User, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { client, getRows, getSchemaData } from '../api/client.js'
import { useAuth } from '../context/AuthContext.jsx'
import { format, parseISO } from 'date-fns'

export default function Dashboard() {
  const { user, memberProfile, isMember, isAdmin, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  const [myRegistrations, setMyRegistrations] = useState([])
  const [myPayments, setMyPayments] = useState([])
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (!authLoading && !user) navigate('/login', { state: { from: '/dashboard' } })
  }, [authLoading, user, navigate])

  useEffect(() => {
    if (!user) return
    const fetchData = async () => {
      try {
        const [regResp, payResp] = await Promise.all([
          client.from('Event Registrations').select('*').eq('user_id', user.id).order('id', { ascending: false }),
          client.from('Membership Payments').select('*').eq('user_id', user.id).order('id', { ascending: false }),
        ])
        setMyRegistrations(getRows(regResp.data))
        setMyPayments(getRows(payResp.data))
      } catch (err) {
        console.error(err)
      } finally {
        setLoadingData(false)
      }
    }
    fetchData()
  }, [user])

  if (authLoading || !user) return <div className="min-h-screen flex items-center justify-center text-gray-400">加载中...</div>

  const mp = memberProfile ? getSchemaData(memberProfile) : null

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-cuhk-purple py-10">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-cuhk-gold rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-cuhk-purple font-bold text-xl">
                {(user.name || user.email || '?')[0].toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{user.name || '校友'}</h1>
              <p className="text-white/70 text-sm">{user.email}</p>
              <div className="flex gap-2 mt-1.5">
                {isMember ? (
                  <span className="bg-green-500 text-white text-xs px-2.5 py-0.5 rounded-full font-medium">正式会员</span>
                ) : mp?.membership_status === 'pending' ? (
                  <span className="bg-yellow-500 text-white text-xs px-2.5 py-0.5 rounded-full font-medium">审核中</span>
                ) : (
                  <span className="bg-white/20 text-white text-xs px-2.5 py-0.5 rounded-full font-medium">普通用户</span>
                )}
                {isAdmin && (
                  <span className="bg-cuhk-gold text-white text-xs px-2.5 py-0.5 rounded-full font-medium">管理员</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 space-y-6">
        {/* Membership Status */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-cuhk-purple" /> 会员状态
          </h2>
          {isMember ? (
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <div>
                  <p className="font-semibold text-gray-900">正式会员</p>
                  <p className="text-gray-500 text-sm">
                    有效期至：{mp?.membership_expiry || '终身'}
                  </p>
                </div>
              </div>
              <Link to="/alumni" className="text-cuhk-purple text-sm font-medium hover:underline">
                查看校友录 →
              </Link>
            </div>
          ) : mp?.membership_status === 'pending' ? (
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="font-semibold text-gray-900">审核中</p>
                  <p className="text-gray-500 text-sm">您的会员申请正在审核，请耐心等待</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-gray-400" />
                <div>
                  <p className="font-semibold text-gray-900">尚未成为会员</p>
                  <p className="text-gray-500 text-sm">成为会员可享受活动优惠和校友录查阅权限</p>
                </div>
              </div>
              <Link
                to="/membership"
                className="bg-cuhk-purple hover:bg-cuhk-purple-dark text-white px-5 py-2 rounded-xl text-sm font-semibold transition-colors"
              >
                申请会员
              </Link>
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { to: '/events', icon: Calendar, label: '浏览活动', color: 'text-blue-600', bg: 'bg-blue-50' },
            { to: '/alumni', icon: BookOpen, label: '校友录', color: 'text-purple-600', bg: 'bg-purple-50' },
            { to: '/membership', icon: CreditCard, label: '会员中心', color: 'text-green-600', bg: 'bg-green-50' },
            { to: '/profile', icon: User, label: '个人资料', color: 'text-orange-600', bg: 'bg-orange-50' },
          ].map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`${item.bg} rounded-2xl p-5 text-center hover:shadow-md transition-shadow`}
            >
              <item.icon className={`w-6 h-6 ${item.color} mx-auto mb-2`} />
              <span className="text-gray-700 text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* My Event Registrations */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-cuhk-purple" /> 我的活动报名
          </h2>
          {loadingData ? (
            <div className="text-gray-400 text-sm">加载中...</div>
          ) : myRegistrations.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <Calendar className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm">暂无报名记录</p>
              <Link to="/events" className="text-cuhk-purple text-sm font-medium hover:underline mt-2 inline-block">
                浏览活动 →
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {myRegistrations.slice(0, 5).map(reg => {
                const d = getSchemaData(reg)
                return (
                  <div key={reg.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{d.participant_name}</p>
                      <p className="text-gray-500 text-xs">活动ID: {d.event_id}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        d.payment_status === 'paid' || d.payment_status === 'waived'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {{ pending: '待支付', paid: '已支付', waived: '免费', refunded: '已退款' }[d.payment_status]}
                      </span>
                      <Link to={`/events/${d.event_id}`} className="text-cuhk-purple text-xs hover:underline">
                        查看
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* My Payments */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-cuhk-purple" /> 会费记录
          </h2>
          {loadingData ? (
            <div className="text-gray-400 text-sm">加载中...</div>
          ) : myPayments.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <CreditCard className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm">暂无缴费记录</p>
            </div>
          ) : (
            <div className="space-y-3">
              {myPayments.map(payment => {
                const d = getSchemaData(payment)
                return (
                  <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">
                        {{ annual: '年度会员', lifetime: '终身会员' }[d.membership_type]} · HK${d.amount}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {{ fps: 'FPS', bank_transfer: '银行转账', cash: '现金' }[d.payment_method]}
                        {d.payment_reference && ` · ${d.payment_reference}`}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      d.payment_status === 'confirmed' ? 'bg-green-100 text-green-700' :
                      d.payment_status === 'rejected' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {{ pending: '待审核', confirmed: '已确认', rejected: '已拒绝' }[d.payment_status]}
                    </span>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {isAdmin && (
          <div className="bg-cuhk-purple-light border border-cuhk-purple/20 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="font-semibold text-cuhk-purple">管理员功能</p>
              <p className="text-gray-600 text-sm">审核会员、管理活动、审批校友录</p>
            </div>
            <Link
              to="/admin"
              className="bg-cuhk-purple hover:bg-cuhk-purple-dark text-white px-5 py-2 rounded-xl text-sm font-semibold transition-colors"
            >
              进入后台
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
