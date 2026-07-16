import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Save, CheckCircle } from 'lucide-react'
import { client, getRows, getSchemaData, getEntity, getErrorMessage } from '../api/client.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function Profile() {
  const { user, memberProfile, refreshProfile, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    real_name: '', graduation_year: '', major: '', college: '', degree: 'bachelor',
    company: '', position: '', city: '', phone: '', wechat: '', bio: ''
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!authLoading && !user) navigate('/login', { state: { from: '/profile' } })
  }, [authLoading, user, navigate])

  useEffect(() => {
    if (memberProfile) {
      const d = getSchemaData(memberProfile)
      setForm({
        real_name: d.real_name || '',
        graduation_year: d.graduation_year || '',
        major: d.major || '',
        college: d.college || '',
        degree: d.degree || 'bachelor',
        company: d.company || '',
        position: d.position || '',
        city: d.city || '',
        phone: d.phone || '',
        wechat: d.wechat || '',
        bio: d.bio || '',
      })
    }
  }, [memberProfile])

  const handleSave = async (e) => {
    e.preventDefault()
    if (!form.real_name) { setError('请填写真实姓名'); return }
    setError('')
    setSaving(true)
    try {
      const payload = {
        user_id: user.id,
        real_name: form.real_name,
        graduation_year: form.graduation_year ? parseInt(form.graduation_year) : undefined,
        major: form.major,
        college: form.college,
        degree: form.degree,
        company: form.company,
        position: form.position,
        city: form.city,
        phone: form.phone,
        wechat: form.wechat,
        bio: form.bio,
      }

      let resp, err
      if (memberProfile) {
        const d = getSchemaData(memberProfile)
        const result = await client
          .from('Member Profiles')
          .update({ data: { ...d, ...payload } })
          .eq('id', memberProfile.id)
          .select()
          .single()
        resp = result.data
        err = result.error
      } else {
        const result = await client
          .from('Member Profiles')
          .insert({ data: { ...payload, membership_status: 'pending' } })
          .select()
          .single()
        resp = result.data
        err = result.error
      }

      if (err || resp?.success === false) {
        setError(getErrorMessage(resp, err))
        return
      }
      await refreshProfile()
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (err) {
      setError(err.message || '保存失败')
    } finally {
      setSaving(false)
    }
  }

  if (authLoading || !user) return <div className="min-h-screen flex items-center justify-center text-gray-400">加载中...</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-cuhk-purple py-10">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h1 className="text-2xl font-bold text-white">个人资料</h1>
          <p className="text-white/70 text-sm mt-1">{user.email}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
        {saved && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-medium">资料已保存</span>
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">基本信息</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">真实姓名 *</label>
              <input value={form.real_name} onChange={e => setForm(f => ({ ...f, real_name: e.target.value }))}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">毕业年份</label>
              <input type="number" value={form.graduation_year} onChange={e => setForm(f => ({ ...f, graduation_year: e.target.value }))}
                min="1960" max="2030" placeholder="如：2020"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
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
              <label className="block text-sm font-medium text-gray-700 mb-1.5">联系电话</label>
              <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">微信号</label>
              <input value={form.wechat} onChange={e => setForm(f => ({ ...f, wechat: e.target.value }))}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">个人简介</label>
            <textarea value={form.bio} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}
              rows={3} placeholder="简单介绍一下自己..."
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cuhk-purple resize-none" />
          </div>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
          )}
          <button type="submit" disabled={saving}
            className="w-full bg-cuhk-purple hover:bg-cuhk-purple-dark disabled:opacity-60 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
            <Save className="w-4 h-4" />
            {saving ? '保存中...' : '保存资料'}
          </button>
        </form>
      </div>
    </div>
  )
}
