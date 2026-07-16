import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx'
import { CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const SUBJECTS = ['产品咨询', '合作洽谈', '技术支持', '其他']

const initialValues = {
  name: '',
  phone: '',
  email: '',
  company: '',
  subject: '',
  message: '',
}

const validate = (values) => {
  const errors = {}
  if (!values.name.trim()) errors.name = '请输入姓名'
  if (!values.phone.trim()) {
    errors.phone = '请输入手机号'
  } else if (!/^1[3-9]\d{9}$/.test(values.phone.trim())) {
    errors.phone = '请输入有效的手机号码'
  }
  if (!values.email.trim()) {
    errors.email = '请输入邮箱'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = '请输入有效的邮箱地址'
  }
  return errors
}

const InputField = ({ label, id, required, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-sm font-medium text-slate-700">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    {children}
    {error && (
      <p className="text-xs text-red-500 flex items-center gap-1">
        <AlertCircle className="w-3 h-3" />
        {error}
      </p>
    )}
  </div>
)

const ContactForm = () => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [serverError, setServerError] = useState('')

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border text-slate-900 placeholder-slate-400 bg-white transition focus:outline-none focus:ring-2 ${
      errors[field]
        ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
        : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-100'
    }`

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setServerError('')

    const validationErrors = validate(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')

    try {
      const { data: response, error: insertError } = await client
        .from('Contact Form Responses')
        .insert({
          data: {
            name: values.name.trim(),
            phone: values.phone.trim(),
            email: values.email.trim(),
            company: values.company.trim() || undefined,
            subject: values.subject || undefined,
            message: values.message.trim() || undefined,
          },
        })
        .select()
        .single()

      if (insertError || response?.success === false) {
        const msg =
          Array.isArray(response?.errors) && response.errors.length > 0
            ? response.errors.join(', ')
            : insertError?.message || '提交失败，请稍后重试'
        throw new Error(msg)
      }

      setStatus('success')
      setValues(initialValues)
      setErrors({})
    } catch (err) {
      console.error('Form submission error:', err)
      setServerError(err.message || '提交失败，请稍后重试')
      setStatus('error')
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setServerError('')
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">提交成功！</h3>
        <p className="text-slate-500 mb-8 max-w-sm">
          感谢您的留言，我们已收到您的信息，将在 24 小时内通过邮件或电话与您联系。
        </p>
        <button
          onClick={resetForm}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-sm"
        >
          再次提交
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 姓名 */}
        <InputField label="姓名" id="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            placeholder="请输入您的姓名"
            className={inputClass('name')}
          />
        </InputField>

        {/* 手机号 */}
        <InputField label="手机号" id="phone" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={onChange}
            placeholder="请输入您的手机号"
            className={inputClass('phone')}
          />
        </InputField>

        {/* 邮箱 */}
        <InputField label="电子邮箱" id="email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            placeholder="请输入您的邮箱地址"
            className={inputClass('email')}
          />
        </InputField>

        {/* 公司 */}
        <InputField label="公司/单位" id="company" error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            placeholder="请输入您的公司或单位名称"
            className={inputClass('company')}
          />
        </InputField>

        {/* 咨询主题 */}
        <InputField label="咨询主题" id="subject" error={errors.subject}>
          <select
            id="subject"
            name="subject"
            value={values.subject}
            onChange={onChange}
            className={`${inputClass('subject')} cursor-pointer`}
          >
            <option value="">请选择咨询主题</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </InputField>
      </div>

      {/* 留言内容 */}
      <div className="mt-5">
        <InputField label="留言内容" id="message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={onChange}
            placeholder="请详细描述您的需求或问题，我们将尽快为您解答..."
            className={`${inputClass('message')} resize-none`}
          />
        </InputField>
      </div>

      {/* Server error */}
      {status === 'error' && serverError && (
        <div className="mt-4 flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Submit */}
      <div className="mt-7">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors duration-200 shadow-sm text-base"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              提交中...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              提交留言
            </>
          )}
        </button>
        <p className="text-center text-xs text-slate-400 mt-3">
          提交即表示您同意我们的隐私政策，您的信息将被安全保存
        </p>
      </div>
    </form>
  )
}

export default ContactForm
