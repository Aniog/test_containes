import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Send, CheckCircle, AlertCircle, Globe, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const countryCodes = [
  { code: 'CN', label: '中国 (CN)' },
  { code: 'HK', label: '香港 (HK)' },
  { code: 'TW', label: '台湾 (TW)' },
  { code: 'US', label: '美国 (US)' },
  { code: 'JP', label: '日本 (JP)' },
  { code: 'GB', label: '英国 (GB)' },
  { code: 'DE', label: '德国 (DE)' },
  { code: 'SG', label: '新加坡 (SG)' },
  { code: 'AU', label: '澳大利亚 (AU)' },
  { code: 'CA', label: '加拿大 (CA)' },
]

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  country_region_code: '',
  location: '',
  website: '',
  facebook: '',
  twitter: '',
  instagram: '',
  youtube: '',
  message: '',
}

const inputClass =
  'w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-sm'

const labelClass = 'block text-slate-700 font-medium text-sm mb-1'

const ContactForm = () => {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [showSocial, setShowSocial] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.first_name.trim()) return '请填写名字'
    if (!values.last_name.trim()) return '请填写姓氏'
    if (!values.email.trim()) return '请填写邮箱'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return '请填写有效的邮箱地址'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) { setError(err); return }

    setStatus('submitting')
    console.log('Submitting contact form:', values)

    try {
      const payload = {
        data: {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          ...(values.phone && { phone: values.phone }),
          ...(values.country_region_code && { country_region_code: values.country_region_code }),
          ...(values.location && { location: values.location }),
          ...(values.website && { website: values.website }),
          ...(values.facebook && { facebook: values.facebook }),
          ...(values.twitter && { twitter: values.twitter }),
          ...(values.instagram && { instagram: values.instagram }),
          ...(values.youtube && { youtube: values.youtube }),
          ...(values.message && { message: values.message }),
        },
      }

      const { data: response, error: insertError } = await client
        .from('Contact Form Responses')
        .insert(payload)
        .select()
        .single()

      if (insertError || response?.success === false) {
        const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : (insertError?.message || '提交失败，请重试')
        throw new Error(msgs)
      }

      console.log('Contact form submitted successfully:', response)
      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      console.error('Contact form error:', err)
      setError(err.message || '提交失败，请重试')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-slate-900 mb-2">提交成功！</h3>
        <p className="text-slate-500 mb-6">感谢您的联系，我们将在1个工作日内回复您。</p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          再次提交
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>名字 <span className="text-red-500">*</span></label>
          <input
            name="first_name"
            type="text"
            value={values.first_name}
            onChange={onChange}
            placeholder="名"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>姓氏 <span className="text-red-500">*</span></label>
          <input
            name="last_name"
            type="text"
            value={values.last_name}
            onChange={onChange}
            placeholder="姓"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>邮箱 <span className="text-red-500">*</span></label>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          placeholder="your@email.com"
          className={inputClass}
          required
        />
      </div>

      <div>
        <label className={labelClass}>电话</label>
        <input
          name="phone"
          type="tel"
          value={values.phone}
          onChange={onChange}
          placeholder="+86 138 0000 0000"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>国家/地区</label>
          <select
            name="country_region_code"
            value={values.country_region_code}
            onChange={onChange}
            className={inputClass}
          >
            <option value="">请选择</option>
            {countryCodes.map((c) => (
              <option key={c.code} value={c.code}>{c.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>城市/地区</label>
          <input
            name="location"
            type="text"
            value={values.location}
            onChange={onChange}
            placeholder="如：上海"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>网站</label>
        <input
          name="website"
          type="url"
          value={values.website}
          onChange={onChange}
          placeholder="https://www.example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>留言</label>
        <textarea
          name="message"
          rows={4}
          value={values.message}
          onChange={onChange}
          placeholder="请描述您的采购需求或问题..."
          className={inputClass}
        />
      </div>

      <div>
        <button
          type="button"
          onClick={() => setShowSocial(!showSocial)}
          className="text-sm text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1 transition-colors"
        >
          {showSocial ? '− 收起社交媒体' : '+ 添加社交媒体链接（可选）'}
        </button>
      </div>

      {showSocial && (
        <div className="space-y-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
          <p className="text-slate-500 text-xs mb-3">以下字段均为可选</p>
          <div className="flex items-center gap-3">
            <Facebook className="w-4 h-4 text-blue-600 shrink-0" />
            <input
              name="facebook"
              type="url"
              value={values.facebook}
              onChange={onChange}
              placeholder="Facebook 主页链接"
              className={inputClass}
            />
          </div>
          <div className="flex items-center gap-3">
            <Twitter className="w-4 h-4 text-sky-500 shrink-0" />
            <input
              name="twitter"
              type="url"
              value={values.twitter}
              onChange={onChange}
              placeholder="Twitter 主页链接"
              className={inputClass}
            />
          </div>
          <div className="flex items-center gap-3">
            <Instagram className="w-4 h-4 text-pink-500 shrink-0" />
            <input
              name="instagram"
              type="url"
              value={values.instagram}
              onChange={onChange}
              placeholder="Instagram 主页链接"
              className={inputClass}
            />
          </div>
          <div className="flex items-center gap-3">
            <Youtube className="w-4 h-4 text-red-500 shrink-0" />
            <input
              name="youtube"
              type="url"
              value={values.youtube}
              onChange={onChange}
              placeholder="YouTube 频道链接"
              className={inputClass}
            />
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-slate-500 shrink-0" />
            <input
              name="website"
              type="url"
              value={values.website}
              onChange={onChange}
              placeholder="个人/公司网站"
              className={inputClass}
            />
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold px-6 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            提交中...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            提交联系信息
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm
