import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, MapPin, Briefcase, GraduationCap, Lock, Plus, CheckCircle, AlertCircle, Filter } from 'lucide-react'
import { client, getRows, getSchemaData, getEntity, getErrorMessage } from '../api/client.js'
import { useAuth } from '../context/AuthContext.jsx'

const DEGREE_LABELS = { bachelor: '学士', master: '硕士', phd: '博士', other: '其他' }

export default function Alumni() {
  const { user, isMember, isAdmin, memberProfile } = useAuth()
  const navigate = useNavigate()
  const [alumni, setAlumni] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [yearFilter, setYearFilter] = useState('')
  const [myEntry, setMyEntry] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    real_name: '', graduation_year: '', major: '', college: '', degree: 'bachelor',
    company: '', position: '', industry: '', city: '', country: '中国',
    email_public: '', linkedin: '', bio: '', skills: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState('')
  const [formSuccess, setFormSuccess] = useState(false)

  const mp = memberProfile ? getSchemaData(memberProfile) : null

  useEffect(() => {
    if (mp) {
      setForm(f => ({
        ...f,
        real_name: mp.real_name || '',
        graduation_year: mp.graduation_year || '',
        major: mp.major || '',
        college: mp.college || '',
        degree: mp.degree || 'bachelor',
        company: mp.company || '',
        position: mp.position || '',
        city: mp.city || '',
      }))
    }
  }, [memberProfile])

  const fetchAlumni = async () => {
    if (!isMember && !isAdmin) { setLoading(false); return }
    try {
      const { data: response } = await client
        .from('Alumni Directory')
        .select('*')
        .eq('approval_status', 'approved')
        .order('graduation_year', { ascending: false })
      setAlumni(getRows(response))
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const fetchMyEntry = async () => {
    if (!user) return
    try {
      const { data: response } = await client
        .from('Alumni Directory')
        .select('*')
        .eq('user_id', user.id)
      const rows = getRows(response)
      setMyEntry(rows[0] || null)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchAlumni()
    fetchMyEntry()
  }, [user, isMember, isAdmin])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.real_name || !form.graduation_year) {
      setFormError('请填写姓名和毕业年份')
      return
    }
    setFormError('')
    setSubmitting(true)
    try {
      const skillsArr = form.skills ? form.skills.split(/[,，\s]+/).filter(Boolean) : []
      const payload = {
        user_id: user.id,
        real_name: form.real_name,
        graduation_year: parseInt(form.graduation_year),
        major: form.major,
        college: form.college,
        degree: form.degree,
        company: form.company,
        position: form.position,
        industry: form.industry,
        city: form.city,
        country: form.country,
        email_public: form.email_public,
        linkedin: form.linkedin,
        bio: form.bio,
        skills: skillsArr,
        approval_status: 'pending',
      }

      let resp, err
      if (myEntry) {
        const result = await client
          .from('Alumni Directory')
          .update({ data: payload })
          .eq('id', myEntry.id)
          .select()
          .single()
        resp = result.data
        err = result.error
      } else {
        const result = await client
          .from('Alumni Directory')
          .insert({ data: payload })
          .select()
          .single()
        resp = result.data
        err = result.error
      }

      if (err || resp?.success === false) {
        setFormError(getErrorMessage(resp, err))
        return
      }
      setMyEntry(getEntity(resp))
      setFormSuccess(true)
      setShowForm(false)
    } catch (err) {
      setFormError(err.message || '提交失败，请重试')
    } finally {
      setSubmitting(false)
    }
  }

  const filtered = alumni.filter(a => {
    const d = getSchemaData(a)
    const matchSearch = !search ||
      d.real_name?.includes(search) ||
      d.company?.includes(search) ||
      d.major?.includes(search) ||
      d.city?.includes(search) ||
      d.industry?.includes(search)
    const matchYear = !yearFilter || String(d.graduation_year) === yearFilter
    return matchSearch && matchYear
  })

  const years = [...new Set(alumni.map(a => getSchemaData(a).graduation_year).filter(Boolean))].sort((a, b) => b - a)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-cuhk-purple py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl font-bold text-white mb-2">校友录</h1>
          <p className="text-white/70">连接全球中大内地生校友</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Security Notice */}
        {!isMember && !isAdmin && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center mb-8">
            <div className="w-16 h-16 bg-cuhk-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-cuhk-purple" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">校友录仅对正式会员开放</h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              为保护校友隐私，校友录内容需要经过管理员审批，且仅对正式会员可见。
              请先注册并缴纳会员费，待审核通过后即可查阅。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {!user ? (
                <>
                  <Link to="/register" className="bg-cuhk-purple hover:bg-cuhk-purple-dark text-white px-6 py-2.5 rounded-xl font-semibold transition-colors">
                    注册账号
                  </Link>
                  <Link to="/login" className="border border-cuhk-purple text-cuhk-purple px-6 py-2.5 rounded-xl font-semibold hover:bg-cuhk-purple-light transition-colors">
                    登录
                  </Link>
                </>
              ) : (
                <Link to="/membership" className="bg-cuhk-purple hover:bg-cuhk-purple-dark text-white px-6 py-2.5 rounded-xl font-semibold transition-colors">
                  申请成为会员
                </Link>
              )}
            </div>
          </div>
        )}

        {/* My Entry Status */}
        {user && (isMember || isAdmin) && (
          <div className="mb-6">
            {formSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-700 text-sm">您的校友录信息已提交，等待管理员审核后将对其他会员可见。</p>
              </div>
            )}
            {myEntry && !formSuccess && (
              <div className={`rounded-xl p-4 mb-4 flex items-center justify-between gap-3 ${
                getSchemaData(myEntry).approval_status === 'approved'
                  ? 'bg-green-50 border border-green-200'
                  : getSchemaData(myEntry).approval_status === 'rejected'
                  ? 'bg-red-50 border border-red-200'
                  : 'bg-yellow-50 border border-yellow-200'
              }`}>
                <div className="flex items-center gap-3">
                  {getSchemaData(myEntry).approval_status === 'approved' ? (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-medium text-gray-800 text-sm">
                      我的校友录状态：
                      <span className={`ml-1 ${
                        getSchemaData(myEntry).approval_status === 'approved' ? 'text-green-700' :
                        getSchemaData(myEntry).approval_status === 'rejected' ? 'text-red-700' : 'text-yellow-700'
                      }`}>
                        {{ approved: '已审核通过', pending: '待审核', rejected: '未通过' }[getSchemaData(myEntry).approval_status]}
                      </span>
                    </p>
                    {getSchemaData(myEntry).rejection_reason && (
                      <p className="text-red-600 text-xs mt-0.5">原因：{getSchemaData(myEntry).rejection_reason}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setShowForm(true)}
                  className="text-cuhk-purple text-sm font-medium hover:underline flex-shrink-0"
                >
                  编辑
                </button>
              </div>
            )}
            {!myEntry && !formSuccess && !showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-cuhk-purple hover:bg-cuhk-purple-dark text-white px-5 py-2.5 rounded-xl font-medium transition-colors text-sm"
              >
                <Plus className="w-4 h-4" /> 添加我的校友录信息
              </button>
            )}
          </div>
        )}

        {/* Submit Form */}
        {showForm && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">{myEntry ? '编辑校友录信息' : '添加校友录信息'}</h2>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 text-sm">取消</button>
            </div>
            <p className="text-gray-500 text-sm mb-6 bg-blue-50 border border-blue-200 rounded-lg p-3">
              提交后需经管理员审核，审核通过后才会对其他会员可见。请确保信息真实准确。
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">真实姓名 *</label>
                  <input value={form.real_name} onChange={e => setForm(f => ({ ...f, real_name: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">毕业年份 *</label>
                  <input type="number" value={form.graduation_year} onChange={e => setForm(f => ({ ...f, graduation_year: e.target.value }))}
                    min="1960" max="2030" placeholder="如：2020"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">专业</label>
                  <input value={form.major} onChange={e => setForm(f => ({ ...f, major: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">书院</label>
                  <input value={form.college} onChange={e => setForm(f => ({ ...f, college: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">学位</label>
                  <select value={form.degree} onChange={e => setForm(f => ({ ...f, degree: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple">
                    <option value="bachelor">学士</option>
                    <option value="master">硕士</option>
                    <option value="phd">博士</option>
                    <option value="other">其他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">所在城市</label>
                  <input value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                    placeholder="如：香港、北京"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">公司/机构</label>
                  <input value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">职位</label>
                  <input value={form.position} onChange={e => setForm(f => ({ ...f, position: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">行业</label>
                  <input value={form.industry} onChange={e => setForm(f => ({ ...f, industry: e.target.value }))}
                    placeholder="如：金融、科技、教育"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">公开邮箱（可选）</label>
                  <input type="email" value={form.email_public} onChange={e => setForm(f => ({ ...f, email_public: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">技能标签（逗号分隔）</label>
                  <input value={form.skills} onChange={e => setForm(f => ({ ...f, skills: e.target.value }))}
                    placeholder="如：Python, 金融分析, 项目管理"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">个人简介</label>
                <textarea value={form.bio} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}
                  rows={3} placeholder="简单介绍一下自己..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple resize-none" />
              </div>
              {formError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{formError}</div>
              )}
              <div className="flex gap-3">
                <button type="submit" disabled={submitting}
                  className="flex-1 bg-cuhk-purple hover:bg-cuhk-purple-dark disabled:opacity-60 text-white py-3 rounded-xl font-semibold transition-colors">
                  {submitting ? '提交中...' : '提交审核'}
                </button>
                <button type="button" onClick={() => setShowForm(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors">
                  取消
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Alumni List */}
        {(isMember || isAdmin) && (
          <>
            {/* Search & Filter */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="搜索姓名、公司、专业、城市..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <select
                  value={yearFilter}
                  onChange={e => setYearFilter(e.target.value)}
                  className="px-3 py-2.5 border border-gray-200 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-cuhk-purple"
                >
                  <option value="">全部年份</option>
                  {years.map(y => <option key={y} value={y}>{y}届</option>)}
                </select>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 animate-pulse">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-2/3" />
                        <div className="h-3 bg-gray-200 rounded w-1/2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <GraduationCap className="w-12 h-12 mx-auto mb-3 opacity-40" />
                <p>暂无校友录信息</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map(alumnus => {
                  const d = getSchemaData(alumnus)
                  const initials = d.real_name ? d.real_name.slice(-2) : '?'
                  return (
                    <div key={alumnus.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 bg-cuhk-purple rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{initials}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 truncate">{d.real_name}</h3>
                          <p className="text-gray-500 text-sm truncate">
                            {d.graduation_year}届 {d.college && `· ${d.college}`}
                          </p>
                        </div>
                        {d.degree && (
                          <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full flex-shrink-0">
                            {DEGREE_LABELS[d.degree]}
                          </span>
                        )}
                      </div>
                      {d.major && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5">
                          <GraduationCap className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="truncate">{d.major}</span>
                        </div>
                      )}
                      {(d.company || d.position) && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5">
                          <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="truncate">{[d.position, d.company].filter(Boolean).join(' @ ')}</span>
                        </div>
                      )}
                      {d.city && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{d.city}{d.country && d.country !== '中国' ? `, ${d.country}` : ''}</span>
                        </div>
                      )}
                      {d.bio && (
                        <p className="text-gray-500 text-xs line-clamp-2 mb-3">{d.bio}</p>
                      )}
                      {d.skills && d.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {d.skills.slice(0, 3).map(skill => (
                            <span key={skill} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                              {skill}
                            </span>
                          ))}
                          {d.skills.length > 3 && (
                            <span className="text-gray-400 text-xs">+{d.skills.length - 3}</span>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
