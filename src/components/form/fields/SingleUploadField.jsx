import { useState, useRef } from 'react'
import { API } from '@strikingly/sdk'
import { SITE_ID, REQUEST_DOMAIN, S3_DOMAIN } from '../../../config.jsx'
import { Upload, X, FileText, Music, Video, Image, CheckCircle, Loader2 } from 'lucide-react'

function buildPublicAssetUrl(s3Domain, storageKey) {
  const base = (s3Domain || '').trim().replace(/\/+$/, '')
  const path = (storageKey || '').trim().replace(/^\/+/, '')
  if (!base || !path) return ''
  return `${base}/${path}`
}

const FILE_TYPE_ICONS = {
  image: Image,
  audio: Music,
  video: Video,
  file: FileText,
}

const FILE_TYPE_LABELS = {
  image: '图片',
  audio: '音频',
  video: '视频',
  file: '文件',
}

export default function SingleUploadField({ label, description, fieldType, allowedExtensions, mimeTypes, value, onChange, required }) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)
  const inputRef = useRef(null)

  const IconComponent = FILE_TYPE_ICONS[fieldType] || FileText
  const typeLabel = FILE_TYPE_LABELS[fieldType] || '文件'
  const accept = mimeTypes ? mimeTypes.join(',') : '*/*'

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setError(null)
    setUploading(true)
    console.log(`[SingleUploadField] Uploading ${fieldType}:`, file.name)
    try {
      let result
      if (fieldType === 'image') {
        result = await API.uploadImage(SITE_ID, REQUEST_DOMAIN, file)
      } else {
        result = await API.uploadFile(SITE_ID, REQUEST_DOMAIN, file)
      }
      console.log(`[SingleUploadField] Upload result:`, result)
      const assetData = {
        filename: result?.filename || file.name,
        storageKey: result?.storageKey || '',
        storage: result?.storage || '',
        mimeType: result?.mimeType || file.type,
        ...(result?.size !== undefined && { size: result.size }),
        ...(result?.width !== undefined && { width: result.width }),
        ...(result?.height !== undefined && { height: result.height }),
      }
      onChange(assetData)
    } catch (err) {
      console.error(`[SingleUploadField] Upload error:`, err)
      setError(err.message || '上传失败，请重试')
    } finally {
      setUploading(false)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  const handleRemove = () => {
    onChange(null)
    setError(null)
  }

  const previewUrl = value?.storageKey ? buildPublicAssetUrl(S3_DOMAIN, value.storageKey) : null

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {description && <p className="text-xs text-gray-500">{description}</p>}

      {value ? (
        <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
          {fieldType === 'image' && previewUrl ? (
            <img src={previewUrl} alt={value.filename} className="w-16 h-16 object-cover rounded-md border border-green-300" />
          ) : (
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg">
              <IconComponent className="w-6 h-6 text-green-600" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 truncate">{value.filename}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              <span className="text-xs text-green-600">上传成功</span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => !uploading && inputRef.current?.click()}
          className={`relative flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors
            ${uploading ? 'border-blue-300 bg-blue-50 cursor-not-allowed' : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'}`}
        >
          {uploading ? (
            <>
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
              <p className="text-sm text-blue-600 font-medium">上传中...</p>
            </>
          ) : (
            <>
              <div className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm">
                <Upload className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700">点击上传{typeLabel}</p>
                {allowedExtensions && (
                  <p className="text-xs text-gray-400 mt-0.5">{allowedExtensions.join(', ')}</p>
                )}
              </div>
            </>
          )}
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="hidden"
            disabled={uploading}
          />
        </div>
      )}

      {error && <p className="text-xs text-red-500 flex items-center gap-1"><X className="w-3 h-3" />{error}</p>}
    </div>
  )
}
