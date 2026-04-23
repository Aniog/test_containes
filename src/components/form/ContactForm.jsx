import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx'
import SingleUploadField from './fields/SingleUploadField.jsx'
import MultiUploadField from './fields/MultiUploadField.jsx'
import UrlInputField from './fields/UrlInputField.jsx'
import { Send, CheckCircle2, AlertCircle, User, Images, Files, FileUp, ImagePlus, Music2, Video, Link2 } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const INITIAL_VALUES = {
  full_name: '',
  images: [],
  files: [],
  fileUploadSchema: null,
  imageUploadSchema: null,
  audioUploadSchema: null,
  videoUploadSchema: null,
  uriUrlOnlySchema: null,
}

const SECTIONS = [
  {
    id: 'basic',
    title: '基本信息',
    icon: User,
    color: 'blue',
  },
  {
    id: 'media',
    title: '媒体文件',
    icon: Images,
    color: 'purple',
  },
  {
    id: 'uploads',
    title: '单文件上传',
    icon: FileUp,
    color: 'green',
  },
]

function SectionCard({ title, icon: Icon, color, children }) {
  const colorMap = {
    blue: 'bg-blue-50 border-blue-100 text-blue-700',
    purple: 'bg-purple-50 border-purple-100 text-purple-700',
    green: 'bg-green-50 border-green-100 text-green-700',
  }
  const iconBg = {
    blue: 'bg-blue-100',
    purple: 'bg-purple-100',
    green: 'bg-green-100',
  }
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className={`flex items-center gap-3 px-6 py-4 border-b ${colorMap[color]}`}>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconBg[color]}`}>
          <Icon className="w-4 h-4" />
        </div>
        <h2 className="text-sm font-semibold">{title}</h2>
      </div>
      <div className="p-6 space-y-6">{children}</div>
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [submitError, setSubmitError] = useState(null)

  const setField = (key) => (val) => {
    setValues((prev) => ({ ...prev, [key]: val }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: null }))
  }

  const validate = () => {
    const errs = {}
    if (!values.full_name.trim()) {
      errs.full_name = '请填写姓名'
    } else if (values.full_name.trim().length < 10) {
      errs.full_name = '姓名至少需要 10 个字符'
    }
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('submitting')
    setSubmitError(null)

    const now = new Date().toISOString()
    const payload = {
      full_name: values.full_name.trim(),
      images: values.images.length > 0 ? values.images : undefined,
      files: values.files.length > 0 ? values.files : undefined,
      fileUploadSchema: values.fileUploadSchema || undefined,
      imageUploadSchema: values.imageUploadSchema || undefined,
      audioUploadSchema: values.audioUploadSchema || undefined,
      videoUploadSchema: values.videoUploadSchema || undefined,
      uriUrlOnlySchema: values.uriUrlOnlySchema || undefined,
      created_at: now,
      updated_at: now,
    }

    console.log('[ContactForm] Submitting payload:', payload)

    const { data: response, error } = await client
      .from('ContactName')
      .insert({ data: payload })
      .select()
      .single()

    console.log('[ContactForm] Response:', response, 'Error:', error)

    if (error || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : error?.message || '提交失败，请重试'
      setSubmitError(msg)
      setStatus('error')
      return
    }

    setStatus('success')
  }

  const handleReset = () => {
    setValues(INITIAL_VALUES)
    setErrors({})
    setStatus('idle')
    setSubmitError(null)
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">提交成功！</h2>
          <p className="text-gray-500 mb-8">感谢您的提交，我们已收到您的需求信息。</p>
          <button
            onClick={handleReset}
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            再次提交
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-2xl shadow-lg mb-4">
            <Send className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">用户需求收集</h1>
          <p className="text-gray-500 mt-2">请填写以下信息，帮助我们更好地了解您的需求</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Basic Info */}
          <SectionCard title="基本信息" icon={User} color="blue">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                姓名 <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-500">请输入您的全名（至少 10 个字符）</p>
              <input
                type="text"
                value={values.full_name}
                onChange={(e) => setField('full_name')(e.target.value)}
                placeholder="请输入您的姓名..."
                className={`w-full px-4 py-2.5 text-sm border rounded-lg outline-none transition-colors bg-white text-gray-800 placeholder-gray-400
                  ${errors.full_name
                    ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-200'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200'}`}
              />
              {errors.full_name && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />{errors.full_name}
                </p>
              )}
              <p className="text-xs text-gray-400 text-right">{values.full_name.length} / 10+ 字符</p>
            </div>
          </SectionCard>

          {/* Multi-upload: Images */}
          <SectionCard title="图片列表" icon={Images} color="purple">
            <MultiUploadField
              label="上传多张图片"
              description="可上传多张图片，支持 JPG、PNG、GIF、WebP 格式，最大分辨率 1920×1080"
              fieldType="image"
              allowedExtensions={['.jpg', '.jpeg', '.png', '.gif', '.webp']}
              mimeTypes={['image/jpeg', 'image/png', 'image/gif', 'image/webp']}
              value={values.images}
              onChange={setField('images')}
            />
          </SectionCard>

          {/* Multi-upload: Files */}
          <SectionCard title="文件列表" icon={Files} color="green">
            <MultiUploadField
              label="上传多个文件"
              description="可上传多个文件，支持 PDF、Word、Excel、CSV、ZIP 等格式，单文件最大 10MB"
              fieldType="file"
              allowedExtensions={['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.csv', '.txt', '.zip']}
              mimeTypes={[
                'application/pdf', 'text/plain', 'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'text/csv', 'application/zip',
              ]}
              value={values.files}
              onChange={setField('files')}
            />
          </SectionCard>

          {/* Single uploads */}
          <SectionCard title="单文件上传" icon={FileUp} color="green">
            <SingleUploadField
              label="文件上传"
              description="Some description here — 支持 PDF、Word、Excel、TXT、ZIP 等格式，最大 10MB"
              fieldType="file"
              allowedExtensions={['.pdf', '.tex', '.txt', '.epub', '.doc', '.docx', '.xls', '.xlsx', '.csv', '.zip']}
              mimeTypes={[
                'application/pdf', 'application/x-tex', 'text/plain', 'application/epub+zip',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'text/csv', 'application/zip',
              ]}
              value={values.fileUploadSchema}
              onChange={setField('fileUploadSchema')}
            />

            <div className="border-t border-gray-100 pt-6">
              <SingleUploadField
                label="图片上传"
                description="Some description here — 支持 JPG、PNG、GIF、WebP，最大分辨率 1920×1080"
                fieldType="image"
                allowedExtensions={['.jpg', '.jpeg', '.png', '.gif', '.webp']}
                mimeTypes={['image/jpeg', 'image/png', 'image/gif', 'image/webp']}
                value={values.imageUploadSchema}
                onChange={setField('imageUploadSchema')}
              />
            </div>

            <div className="border-t border-gray-100 pt-6">
              <SingleUploadField
                label="音频上传"
                description="Upload an audio file — 支持 MP3、WAV、OGG、M4A、FLAC，最大 20MB"
                fieldType="audio"
                allowedExtensions={['.mp3', '.wav', '.ogg', '.m4a', '.flac']}
                mimeTypes={['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp4', 'audio/flac']}
                value={values.audioUploadSchema}
                onChange={setField('audioUploadSchema')}
              />
            </div>

            <div className="border-t border-gray-100 pt-6">
              <SingleUploadField
                label="视频上传"
                description="Upload a video file — 支持 MP4、MOV、AVI、WebM，最大 100MB"
                fieldType="video"
                allowedExtensions={['.mp4', '.mov', '.avi', '.webm']}
                mimeTypes={['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm']}
                value={values.videoUploadSchema}
                onChange={setField('videoUploadSchema')}
              />
            </div>
          </SectionCard>

          {/* URL input */}
          <SectionCard title="封面图片 URL" icon={Link2} color="blue">
            <UrlInputField
              label="封面图片链接"
              description="Paste an image URL (e.g. https://images.unsplash.com/photo-...)"
              value={values.uriUrlOnlySchema}
              onChange={setField('uriUrlOnlySchema')}
            />
          </SectionCard>

          {/* Submit */}
          {submitError && (
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{submitError}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-colors shadow-sm text-sm"
          >
            {status === 'submitting' ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                提交中...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                提交需求
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          带 <span className="text-red-400">*</span> 的字段为必填项
        </p>
      </div>
    </div>
  )
}
